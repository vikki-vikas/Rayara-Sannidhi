import type { Dictionary } from '@/app/[lang]/dictionaries';

export function ServiceGrid({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative">
      <div className="mx-auto grid w-full max-w-[1080px] grid-cols-2 items-start justify-items-center gap-x-4 gap-y-8 px-5 py-10 sm:gap-y-12 sm:px-6 sm:py-14 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-4 lg:gap-y-12 lg:py-16">
        {dict.services.items.map((label, idx) => {
          const isLastOdd =
            idx === dict.services.items.length - 1 &&
            dict.services.items.length % 2 === 1;
          return (
            <div
              key={idx}
              className={
                isLastOdd
                  ? 'col-span-2 lg:col-auto'
                  : ''
              }
            >
              <ServiceCircle label={label} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServiceCircle({ label }: { label: string }) {
  const lines = label.split('\n');
  return (
    <div className="flex w-[150px] flex-col items-center gap-2 sm:w-[200px] sm:gap-3 lg:w-[250px]">
      <div className="relative size-[110px] shrink-0 sm:size-[150px] lg:size-[184px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, #FFE0BD 0%, #F19B5A 70%, #C56B25 100%)',
            boxShadow: 'inset 0 0 0 4px #93495C',
          }}
        />
        <div className="absolute inset-2 rounded-full border-[3px] border-[#FFA82B] mix-blend-overlay" />
      </div>
      <div
        className="text-center text-[13px] font-bold leading-[1.3] text-[#93495C] sm:text-[18px] lg:text-[24px]"
        style={{
          fontFamily:
            "var(--font-cinzel), Lora, 'Noto Sans Kannada', Georgia, serif",
        }}
      >
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
