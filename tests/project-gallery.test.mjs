import { test } from "node:test";
import assert from "node:assert/strict";
import { getCompanionScreenshot } from "../lib/project-gallery.ts";

test("paired phones use the next actual screenshot and wrap at the end", () => {
  const screenshots = [
    { src: "/first.webp", alt: "First real screenshot" },
    { src: "/second.webp", alt: "Second real screenshot" },
    { src: "/third.webp", alt: "Third real screenshot" },
  ];
  assert.equal(getCompanionScreenshot(screenshots, 0), screenshots[1]);
  assert.equal(getCompanionScreenshot(screenshots, 1), screenshots[2]);
  assert.equal(getCompanionScreenshot(screenshots, 2), screenshots[0]);
});

test("paired phones never invent or duplicate a missing second screenshot", () => {
  assert.equal(getCompanionScreenshot([], 0), undefined);
  assert.equal(
    getCompanionScreenshot([{ src: "/only.webp", alt: "Only screenshot" }], 0),
    undefined
  );
  assert.equal(
    getCompanionScreenshot(
      [
        { src: "/first.webp", alt: "First" },
        { src: "/second.webp", alt: "Second" },
      ],
      9
    ),
    undefined
  );
});
