import styles from './index.module.css';

type Props = {
  skillTexts?: string[];
};

export default function SkillList({ skillTexts }: Props) {
  if (!skillTexts) {
    return null;
  }
  if (skillTexts.length === 0) {
    return <p>表示する技術がありません。</p>;
  }
  return (
    <div className={styles.container}>
      {skillTexts.map((text, key) => (
        <p className={styles.text} key={key}>
          {text}
        </p>
      ))}
    </div>
  );
}
