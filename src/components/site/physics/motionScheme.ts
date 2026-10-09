/** M3 Expressive spring tokens. Spatial may overshoot; effects never do.
 * Source: https://m3.material.io/styles/motion/overview/specs
 * Time is in seconds. Collision integration deliberately keeps a constant clock.
 */
export const expressive = {
  spatial: { damping: 0.8, stiffness: 380 },
  fastSpatial: { damping: 0.6, stiffness: 800 },
  slowSpatial: { damping: 0.8, stiffness: 200 },
  effects: { damping: 1, stiffness: 1600 },
} as const;

export function springProgress(
  seconds: number,
  spring: { damping: number; stiffness: number } = expressive.spatial,
) {
  if (seconds <= 0) return 0;
  const w = Math.sqrt(spring.stiffness),
    z = spring.damping;
  if (z === 1) return 1 - (1 + w * seconds) * Math.exp(-w * seconds);
  const wd = w * Math.sqrt(1 - z * z);
  return (
    1 -
    Math.exp(-z * w * seconds) * (Math.cos(wd * seconds) + ((z * w) / wd) * Math.sin(wd * seconds))
  );
}

/** First arrival of the spatial spring, without an overshoot through a solid gate. */
export function springJourney(progress: number) {
  const { damping, stiffness } = expressive.spatial;
  const wd = Math.sqrt(stiffness * (1 - damping * damping));
  const arrival = (Math.PI - Math.acos(damping)) / wd;
  return Math.min(1, springProgress(Math.min(1, progress) * arrival));
}
