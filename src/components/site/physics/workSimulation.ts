import { free, step, steer, type Body, type Point, type Rect } from "./dynamics";

export type WorkGeometry = {
  desk: { center: Point; radius: number };
  box: Rect;
  deskObstacles: Rect[];
  boxObstacles: Rect[];
  end: Point;
  radius: number;
  vertical: boolean;
  count: number;
  completeInBox?: boolean;
};
type Stage = "fill" | "settle" | "extract" | "travel" | "box" | "leave" | "deliver" | "done";

/** Stage transitions follow actual contacts/positions, never a second CSS clock. */
export class WorkSimulation {
  bodies: Body[] = [];
  selected: Body | undefined;
  incoming: Body | undefined;
  stage: Stage = "fill";
  clock = 0;
  spawned = 0;
  check = 0;
  scale = 1;
  waypoints: Point[] = [];
  journey: { start: Point; distance: number; travelled: number } | undefined;
  constructor(public geometry: WorkGeometry) {}
  get direction() {
    return this.geometry.vertical ? { x: 0, y: 1 } : { x: 1, y: 0 };
  }
  get speed() {
    return this.geometry.radius * 5.5 * 1.15;
  }
  get deskGate() {
    const { desk } = this.geometry,
      d = this.direction;
    return { x: desk.center.x + d.x * desk.radius, y: desk.center.y + d.y * desk.radius };
  }
  get boxGate() {
    const { box, vertical } = this.geometry;
    return vertical
      ? { x: box.x + box.width / 2, y: box.y + box.height }
      : { x: box.x + box.width, y: box.y + box.height / 2 };
  }
  transition(stage: Stage) {
    this.stage = stage;
    this.clock = 0;
    this.journey = undefined;
  }
  reset() {
    this.bodies = [];
    this.selected = undefined;
    this.incoming = undefined;
    this.spawned = 0;
    this.scale = 1;
    this.check = 0;
    this.waypoints = [];
    this.transition("fill");
  }
  admit(dt: number) {
    const { desk, radius } = this.geometry;
    const target = { x: desk.center.x, y: desk.center.y - desk.radius + radius + 1 };
    if (!this.incoming) {
      this.incoming = {
        x: target.x,
        y: desk.center.y - desk.radius - radius * 4,
        r: radius,
        id: this.spawned,
        vx: 0,
        vy: this.speed,
      };
    }
    const b = this.incoming;
    const next = { x: b.x, y: Math.min(target.y, b.y + this.speed * dt) };
    // Wait at an occupied entrance rather than spawning inside another body.
    if (!free(next, radius, this.bodies)) return false;
    b.y = next.y;
    if (b.y < target.y) return false;
    const angle = 0.75 + this.spawned * 0.43;
    b.vx = Math.cos(angle) * this.speed;
    b.vy = Math.sin(angle) * this.speed;
    this.bodies.push(b);
    this.incoming = undefined;
    this.spawned++;
    return true;
  }
  prepareExit() {
    const b = this.selected!,
      { box, radius, vertical } = this.geometry;
    const pad = radius + 3;
    // Route the departing body around the measured wordmark, then open a gate.
    if (vertical) {
      const x = b.x < box.x + box.width / 2 ? box.x + pad : box.x + box.width - pad;
      this.waypoints = [
        { x, y: b.y },
        { x, y: box.y + box.height - pad },
        { x: this.boxGate.x, y: box.y + box.height - pad },
      ];
    } else {
      const y = b.y < box.y + box.height / 2 ? box.y + pad : box.y + box.height - pad;
      this.waypoints = [
        { x: b.x, y },
        { x: box.x + box.width - pad, y },
        { x: box.x + box.width - pad, y: this.boxGate.y },
      ];
    }
  }
  update(dt: number) {
    const g = this.geometry;
    this.clock += dt;
    if (this.stage === "fill" && this.clock > 0.45 && this.admit(dt)) {
      this.clock = 0;
      if (this.spawned === g.count) this.transition("settle");
    }
    if (this.stage === "settle" && this.clock > 2) {
      this.selected = this.bodies.find((body) => body.id === g.count - 1)!;
      const start = Math.atan2(
        this.selected.y - g.desk.center.y,
        this.selected.x - g.desk.center.x,
      );
      const end = g.vertical ? Math.PI / 2 : 0;
      const delta = Math.atan2(Math.sin(end - start), Math.cos(end - start));
      const segments = Math.max(1, Math.ceil(Math.abs(delta) / (Math.PI / 6)));
      this.waypoints = Array.from({ length: segments + 1 }, (_, i) => {
        const angle = start + (delta * i) / segments;
        return {
          x: g.desk.center.x + Math.cos(angle) * g.desk.radius * 0.78,
          y: g.desk.center.y + Math.sin(angle) * g.desk.radius * 0.78,
        };
      });
      this.transition("extract");
    }
    const extracting = this.stage === "extract";
    if (extracting) {
      const d = this.direction,
        gate = this.deskGate;
      const target = this.waypoints[0];
      steer(
        this.selected!,
        target ?? { x: gate.x + d.x * g.radius * 3, y: gate.y + d.y * g.radius * 3 },
        this.speed,
        dt,
      );
      if (
        target &&
        Math.hypot(this.selected!.x - target.x, this.selected!.y - target.y) < g.radius * 1.5
      )
        this.waypoints.shift();
    }
    step(
      this.bodies,
      g.desk,
      g.deskObstacles,
      dt,
      extracting
        ? { id: this.selected!.id, point: this.deskGate, direction: this.direction }
        : undefined,
      this.incoming ? [this.incoming] : [],
    );
    if (extracting) {
      const b = this.selected!,
        gate = this.deskGate,
        d = this.direction;
      if ((b.x - gate.x) * d.x + (b.y - gate.y) * d.y >= b.r + 1) {
        this.bodies = this.bodies.filter((other) => other !== b);
        this.transition("travel");
      }
    }
    const b = this.selected;
    if (!b || this.stage === "extract") return;
    if (this.stage === "travel") {
      const target = g.vertical
        ? { x: g.box.x + g.box.width / 2, y: g.box.y + b.r + 1 }
        : { x: g.box.x + b.r + 1, y: g.box.y + g.box.height / 2 };
      this.move(target, this.speed * 2, dt);
      if (Math.hypot(b.x - target.x, b.y - target.y) < 0.1) {
        b.vx = this.speed * 0.78;
        b.vy = this.speed * (g.vertical ? 0.63 : -0.63);
        this.transition("box");
      }
    } else if (this.stage === "box" || this.stage === "leave") {
      let gate;
      if (this.stage === "leave") {
        const target = this.waypoints[0];
        if (target) {
          steer(b, target, this.speed, dt);
          if (Math.hypot(b.x - target.x, b.y - target.y) < b.r * 1.5) this.waypoints.shift();
        } else {
          const d = this.direction,
            p = this.boxGate;
          steer(b, { x: p.x + d.x * b.r * 4, y: p.y + d.y * b.r * 4 }, this.speed, dt);
          gate = { id: b.id, point: p, direction: d };
        }
      }
      step([b], g.box, g.boxObstacles, dt, gate);
      if (this.stage === "box" && this.clock > 6) {
        if (g.completeInBox) {
          this.transition("done");
        } else {
          this.prepareExit();
          this.transition("leave");
        }
      } else if (gate) {
        const d = this.direction;
        if ((b.x - gate.point.x) * d.x + (b.y - gate.point.y) * d.y > b.r + 1)
          this.transition("deliver");
      }
    } else if (this.stage === "deliver") {
      this.move(g.end, this.speed * 2, dt);
      if (Math.hypot(b.x - g.end.x, b.y - g.end.y) < 0.1) this.transition("done");
    } else if (this.stage === "done") {
      if (g.completeInBox) step([b], g.box, g.boxObstacles, dt);
      else {
        const t = Math.min(1, this.clock / 0.7);
        this.scale = 1 + (28 / g.radius - 1) * (1 - Math.pow(1 - t, 3));
        this.check = Math.max(0, Math.min(1, (this.clock - 0.65) / 0.65));
      }
      if (this.clock > 3.2) this.reset();
    }
  }
  move(target: Point, speed: number, dt: number) {
    const b = this.selected!;
    this.journey ??= {
      start: { x: b.x, y: b.y },
      distance: Math.hypot(target.x - b.x, target.y - b.y),
      travelled: 0,
    };
    const j = this.journey;
    j.travelled = Math.min(j.distance, j.travelled + speed * dt);
    const t = j.distance ? j.travelled / j.distance : 1;
    const phase = (t * 3) % 1;
    // Three ballistic rebounds on the rail, tapering to a clean gate/endpoint landing.
    const clearance = Math.min(1, j.travelled / (b.r * 4), (j.distance - j.travelled) / (b.r * 4));
    const hop = clearance * (b.r + 4 * phase * (1 - phase) * b.r * 2.4 * (1 - t * 0.35));
    b.x = j.start.x + (target.x - j.start.x) * t + (this.geometry.vertical ? hop : 0);
    b.y = j.start.y + (target.y - j.start.y) * t - (this.geometry.vertical ? 0 : hop);
  }
  resolved() {
    // Deterministic, separated static arrangement for SSR/reduced motion.
    this.reset();
    const { desk, radius, count } = this.geometry;
    for (let i = 0; i < count - 1; i++) {
      const angle = (Math.PI * 2 * i) / (count - 1) + 0.3;
      this.bodies.push({
        id: i,
        r: radius,
        x: desk.center.x + Math.cos(angle) * desk.radius * 0.68,
        y: desk.center.y + Math.sin(angle) * desk.radius * 0.68,
        vx: 0,
        vy: 0,
      });
    }
    step(this.bodies, desk, this.geometry.deskObstacles, 0);
    this.selected = { ...this.geometry.end, r: radius, id: count - 1, vx: 0, vy: 0 };
    this.stage = "done";
    this.scale = this.geometry.completeInBox ? 1 : 28 / radius;
    this.check = 1;
  }
}
