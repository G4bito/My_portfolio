"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { features } from "@/lib/config";
import { useReducedMotion } from "@/lib/motion";
import { samePageAnchor } from "@/lib/navigation";

export function SmoothScroll({ children }: { children: ReactNode }): ReactNode {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!features.smoothScroll || reducedMotion) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let rafId = 0;
    function raf(time: number): void {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    function handleAnchorClick(event: MouseEvent): void {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (
        !anchor ||
        anchor.hasAttribute("download") ||
        (anchor.target && anchor.target !== "_self")
      )
        return;
      const id = samePageAnchor(anchor.href, window.location.href);
      const element = id ? document.getElementById(id) : null;
      if (!element) return;
      event.preventDefault();
      lenis.scrollTo(element, {
        onComplete: () => {
          window.history.pushState(null, "", new URL(anchor.href).hash);
          if (!element.hasAttribute("tabindex"))
            element.setAttribute("tabindex", "-1");
          element.focus({ preventScroll: true });
        },
      });
    }
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reducedMotion]);
  return <>{children}</>;
}
