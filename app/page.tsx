import Image from 'next/image';
import Link from 'next/link';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import styles from './page.module.css';
import SkillList from './_components/SkillList';
import { SKILLS } from './_constants/skills';
import SkillTextList from './_components/SkillTextList';
import { LINKS } from './_constants/links';
import { Avatar } from '@nextui-org/react';
import WorkSlider from './_components/WorkSlider';

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section id="top" className={styles.top}>
        <Avatar className={styles.avatar} src="/pc-cat.png" alt="Logo" />
        <div>
          <h1 className={styles.title}>Hisashige Takahashi</h1>
          <p className={styles.description}>
            I'm a Full Cycle Software Engineer.
            <br />
            And your partner.
          </p>
        </div>
      </section>
      <section className={styles.links}>
        <h2 className={styles.linksTitle}>Links</h2>
        <div className={styles.linkContents}>
          {LINKS.map((link, key) => {
            return (
              <Link href={link.url} key={key} rel="noopener noreferrer" target="_blank">
                <Image src={link.image} alt={link.name} width={50} height={50} />
              </Link>
            );
          })}
        </div>
      </section>
      <section id="philosophy" className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Philosophy</h2>
            <p className={styles.sectionTitleJa}>価値観</p>
            <p className={styles.sectionSlogan}>「技術で人に寄り添う」</p>
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
                友人のように気軽に、心地よく相談でき、一緒に何かを作っていくことが楽しくなるような、
                頼れるパートナーでありたい。 そんな思いで、日々の業務に取り組んでいます。
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
      <div className={styles.whiteArea}>
        <section id="career" className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.careerImg}
              src="/career.jpg"
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
                  その後プロジェクトマネージャーとして、開発チームの管理や、お客様との折衝を行うなど、マネジメント業務を主にしつつ、自ら手を動かす開発も続けました。
                </p>
                <p className={styles.sentence}>
                  新しい技術の利用と新規顧客の開拓を目的に、新規に立ち上げたチームでは、採用や教育なども行い、エンジニアリングマネージャーとして10名ほどのチームを運営する経験も積みました。
                </p>
                <p className={styles.sentence}>
                  現在はフリーランスエンジニアとして、スタートアップ企業のアプリ開発の運用・改善を行うチームのリードや、CTO室で技術基盤開発の支援を行っています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="skills" className={styles.section}>
        <div style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitleEn}>Skills</h2>
          <p className={styles.sectionTitleJa} style={{ justifyContent: 'center' }}>
            技術スキル
          </p>
          <div className={styles.skills}>
            <h2 className={styles.skillsTitle}>Frontend</h2>
            <SkillList skills={SKILLS.frontend} />
            <h2 className={styles.skillsTitle}>Backend</h2>
            <SkillList skills={SKILLS.backend} />
            <h2 className={styles.skillsTitle}>Infra</h2>
            <SkillList skills={SKILLS.infra} />
            <h2 className={styles.skillsTitle}>Management</h2>
            <SkillTextList skillTexts={SKILLS.management} />
          </div>
          <div className={styles.skillsSentence}>
            <h2 className={styles.skillsTitle}>強み</h2>
            <p className={styles.sentence}>
              要件定義〜設計〜開発〜運用、インフラ〜フロントまでフルサイクルでご相談できるのが強みです。
            </p>
          </div>
          <div>
            <h2 className={styles.skillsTitle}>業務</h2>
            <p className={styles.sentence}>Webアプリ、スマホアプリ、LINEアプリ、技術コンサル</p>
          </div>
        </div>
      </section>
      <div className={styles.whiteArea}>
        <section id="works" className={styles.section}>
          <div style={{ textAlign: 'center' }}>
            <h2 className={styles.sectionTitleEn}>Works</h2>
            <p className={styles.sectionTitleJa} style={{ justifyContent: 'center' }}>
              作品
            </p>
            <p className={styles.sentence}>
              趣味の個人制作物です。
              <br />
              実務中心だったため、個人制作はあまりしてこなかったのですが、徐々に増やしていきます…！
            </p>
            <WorkSlider />
          </div>
        </section>
      </div>
    </>
  );
}
