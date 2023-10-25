export type Skill = {
  name: string;
  image: string;
};

const frontend: Skill[] = [
  {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Next.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  },
  { name: 'ReactNative', image: '/skills/react-native.svg' },
  {
    name: 'Vue.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
  },
  {
    name: 'Nuxt.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg',
  },
];

const backend: Skill[] = [
  {
    name: 'Node.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Express',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  },
  {
    name: 'NestJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  },
  { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  {
    name: 'Java',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
];

const infra: Skill[] = [
  { name: 'AWS', image: '/skills/aws.svg' },
  {
    name: 'Azure',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg',
  },
  {
    name: 'Firebase',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
  },
  {
    name: 'Docker',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
  },
  {
    name: 'MySQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  },
];

const management = ['プロジェクトマネージャー', 'スクラムマスター', 'エンジニアリングマネージャー'];

export const skills = {
  frontend,
  backend,
  infra,
  management,
};