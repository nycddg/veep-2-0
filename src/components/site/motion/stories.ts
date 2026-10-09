export type MotionConcept =
  | "desk"
  | "mandate"
  | "assembly"
  | "portfolio"
  | "handoff"
  | "scope"
  | "expertise"
  | "first-step";
export const stories: Record<
  MotionConcept,
  { title: string; description: string; problem: string; resolution: string; seconds: number }
> = {
  desk: {
    title: "Work leaves the center",
    problem: "Unresolved streams all return to the same executive center.",
    resolution:
      "One stream branches into an owned scope and a delivery path. It no longer reconnects to the center.",
    description:
      "Multiple work paths converge on one executive center. One stream reroutes through a separate scope with an attached owner and its own delivery endpoint. Other unresolved streams remain at the center.",
    seconds: 5.2,
  },
  mandate: {
    title: "A mandate gains an owner",
    problem: "The work exists, but scope, ownership, support and a delivery path are disconnected.",
    resolution:
      "The owner touches the defined scope, support connects at its sides, and one delivery path leaves it.",
    description:
      "A filled work square sits inside a potential scope. An owner attaches to its boundary, two supporting capabilities connect, and a delivery path extends from the defined mandate.",
    seconds: 4.8,
  },
  assembly: {
    title: "The team forms around the work",
    problem: "A fixed, owned mandate has several possible capabilities nearby, but none connected.",
    resolution:
      "Three relevant capabilities connect around the unchanged mandate. The unused capability stays separate.",
    description:
      "The mandate and its owner stay fixed. Three hollow capability squares move into connected positions around it. One unused capability stays visibly separate.",
    seconds: 4.8,
  },
  portfolio: {
    title: "One relationship, distinct mandates",
    problem: "Separate companies have their own unconnected work and potential scopes.",
    resolution:
      "One relationship connects to each company. Each mandate is defined inside its own company boundary.",
    description:
      "One relationship rail sits above separate company boundaries. Each company contains its own scoped mandate. Branches connect the relationship to the companies without connecting mandates across company boundaries.",
    seconds: 4.8,
  },
  handoff: {
    title: "Delivery carries forward",
    problem:
      "Work and ownership are in the originating scope; the receiving scope is not connected.",
    resolution:
      "Work and ownership transfer into the receiving scope. A connected capability remains there.",
    description:
      "A work square and its attached owner move from an originating scope into a receiving scope. A continuous path joins the transfer, and a supporting capability remains connected to the receiving scope.",
    seconds: 4.6,
  },
  scope: {
    title: "Scope determines the configuration",
    problem: "A broad potential boundary leaves the configuration undefined.",
    resolution: "A tighter scope surrounds the work; supporting capabilities move to its edges.",
    description:
      "A broad reference boundary resolves into a defined scope around the work. Two capabilities adjust and connect to its edges.",
    seconds: 3.4,
  },
  expertise: {
    title: "Expertise joins the mandate",
    problem: "Relevant expertise is nearby but disconnected from an owned mandate.",
    resolution: "Two capabilities connect around the fixed work; one remains separate.",
    description:
      "Two capabilities move into connected positions around a fixed owned mandate. A third remains separate.",
    seconds: 3.4,
  },
  "first-step": {
    title: "A clear first step",
    problem: "Work sits separately from any defined scope or owner.",
    resolution: "The work enters a defined scope with an attached owner and a path forward.",
    description:
      "A work square moves from a separate starting position into a defined scope. An owner attaches to the boundary and the path continues to an endpoint.",
    seconds: 3.6,
  },
};
