import { notFound } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { QuoteBanner } from '@/components/QuoteBanner';
import { ServiceGrid } from '@/components/ServiceGrid';
import { Gallery } from '@/components/Gallery';
import { Sevas } from '@/components/Sevas';
import { BankAccount } from '@/components/BankAccount';
import { UpcomingInitiatives } from '@/components/UpcomingInitiatives';
import { getDictionary, hasLocale } from './dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <QuoteBanner dict={dict} />
      <ServiceGrid dict={dict} />
      <Gallery dict={dict} />
      <Sevas dict={dict} lang={lang} />
      <BankAccount dict={dict} />
      <UpcomingInitiatives dict={dict} />
    </>
  );
}
