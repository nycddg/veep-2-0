/** Small fixed-step collision solver shared by the homepage's work animations. */
export type Point = { x: number; y: number };
export type Body = Point & { vx: number; vy: number; r: number; id: number };
export type Rect = { x: number; y: number; width: number; height: number };
export type Arena = { center: Point; radius: number } | Rect;
export type Gate = { id: number; point: Point; direction: Point };
const clearance = 0.6;

function reflect(b: Body, nx: number, ny: number) {
  const speed = b.vx * nx + b.vy * ny;
  if (speed < 0) {
    b.vx -= 2 * speed * nx;
    b.vy -= 2 * speed * ny;
  }
}

function obstacle(b: Body, rect: Rect) {
  const x = Math.max(rect.x, Math.min(b.x, rect.x + rect.width));
  const y = Math.max(rect.y, Math.min(b.y, rect.y + rect.height));
  const dx = b.x - x,
    dy = b.y - y;
  const d = Math.hypot(dx, dy),
    radius = b.r + clearance;
  if (d >= radius) return;
  if (d > 0.00001) {
    b.x += (dx / d) * (radius - d);
    b.y += (dy / d) * (radius - d);
    reflect(b, dx / d, dy / d);
  } else {
    const sides = [
      { d: b.x - rect.x, nx: -1, ny: 0 },
      { d: rect.x + rect.width - b.x, nx: 1, ny: 0 },
      { d: b.y - rect.y, nx: 0, ny: -1 },
      { d: rect.y + rect.height - b.y, nx: 0, ny: 1 },
    ].sort((a, c) => a.d - c.d);
    const s = sides[0];
    b.x += s.nx * (s.d + radius);
    b.y += s.ny * (s.d + radius);
    reflect(b, s.nx, s.ny);
  }
}

function boundary(b: Body, arena: Arena, gate?: Gate) {
  const open =
    gate?.id === b.id &&
    Math.abs((b.x - gate.point.x) * gate.direction.y - (b.y - gate.point.y) * gate.direction.x) <
      b.r * 1.2 &&
    (b.x - gate.point.x) * gate.direction.x + (b.y - gate.point.y) * gate.direction.y > -b.r * 3;
  if (open) return;
  if ("radius" in arena) {
    const dx = b.x - arena.center.x,
      dy = b.y - arena.center.y;
    const d = Math.hypot(dx, dy),
      limit = arena.radius - b.r - clearance;
    if (d > limit) {
      b.x = arena.center.x + (dx / d) * limit;
      b.y = arena.center.y + (dy / d) * limit;
      reflect(b, -dx / d, -dy / d);
    }
  } else {
    const left = arena.x + b.r + clearance,
      right = arena.x + arena.width - b.r - clearance;
    const top = arena.y + b.r + clearance,
      bottom = arena.y + arena.height - b.r - clearance;
    if (b.x < left) {
      b.x = left;
      reflect(b, 1, 0);
    }
    if (b.x > right) {
      b.x = right;
      reflect(b, -1, 0);
    }
    if (b.y < top) {
      b.y = top;
      reflect(b, 0, 1);
    }
    if (b.y > bottom) {
      b.y = bottom;
      reflect(b, 0, -1);
    }
  }
}

export function step(
  bodies: Body[],
  arena: Arena,
  obstacles: Rect[],
  dt: number,
  gate?: Gate,
  arrivals: Body[] = [],
) {
  for (const b of bodies) {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
  }
  // Resolve contacts repeatedly: a pair correction can create a wall contact.
  for (let pass = 0; pass < 16; pass++) {
    for (const b of bodies) {
      boundary(b, arena, gate);
      for (const rect of obstacles) obstacle(b, rect);
      // An item crossing the inlet is a solid body before it joins the arena.
      for (const arrival of arrivals) {
        const dx = b.x - arrival.x,
          dy = b.y - arrival.y;
        const distance = Math.hypot(dx, dy),
          limit = b.r + arrival.r + clearance;
        if (distance < limit) {
          const nx = distance > 0.00001 ? dx / distance : 1;
          const ny = distance > 0.00001 ? dy / distance : 0;
          b.x += nx * (limit - distance);
          b.y += ny * (limit - distance);
          reflect(b, nx, ny);
        }
      }
    }
    for (let i = 0; i < bodies.length; i++)
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i],
          b = bodies[j];
        const dx = b.x - a.x,
          dy = b.y - a.y;
        const distance = Math.hypot(dx, dy),
          limit = a.r + b.r + clearance;
        if (distance >= limit) continue;
        const nx = distance > 0.00001 ? dx / distance : 1;
        const ny = distance > 0.00001 ? dy / distance : 0;
        const correction = (limit - distance) / 2;
        a.x -= nx * correction;
        a.y -= ny * correction;
        b.x += nx * correction;
        b.y += ny * correction;
        const relative = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (relative < 0) {
          a.vx += relative * nx;
          a.vy += relative * ny;
          b.vx -= relative * nx;
          b.vy -= relative * ny;
        }
      }
  }
}

export function free(point: Point, radius: number, bodies: Body[]) {
  return bodies.every((b) => Math.hypot(b.x - point.x, b.y - point.y) >= b.r + radius + clearance);
}

export function steer(body: Body, target: Point, speed: number, dt: number) {
  const dx = target.x - body.x,
    dy = target.y - body.y,
    d = Math.hypot(dx, dy);
  const blend = 1 - Math.exp(-5 * dt);
  body.vx += ((dx / (d || 1)) * speed - body.vx) * blend;
  body.vy += ((dy / (d || 1)) * speed - body.vy) * blend;
}
