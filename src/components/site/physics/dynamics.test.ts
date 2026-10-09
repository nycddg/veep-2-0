import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { step, type Body } from "./dynamics";
import { WorkSimulation, type WorkGeometry } from "./workSimulation";

function checkPairs(bodies: Body[]) {
  for (let i = 0; i < bodies.length; i++)
    for (let j = i + 1; j < bodies.length; j++) {
      assert(
        Math.hypot(bodies[i].x - bodies[j].x, bodies[i].y - bodies[j].y) >=
          bodies[i].r + bodies[j].r - 0.01,
        "Bodies overlap",
      );
    }
}

function verifyCadence(sim: WorkSimulation) {
  sim.reset();
  let elapsed = 0,
    maxFill = 0,
    maxComplete = 0,
    completed = false;
  for (let i = 0; i < 120 * 20; i++) {
    const previous = sim.stage;
    sim.update(1 / 120);
    elapsed += 1 / 120;
    if (sim.stage === "fill" && previous === "done") {
      elapsed = 0;
      completed = false;
    }
    if (sim.stage === "fill") {
      maxFill = Math.max(maxFill, elapsed);
      assert(elapsed < 2, `Fill exceeded two seconds: ${elapsed}`);
    }
    if (!completed) {
      assert(elapsed < 5, `Completion exceeded five seconds in ${sim.stage}`);
      if (sim.stage === "done" && (sim.geometry.completeInBox || sim.check >= 1)) {
        completed = true;
        maxComplete = Math.max(maxComplete, elapsed);
      }
    }
  }
  console.info(`Timing: fill ${maxFill.toFixed(2)}s; completion ${maxComplete.toFixed(2)}s`);
  assert(maxComplete > 0);
}

describe("work collisions", () => {
  test("head-on balls exchange velocity and stay separate", () => {
    const bodies = [
      { id: 0, x: -6, y: 0, vx: 30, vy: 0, r: 5 },
      { id: 1, x: 6, y: 0, vx: -30, vy: 0, r: 5 },
    ];
    for (let i = 0; i < 30; i++) {
      step(bodies, { center: { x: 0, y: 0 }, radius: 100 }, [], 1 / 120);
      checkPairs(bodies);
    }
    assert(bodies[0].vx < 0);
    assert(bodies[1].vx > 0);
  });
  for (const vertical of [false, true]) {
    test(`complete looping flow without overlap (${vertical ? "mobile" : "desktop"})`, () => {
      const g: WorkGeometry = {
        desk: { center: { x: 80, y: 100 }, radius: vertical ? 48 : 76 },
        box: vertical
          ? { x: 32, y: 240, width: 96, height: 96 }
          : { x: 350, y: 24, width: 228, height: 152 },
        deskObstacles: [{ x: 60, y: 86, width: 40, height: 28 }],
        boxObstacles: vertical
          ? [{ x: 47, y: 277, width: 66, height: 22 }]
          : [{ x: 411, y: 81, width: 106, height: 38 }],
        end: vertical ? { x: 80, y: 450 } : { x: 760, y: 100 },
        vertical,
        radius: vertical ? 4 : 5,
        count: 6,

        downwardEntry: true,
        motion: { speedScale: 1.15 },
      };
      const sim = new WorkSimulation(g),
        stages = new Set<string>();
      let boxElapsed = 0,
        longestBoxVisit = 0;
      for (let i = 0; i < 120 * 180; i++) {
        sim.update(1 / 120);
        stages.add(sim.stage);
        if (sim.stage === "box" || sim.stage === "leave") boxElapsed += 1 / 120;
        else if (boxElapsed) {
          longestBoxVisit = Math.max(longestBoxVisit, boxElapsed);
          boxElapsed = 0;
        }
        checkPairs([...sim.bodies, ...(sim.incoming ? [sim.incoming] : [])]);
        if (sim.selected) assert.equal(sim.selected.id, g.count - 1);
        for (const b of sim.bodies) {
          if (b !== sim.selected)
            assert(
              Math.hypot(b.x - g.desk.center.x, b.y - g.desk.center.y) + b.r <=
                g.desk.radius + 0.01,
              "Body crossed border",
            );
        }
        for (const b of sim.bodies) {
          for (const r of g.deskObstacles) {
            const x = Math.max(r.x, Math.min(b.x, r.x + r.width));
            const y = Math.max(r.y, Math.min(b.y, r.y + r.height));
            assert(Math.hypot(b.x - x, b.y - y) >= b.r - 0.01, "Body intersects obstacle");
          }
        }
        if (sim.selected && ["box", "leave"].includes(sim.stage)) {
          const b = sim.selected;
          for (const r of g.boxObstacles) {
            const x = Math.max(r.x, Math.min(b.x, r.x + r.width));
            const y = Math.max(r.y, Math.min(b.y, r.y + r.height));
            assert(Math.hypot(b.x - x, b.y - y) >= b.r - 0.01, "Body intersects obstacle");
          }
        }
      }
      assert(stages.has("done"), "Never completed");
      assert(stages.has("leave"), "Never left box");
      assert(longestBoxVisit < 8, `Box visit took ${longestBoxVisit.toFixed(2)} seconds`);
      verifyCadence(sim);
    });
  }
});

for (const compact of [true, false]) {
  test(`hero conserves red identity and loops without overlap (${compact ? "compact" : "wide"})`, () => {
    const sim = new WorkSimulation({
      desk: { center: { x: compact ? 130 : 230, y: 120 }, radius: 76 },
      box: { x: compact ? 292 : 552, y: 77, width: 86, height: 86 },
      deskObstacles: [],
      boxObstacles: [],
      end: { x: compact ? 335 : 595, y: 120 },
      radius: 10,
      vertical: false,
      count: 7,
      completeInBox: true,
      motion: { speedScale: 1, hops: 2, lift: 1.15, smoothLanding: true },
    });
    let completed = false,
      looped = false;
    for (let i = 0; i < 120 * 180; i++) {
      sim.update(1 / 120);
      checkPairs([...sim.bodies, ...(sim.incoming ? [sim.incoming] : [])]);
      if (sim.selected) assert.equal(sim.selected.id, 6);
      if (sim.stage === "done") completed = true;
      if (completed && sim.stage === "fill") looped = true;
    }
    assert(looped, "Hero failed to complete and restart");
    verifyCadence(sim);
  });
}
