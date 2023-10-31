import { getArticleList } from '@/app/_libs/microcms';
import { ARTICLE_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/ArticleList';
import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getArticleList({
    limit: ARTICLE_LIST_LIMIT,
    offset: ARTICLE_LIST_LIMIT * (current - 1),
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath="/articles" />
      <div className={styles.footer}>
        <ButtonLink href="/">トップページへ</ButtonLink>
      </div>
    </>
  );
}
