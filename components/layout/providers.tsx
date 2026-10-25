"use client";

import { ReducedMotionProvider } from "@/lib/motion";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReducedMotionProvider>
        <MotionConfig reducedMotion="user">
          <SmoothScroll>{children}</SmoothScroll>
        </MotionConfig>
      </ReducedMotionProvider>
    </ThemeProvider>
  );
}
