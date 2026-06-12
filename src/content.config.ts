import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			maturity: z.enum(['seedling', 'budding', 'evergreen']).optional(),
			lang: z.enum(['en', 'pt']).default('en'),
			translationOf: z.string().optional(),
		}),
});

const til = defineCollection({
	loader: glob({
		base: './src/content/til',
		pattern: '**/[^_]*.md',
	}),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, til };
