import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Hisashige Takahashi</h1>
          <p className={styles.description}>
            I'm a Full Cycle Software Engineer.
            <br />
            And your partner.
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Philosophy</h2>
            <p className={styles.sectionTitleJa}>価値観</p>
            <p className={styles.sectionSlogan}>「デジタルで人に寄り添う」</p>
            <div className={styles.sectionDescription}>
              <p className={styles.sentence}>
                昨今のシステム開発は変化が目まぐるしく、数多のサービスが生まれては消え、数多の開発技術がもてはやされては廃れていきます。
              </p>
              <p className={styles.sentence}>
                そんな中、
                <b>「お客様やサービスが本当に必要としている価値は何なのかを共に考えること」</b>
                、また<b>「特定領域や工程に囚われずに広い視野を持って開発を行っていくこと」</b>
                がエンジニアとして大切だと考えています。
              </p>
              <p className={styles.sentence}>
                友人のように気軽に心地よく相談でき、一緒に何かを作っていくことが楽しくなるような、
                誰かの頼れるパートナーでありたい。 そんな思いで、日々の業務に取り組んでいます。
              </p>
              <p className={styles.sentence}>
                <br />
                堅苦しく書いてしまいましたが、<b>「みんなで楽しく良いものを作りたい！」</b>人です。
              </p>
            </div>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>Career</h2>
              <p className={styles.sectionTitleJa}>経歴</p>
              <div className={styles.sectionCareer}>
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
              <div className={styles.sectionDescription}>
                <p className={styles.sentence}>
                  業務システムの設計・開発でキャリアをスタートし、もう少し開発全体を見通せる仕事や、新しい技術を扱いたいという思いから、Webエンジニアに転身しました。
                </p>
                <p className={styles.sentence}>
                  その後プロジェクトマネージャーとして、開発チームのマネジメントや、お客様との折衝を行うなど、マネジメント業務を行いつつ、手を動かしての開発業務も続けていました。
                </p>
                <p className={styles.sentence}>
                  新しい技術の利用と新規顧客の開拓を目的に新規に立ち上げたチームでは、採用や教育なども行い、エンジニアリングマネージャーとして、10名ほどのチームを運営する経験も積みました。
                </p>
                <p className={styles.sentence}>
                  現在はフリーランスエンジニアとして、スタートアップ企業のアプリ開発の運用・改善チームのリードや、CTO室で共通基盤開発の支援を行っています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
