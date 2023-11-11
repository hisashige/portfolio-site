import Link from 'next/link';
import styles from './index.module.css';

const FooterItems = [
  {
    href: '/',
    name: 'TOP',
  },
  {
    href: '/articles',
    name: '記事一覧',
  },
  {
    href: '/contact',
    name: 'お問い合わせ',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          {FooterItems.map((item, key) => (
            <li className={styles.item}>
              <Link href={item.href} key={key} className="footer-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p>© Hisashige Takahashi. All Rights Reserved</p>
    </footer>
  );
}
