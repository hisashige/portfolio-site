import { Metadata } from 'next';
import { getArticleDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import styles from '../page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getArticleDetail(params.slug);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
      site: '@hisachii56',
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getArticleDetail(params.slug);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/articles">記事一覧へ</ButtonLink>
      </div>
    </>
  );
}
