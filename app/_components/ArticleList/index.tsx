import { ArticleContent } from '@/app/_libs/microcms';
import ArticleItem from '../ArticleItem';

type Props = {
  articles?: ArticleContent[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
