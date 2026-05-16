import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { SectionHeading } from './SectionHeading';
import { asset } from '@/lib/asset';

// Badge icons exported from Figma — index-aligned with dict.initiatives.items.
const INITIATIVE_ICONS = [
  '/figma/services/gorakse.png',
  '/figma/services/vidyarthi-protsaha-dhana.png',
  '/figma/services/prathibha-puraskara.png',
];

export function UpcomingInitiatives({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-8 px-5 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:py-16">
        <SectionHeading>{dict.initiatives.heading}</SectionHeading>

        <div className="grid w-full grid-cols-2 items-start justify-items-center gap-x-4 gap-y-8 sm:gap-y-12 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-4 lg:gap-y-12">
          {dict.initiatives.items.map((label, idx) => {
            const isLastOdd =
              idx === dict.initiatives.items.length - 1 &&
              dict.initiatives.items.length % 2 === 1;
            const icon = INITIATIVE_ICONS[idx];
            return (
              <div
                key={idx}
                className={`flex w-[150px] flex-col items-center gap-2 sm:w-[200px] sm:gap-3 lg:w-[250px] ${isLastOdd ? 'col-span-2 lg:col-auto' : ''
                  }`}
              >
                <div className="relative size-[110px] shrink-0 overflow-hidden rounded-full sm:size-[150px] lg:size-[184px]">
                  {icon ? (
                    <Image
                      src={asset(icon)}
                      alt=""
                      width={184}
                      height={184}
                      unoptimized
                      aria-hidden="true"
                      className="size-full rounded-full object-contain"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            'radial-gradient(circle at center, #FFE0BD 0%, #F19B5A 70%, #C56B25 100%)',
                          boxShadow: 'inset 0 0 0 4px #93495C',
                        }}
                      />
                      <div className="absolute inset-2 rounded-full border-[3px] border-[#FFA82B] mix-blend-overlay" />
                    </>
                  )}
                </div>
                <p
                  className="text-center text-[13px] font-bold leading-[1.3] text-[#93495C] sm:text-[18px] lg:text-[24px]"
                  style={{
                    fontFamily:
                      "var(--font-cinzel), Lora, 'Noto Sans Kannada', Georgia, serif",
                  }}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
