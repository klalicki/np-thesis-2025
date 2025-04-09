import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const peopleCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/people",
  }),
  schema: z.object({}),
});

export const collections = {
  people: peopleCollection,
};
