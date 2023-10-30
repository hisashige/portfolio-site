'use client';

import Hero from '@/app/_components/Hero';
import styles from './not-found.module.css';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const handlePressToTop = () => {
    router.push('/');
  };

  return (
    <>
      <Hero title="404" sub="Not Found" />
      <div className={styles.container}>
        <dl>
          <dt className={styles.title}>ページが見つかりませんでした</dt>
          <dd className={styles.text}>
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLを再度ご確認ください。
          </dd>
          <dd className={styles.button}>
            <Button
              color="primary"
              radius="full"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
              onPress={handlePressToTop}
            >
              トップページに戻る
            </Button>
          </dd>
        </dl>
      </div>
    </>
  );
}
