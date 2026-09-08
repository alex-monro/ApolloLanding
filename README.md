# Apollo Landing

A single-page case study for Apollo, a reordering tool for wholesale buyers. It
opens with a screenshot of the running app, explains what happens to a pasted
list, then covers the four problems it addresses.

Next.js 16, React 19, Tailwind v4, plain JavaScript. No component library:
styled-components is confined to `components/ui` for a single copied button,
with its SSR registry wired into the root layout.

## Structure

```
app/             root layout, opening section, screenshot
components/      one component per section, plus Container and the grid
                 background used behind the opening and the footer
components/ui/   copied third-party components, isolated so their styling
                 approach does not leak into the rest
lib/             shared constants and the styled-components SSR registry
public/          the app screenshot
```

## Running it

```bash
npm install
npm run dev
```
