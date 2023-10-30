import React from 'react';

export const WORKS = [
  {
    title: 'ポートフォリオサイト',
    thumbnail: '/pc-cat.png',
    image: '/works/main/portfolio.png',
    subtitle: 'このサイト',
    description:
      'Next.js + TypeScript + Tailwind CSS + NextUI + Vercel、なポートフォリオサイトです。',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'NextUI', 'Vercel'],
    link: null,
  },
  {
    title: 'Pomodoro Adventure',
    thumbnail: '/works/thumbnails/pomonyan.gif',
    image: '/works/main/pomodoro-adventure.png',
    subtitle: 'ポモドーロタイマー＆ログ可視化ツール',
    description: (
      <>
        <p>
          Pomodoro
          Adventure(_ポモドーロアドベンチャー)はあなたの努力を視覚化するポモドーロツールです。
        </p>
        <p>
          BGMやビジュアルによるモチベーションの向上、ログ・グラフによる努力の可視化でサポートします。
        </p>
        <br />
        <p>(※PCブラウザ専用)</p>
        <p>(※バックエンド＋アカウント機能開発中。現在はブラウザにデータが保存されます。)</p>
      </>
    ),
    techs: [
      'React',
      'Vite',
      'TypeScript',
      'Mantine',
      'Chart.js',
      'NestJS',
      'GraphQL',
      'Firebase',
      'Vercel',
    ],
    link: 'https://pomodoro-adventure.vercel.app/',
  },
  {
    title: 'Software Design連載',
    thumbnail: 'http://image.gihyo.co.jp/assets/images/cover/2021/642101.jpg',
    image: 'http://image.gihyo.co.jp/assets/images/cover/2021/642101.jpg',
    subtitle: '「はじめてのAIチャットボット開発」',
    description: (
      <>
        <p>
          Software Design 2021年1月号」より、「はじめてのAIチャットボット開発」を6ヶ月連載しました。
        </p>
        <p>入門者向けに、LINEやWEBで動くAIチャットボットの完成を目指す内容です。 </p>
      </>
    ),
    techs: ['執筆', 'Dialogflow', 'LINE Messaging API', 'Vue.js'],
    link: 'https://gihyo.jp/magazine/SD/archive/2021/202101',
  },
  {
    title: 'Comming Soom',
    thumbnail: '/works/thumbnails/coming-soon.png',
    image: null,
    subtitle: '準備中',
    description: '',
    techs: [],
    link: null,
  },
];
