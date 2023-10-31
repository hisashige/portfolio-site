import { Metadata } from 'next';
import { getArticleDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import styles from '../../page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 0;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: `${data.title} | preview`,
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
      site: '@hisachii56',
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  });
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/articles">記事一覧へ</ButtonLink>
      </div>
    </>
  );
}
