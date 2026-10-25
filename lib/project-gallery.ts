import type { ProjectScreenshot } from "./projects";

export function getCompanionScreenshot(
  screenshots: ProjectScreenshot[],
  active: number
): ProjectScreenshot | undefined {
  if (
    screenshots.length < 2 ||
    !Number.isInteger(active) ||
    active < 0 ||
    active >= screenshots.length
  )
    return undefined;
  return screenshots[(active + 1) % screenshots.length];
}
