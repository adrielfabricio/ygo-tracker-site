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

/** Long-form guides, one Markdown file per locale under src/content/guides/<locale>/. */
const guides = defineCollection({
	loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		/** `<title>` for search results (≤ 60 characters); the H1 uses `title`. */
		seoTitle: z.string().max(60),
		description: z.string(),
		locale: z.enum(['pt-br', 'en']),
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
	}),
});

export const collections = { legal, guides };
