# Crust Pizza — reference recreation

Responsive static website recreated from `Caso1.jpg` supplied by the user.

## Run locally

Requires Node.js 20 or later. No third-party npm packages are needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Build for production with `npm run build`; deploy `dist/`.

## Design approach

The layout uses semantic HTML, editable text, CSS grids, and responsive typography. Photographs, the logo, illustrations, and the hero artwork are displayed as CSS sprite regions of the supplied image to retain the original assets exactly. The page is not a full-page screenshot overlay. The hero includes baked-in artwork lettering from the reference and an accessible HTML heading. Source quality is limited to the supplied 768 × 1344 image.

`desktop.css` is authored using the 654px reference paper width. The build converts these values to container units. `mobile.css` rearranges the layout below 600px. Google Fonts provides Barlow Condensed and Roboto, with local fallbacks.

## Interactions and scope

Navigation anchors, mobile navigation, menu item details, informational dialogs, Escape dismissal, and focus restoration work. This is a visual demo: it has no ordering, payment, messaging, or inquiry backend. The missing phone, addresses, social profiles, promotional terms, and legal copy are not invented. Dialogs make those limits explicit. Small unreadable reference copy has been replaced with illustrative text. Connect real restaurant information before commercial use.

## Vercel

The included `vercel.json` sets `npm run build` as the build command and `dist` as the output directory. GitHub's `main` branch is the production source. No environment variables are needed.

The supplied reference and branding remain subject to their respective owners' rights. No additional asset license is asserted.
