## Nextjs Markdown Blog

[![nextjs](https://img.shields.io/badge/nextjs-030712?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![typescript](https://img.shields.io/badge/typescript-030712?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-030712?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcnui](https://img.shields.io/badge/shadcnui-030712?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/docs/installation)

### summary

- [About](#about-the-project)
- [File structure](#file-structure)
- [Run project](#run-project)

---

### About the project:
This project is a simple blog built with Next.js 14, TypeScript, Shadcn/UI, and TailwindCSS. It allows you to create and view blog posts in Markdown format. The application uses Next.js' Dynamic Routing functionality to render each post individually and generate static pages at build time (SSG - Static Site Generation).

### File structure
```sh
/app
  /posts
    /[id]
      page.tsx       # Page of a specific post
/lib
  posts.ts           # Utility functions to get data from posts
/src
  /content           # Folder where the .md files of the posts are stored
    post1.md         # Post
    post2.md         # Post
```

### Run project:

#### Clone repository:
```sh
git clone git@github.com:maycon8609/nextjs-markdown-blog.git
```

#### Install dependencies:
```sh
npm install
```

#### Run project:
```sh
npm run dev
```