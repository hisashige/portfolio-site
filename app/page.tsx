import TopArea from '@/app/_components/TopPage/TopArea';
import LinksArea from '@/app/_components/TopPage/LinksArea';
import ArticlesArea from '@/app/_components/TopPage/ArticlesArea';
import PhilosophyArea from '@/app/_components/TopPage/PhilosophyArea';
import CareerArea from '@/app/_components/TopPage/CareerArea';
import SkillsArea from '@/app/_components/TopPage/SkillsArea';
import WorksArea from '@/app/_components/TopPage/WorksArea';

import { TOP_ARTICLE_LIMIT } from '@/app/_constants';
import { getArticleList } from '@/app/_libs/microcms';

export const revalidate = 60;

export default async function Page() {
  const articleData = await getArticleList({
    limit: TOP_ARTICLE_LIMIT,
  });

  return (
    <>
      <TopArea />
      <LinksArea />
      <ArticlesArea data={articleData} />
      <PhilosophyArea />
      <CareerArea />
      <SkillsArea />
      <WorksArea />
    </>
  );
}
