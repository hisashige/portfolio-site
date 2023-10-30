'use client';

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.slick.css';
import Slider from 'react-slick';
import { FcPrevious, FcNext } from 'react-icons/fc';
import styles from './index.module.css';
import SlideItem from '../SlideItem';
import { WORKS } from '@/app/_constants/works';

export default function WorkSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // adaptiveHeight: true,
    centerMode: true,
    // focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <FcPrevious />,
    nextArrow: <FcNext />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // @ts-ignore react-slickの型定義によるエラーなので無視
    <Slider {...settings} className={styles.workSlider}>
      {/* @ts-ignore */}
      {WORKS.map((work, key) => (
        <SlideItem
          key={key}
          title={work.title}
          thumbnail={work.thumbnail}
          image={work.image}
          subtitle={work.subtitle}
          description={work.description}
          techs={work.techs}
          link={work.link}
        />
      ))}
    </Slider>
  );
}
