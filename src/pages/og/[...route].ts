import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

const pages: Record<string, { title: string; description?: string }> = {
  default: {
    title: 'Marcos Augusto',
    description: 'Mobile engineer · web · agents',
  },
};

for (const post of posts) {
  pages[`blog/${post.id}`] = {
    title: post.data.title,
    description: post.data.description,
  };
}

const frauncesFont =
  './node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2';
const instrumentFont =
  './node_modules/@fontsource/instrument-sans/files/instrument-sans-latin-400-normal.woff2';

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description ?? '',
    bgGradient: [
      [252, 250, 245],
      [245, 240, 232],
    ],
    border: {
      color: [180, 95, 60],
      width: 6,
      side: 'inline-start',
    },
    fonts: [frauncesFont, instrumentFont],
    font: {
      title: {
        color: [40, 38, 35],
        size: 70,
        weight: 'Bold',
        families: ['Fraunces'],
        lineHeight: 1.15,
      },
      description: {
        color: [100, 95, 88],
        size: 40,
        weight: 'Normal',
        families: ['Instrument Sans'],
        lineHeight: 1.4,
      },
    },
    padding: 60,
  }),
});
