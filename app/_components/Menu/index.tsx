'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="#philosophy" onClick={close}>
              価値観
            </Link>
          </li>
          <li>
            <Link href="#career" onClick={close}>
              経歴
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={close}>
              スキル
            </Link>
          </li>
          <li>
            <Link href="#works" onClick={close}>
              作品
            </Link>
          </li>
          {/* <li>
            <Link href="/contact" onClick={close}>
              お問い合わせ
            </Link>
          </li> */}
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
