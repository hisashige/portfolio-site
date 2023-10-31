import Image from 'next/image';
import pageStyles from '@/app/page.module.css';
import styles from './index.module.css';

export default function PhilosophyArea() {
  return (
    <section id="philosophy" className={pageStyles.section}>
      <div className={pageStyles.horizontal}>
        <div>
          <h2 className={pageStyles.sectionTitleEn}>Philosophy</h2>
          <p className={pageStyles.sectionTitleJa}>価値観</p>
          <p className={pageStyles.sectionSlogan}>「技術で人に寄り添う」</p>
          <div className={pageStyles.sectionDescription}>
            <p className={pageStyles.sentence}>
              昨今のシステム開発は変化が目まぐるしく、数多のサービスが生まれては消え、数多の開発技術がもてはやされては廃れていきます。
            </p>
            <p className={pageStyles.sentence}>
              そんな中、
              <b>「お客様やサービスが本当に必要としている価値は何なのかを共に考えること」</b>
              、また<b>「特定領域や工程に囚われずに広い視野を持って開発を行っていくこと」</b>
              がエンジニアとして大切だと考えています。
            </p>
            <p className={pageStyles.sentence}>
              友人のように気軽に、心地よく相談でき、一緒に何かを作っていくことが楽しくなるような、
              頼れるパートナーでありたい。 そんな思いで、日々の業務に取り組んでいます。
            </p>
            <p className={pageStyles.sentence}>
              <br />
              堅苦しく書いてしまいましたが、<b>「みんなで楽しく良いものを作りたい！」</b>人です。
            </p>
          </div>
        </div>
        <Image
          className={styles.philosopyImg}
          src="/img-business.png"
          alt=""
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
}
