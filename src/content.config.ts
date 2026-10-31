import { existsSync } from "node:fs";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Placeholder product collection. Each file is one piece from the Figma
 * catalogue. `image` and gallery `image` values are base names of PNG
 * files in public/images/ (for example "da-g01" → public/images/da-g01.png).
 * A missing file or a bad field fails the build.
 */
const imageName = z
  .string()
  .refine((name) => existsSync(`public/images/${name}.png`), {
    message: "image must be the base name of a PNG in public/images/",
  });

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    reference: z.string(),
    category: z.enum(["glassware", "fine-art", "furniture"]),
    summary: z.string(),
    availability: z.enum(["available", "reserved", "sold"]),
    order: z.number().int(),
    featured: z.boolean().default(false),
    image: imageName,
    imageAlt: z.string(),
    gallery: z
      .array(
        z.object({
          image: imageName,
          alt: z.string(),
        }),
      )
      .min(1),
    galleryCaption: z.string().optional(),
    facts: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    condition: z.string(),
    history: z
      .array(
        z.object({
          when: z.string(),
          title: z.string(),
          body: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { products };
