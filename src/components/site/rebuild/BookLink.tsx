import type { ReactNode } from "react";
import { ActionLink } from "../system/Controls";
import { BOOKING_URL } from "@/lib/booking";

export function BookLink({
  children = "Book intro call",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <ActionLink href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </ActionLink>
  );
}
