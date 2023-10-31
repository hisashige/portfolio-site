import { MicroCMSListResponse } from 'microcms-js-sdk';
import ArticleList from '@/app/_components/ArticleList';
import styles from './index.module.css';
import { Article } from '@/app/_libs/microcms';
import ButtonLink from '@/app/_components/ButtonLink';

interface Props {
  data: MicroCMSListResponse<Article>;
}

export default function ArticlesArea({ data }: Props) {
  return (
    <section className={styles.article}>
      <h2 className={styles.articleTitle}>Articles</h2>
      <ArticleList articles={data.contents} />
      <div className={styles.articleLink}>
        <ButtonLink href="/articles">もっとみる</ButtonLink>
      </div>
    </section>
  );
}
