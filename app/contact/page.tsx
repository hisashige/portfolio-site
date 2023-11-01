import Link from 'next/link';
import styles from './page.module.css';
import ContactForm from '@/app/_components/ContactForm';
import ButtonLink from '../_components/ButtonLink';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問・ご相談は、
        <Link href="https://twitter.com/hisachii56" target="_blank" className={styles.xLink}>
          XのDM
        </Link>
        、 または下記フォームよりお問い合わせください。
      </p>
      <ContactForm />
      <div className={styles.footer}>
        <ButtonLink href="/">トップページへ</ButtonLink>
      </div>
    </div>
  );
}
