import { getArticleList } from '@/app/_libs/microcms';
import { ARTICLE_LIST_LIMIT } from '@/app/_constants';
import ArticleList from '@/app/_components/ArticleList';
import Pagination from '@/app/_components/Pagination';

export const revalidate = 60;

export default async function Page() {
  const data = await getArticleList({
    limit: ARTICLE_LIST_LIMIT,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/articles" />
    </>
  );
}
