import { Metadata } from 'next';
import Script from 'next/script';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';
import styles from './layout.module.css';
import { Providers } from './provider';

const metaData = {
  title: 'Hisashige Takahashi',
  description:
    'Hisashige Takahashiのポートフォリオサイトです。フルサイクルなWebエンジニアとしてフリーランスで活動しています。',
  ogTitle: 'Hisashige Takahashi',
  ogDescription:
    'Hisashige Takahashiのポートフォリオサイトです。フルサイクルなWebエンジニアとしてフリーランスで活動しています。',
  canonical: 'https://hisashige.dev',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3001'),
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.ogTitle,
      description: metaData.ogDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaData.ogTitle,
      description: metaData.ogDescription,
      site: '@hisachii56',
    },
    alternates: {
      canonical: new URL(process.env.BASE_URL || 'http://localhost:3001'),
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
