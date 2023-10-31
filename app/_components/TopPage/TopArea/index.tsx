import { Avatar } from '@nextui-org/react';
import styles from './index.module.css';

export default function TopArea() {
  return (
    <section id="top" className={styles.top}>
      <Avatar className={styles.avatar} src="/pc-cat.png" alt="Logo" />
      <div>
        <h1 className={styles.title}>Hisashige Takahashi</h1>
        <p className={styles.description}>
          I&apos;m a Full Cycle Software Engineer.
          <br />
          And your partner.
        </p>
      </div>
    </section>
  );
}
