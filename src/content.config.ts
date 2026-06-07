// 1. Import utilities from `astro:content`
import {defineCollection, reference, z} from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const posts = defineCollection({
    loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/posts' }),
    schema: ({ image }) => z.object({
        author: z.string().optional(),
        publishDate: z.date(),
        updateDate: z.date().optional(),
        title: z.string(),
        relatedPosts: z.array(reference('posts')).optional(),
        tags: z.array(z.string()),
        description: z.string(),
        cover: z.object({
            src: image(),
            alt: z.string().optional(),
        }),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        summary: z.string(),
        url: z.string(),
        cover: image(),
        tags: z.array(z.string()),
        ogImage: z.string()
    }),
});

const profile = defineCollection({
    loader: glob({ pattern: "*.mdx", base: "./src/content/profile" }),
    schema: z.object({
        hero: z.object({
            eyebrow: z.string(),
            status: z.string(),
            headline: z.string(),
            summary: z.string(),
            ctaLabel: z.string(),
            secondaryCtaLabel: z.string(),
        }),
        skills: z.array(z.object({
            name: z.string(),
            description: z.string(),
            icon: z.string(),
            tags: z.array(z.string()),
            variant: z.enum(["featured", "wide", "compact"]),
        })),
        experience: z.array(z.object({
            title: z.string(),
            company: z.string(),
            location: z.string(),
            period: z.string(),
            current: z.boolean(),
            icon: z.string(),
            accent: z.enum(["primary", "secondary"]),
            summary: z.string(),
            technologies: z.array(z.object({
                name: z.string(),
                icon: z.string(),
            })).length(3),
            bullets: z.array(z.string()),
        })),
        education: z.array(z.object({
            title: z.string(),
            institution: z.string(),
            period: z.string(),
            location: z.string(),
        })),
        certifications: z.array(z.string()),
        volunteering: z.array(z.object({
            title: z.string(),
            organization: z.string(),
            period: z.string(),
            description: z.string(),
            icon: z.string(),
            variant: z.enum(["featured", "wide", "compact"]),
        })),
        recommendations: z.array(z.object({
            name: z.string(),
            role: z.string(),
            quote: z.string(),
        })),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, posts, profile };
