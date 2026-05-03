import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { asset } from '@/lib/asset';

export function Header({ dict }: { dict: Dictionary }) {
  const displayFamily =
    "var(--font-sora), var(--font-noto-kannada), Arial, sans-serif";
  const sansFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <header className="w-full rounded-bl-[18px] rounded-br-[18px] bg-[#793A4A] sm:rounded-bl-[24px] sm:rounded-br-[24px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2 px-3 pt-[18px] pb-2 sm:gap-12 sm:px-10 sm:pt-[26px] sm:pb-3 lg:h-[92px] lg:items-center lg:px-[50px] lg:pt-[11px] lg:pb-[11px]">
        <Image
          src={asset("/header/Shanku Chakra 1.svg")}
          alt=""
          width={56}
          height={70}
          priority
          unoptimized
          className="h-[34px] w-[27px] flex-shrink-0 sm:h-[56px] sm:w-[45px] lg:h-[70px] lg:w-[56px]"
          aria-hidden="true"
        />

        <div className="flex min-w-0 shrink items-center gap-[8px] sm:gap-[16px] lg:gap-[18px]">
          <div className="relative h-[40px] w-[40px] flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFA82B] ring-offset-[1px] ring-offset-[#793A4A] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            <Image
              src={asset("/header/rayaru.png")}
              alt={dict.site.name}
              width={66}
              height={99}
              priority
              className="absolute left-1/2 top-[-22px] h-[62px] w-[42px] max-w-none -translate-x-1/2 sm:top-[-30px] sm:h-[86px] sm:w-[58px] lg:left-[-1px] lg:top-[-34px] lg:h-[99px] lg:w-[66px] lg:translate-x-0"
            />
          </div>

          <div className="inline-flex min-w-0 flex-col items-stretch leading-normal">
            <p
              className="w-full whitespace-nowrap font-extrabold uppercase leading-normal text-[#FF780B] sm:text-[24px] lg:text-[30px]"
              style={{
                fontFamily: displayFamily,
                fontSize: 'clamp(14px, 4.6vw, 18px)',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#FFFFFF',
                paintOrder: 'stroke fill',
              }}
            >
              {dict.site.name}
            </p>
            <p
              className="w-full whitespace-nowrap text-white"
              style={{
                fontFamily: sansFamily,
                fontSize: 'clamp(5.6px, 1.8vw, 11.378px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                fontVariationSettings: "'wdth' 100",
              }}
            >
              {dict.site.tagline}
            </p>
          </div>
        </div>

        <Image
          src={asset("/header/Shanku Chakra 2.svg")}
          alt=""
          width={56}
          height={70}
          priority
          unoptimized
          className="h-[34px] w-[27px] flex-shrink-0 sm:h-[56px] sm:w-[45px] lg:h-[70px] lg:w-[56px]"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
