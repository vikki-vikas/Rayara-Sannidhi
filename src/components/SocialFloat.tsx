const slotClass = 'relative h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]';
const layerClass = 'absolute inset-0 h-full w-full transition-opacity duration-200';
const tileClass =
  'group relative flex items-center justify-center bg-[#793A4A] p-2.5 transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA82B] sm:p-3';

function InstagramOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function InstagramBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <radialGradient id="sf-ig-grad" cx="28%" cy="108%" r="135%">
          <stop offset="0%" stopColor="#FDF497" />
          <stop offset="5%" stopColor="#FDF497" />
          <stop offset="45%" stopColor="#FD5949" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#sf-ig-grad)" />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="#fff" />
    </svg>
  );
}

function FacebookOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 4.96 3.66 9.07 8.44 9.82v-6.94H8.07v-2.88h2.37V9.85c0-2.34 1.39-3.64 3.51-3.64 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.16 0-1.52.72-1.52 1.46v1.7h2.59l-.41 2.88h-2.18V21.88C18.34 21.13 22 17.02 22 12.06z" />
    </svg>
  );
}

function FacebookBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.83 14.94l.51-3.37h-3.21V9.27c0-.92.45-1.83 1.9-1.83h1.47V4.55s-1.33-.23-2.6-.23c-2.65 0-4.39 1.61-4.39 4.52v2.73H6.59v3.37h2.92v8.06h3.62v-8.06h2.7z"
        fill="#fff"
      />
    </svg>
  );
}

export function SocialFloat() {
  return (
    <div
      className="pointer-events-none fixed right-0 top-1/2 z-30 -translate-y-1/2 print:hidden"
      aria-label="Social links"
    >
      <div className="pointer-events-auto flex flex-col overflow-hidden rounded-l-[18px] shadow-md sm:rounded-l-[22px]">
        <a
          href="https://www.instagram.com/shriraghavendraswamymatha2013?igsh=bWVyaXo2aGNhZ2lp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={tileClass}
        >
          <div className={slotClass}>
            <InstagramOutlineIcon
              className={`${layerClass} text-white opacity-100 group-hover:opacity-0`}
            />
            <InstagramBrandIcon
              className={`${layerClass} opacity-0 group-hover:opacity-100`}
            />
          </div>
        </a>
        <a
          href="https://www.facebook.com/share/1NkrpyiJaz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={tileClass}
        >
          <div className={slotClass}>
            <FacebookOutlineIcon
              className={`${layerClass} text-white opacity-100 group-hover:opacity-0`}
            />
            <FacebookBrandIcon
              className={`${layerClass} opacity-0 group-hover:opacity-100`}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
