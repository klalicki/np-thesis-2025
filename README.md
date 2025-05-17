# SUNY New Paltz Design Show 2025 Site

This site uses Astro, a Node.js-based static site generator. Some benefits of this include:

- **Static Output**: The site is pre-rendered into static HTML, which can be served quickly and efficiently. It is set up to produce a small amount of client-side JavaScript for progressive enhancement (to support view transitions and link prefetching) but the site is fully functional without it.
- **Organized Content**: The site uses a file-based structure for source content - each student has a folder which contains a markdown file with their project details, as well as all images.
- **Image Optimization**: The site uses Astro's built-in image optimization to resize and compress images for much faster loading times. The site currently resizes converts all images to WebP format at build time. When deployed via Netlify, the optimized images are cached between builds, to allow for fast build times - most builds will not require the images to be re-processed, and will take less than 30 seconds. Full builds in which the images are re-processed take about 2 minutes.
- **Typed Content**: The site uses Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/) API to define the structure of the content. This allows for fully typed content in front-end templates for a much smoother development experience.

## Quickstart

To get started with this project, clone the repository and install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Folder Structure

Inside of this Astro project, you'll see the following folders and files:

`src/content/people/[name]/` - contains the content for each student project:

- `project.md` - contains the project details as well as filenames for images
- `headshot_1.jpg`,`headshot_2.jpg`,`project_1.jpg`, etc. - the student's headshot, as well as images for their project

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
