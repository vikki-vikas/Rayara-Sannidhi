import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export function Hero({ dict }: { dict: Dictionary }) {
  const fontFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:px-8 lg:py-20 xl:gap-[93px] xl:px-12 xl:py-24">
        <div className="relative aspect-square w-full max-w-[326px] shrink-0 overflow-hidden rounded-[12px] sm:max-w-[420px] sm:rounded-[16px] lg:w-[380px] lg:max-w-none lg:rounded-full xl:w-[526px]">
          <Image
            src="/figma/hero-deity.png"
            alt={dict.hero.heading}
            fill
            sizes="(min-width: 1280px) 526px, (min-width: 1024px) 380px, 90vw"
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="flex w-full max-w-[541px] flex-col items-center gap-3 text-center lg:items-start lg:gap-[13px] lg:text-left">
          <p
            className="text-[14px] font-semibold uppercase text-[#93495C] sm:text-[18px] lg:text-[24px]"
            style={{
              fontFamily,
              letterSpacing: '2.4px',
              lineHeight: 'normal',
            }}
          >
            {dict.hero.kicker}
          </p>
          <h1
            className="w-full text-[26px] font-bold leading-[1.25] text-[#FF780B] sm:text-[34px] lg:text-[52px]"
            style={{
              fontFamily,
              lineHeight: '1.25',
            }}
          >
            {dict.hero.heading}
          </h1>
          <p
            className="w-full text-[13px] text-[#3A1C24] sm:text-[16px] lg:text-[18px]"
            style={{
              fontFamily,
              lineHeight: '1.7',
              fontWeight: 400,
            }}
            dangerouslySetInnerHTML={{ __html: dict.hero.body }}
          />
        </div>
      </div>
    </section>
  );
}
