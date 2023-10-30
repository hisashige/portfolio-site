'use client';

import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/pc-cat.png"
          alt="Logo"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      {pathname === '/' && <Menu />}
    </header>
  );
}
