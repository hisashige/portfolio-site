import styles from './index.module.css';
import { Skill } from '@/app/_constants/skills';
import Image from 'next/image';

type Props = {
  skills?: Skill[];
};

export default function SkillList({ skills }: Props) {
  if (!skills) {
    return null;
  }
  if (skills.length === 0) {
    return <p>表示する技術がありません。</p>;
  }
  return (
    <ul>
      {skills.map((skill, key) => (
        <Image
          className={styles.devicon}
          key={key}
          src={skill.image}
          alt={skill.name}
          width={40}
          height={40}
        />
      ))}
    </ul>
  );
}
