"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/motion";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function NavThemeToggle(): ReactNode {
  const mounted = useIsMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const next = isDark ? "light" : "dark";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const supportsViewTransitions =
      typeof document !== "undefined" &&
      typeof document.startViewTransition === "function";

    if (!supportsViewTransitions || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-cx", `${cx}px`);
    root.style.setProperty("--theme-cy", `${cy}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.dataset.themeAnim = "1";

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    transition.finished.finally(() => {
      delete root.dataset.themeAnim;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      className="focus-ring bg-background ring-foreground/8 relative inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full ring-1 transition-colors"
    >
      <span aria-hidden="true" className="relative h-4 w-4">
        <Sun
          className={`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${
            mounted && isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`text-foreground absolute inset-0 h-4 w-4 transition-all duration-300 ${
            mounted && !isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

export function Nav(): ReactNode {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
    );
    for (const item of NAV_ITEMS) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  const selected =
    pathname === "/"
      ? activeId
      : pathname.startsWith("/projects")
        ? "projects"
        : "about";
  const hrefFor = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-6 sm:w-auto"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="border-border bg-background/95 rounded-[1.8rem] border p-1.5 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between gap-1">
          <a
            href={hrefFor("home")}
            className="focus-ring text-accent rounded-full px-4 py-3 text-sm font-semibold lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            ZGM<span className="text-muted-foreground">.</span>
          </a>
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={hrefFor(item.id)}
                  aria-current={selected === item.id ? "location" : undefined}
                  className="focus-ring relative flex min-h-11 items-center justify-center rounded-full px-3 text-sm font-medium whitespace-nowrap"
                >
                  {selected === item.id && (
                    <motion.span
                      aria-hidden="true"
                      layoutId="nav-active"
                      className="bg-accent-soft ring-accent/15 absolute inset-0 rounded-full ring-1"
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span
                    className={`relative z-10 ${selected === item.id ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}{" "}
              {menuOpen ? "Close" : "Menu"}
            </button>
            <NavThemeToggle />
          </div>
        </div>
        <ul
          id="mobile-navigation"
          hidden={!menuOpen}
          className="border-border mt-2 border-t p-2 lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={hrefFor(item.id)}
                aria-current={selected === item.id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`focus-ring flex min-h-11 items-center rounded-xl px-4 text-sm ${selected === item.id ? "bg-accent-soft text-accent font-medium" : "text-muted-foreground hover:bg-muted"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
