# Getting started

## Prerequisite

- Operation System: Linux (recommended). Windows should work but is not tested.
- [Node.js](https://nodejs.org) runtime: v18 is recommended
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- A GitHub account for publishing your changes

## First build

1. Clone the repo from GitHub
   ```sh
   git clone https://github.com/aeon-technology/docs.git
   ```
2. Install dev dependencies
   ```sh
   cd docs
   npm install
   ```
3. Start dev script
   ```sh
   npm run build
   ```
4. The output will be available in `/dist/` directory. Open the `/dist/index.html` file with your browser to view the results.

## File Orientation

- `content/` contains the "source" of all the pages, in markdown format.
  - `content/_toc.md` contains the editable source for the Table of Contents.
  - `content/chNN` contains the pages for chapter with the number `NN`.
  - `content/ch00` contains a temporary chapter that helps developers onboard this documentation project. This chapter will not be included once we have finalized the project.
  - `content/chNN/media` contains images or other attachments referenced from the content.
- `dist/` contains the "output" of the project.
- `scripts/` contains the script that builds `content` into `dist`
- `src/` contains the template used by `scripts/`, as well as stylesheet and javascripts that are loaded when user opens a page.
- `package.json` defines the dependencies that this project uses, and the dev scripts, e.g. `npm run dev`.

## Workflow

1. Start the dev script in "watch" mode
   ```sh
   cd docs
   npm run dev
   ```
2. Open `/dist/index.html` file with a browser.
3. Make changes to pages inside `content/`. The dev script will automatically rebuild the entire project. If there are no errors, refresh the page in the browser to see the changes.

## Next steps

1. [Learn basic markdown syntax](https://www.markdownguide.org/basic-syntax/)
2. [DFF-specific syntax reference](./docs/dff-markdown-reference.md)
