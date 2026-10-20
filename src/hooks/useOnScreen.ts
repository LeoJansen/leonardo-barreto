'use client';

import { useEffect, useState } from 'react';

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

/**
 * Returns true once the element enters the viewport (with optional rootMargin).
 * Useful to defer non-critical work (e.g., dynamic imports/animations) until needed.
 */
export function useOnScreen<T extends Element>(
  ref: React.RefObject<T | null>,
  { rootMargin = '200px', threshold = 0.01, once = true }: Options = {}
) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (once && isOnScreen) return;
    if (typeof IntersectionObserver === 'undefined') {
      // Old browsers: defer the fallback update to avoid a synchronous effect update.
      const timeoutId = window.setTimeout(() => setIsOnScreen(true), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsOnScreen(true);
          if (once) observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold, once, isOnScreen]);

  return isOnScreen;
}
