import { useEffect, useRef, useState } from "react";

const DEFAULT_THRESHOLD = 1.47; // ~150% zoom allowing a little tolerance

type ZoomBaselines = {
  baselineInnerWidth?: number;
  baselineOuterWidth?: number;
  baselineDevicePixelRatio?: number;
};

function computeZoomFactor({
  baselineInnerWidth,
  baselineOuterWidth,
  baselineDevicePixelRatio,
}: ZoomBaselines = {}) {
  if (typeof window === "undefined") {
    return 1;
  }

  const visualViewportScale = window.visualViewport?.scale ?? 1;

  let outerInnerRatio = 1;
  if (
    typeof window.outerWidth === "number" &&
    typeof window.innerWidth === "number" &&
    window.innerWidth > 0
  ) {
    const outerWidthBaseline = baselineOuterWidth ?? window.outerWidth;
    outerInnerRatio = outerWidthBaseline / window.innerWidth;
  }

  let baselineInnerRatio = 1;
  if (
    typeof baselineInnerWidth === "number" &&
    typeof window.innerWidth === "number" &&
    window.innerWidth > 0 &&
    baselineInnerWidth > 0
  ) {
    baselineInnerRatio = baselineInnerWidth / window.innerWidth;
  }

  let devicePixelRatioScale = 1;
  if (
    typeof baselineDevicePixelRatio === "number" &&
    baselineDevicePixelRatio > 0 &&
    typeof window.devicePixelRatio === "number" &&
    window.devicePixelRatio > 0
  ) {
    devicePixelRatioScale = window.devicePixelRatio / baselineDevicePixelRatio;
  }

  return Math.max(visualViewportScale, outerInnerRatio, baselineInnerRatio, devicePixelRatioScale);
}

export function useHighZoom(threshold: number = DEFAULT_THRESHOLD) {
  const [isHighZoom, setIsHighZoom] = useState<boolean>(false);
  const baselineInnerWidthRef = useRef<number | undefined>(undefined);
  const baselineOuterWidthRef = useRef<number | undefined>(undefined);
  const baselineDevicePixelRatioRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (typeof baselineInnerWidthRef.current === "undefined") {
      baselineInnerWidthRef.current = window.innerWidth;
    }

    if (typeof baselineOuterWidthRef.current === "undefined") {
      baselineOuterWidthRef.current = window.outerWidth;
    }

    if (typeof baselineDevicePixelRatioRef.current === "undefined") {
      baselineDevicePixelRatioRef.current = window.devicePixelRatio || 1;
    }

    const updateResponsiveState = () => {
      const zoomFactor = computeZoomFactor({
        baselineInnerWidth: baselineInnerWidthRef.current,
        baselineOuterWidth: baselineOuterWidthRef.current,
        baselineDevicePixelRatio: baselineDevicePixelRatioRef.current,
      });
      setIsHighZoom(zoomFactor >= threshold);
    };

    updateResponsiveState();

    const visualViewport = window.visualViewport;
    visualViewport?.addEventListener("resize", updateResponsiveState);
    window.addEventListener("resize", updateResponsiveState);
    window.addEventListener("orientationchange", updateResponsiveState);

    return () => {
      visualViewport?.removeEventListener("resize", updateResponsiveState);
      window.removeEventListener("resize", updateResponsiveState);
      window.removeEventListener("orientationchange", updateResponsiveState);
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
