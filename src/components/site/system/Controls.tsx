import {
  useId,
  useRef,
  useEffect,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { useMotionPreference } from "@/lib/motionPreference";
import { motionEasing } from "./useSiteMotion";

type ActionStyle = "primary" | "secondary" | "quiet";
export function ActionLink({
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ActionStyle }) {
  return <a className={`v-action v-action--${variant} ${className}`} {...props} />;
}
export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ActionStyle }) {
  return <button type={type} className={`v-action v-action--${variant} ${className}`} {...props} />;
}
export function Disclosure({ question, children }: { question: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const animation = useRef<Animation | null>(null);
  const expanded = useRef(false);
  const { reduced } = useMotionPreference();
  useEffect(() => {
    if (reduced && ref.current) {
      animation.current?.cancel();
      animation.current = null;
      ref.current.open = expanded.current;
      ref.current.style.overflow = "";
    }
    return () => animation.current?.cancel();
  }, [reduced]);
  const toggle = () => {
    const node = ref.current!;
    const from = node.getBoundingClientRect().height;
    expanded.current = !expanded.current;
    animation.current?.cancel();
    if (reduced) {
      node.open = expanded.current;
      return;
    }
    node.open = true;
    const to = expanded.current
      ? node.getBoundingClientRect().height
      : node.querySelector("summary")!.getBoundingClientRect().height;
    node.style.overflow = "hidden";
    const current = node.animate([{ height: `${from}px` }, { height: `${to}px` }], {
      duration: expanded.current ? 320 : 180,
      easing: motionEasing(expanded.current ? "spatial" : "effects"),
    });
    animation.current = current;
    current.onfinish = () => {
      node.open = expanded.current;
      node.style.overflow = "";
      animation.current = null;
    };
  };
  return (
    <details
      ref={ref}
      className="v-disclosure"
      onToggle={(event) => {
        if (!animation.current) expanded.current = event.currentTarget.open;
      }}
    >
      <summary
        onClick={(event) => {
          event.preventDefault();
          toggle();
        }}
      >
        <span>{question}</span>
        <span className="v-disclosure-mark" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="v-disclosure-content">{children}</div>
    </details>
  );
}
export function Field({
  label,
  note,
  error,
  id: suppliedId,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; note?: string; error?: string }) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const message = error || note;
  return (
    <div className="v-field">
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        className={`v-input ${props.className ?? ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={message ? `${id}-note` : undefined}
      />
      {message && (
        <p
          id={`${id}-note`}
          className={`v-field-note ${error ? "v-field-error" : ""}`}
          role={error ? "alert" : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
}
