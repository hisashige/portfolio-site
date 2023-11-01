import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/">TOP</Link>
          </li>
          <li className={styles.item}>
            <Link href="/articles">記事一覧</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p>© Hisashige Takahashi. All Rights Reserved</p>
    </footer>
  );
}
