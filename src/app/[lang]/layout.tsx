import type { Metadata } from 'next';
import {
  Cinzel,
  Geist,
  Geist_Mono,
  Lora,
  Noto_Sans_Kannada,
  Open_Sans,
  Sora,
} from 'next/font/google';
import { notFound } from 'next/navigation';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../globals.css';
import { getDictionary, hasLocale, locales } from './dictionaries';
import { Header } from '@/components/Header';
import { TopNav } from '@/components/TopNav';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { Footer } from '@/components/Footer';
import { SocialFloat } from '@/components/SocialFloat';
import { asset } from '@/lib/asset';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const notoKannada = Noto_Sans_Kannada({
  variable: '--font-noto-kannada',
  subsets: ['kannada'],
  weight: ['400', '600', '700'],
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sri Raghavendra Swamy Seva Samiti Trust',
  description:
    'Raghavendra Swamy Mutt, Adakamaranahalli — Poojas, Homas, Annadana and seva for Sri Guru Rayara devotees.',
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${lora.variable} ${openSans.variable} ${notoKannada.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF0E2]">
        <Theme accentColor="orange" radius="medium" appearance="inherit">
          <main className="relative flex min-h-screen flex-col bg-[#FFF0E2]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 opacity-30"
              style={{
                backgroundImage: `url(${asset('/background.svg')})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '257px 514px',
                backgroundPosition: 'top left',
              }}
            />
            <div className="relative z-10">
              <TopNav dict={dict} currentLocale={lang} />
              <div className="absolute inset-x-0 top-0 z-20">
                <Header dict={dict} />
              </div>
            </div>
            <OrnamentDivider className="relative z-10 py-2" />

            <div className="relative z-10 flex-1">{children}</div>

            <Footer dict={dict} currentLocale={lang} />
          </main>
          <SocialFloat />
        </Theme>
      </body>
    </html>
  );
}
