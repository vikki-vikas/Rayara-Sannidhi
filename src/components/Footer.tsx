import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { OrnamentDivider } from './OrnamentDivider';
import { BrandLockup } from './BrandLockup';
import { asset } from '@/lib/asset';

const iconClass = 'h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] lg:h-[29.714px] lg:w-[29.714px]';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 4.96 3.66 9.07 8.44 9.82v-6.94H8.07v-2.88h2.37V9.85c0-2.34 1.39-3.64 3.51-3.64 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.16 0-1.52.72-1.52 1.46v1.7h2.59l-.41 2.88h-2.18V21.88C18.34 21.13 22 17.02 22 12.06z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

export function Footer({
  dict,
  currentLocale,
}: {
  dict: Dictionary;
  currentLocale: 'en' | 'kn';
}) {
  const sansFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";
  const displayFamily =
    "var(--font-sora), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <footer className="relative mt-10 flex flex-col items-center sm:mt-12">
      <OrnamentDivider />

      <div className="relative w-full bg-[#93495C]">
        {/* Top nav pill — sits flush at top of maroon area, rounded bottom hangs down */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="flex h-[60px] w-[260px] items-start justify-center rounded-bl-[18px] rounded-br-[18px] bg-[#793A4A] px-3 pb-3 pt-[20px] sm:h-[80px] sm:w-[360px] sm:rounded-bl-[20px] sm:rounded-br-[20px] sm:px-5 sm:pb-4 sm:pt-[28px] lg:h-[92px] lg:w-[444px] lg:rounded-bl-[24px] lg:rounded-br-[24px] lg:px-[30px] lg:pb-[32px] lg:pt-[36px]">
            <div
              className="flex items-center gap-4 text-[12px] font-semibold leading-normal text-white sm:gap-10 sm:text-[15px] lg:gap-[54px] lg:text-[17.388px]"
              style={{ fontFamily: sansFamily, fontVariationSettings: "'wdth' 100" }}
            >
              <a
                href={asset(`/${currentLocale}/`)}
                className="text-center hover:underline lg:w-[92px]"
              >
                {dict.nav.home}
              </a>
              <a
                href={asset(`/${currentLocale}/about/`)}
                className="text-center hover:underline lg:w-[92px]"
              >
                {dict.nav.about}
              </a>
              <a
                href={asset(`/${currentLocale}/contact/`)}
                className="whitespace-nowrap text-center hover:underline"
              >
                {dict.nav.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1445px] flex-col items-center gap-5 px-3 pb-4 pt-[80px] sm:gap-8 sm:px-6 sm:pt-[110px] lg:gap-10 lg:px-0 lg:pb-[21px] lg:pt-[132px]">
          {/* Brand row: chakra | center | chakra */}
          <div className="flex w-full items-center justify-between gap-2 sm:gap-6 sm:justify-center lg:items-start lg:gap-[210px]">
            <Image
              src={asset("/header/Shanku Chakra 2.svg")}
              alt=""
              width={128}
              height={160}
              unoptimized
              className="h-[44px] w-[35px] shrink-0 sm:h-[100px] sm:w-[80px] lg:h-[160px] lg:w-[128px]"
              aria-hidden="true"
            />

            <div className="flex min-w-0 shrink flex-col items-center gap-[10px] sm:gap-[18px] lg:w-[769px] lg:gap-[22px]">
              <div className="flex min-w-0 items-center gap-2 sm:gap-[14px] lg:gap-[18px]">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#793A4A] ring-2 ring-[#FFA82B] ring-offset-[1px] ring-offset-[#93495C] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <Image
                    src={asset("/header/rayaru.png")}
                    alt={dict.site.name}
                    width={66}
                    height={99}
                    className="absolute left-1/2 top-[-22px] h-[62px] w-[42px] max-w-none -translate-x-1/2 sm:top-[-30px] sm:h-[86px] sm:w-[58px] lg:left-[-1px] lg:top-[-34px] lg:h-[99px] lg:w-[66px] lg:translate-x-0"
                  />
                </div>
                <BrandLockup
                  name={dict.site.name}
                  tagline={dict.site.tagline}
                  displayFamily={displayFamily}
                  sansFamily={sansFamily}
                />
              </div>
              <div
                className="flex w-full flex-col items-center gap-[6px] text-center text-[12px] leading-[1.5] text-white sm:text-[15px] lg:gap-[9px] lg:text-[18px] lg:leading-[28px]"
                style={{ fontFamily: sansFamily, fontVariationSettings: "'wdth' 100" }}
              >
                <p className="w-full">{dict.footer.address}</p>
                <p className="w-full">{dict.footer.phone}</p>
              </div>
            </div>

            <Image
              src={asset("/header/Shanku Chakra 1.svg")}
              alt=""
              width={128}
              height={160}
              unoptimized
              // Matches the shadow baked into "Shanku Chakra 2.svg" (the left
              // chakra). That shadow lives in the SVG so it scales with the
              // icon — mirror it per breakpoint so both sides stay equal.
              className="h-[44px] w-[35px] shrink-0 [filter:drop-shadow(0_2px_1px_rgba(0,0,0,0.25))] sm:h-[100px] sm:w-[80px] sm:[filter:drop-shadow(0_5px_3px_rgba(0,0,0,0.25))] lg:h-[160px] lg:w-[128px] lg:[filter:drop-shadow(0_8px_4px_rgba(0,0,0,0.25))]"
              aria-hidden="true"
            />
          </div>

          {/* Mobile: social icons centered, then legal/copyright row */}
          <div
            className="flex w-full flex-col items-center gap-3 text-white sm:gap-4 lg:hidden"
            style={{ fontFamily: sansFamily, fontVariationSettings: "'wdth' 100" }}
          >
            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#" aria-label="Facebook" className="text-white transition-colors hover:text-[#FFA82B]">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-white transition-colors hover:text-[#FFA82B]">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Email" className="text-white transition-colors hover:text-[#FFA82B]">
                <MailIcon />
              </a>
              <a href="#" aria-label="Website" className="text-white transition-colors hover:text-[#FFA82B]">
                <GlobeIcon />
              </a>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <p className="text-[10px] leading-[1.5] sm:text-[12px]">
                {dict.footer.copyright}
              </p>
            </div>
          </div>

          {/* Desktop: legal | copyright | social */}
          <div
            className="hidden w-full flex-row items-center justify-between gap-0 px-[100px] text-white lg:flex"
            style={{ fontFamily: sansFamily, fontVariationSettings: "'wdth' 100" }}
          >
            <p className="whitespace-nowrap text-[14px] leading-[28px]">
              {dict.footer.copyright}
            </p>
            <div className="flex items-center gap-[38px]">
              <a href="#" aria-label="Facebook" className="text-white transition-colors hover:text-[#FFA82B]">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-white transition-colors hover:text-[#FFA82B]">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Email" className="text-white transition-colors hover:text-[#FFA82B]">
                <MailIcon />
              </a>
              <a href="#" aria-label="Website" className="text-white transition-colors hover:text-[#FFA82B]">
                <GlobeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
