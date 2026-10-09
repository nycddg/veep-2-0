import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      className={`v-icon-button v-theme-toggle ${className}`}
    >
      {isLight ? <Moon key="moon" size={16} /> : <Sun key="sun" size={16} />}
    </button>
  );
}
