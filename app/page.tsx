import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';

import TopArea from './_components/TopPage/TopArea';
import LinksArea from './_components/TopPage/LinksArea';
import PhilosophyArea from './_components/TopPage/PhilosophyArea';
import CareerArea from './_components/TopPage/CareerArea';
import SkillsArea from './_components/TopPage/SkillsArea';
import WorksArea from './_components/TopPage/WorksArea';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <TopArea />
      <LinksArea />
      <PhilosophyArea />
      <CareerArea />
      <SkillsArea />
      <WorksArea />
    </>
  );
}
