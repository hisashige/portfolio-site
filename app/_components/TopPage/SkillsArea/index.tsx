import pageStyles from '@/app/page.module.css';
import styles from './index.module.css';

import SkillList from '@/app/_components/TopPage/SkillsArea/SkillList';
import { SKILLS } from '@/app/_constants/skills';
import SkillTextList from '@/app/_components/TopPage/SkillsArea/SkillTextList';

export default function SkillsArea() {
  return (
    <section id="skills" className={pageStyles.section}>
      <div style={{ textAlign: 'center' }}>
        <h2 className={pageStyles.sectionTitleEn}>Skills</h2>
        <p className={pageStyles.sectionTitleJa} style={{ justifyContent: 'center' }}>
          技術スキル
        </p>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Frontend</h2>
          <SkillList skills={SKILLS.frontend} />
          <h2 className={styles.skillsTitle}>Backend</h2>
          <SkillList skills={SKILLS.backend} />
          <h2 className={styles.skillsTitle}>Infra</h2>
          <SkillList skills={SKILLS.infra} />
          <h2 className={styles.skillsTitle}>Management</h2>
          <SkillTextList skillTexts={SKILLS.management} />
        </div>
        <div className={styles.skillsSentence}>
          <h2 className={styles.skillsTitle}>強み</h2>
          <p className={pageStyles.sentence}>
            要件定義〜設計〜開発〜運用、インフラ〜フロントまでフルサイクルでご相談できるのが強みです。
          </p>
        </div>
        <div>
          <h2 className={styles.skillsTitle}>業務</h2>
          <p className={pageStyles.sentence}>Webアプリ、スマホアプリ、LINEアプリ、技術コンサル</p>
        </div>
      </div>
    </section>
  );
}
