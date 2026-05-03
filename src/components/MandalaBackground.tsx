export function MandalaBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage: 'url(/background.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '257px 514px',
        backgroundPosition: 'top left',
      }}
    />
  );
}
