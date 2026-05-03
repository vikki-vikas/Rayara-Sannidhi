import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../dictionaries';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const fontFamily =
    "var(--font-open-sans), var(--font-noto-kannada), Arial, sans-serif";

  return (
    <div className="mx-auto flex w-full max-w-[898px] flex-col items-center gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:gap-[42px] lg:py-20">
      {/* Map */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '2188 / 1700' }}
      >
        <Image
          src="/figma/contact-map.png"
          alt={dict.contact.mapAlt}
          fill
          sizes="(min-width: 1024px) 898px, 100vw"
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Address + phone block */}
      <div
        className="flex w-full max-w-[687px] flex-col items-center gap-8 text-center sm:gap-10 lg:gap-[40px]"
        style={{ fontFamily, fontVariationSettings: "'wdth' 100" }}
      >
        <div className="flex w-full flex-col items-center gap-[10px]">
          <p
            className="w-full text-[18px] font-semibold uppercase text-[#FF780B] sm:text-[20px] lg:text-[24px]"
            style={{ letterSpacing: '2.4px', lineHeight: 'normal' }}
          >
            {dict.contact.addressLabel}
          </p>
          <p
            className="w-full text-[16px] font-semibold text-[#793A4A] sm:text-[18px] lg:text-[22px]"
            style={{ lineHeight: '1.6' }}
          >
            {dict.footer.address}
          </p>
        </div>

        <div className="flex flex-col items-center gap-[10px]">
          <p
            className="text-[18px] font-semibold uppercase text-[#FF780B] sm:text-[20px] lg:text-[24px]"
            style={{ letterSpacing: '2.4px', lineHeight: 'normal' }}
          >
            {dict.contact.phoneLabel}
          </p>
          <a
            href={`tel:${dict.footer.phone.replace(/\s/g, '')}`}
            className="text-[16px] font-semibold text-[#793A4A] hover:text-[#FF780B] sm:text-[18px] lg:text-[22px]"
            style={{ lineHeight: '1.4' }}
          >
            {dict.footer.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
