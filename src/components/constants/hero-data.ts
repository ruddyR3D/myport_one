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

// Contoh pemakaian cepat:
// <Image src={IMAGES.bghero.src} alt={IMAGES.bghero.alt} fill className="object-cover" />
// <Image src={ICONS.react.src} alt={ICONS.react.alt} width={24} height={24} />

// // src/data/assets.ts
// export type IconItem = { key: string; src: string; alt: string };
// export type ImageItem = { key: string; src: string; alt: string };

// // ========== 1) VARIAN RINGKAS: ARRAY SAJA ==========
// export const TECH_ICONS_ARRAY: IconItem[] = [
//   { key: 'js',        src: '/icons/js.svg',        alt: 'JavaScript' },
//   { key: 'css',       src: '/icons/css.svg',       alt: 'CSS' },
//   { key: 'html',      src: '/icons/html.svg',      alt: 'HTML' },
//   { key: 'react',     src: '/icons/react.svg',     alt: 'React' },
//   { key: 'mongodb',   src: '/icons/mongodb.svg',   alt: 'MongoDB' },
//   { key: 'docker',    src: '/icons/docker.svg',    alt: 'Docker' },
//   { key: 'ejs',       src: '/icons/ejs.svg',       alt: 'EJS' },
// ];

// export const UI_ICONS_ARRAY: IconItem[] = [
//   { key: 'mic',       src: '/icons/mic.svg',       alt: 'Microphone' },
//   { key: 'right2',    src: '/icons/right2.svg',    alt: 'Arrow Right' },
//   { key: 'redstar2',  src: '/icons/redstar2.svg',  alt: 'Red Star 2' },
//   { key: 'redstar3',  src: '/icons/redstar3.svg',  alt: 'Red Star 3' },
//   { key: 'sdown',     src: '/icons/sdown.svg',     alt: 'Scroll Down' },
// ];

// export const IMAGES_ARRAY: ImageItem[] = [
//   { key: 'bghero',     src: '/images/bghero.png',     alt: 'Background Hero' },
//   { key: 'group1',     src: '/images/group-1.png',    alt: 'Image Group 1' },
//   { key: 'eustachia2', src: '/images/eustachia2.png', alt: 'Eustachia 2' },
// ];

// // ========== 2) VARIAN DENGAN UKURAN DEFAULT ==========
// export type IconWithSize = IconItem & { width: number; height: number };
// export type ImageWithSize = ImageItem & {
//   width?: number; height?: number; fill?: boolean;
// };

// export const ICON_DEFAULT_SIZE = 24; // ubah jika perlu

// export const TECH_ICONS_SIZED: IconWithSize[] = TECH_ICONS_ARRAY.map(i => ({
//   ...i, width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE,
// }));

// export const UI_ICONS_SIZED: IconWithSize[] = UI_ICONS_ARRAY.map(i => ({
//   ...i, width: ICON_DEFAULT_SIZE, height: ICON_DEFAULT_SIZE,
// }));

// // untuk hero biasanya pakai fill; lainnya contoh ukuran aman
// export const IMAGES_SIZED: ImageWithSize[] = [
//   { ...IMAGES_ARRAY.find(i => i.key === 'bghero')!, fill: true },
//   { ...IMAGES_ARRAY.find(i => i.key === 'group1')!, width: 800, height: 600 },
//   { ...IMAGES_ARRAY.find(i => i.key === 'eustachia2')!, width: 600, height: 750 },
// ];

// // ======= Contoh Pakai (Next Image) =======
// // <Image {...TECH_ICONS_SIZED[0]} priority />
// // <Image src={IMAGES_SIZED[0].src} alt={IMAGES_SIZED[0].alt} fill className="object-cover" />
// // <Image src={IMAGES_SIZED[1].src} alt={IMAGES_SIZED[1].alt} width={IMAGES_SIZED[1].width} height={IMAGES_SIZED[1].height} />
