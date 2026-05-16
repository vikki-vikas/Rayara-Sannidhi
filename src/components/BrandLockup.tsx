'use client';

import { useCallback, useLayoutEffect, useRef } from 'react';

type Props = {
  name: string;
  tagline: string;
  displayFamily: string;
  sansFamily: string;
  /** Tailwind classes for the outer column wrapper (sizing/min-width context). */
  className?: string;
};

const REF_SIZE = 100; // px — base size used for off-screen measurement

/**
 * Renders the site title above the tagline and scales the title font-size so
 * its rendered width matches the tagline's width exactly.
 *
 * Measurement is done with a detached off-screen <span> so it never mutates the
 * live layout — that avoids the ResizeObserver feedback loop that made the
 * header break once the page finished loading. The title keeps the tagline's
 * width on every breakpoint (tagline stays responsive via clamp), with no
 * truncation/ellipsis. Re-fits on viewport resize, web-font load, and whenever
 * the text (locale) changes.
 */
export function BrandLockup({
  name,
  tagline,
  displayFamily,
  sansFamily,
  className,
}: Props) {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);

  const fit = useCallback(() => {
    const title = titleRef.current;
    const sub = subRef.current;
    if (!title || !sub) return;

    // The tagline keeps its own (clamp) size — measure what it actually renders.
    const subWidth = sub.getBoundingClientRect().width;
    if (subWidth <= 0) return;

    // Measure the title's natural width at a fixed reference size, off-screen,
    // so the real layout is never perturbed (no observer feedback loop).
    const probe = document.createElement('span');
    probe.textContent = name;
    const cs = getComputedStyle(title);
    Object.assign(probe.style, {
      position: 'absolute',
      left: '-99999px',
      top: '0',
      visibility: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: displayFamily,
      fontWeight: cs.fontWeight,
      fontStyle: 'normal',
      textTransform: 'uppercase',
      letterSpacing: cs.letterSpacing,
      fontSize: `${REF_SIZE}px`,
    } as CSSStyleDeclaration);
    document.body.appendChild(probe);
    const titleWidth = probe.getBoundingClientRect().width;
    document.body.removeChild(probe);

    if (titleWidth <= 0) return;

    const next = (REF_SIZE * subWidth) / titleWidth;
    const current = parseFloat(title.style.fontSize) || 0;
    // Epsilon guard: skip sub-pixel churn so repeated calls can't thrash.
    if (Math.abs(next - current) > 0.25) {
      title.style.fontSize = `${next}px`;
    }
  }, [name, displayFamily]);

  useLayoutEffect(() => {
    fit();

    window.addEventListener('resize', fit);

    let cancelled = false;
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        if (!cancelled) fit();
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('resize', fit);
    };
  }, [fit, name, tagline]);

  return (
    <div
      className={`inline-flex min-w-0 flex-col items-stretch leading-normal ${className ?? ''}`}
    >
      <span
        ref={titleRef}
        className="block w-full whitespace-nowrap text-center font-extrabold uppercase text-[#FF780B]"
        style={{
          fontFamily: displayFamily,
          // SSR/first-paint fallback; useLayoutEffect corrects before paint.
          fontSize: 'clamp(14px, 4.6vw, 30px)',
          // Looser leading + an em-proportional gap so the (scaled-up) title
          // never overlaps the tagline, at any size.
          lineHeight: 1.12,
          paddingBottom: '0.06em',
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#FFFFFF',
          paintOrder: 'stroke fill',
        }}
      >
        {name}
      </span>
      <span
        ref={subRef}
        className="block w-full whitespace-nowrap text-center text-white"
        style={{
          fontFamily: sansFamily,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          fontVariationSettings: "'wdth' 100",
          fontSize: 'clamp(5.6px, 1.8vw, 11.378px)',
        }}
      >
        {tagline}
      </span>
    </div>
  );
}
