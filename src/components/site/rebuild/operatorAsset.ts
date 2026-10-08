import { spotlightOperators } from "@/lib/spotlight-operators";

export function operatorAsset(name: string) {
  const op = spotlightOperators.find((item) => item.name === name);
  if (!op?.photoUrl) {
    throw new Error(`Missing portrait for ${name}`);
  }
  return {
    src: op.photoUrl,
    objectPosition: op.photoPosition ?? "center 18%",
    scale: op.photoScale,
  };
}
