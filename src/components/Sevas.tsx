import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { SectionHeading } from './SectionHeading';

export function Sevas({ dict }: { dict: Dictionary }) {
  const fontFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-5 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:gap-[50px] lg:py-20">
        <SectionHeading>{dict.sevas.sectionHeading}</SectionHeading>

        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-[40px] xl:gap-[79px]">
          <div
            className="relative w-[min(80vw,595px)] shrink-0 overflow-hidden lg:w-[400px] xl:w-[595px]"
            style={{
              aspectRatio: '595 / 784',
              borderRadius: '297.5px',
            }}
          >
            <Image
              src="/figma/sevas-image.png"
              alt={dict.sevas.heading}
              fill
              sizes="(min-width: 1280px) 595px, (min-width: 1024px) 400px, 80vw"
              unoptimized
              className="object-cover"
            />
          </div>

          <div
            className="flex w-full flex-col items-center gap-8 text-center lg:w-[476px] lg:items-start lg:gap-[50px] lg:text-left"
            style={{ fontFamily }}
          >
            <div className="flex w-full flex-col items-center gap-3 lg:items-start lg:gap-[34px]">
              <h3
                className="w-full text-[24px] font-bold text-[#FF780B] sm:text-[32px] lg:text-[52px]"
                style={{ fontFamily, lineHeight: '1.25' }}
              >
                {dict.sevas.heading}
              </h3>
              <p
                className="w-full text-[14px] text-[#3A1C24] sm:text-[16px] lg:text-[18px]"
                style={{
                  fontFamily,
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}
                dangerouslySetInnerHTML={{ __html: dict.sevas.hours }}
              />
            </div>

            <ul className="flex w-full flex-col gap-[8px] lg:w-[461px] lg:gap-[10px]">
              {dict.sevas.list.map((item, idx) => (
                <li key={idx} className="flex w-full flex-col gap-[8px] lg:gap-[10px]">
                  <p
                    className="w-full text-center text-[14px] sm:text-[16px] lg:text-left lg:text-[18px]"
                    style={{
                      fontFamily,
                      color: '#FF491C',
                      fontWeight: 700,
                      lineHeight: '1.6',
                    }}
                  >
                    {item}
                  </p>
                  {idx < dict.sevas.list.length - 1 && (
                    <hr
                      aria-hidden="true"
                      className="m-0 h-px w-full border-0 bg-[#3A1C24]/30"
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col items-center gap-[10px] lg:w-[325px] lg:items-start lg:gap-[12px]">
              <p
                className="w-full text-center text-[14px] text-[#3A1C24] sm:text-[16px] lg:text-left lg:text-[18px]"
                style={{
                  fontFamily,
                  lineHeight: '1.7',
                  fontWeight: 400,
                }}
              >
                {dict.sevas.ctaPrompt}
              </p>
              <a
                href="#contact"
                className="inline-flex h-[36px] w-[130px] items-center justify-center bg-[#793A4A] text-[14px] font-bold text-white transition-colors hover:bg-[#5d2b39] sm:h-[40px] sm:w-[150px] sm:text-[16px] lg:text-[18px]"
                style={{
                  fontFamily,
                  borderRadius: '68px',
                }}
              >
                {dict.sevas.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
