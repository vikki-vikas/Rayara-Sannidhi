import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';

export function BankAccount({ dict }: { dict: Dictionary }) {
  const fontFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[961px] flex-col items-center gap-[20px] px-5 py-8 sm:px-6 sm:py-12">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-[72px]">
          <div className="relative size-[220px] shrink-0 sm:size-[300px] lg:size-[380px]">
            <Image
              src="/figma/qr-code.png"
              alt="QR code for donation"
              fill
              sizes="(min-width: 1024px) 380px, 60vw"
              unoptimized
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                top: '4.268%',
                left: '4.674%',
                width: '90.650%',
                height: '91.260%',
              }}
            >
              <Image
                src="/figma/qr-overlay.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 344px, 56vw"
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div
            className="flex w-full flex-col items-center gap-4 text-center lg:w-[509px] lg:items-start lg:gap-[29px] lg:text-left"
            style={{ fontFamily }}
          >
            <h3
              className="text-[18px] font-semibold uppercase text-[#93495C] sm:text-[20px] lg:text-[24px]"
              style={{ fontFamily, letterSpacing: '2.4px', lineHeight: 'normal' }}
            >
              {dict.bank.heading}
            </h3>
            <div
              className="flex w-full flex-col items-center gap-[6px] text-[14px] text-[#3A1C24] sm:text-[16px] lg:items-start lg:gap-[10px] lg:text-[18px]"
              style={{ fontFamily, lineHeight: '1.6' }}
            >
              <p className="w-full">
                <span className="block lg:inline">{dict.bank.accountName}</span>{' '}
                <strong className="block font-bold lg:inline">
                  {dict.bank.accountNameValue}
                </strong>
              </p>
              <p className="w-full">
                <span className="block lg:inline">{dict.bank.accountNumber}</span>{' '}
                <strong className="block font-bold lg:inline">
                  {dict.bank.accountNumberValue}
                </strong>
              </p>
              <p className="w-full">
                <span className="block lg:inline">{dict.bank.ifsc}</span>{' '}
                <strong className="block font-bold lg:inline">{dict.bank.ifscValue}</strong>
              </p>
            </div>
          </div>
        </div>

        <p
          className="w-full max-w-[760px] text-center text-[13px] text-[#3A1C24] sm:text-[16px] lg:text-[20px]"
          style={{ fontFamily, lineHeight: '1.7' }}
          dangerouslySetInnerHTML={{ __html: dict.bank.exemption }}
        />
        <p
          className="w-full max-w-[712px] text-center text-[12px] text-[#3A1C24] sm:text-[14px] lg:text-[20px]"
          style={{ fontFamily, lineHeight: '1.7' }}
        >
          {dict.bank.exemptionDescription}
        </p>
      </div>
    </section>
  );
}
