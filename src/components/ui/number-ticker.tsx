"use client";

import { useEffect, useRef, useState } from "react";

export interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number; // delay in seconds
  duration?: number; // duration in ms (default 1500ms)
  className?: string;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  duration = 1500,
  className = "",
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState<string>(() =>
    decimalPlaces > 0
      ? (direction === "down" ? value : 0).toFixed(decimalPlaces)
      : Math.round(direction === "down" ? value : 0).toLocaleString("en-US")
  );

  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    let timeoutId: NodeJS.Timeout;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      timeoutId = setTimeout(() => {
        const startTime = performance.now();
        const startVal = direction === "down" ? value : 0;
        const endVal = direction === "down" ? 0 : value;

        const step = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth cubic ease-out
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = startVal + (endVal - startVal) * easeProgress;

          const formatted =
            decimalPlaces > 0
              ? current.toFixed(decimalPlaces)
              : Math.round(current).toLocaleString("en-US");

          setDisplayValue(formatted);

          if (progress < 1) {
            rafId = requestAnimationFrame(step);
          } else {
            const finalFormatted =
              decimalPlaces > 0
                ? endVal.toFixed(decimalPlaces)
                : Math.round(endVal).toLocaleString("en-US");
            setDisplayValue(finalFormatted);
          }
        };

        rafId = requestAnimationFrame(step);
      }, delay * 1000);
    };

    // Check if element is already visible in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startAnimation();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, direction, delay, duration, decimalPlaces]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
