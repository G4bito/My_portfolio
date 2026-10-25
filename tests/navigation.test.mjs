import { test } from "node:test";
import assert from "node:assert/strict";
import { samePageAnchor } from "../lib/navigation.ts";

const page = "https://portfolio.example/about?view=all";
test("resolves only anchors within the current document", () => {
  assert.equal(samePageAnchor("#skills", page), "skills");
  assert.equal(
    samePageAnchor("/about?view=all#background", page),
    "background"
  );
  assert.equal(samePageAnchor("/#projects", page), null);
  assert.equal(
    samePageAnchor("https://elsewhere.example/about?view=all#skills", page),
    null
  );
  assert.equal(samePageAnchor("/about?view=other#skills", page), null);
});
test("ignores empty or malformed fragments without crashing navigation", () => {
  assert.equal(samePageAnchor("#", page), null);
  assert.equal(samePageAnchor("#%ZZ", page), null);
  assert.equal(samePageAnchor("#my%20section", page), "my section");
  assert.equal(samePageAnchor("mailto:hello@example.com", page), null);
});
