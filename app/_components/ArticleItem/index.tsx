import Link from 'next/link';
import Image from 'next/image';
import { ArticleContent } from '@/app/_libs/microcms';
import styles from './index.module.css';
import PublishedDate from '../Date';
import Category from '../Category';

type Props = {
  article: ArticleContent;
};

export default function ArticleItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        {article.thumbnail ? (
          <Image
            src={article.thumbnail?.url}
            alt=""
            className={styles.image}
            width={article.thumbnail?.width}
            height={article.thumbnail?.height}
          />
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd className={styles.meta}>
            <Category category={article.category} />
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
