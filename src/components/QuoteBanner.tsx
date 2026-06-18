import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { asset } from '@/lib/asset';
import { ScrollRotate } from './ScrollRotate';

export function QuoteBanner({ dict }: { dict: Dictionary }) {
  const fontFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <section className="relative flex w-full flex-col items-start gap-[10px] overflow-hidden px-5 py-10 sm:px-6 sm:py-16 lg:min-h-[510px] lg:justify-center lg:px-[60px] lg:py-[101px]">
      {/* Figma node 237:21 — flex items-center justify-between, two 363x347.597
          flower boxes flush to each edge, right one mirrored, at 15% opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden items-center justify-between lg:flex"
      >
        <ScrollRotate speed={0.04} className="shrink-0">
          <Image
            src={asset("/quote-flower.svg")}
            alt=""
            width={363}
            height={348}
            unoptimized
            className="h-[347.597px] w-[363.036px] opacity-[0.15]"
          />
        </ScrollRotate>
        <ScrollRotate speed={-0.04} className="shrink-0">
          <Image
            src={asset("/quote-flower.svg")}
            alt=""
            width={363}
            height={348}
            unoptimized
            className="h-[347.597px] w-[363.036px] -scale-x-100 opacity-[0.15]"
          />
        </ScrollRotate>
      </div>

      <div className="relative mx-auto flex w-full max-w-[639px] flex-col items-center gap-4 text-center lg:gap-[20px]">
        <p
          className="text-[14px] font-semibold italic sm:text-[18px] lg:text-[24px]"
          style={{
            fontFamily,
            color: '#93495C',
            letterSpacing: '1.2px',
            lineHeight: '1.55',
          }}
        >
          {dict.quote.text}
        </p>
        <div className="flex items-center gap-[9px]">
          <span className="inline-flex h-5 w-7 sm:h-6 sm:w-9">
            <Image
              src={asset("/lotus.svg")}
              alt=""
              width={36}
              height={24}
              unoptimized
              aria-hidden="true"
              className="h-5 w-7 sm:h-6 sm:w-9"
            />
          </span>
          <p
            className="whitespace-nowrap text-[13px] sm:text-[16px] lg:text-[18px]"
            style={{
              fontFamily,
              color: '#93495C',
              lineHeight: 'normal',
            }}
          >
            {dict.quote.attribution}
          </p>
          <span className="inline-flex h-5 w-7 sm:h-6 sm:w-9">
            <Image
              src={asset("/lotus.svg")}
              alt=""
              width={36}
              height={24}
              unoptimized
              aria-hidden="true"
              className="h-5 w-7 -scale-x-100 sm:h-6 sm:w-9"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
