This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Client Design Specifications & Brand Guidelines

### 1. Brand Color Palette (Aligned with Live Website `timeforteahk.com`)
* **Primary Royal Blue**: `#0048BA` (Cobalt Royal Blue — used for main header, primary accents, prominent brand statements).
* **Deep Royal Navy**: `#00358A` (Deepened Royal Blue for secondary backgrounds, hovers, card overlays).
* **Midnight Royal**: `#00225A` (Rich dark royal contrast for deep text and night sections).
* **Warm Honey Gold**: `#D1A345` / `#D0A444` (Used for logo crest, buttons, borders, currency switcher, cart indicators).
* **Gold Shimmer / Accent**: `#DFC7A5` / `#E0CEB5` (Subtle borders and highlights).
* **Canvas Ivory**: `#FAF8F5` (Soft warm page background).

### 2. Department & Category Taxonomy (Aligned with Image 2 & Live Store)
The store features genuine nested hierarchical categories and subcategories:

| Primary Category | Category Slug | Subcategories | Subcategory Slug | Target URL Route |
| :--- | :--- | :--- | :--- | :--- |
| **Tableware** (*Never "Porcelain"*) | `tableware` | Plates and Tea Cups | `plates-and-teacups` | `/shop/tableware?sub=plates-and-teacups` |
| | | Placemats | `placemats` | `/shop/tableware?sub=placemats` |
| | | Napkin Rings | `napkin-rings` | `/shop/tableware?sub=napkin-rings` |
| | | Candles and Holders | `candles-and-holders` | `/shop/tableware?sub=candles-and-holders` |
| **Table Linen** | `table-linen` | Napkins | `napkins` | `/shop/table-linen?sub=napkins` |
| | | Tablecloths | `tablecloths` | `/shop/table-linen?sub=tablecloths` |
| **Mono Teapots and Accessories** | `teapots-and-accessories` | Teapots | `teapots` | `/shop/teapots-and-accessories?sub=teapots` |
| | | Accessories | `accessories` | `/shop/teapots-and-accessories?sub=accessories` |
| **Loose Leaf Tea** | `tea` | Single-Origin Harvests | `single-origin` | `/shop/tea?sub=single-origin` |
| | | Artisanal Blends | `blends` | `/shop/tea?sub=blends` |
| **Gifts & Hampers** | `gift-boxes` | Curated Gift Boxes | `curated-hampers` | `/shop/gift-boxes` |
| | | Bespoke Hamper Studio | `bespoke-builder` | `/custom-hamper` |
| **Seasonal: Pink Ribbon** | `pinkribbon` | October Charity Collection | `charity-collection` | `/shop/pinkribbon` |
| **Seasonal: Christmas** | `christmas` | Festive Tableware & Decor | `holiday-decor` | `/shop/christmas` |

### 3. Product Heritage Guidelines
* **Mono Germany**: Time for Tea HK is the official exclusive distributor in Hong Kong for Mono Germany (Mettmann, Est. 1895).
* **Mono Filio Design**: Designed in **1983** by German industrial designer **Tassilo von Grolman**. *Do not attribute Mono Filio to "Bauhaus" (Bauhaus closed in 1933).*

---

## Version Changelog

### Version 2.0 (Current)
* **Real Subcategory Taxonomy**: Built complete Category and Subcategory architecture matching Image 2 and `timeforteahk.com`.
* **Mega-Menu Redesign**: Overhauled desktop navigation into a spacious 3-column layout with clean category headers and indented, clickable subcategory links. Removed cramped layout, colliding text, and tag pills.
* **Mobile Navigation Tree**: Implemented hierarchical accordion navigation reflecting Image 2 with direct access to subcategories.
* **Dynamic Subcategory Filtering**: Added interactive subcategory tabs and query parameter (`?sub=`) filtering on shop and category pages.
* **Product Catalog Enrichment**: Assigned every product explicit `subcategory` and `subcategorySlug` attributes.

### Version 1.0
* **Color Palette Alignment (Image 1)**: Realigned theme from dark charcoal (`#0C2340`) to Royal Cobalt Blue (`#0048BA`) and Warm Honey Gold (`#D1A345`).
* **Category Naming**: Removed all references to "Porcelain" as a department/category; renamed to "Tableware".
* **Mono Heritage Correction (Image 3)**: Corrected hero floating card from "Bauhaus Design Classic" to "German Engineering Classic" (Tassilo von Grolman, 1983).
* **Seasonal Collections Added**: Integrated Pink Ribbon October and Christmas Collection into the catalog and static routes.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
