'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  /** Degrees rotated per pixel of vertical scroll. Negative reverses direction. */
  speed?: number;
  className?: string;
};

/**
 * Wraps children in a div that rotates as the page scrolls. Rotation tracks
 * `window.scrollY * speed`, throttled to one update per animation frame.
 *
 * Honors `prefers-reduced-motion: reduce` and skips the animation entirely.
 */
export function ScrollRotate({ children, speed = 0.04, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let scheduled = false;
    const tick = () => {
      scheduled = false;
      if (ref.current) {
        ref.current.style.transform = `rotate(${window.scrollY * speed}deg)`;
      }
    };

    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(tick);
      }
    };

    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformOrigin: 'center center', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
