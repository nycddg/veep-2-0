import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/booking";

export function BookLink({
  children = "Book intro call",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-accent inline-flex min-h-11 items-center justify-center rounded-[4px] px-5 py-2.5 text-[16px] font-medium leading-none ${className}`}
    >
      {children}
    </a>
  );
}
