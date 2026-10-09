import { useEffect, useId } from "react";
import { setMotionPreference, useMotionPreference } from "@/lib/motionPreference";
import "./system/motion-preference.css";

export function MotionPreference() {
  const id = useId();
  const { preference, reduced } = useMotionPreference();

  useEffect(() => {
    document.documentElement.dataset.veepMotion = reduced ? "reduced" : "full";
  }, [reduced]);

  return (
    <div className="v-motion-preference">
      <label htmlFor={id}>Motion</label>
      <select
        id={id}
        value={preference}
        onChange={(event) =>
          setMotionPreference(event.target.value === "reduce" ? "reduce" : "system")
        }
      >
        <option value="system">Follow device setting</option>
        <option value="reduce">Reduce motion</option>
      </select>
    </div>
  );
}
