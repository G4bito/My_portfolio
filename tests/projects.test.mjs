import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { projects, getProject } from "../lib/projects.ts";

test("project detail lookup resolves known slugs and rejects unknown routes", () => {
  assert.equal(getProject("safelink")?.title, "SafeLink");
  assert.equal(getProject("not-a-project"), undefined);
  assert.equal(getProject("__proto__"), undefined);
  assert.equal(
    new Set(projects.map((project) => project.id)).size,
    projects.length
  );
});

test("published project media exists and mobile projects never offer a web demo", () => {
  for (const project of projects) {
    for (const screenshot of project.screenshots) {
      assert.ok(
        screenshot.alt.trim(),
        `${project.id} requires descriptive alt text`
      );
      assert.ok(
        existsSync(new URL(`../public${screenshot.src}`, import.meta.url))
      );
    }
    if (project.platform === "mobile") assert.equal(project.demo, null);
    for (const link of [project.repository, project.demo]) {
      if (link) assert.equal(new URL(link).protocol, "https:");
    }
  }
});
