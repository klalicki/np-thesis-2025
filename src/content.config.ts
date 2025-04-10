import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const peopleCollection = defineCollection({
  loader: glob({
    pattern: "*/bio.md",
    base: "./src/content/people",
    generateId: (options) => {
      return options.entry.split("/")[0];
    },
  }),
  schema: z.object({}),
});
const projectCollection = defineCollection({
  loader: glob({
    pattern: "*/project.md",
    base: "./src/content/people",
    generateId: (options) => {
      return options.entry.split("/")[0];
    },
  }),
  schema: ({ image }) =>
    z.object({
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
  projects: projectCollection,
};
