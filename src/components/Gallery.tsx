import Image from 'next/image';
import type { Dictionary } from '@/app/[lang]/dictionaries';
import { OrnamentDivider } from './OrnamentDivider';
import { SectionHeading } from './SectionHeading';

const ROW_HEIGHT = 439;

const row1 = [
  { src: '/figma/gallery-1.png', width: 586, alt: 'Gallery image 1' },
  { src: '/figma/gallery-2.png', width: 333, alt: 'Gallery image 2' },
  { src: '/figma/gallery-3.png', width: 949, alt: 'Gallery image 3' },
];

const row2 = [
  { src: '/figma/gallery-3.png', width: 949, alt: 'Gallery image 4' },
  { src: '/figma/gallery-4.png', width: 327, alt: 'Gallery image 5' },
  { src: '/figma/gallery-5.png', width: 516, alt: 'Gallery image 6' },
  { src: '/figma/gallery-2.png', width: 292, alt: 'Gallery image 7' },
];

type Tile = (typeof row1)[number];

const allTiles: Tile[] = [
  { src: '/figma/gallery-1.png', width: 1, alt: 'Gallery image 1' },
  { src: '/figma/gallery-2.png', width: 1, alt: 'Gallery image 2' },
  { src: '/figma/gallery-3.png', width: 1, alt: 'Gallery image 3' },
  { src: '/figma/gallery-4.png', width: 1, alt: 'Gallery image 4' },
  { src: '/figma/gallery-5.png', width: 1, alt: 'Gallery image 5' },
  { src: '/figma/gallery-2.png', width: 1, alt: 'Gallery image 6' },
];

function GalleryRow({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="flex w-full gap-[10px]" style={{ height: `${ROW_HEIGHT}px` }}>
      {tiles.map((tile, idx) => (
        <div
          key={idx}
          className="relative h-full overflow-hidden"
          style={{ flex: `${tile.width} 1 0` }}
        >
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

export function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative flex flex-col items-center pt-10 sm:pt-16 lg:pt-20">
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <SectionHeading>{dict.gallery.heading}</SectionHeading>
      </div>

      <OrnamentDivider />

      {/* Mobile / tablet: 2-column grid */}
      <div className="grid w-full grid-cols-2 gap-[6px] px-[6px] py-[6px] sm:gap-[10px] sm:px-[10px] sm:py-[10px] lg:hidden">
        {allTiles.map((tile, idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="50vw"
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Desktop: ribbon rows */}
      <div className="hidden w-full flex-col gap-[10px] lg:flex">
        <GalleryRow tiles={row1} />
        <GalleryRow tiles={row2} />
      </div>

      <OrnamentDivider />
    </section>
  );
}
