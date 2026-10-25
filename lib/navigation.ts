export function samePageAnchor(
  href: string,
  currentUrl: string
): string | null {
  try {
    const current = new URL(currentUrl);
    const target = new URL(href, current);
    if (
      target.origin !== current.origin ||
      target.pathname !== current.pathname ||
      target.search !== current.search ||
      target.hash.length < 2
    )
      return null;
    return decodeURIComponent(target.hash.slice(1));
  } catch {
    return null;
  }
}
