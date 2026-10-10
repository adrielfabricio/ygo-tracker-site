import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Privacy policy, terms and support. English only; published at /privacy, /terms and /support. */
const legal = defineCollection({
	loader: glob({ base: './src/content/legal', pattern: '*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { legal };
