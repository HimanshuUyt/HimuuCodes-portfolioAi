// lib/scroll.ts

/**
 * Smoothly scroll to an element by id.
 */
export function scrollToId(
  id: string,
  offset = 80
) {
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

/**
 * Smoothly scroll to a CSS selector.
 */
export function scrollToSelector(
  selector: string,
  offset = 80
) {
  const element = document.querySelector(selector);

  if (!(element instanceof HTMLElement)) return;

  const top =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

/**
 * Scroll to the top of the page.
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Check if an element is currently visible.
 */
export function isElementInView(
  id: string,
  threshold = 120
) {
  const element = document.getElementById(id);

  if (!element) return false;

  const rect = element.getBoundingClientRect();

  return (
    rect.top <= threshold &&
    rect.bottom >= threshold
  );
}

/**
 * Get the active section based on scroll position.
 */
export function getActiveSection(
  ids: string[],
  threshold = 120
): string | null {
  for (const id of ids) {
    if (isElementInView(id, threshold)) {
      return id;
    }
  }

  return null;
}