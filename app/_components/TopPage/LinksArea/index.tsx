import Image from 'next/image';
import Link from 'next/link';
import { LINKS } from '@/app/_constants/links';
import styles from './index.module.css';

export default function LinksArea() {
  return (
    <section className={styles.links}>
      <h2 className={styles.linksTitle}>Links</h2>
      <div className={styles.linkContents}>
        {LINKS.map((link, key) => {
          return (
            <Link href={link.url} key={key} rel="noopener noreferrer" target="_blank">
              <Image src={link.image} alt={link.name} className="sns-link" width={50} height={50} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
