# Portfolio OS

[arvydasvingis.com](https://arvydasvingis.com) is Arvydas Vingis's
desktop-inspired portfolio. It presents professional experience, skills,
projects, contact details, and a downloadable resume through draggable and
resizable application windows.

## How it works

- Next.js and React render the portfolio as a single-page desktop interface.
- The dock and XTerm.js terminal open and focus the About, Experience,
  Projects, Skills, Contacts, Terminal, and Resume windows.
- Progressive enhancement provides the complete portfolio as a readable,
  semantic document when JavaScript is unavailable.
- Zustand manages window visibility, position, size, and stacking order.
- Files in `src/content/` keep profile, project, skill, and contact information
  separate from the presentation components.
- Tailwind CSS, React RND, and next-themes provide the layout, window behavior,
  and light/dark themes.

## SEO and deployment

The site is generated as a static export for deployment behind Nginx. Next.js
metadata, JSON-LD person data, `sitemap.xml`, and `robots.txt` are included in
the generated output so crawlers receive the portfolio content and SEO data in
the initial HTML response.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` for
linting and `npm run build` to create the static site in `out/`.
