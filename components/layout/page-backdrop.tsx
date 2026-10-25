import type { ReactNode } from "react";

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="page-atmosphere pointer-events-none absolute inset-x-0 top-0 -z-10 h-225 overflow-hidden"
    />
  );
}
