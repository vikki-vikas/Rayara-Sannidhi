import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../dictionaries';

export default async function AboutPage({
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
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-5 py-10 sm:gap-16 sm:px-6 sm:py-14 lg:gap-[60px] lg:py-20">
      {/* Top: image + heading/body */}
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10 xl:gap-[93px]">
        <div
          className="relative w-[min(80vw,526px)] shrink-0 overflow-hidden lg:w-[400px] xl:w-[526px]"
          style={{
            aspectRatio: '526 / 526',
            borderRadius: '50%',
          }}
        >
          <Image
            src="/figma/about-deity.jpg"
            alt={dict.about.heading}
            fill
            sizes="(min-width: 1280px) 526px, (min-width: 1024px) 400px, 80vw"
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="flex w-full max-w-[541px] flex-col items-center gap-3 text-center lg:items-start lg:gap-[13px] lg:text-left">
          <h1
            className="w-full text-[26px] font-bold leading-[1.25] text-[#FF780B] sm:text-[34px] lg:text-[44px] xl:text-[52px]"
            style={{ fontFamily }}
          >
            {dict.about.heading}
          </h1>
          <p
            className="w-full text-[14px] text-[#3A1C24] sm:text-[16px] lg:text-[18px]"
            style={{ fontFamily, lineHeight: '1.7', fontWeight: 400 }}
            dangerouslySetInnerHTML={{ __html: dict.about.body }}
          />
        </div>
      </div>

      {/* Trust Members section */}
      <section className="flex w-full max-w-[1037px] flex-col items-center gap-10 sm:gap-12 lg:gap-[64px]">
        <div className="flex items-end justify-center gap-3 sm:gap-[15px]">
          <Image
            src="/figma/trust-ornament.svg"
            alt=""
            width={33}
            height={30}
            unoptimized
            aria-hidden="true"
            className="h-[20px] w-[22px] object-contain sm:h-[26px] sm:w-[29px] lg:h-[30px] lg:w-[33px]"
          />
          <h2
            className="whitespace-nowrap text-[20px] font-bold uppercase leading-none text-[#793A4A] sm:text-[24px] lg:text-[28px]"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}
          >
            {dict.about.trustMembersHeading}
          </h2>
          <Image
            src="/figma/trust-ornament.svg"
            alt=""
            width={33}
            height={30}
            unoptimized
            aria-hidden="true"
            className="h-[20px] w-[22px] object-contain sm:h-[26px] sm:w-[29px] lg:h-[30px] lg:w-[33px]"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-[50px]">
          {/* Chairman */}
          <div className="flex w-full flex-col items-center gap-[2px]">
            <p
              className="text-center text-[18px] font-bold leading-[1.5] text-[#FF491C] sm:text-[20px] lg:text-[22px]"
              style={{ fontFamily, fontVariationSettings: "'wdth' 100" }}
            >
              {dict.about.chairman.name}
            </p>
            <p
              className="text-center text-[15px] font-bold leading-[1.5] text-[#793A4A] sm:text-[16px] lg:text-[18px]"
              style={{ fontFamily, fontVariationSettings: "'wdth' 100" }}
            >
              {dict.about.chairman.phone}
            </p>
          </div>

          {/* Member grid */}
          <ul className="grid w-full grid-cols-1 place-items-center gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-[40px] lg:gap-y-[50px]">
            {dict.about.members.map((name, idx) => (
              <li
                key={idx}
                className="flex w-full max-w-[319px] flex-col items-center"
              >
                <p
                  className="text-center text-[18px] font-bold leading-[1.5] text-[#FF491C] sm:text-[20px] lg:text-[22px]"
                  style={{ fontFamily, fontVariationSettings: "'wdth' 100" }}
                >
                  {name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
