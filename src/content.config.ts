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
const projectCollection2 = defineCollection({
  loader: glob({
    pattern: "*/project.md",
    base: "./src/content/people",
    generateId: (options) => {
      return "bla";
      return options.entry.split("/")[0];
    },
  }),
  schema: z.object({}),
});

export const collections = {
  people: peopleCollection,
  projects: projectCollection2,
};
