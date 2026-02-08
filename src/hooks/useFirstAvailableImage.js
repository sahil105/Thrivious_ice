import { useState, useEffect } from "react";

/**
 * Tries each URL in order; returns the first one that loads successfully.
 * Use for product images when the same file might be .jpeg or .png.
 * @param {string[]} urls - Array of image URLs (e.g. [urlToJpeg, urlToPng, urlToJpg])
 * @returns {string|null} First URL that loaded, or first URL while still trying, or null
 */
export function useFirstAvailableImage(urls) {
  const [resolvedUrl, setResolvedUrl] = useState(urls?.[0] ?? null);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setResolvedUrl(null);
      return;
    }

    let cancelled = false;

    function tryIndex(i) {
      if (cancelled || i >= urls.length) return;
      const img = new Image();
      img.onload = () => {
        if (!cancelled) setResolvedUrl(urls[i]);
      };
      img.onerror = () => tryIndex(i + 1);
      img.src = urls[i];
    }

    tryIndex(0);
    return () => {
      cancelled = true;
    };
  }, [urls?.join(",")]);

  return resolvedUrl;
}

export default useFirstAvailableImage;
