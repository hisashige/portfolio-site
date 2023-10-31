import { Metadata } from 'next';
import Script from 'next/script';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import styles from './layout.module.css';
import { Providers } from './provider';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getMeta();
  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3001'),
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.ogImage?.url || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.twitterTitle,
      description: data.tiwtterDescription,
      site: data.twitterSite,
    },
    alternates: {
      canonical: data.canonical,
    },
  };
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja" className="light">
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
      ></Script>
      <body className={styles.body}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
