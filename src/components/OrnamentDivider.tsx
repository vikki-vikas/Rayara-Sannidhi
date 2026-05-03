import { asset } from '@/lib/asset';

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`pointer-events-none w-full ${className}`}
      style={{
        height: '14.518px',
        backgroundImage: `url(${asset('/header/ornament-divider.svg')})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '40.014px 14.518px',
        backgroundPosition: 'left center',
      }}
    />
  );
}
