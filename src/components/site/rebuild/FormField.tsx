import type { ReactNode } from "react";

export function FormField({
  label,
  required,
  error,
  errorId,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: ReactNode;
}) {
  return (
    <label className="ve-field">
      <span className="ve-field-label">
        {label}
        {required && " *"}
      </span>
      <div className="ve-field-control">{children}</div>
      {error && (
        <p id={errorId} className="ve-field-error">
          {error}
        </p>
      )}
    </label>
  );
}
