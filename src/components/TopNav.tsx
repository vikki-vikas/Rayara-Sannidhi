'use client';

import { useRouter, usePathname } from 'next/navigation';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { asset } from '@/lib/asset';

type Locale = 'en' | 'kn';

export function TopNav({
  dict,
  currentLocale,
}: {
  dict: Dictionary;
  currentLocale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    if (next === currentLocale) return;
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'kn') {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join('/') || `/${next}`);
  };

  const linkBase =
    "font-['Open_Sans','Noto_Sans_Kannada',sans-serif] text-[11px] sm:text-[14px] lg:text-[16px] transition-colors";

  const segments = pathname.split('/').filter(Boolean);
  const currentRoute = segments[1] ?? '';

  const linkClass = (route: string) =>
    `${linkBase} ${currentRoute === route
      ? 'font-bold text-white'
      : 'font-normal text-white/80 hover:text-white'
    }`;

  return (
    <nav className="w-full bg-[#93495C]">
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-2 px-3 pb-3 pt-[88px] sm:gap-8 sm:px-8 sm:pt-[104px] lg:h-[150px] lg:items-end lg:gap-12 lg:px-[50px] lg:pb-6 lg:pt-6">
        <div className="flex items-center gap-3 whitespace-nowrap leading-[normal] sm:gap-6 lg:gap-[51px]">
          <a
            href={asset(`/${currentLocale}/`)}
            className={linkClass('')}
            aria-current={currentRoute === '' ? 'page' : undefined}
          >
            {dict.nav.home}
          </a>
          <a
            href={asset(`/${currentLocale}/about/`)}
            className={linkClass('about')}
            aria-current={currentRoute === 'about' ? 'page' : undefined}
          >
            {dict.nav.about}
          </a>
          <a
            href={asset(`/${currentLocale}/contact/`)}
            className={linkClass('contact')}
            aria-current={currentRoute === 'contact' ? 'page' : undefined}
          >
            {dict.nav.contact}
          </a>
        </div>

        <div className="flex flex-col items-start gap-px leading-[normal] lg:w-[117px]">
          <p
            className="whitespace-nowrap text-[10px] text-white sm:text-[13px] lg:text-[16px]"
            style={{
              fontFamily:
                "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif",
            }}
          >
            <button
              type="button"
              onClick={() => switchTo('en')}
              className={
                currentLocale === 'en'
                  ? 'font-semibold text-white'
                  : 'font-normal text-white/80 hover:text-white'
              }
              aria-pressed={currentLocale === 'en'}
            >
              {dict.language.english}
            </button>
            <span className="mx-1 font-normal">/</span>
            <button
              type="button"
              onClick={() => switchTo('kn')}
              className={
                currentLocale === 'kn'
                  ? 'font-semibold text-white'
                  : 'font-normal text-white/80 hover:text-white'
              }
              aria-pressed={currentLocale === 'kn'}
            >
              {dict.language.kannada}
            </button>
          </p>
          <span
            aria-hidden="true"
            className={`block h-px w-[36px] bg-white transition-opacity sm:w-[50px] lg:w-[61px] ${currentLocale === 'en' ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </div>
      </div>
    </nav>
  );
}
