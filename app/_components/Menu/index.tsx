'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

const MenuItems = [
  {
    href: '/',
    name: 'TOP',
  },
  {
    href: '/articles',
    name: '記事',
  },
  {
    href: '#philosophy',
    name: '価値観',
  },
  {
    href: '#career',
    name: '経歴',
  },
  {
    href: '#skills',
    name: 'スキル',
  },
  {
    href: '#works',
    name: '作品',
  },
  {
    href: '/contact',
    name: 'お問い合わせ',
  },
];

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {MenuItems.map((item, key) => (
            <li>
              <Link href={item.href} onClick={close} key={key} className="menu-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
