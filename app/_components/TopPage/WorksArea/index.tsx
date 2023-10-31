import pageStyles from '@/app/page.module.css';

import WorkSlider from '@/app/_components/TopPage/WorksArea/WorkSlider';

export default function WorksArea() {
  return (
    <div className={pageStyles.whiteArea}>
      <section id="works" className={pageStyles.section}>
        <div style={{ textAlign: 'center' }}>
          <h2 className={pageStyles.sectionTitleEn}>Works</h2>
          <p className={pageStyles.sectionTitleJa} style={{ justifyContent: 'center' }}>
            作品
          </p>
          <p className={pageStyles.sentence}>
            趣味の個人制作物です。
            <br />
            実務中心だったため、個人制作はあまりしてこなかったのですが、徐々に増やしていきます…！
          </p>
          <WorkSlider />
        </div>
      </section>
    </div>
  );
}
