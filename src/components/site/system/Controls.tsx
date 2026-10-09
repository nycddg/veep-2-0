import {
  useId,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

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
  return (
    <details className="v-disclosure">
      <summary>
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
