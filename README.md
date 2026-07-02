# Atabic — Personal Portfolio

This is the source for my personal portfolio and blog at [atabicumer.com](https://atabicumer.com), where I share who I am, what I've worked on, and what I'm building.

I'm a Full Stack JS developer based in Lahore, Pakistan. I started out as a backend developer and transitioned into full stack work, mainly with React, Next.js, Node.js, and Postgres. I care about building software that's scalable and easy to maintain, and I'm always looking for new things to learn.

- **GitHub**: [dub.sh/atabic-github](https://dub.sh/atabic-github)
- **LinkedIn**: [dub.sh/atabic-linkedin](https://dub.sh/atabic-linkedin)
- **X**: [dub.sh/atabic-twitter](https://dub.sh/atabic-twitter)

## Built with

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) components
- [Framer Motion](https://www.framer.com/motion/) for animations
- MDX-powered blog

## Using this as your own template

This project started as a stripped-down version of a popular open-source Next.js portfolio template, with a few sections removed to keep things minimal. If you'd like to use it as a starting point for your own site, here's how:

1. **Clone and install**

   ```bash
   git clone <this-repo-url>
   cd atabicumer.com
   npm install
   ```

2. **Update your info**

   Nearly everything on the homepage — name, bio, work history, education, skills, and social links — comes from a single config file: [`src/data/resume.tsx`](./src/data/resume.tsx). Edit the `DATA` object there with your own details.

3. **Swap the avatar and logos**

   Replace the images in [`public/`](./public) (e.g. `me.jpg`, company logos) with your own, and update the corresponding paths in `resume.tsx`.

4. **Write blog posts**

   Blog posts live as MDX files in [`content/`](./content). Add a new `.mdx` file with frontmatter (`title`, `publishedAt`, `summary`) to publish a new post — it'll automatically show up on the `/blog` page.

5. **Tweak the theme**

   Colors, radius, and other design tokens are defined as CSS variables in [`src/app/globals.css`](./src/app/globals.css) and wired up in [`tailwind.config.ts`](./tailwind.config.ts).

6. **Run it locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see it live.

7. **Deploy**

   The project deploys cleanly to [Vercel](https://vercel.com/) or any other Next.js-compatible host — connect your repo and ship.

## License

Licensed under the [MIT license](./LICENSE).
