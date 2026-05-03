import Image from 'next/image';
import { asset } from '@/lib/asset';

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-[8px] sm:gap-[12px] lg:gap-[15px]">
      <Image
        src={asset("/section-flower.svg")}
        alt=""
        width={45}
        height={42}
        unoptimized
        className="h-[22px] w-[24px] object-contain sm:h-[32px] sm:w-[34px] lg:h-[41.4px] lg:w-[45px]"
        aria-hidden="true"
      />
      <h2
        className="text-center text-[22px] font-bold uppercase leading-tight text-[#793A4A] sm:text-[32px] lg:whitespace-nowrap lg:text-[52px] lg:leading-[68px]"
        style={{ fontFamily: 'var(--font-cinzel), Lora, Georgia, serif' }}
      >
        {children}
      </h2>
      <Image
        src={asset("/section-flower.svg")}
        alt=""
        width={45}
        height={42}
        unoptimized
        className="h-[22px] w-[24px] -scale-x-100 object-contain sm:h-[32px] sm:w-[34px] lg:h-[41.4px] lg:w-[45px]"
        aria-hidden="true"
      />
    </div>
  );
}
