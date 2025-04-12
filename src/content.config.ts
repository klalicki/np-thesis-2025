import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const peopleCollection = defineCollection({
  loader: glob({
    pattern: "*/**.md",
    base: "./src/content/people",
    generateId: (options) => {
      return options.entry.split("/")[0];
    },
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      pronouns: z.string(),
      location: z.string(),
      headshot: image(),
      portfolio: z.string(),
      title: z.string(),
      projectSlug: z.string(),
      thumbnail: z.object({
        alt: z.string(),
        src: image(),
      }),
      images: z.array(
        z.object({
          alt: z.string(),
          src: image(),
        })
      ),
    }),
});

export const collections = {
  people: peopleCollection,
};
