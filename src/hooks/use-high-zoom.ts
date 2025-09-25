import { useEffect, useState } from "react";

const DEFAULT_THRESHOLD = 1.47; // ~150% zoom allowing a little tolerance

function computeZoomFactor() {
  if (typeof window === "undefined") {
    return 1;
  }

  const visualViewportScale = window.visualViewport?.scale ?? 1;

  let ratio = 1;
  if (
    typeof window.outerWidth === "number" &&
    typeof window.innerWidth === "number" &&
    window.innerWidth > 0
  ) {
    ratio = window.outerWidth / window.innerWidth;
  }

  return Math.max(visualViewportScale, ratio);
}

export function useHighZoom(threshold: number = DEFAULT_THRESHOLD) {
  const [isHighZoom, setIsHighZoom] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateResponsiveState = () => {
      const zoomFactor = computeZoomFactor();
      setIsHighZoom(zoomFactor >= threshold);
    };

    updateResponsiveState();

    const visualViewport = window.visualViewport;
    visualViewport?.addEventListener("resize", updateResponsiveState);
    window.addEventListener("resize", updateResponsiveState);

    return () => {
      visualViewport?.removeEventListener("resize", updateResponsiveState);
      window.removeEventListener("resize", updateResponsiveState);
    };
  }, [threshold]);

  useEffect(() => {
    const root = document.documentElement;
    if (!root) {
      return;
    }

    if (isHighZoom) {
      root.classList.add("zoom-high");
    } else {
      root.classList.remove("zoom-high");
    }
  }, [isHighZoom]);

  return isHighZoom;
}
