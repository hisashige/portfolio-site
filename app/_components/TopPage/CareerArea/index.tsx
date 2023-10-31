import Image from 'next/image';
import pageStyles from '@/app/page.module.css';
import styles from './index.module.css';

export default function CareerArea() {
  return (
    <div className={pageStyles.whiteArea}>
      <section id="career" className={pageStyles.section}>
        <div className={pageStyles.horizontal}>
          <Image className={styles.careerImg} src="/career.jpg" alt="" width={6000} height={4000} />
          <div>
            <h2 className={pageStyles.sectionTitleEn}>Career</h2>
            <p className={pageStyles.sectionTitleJa}>経歴</p>
            <div className={pageStyles.sectionCareer}>
              <dl className={styles.career}>
                <dt className={styles.careerDay}>2015年3月</dt>
                <dd className={styles.careerDescription}>神戸大学法学部法律学科卒業</dd>
              </dl>
              <dl className={styles.career}>
                <dt className={styles.careerDay}>2015年4月</dt>
                <dd className={styles.careerDescription}>独立系SIerにSEとして入社</dd>
              </dl>
              <dl className={styles.career}>
                <dt className={styles.careerDay}>2018年1月</dt>
                <dd className={styles.careerDescription}>株式会社神戸デジタル・ラボ入社</dd>
              </dl>
              <dl className={styles.career}>
                <dt className={styles.careerDay}>2022年12月</dt>
                <dd className={styles.careerDescription}>フリーランスエンジニアとして活動</dd>
              </dl>
            </div>
            <div className={pageStyles.sectionDescription}>
              <p className={pageStyles.sentence}>
                業務システムの設計・開発でキャリアをスタートし、もう少し開発全体を見通せる仕事や、新しい技術を扱いたいという思いから、Webエンジニアに転身しました。
              </p>
              <p className={pageStyles.sentence}>
                その後プロジェクトマネージャーとして、開発チームの管理や、お客様との折衝を行うなど、マネジメント業務を主にしつつ、自ら手を動かす開発も続けました。
              </p>
              <p className={pageStyles.sentence}>
                新しい技術の利用と新規顧客の開拓を目的に、新規に立ち上げたチームでは、採用や教育なども行い、エンジニアリングマネージャーとして10名ほどのチームを運営する経験も積みました。
              </p>
              <p className={pageStyles.sentence}>
                現在はフリーランスエンジニアとして、スタートアップ企業のアプリ開発の運用・改善を行うチームのリードや、CTO室で技術基盤開発の支援を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
