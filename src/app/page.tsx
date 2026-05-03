import { defaultLocale } from './[lang]/dictionaries';

export default function RootRedirect() {
  const target = `./${defaultLocale}/`;
  return (
    <html lang={defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={target} />
        <title>Sri Raghavendra Swamy Seva Samiti Trust</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target)});`,
          }}
        />
      </head>
      <body />
    </html>
  );
}
