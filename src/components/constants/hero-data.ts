// src/data/assets.ts
export type IconItem = {
  key: string;
  src: string;
  alt: string;
};

export type ImageItem = {
  key: string;
  src: string;
  alt: string;
};

export const ICONS: Record<string, IconItem> = {
  js: { key: 'js', src: '/icons/js.svg', alt: 'JavaScript' },
  css: { key: 'css', src: '/icons/css.svg', alt: 'CSS' },
  html: { key: 'html', src: '/icons/html.svg', alt: 'HTML' },
  react: { key: 'react', src: '/icons/react.svg', alt: 'React' },
  mongodb: { key: 'mongodb', src: '/icons/mongodb.svg', alt: 'MongoDB' },
  docker: { key: 'docker', src: '/icons/docker.svg', alt: 'Docker' },
  ejs: { key: 'ejs', src: '/icons/ejs.svg', alt: 'EJS' },
  mic: { key: 'mic', src: '/icons/mic.svg', alt: 'Microphone' },
  right2: { key: 'right2', src: '/icons/right2.svg', alt: 'Arrow Right' },
  redstar2: { key: 'redstar2', src: '/icons/redstar2.svg', alt: 'Red Star 2' },
  redstar3: { key: 'redstar3', src: '/icons/redstar3.svg', alt: 'Red Star 3' },
  sdown: { key: 'sdown', src: '/icons/sdown.svg', alt: 'Scroll Down' },
};

export const TECH_ICONS: IconItem[] = [
  ICONS.js,
  ICONS.css,
  ICONS.html,
  ICONS.react,
  ICONS.mongodb,
  ICONS.docker,
  ICONS.ejs,
];

export const UI_ICONS: IconItem[] = [
  ICONS.mic,
  ICONS.right2,
  ICONS.redstar2,
  ICONS.redstar3,
  ICONS.sdown,
];

export const IMAGES: Record<string, ImageItem> = {
  bghero: { key: 'bghero', src: '/images/bghero.png', alt: 'Background Hero' },
  group1: { key: 'group1', src: '/images/group-1.png', alt: 'Image Group 1' },
  eustachia2: {
    key: 'eustachia2',
    src: '/images/eustachia2.png',
    alt: 'Eustachia 2',
  },
};
