import { getCollection, type CollectionEntry } from "astro:content";

export type Product = CollectionEntry<"products">;
export type CategorySlug = Product["data"]["category"];
export type Availability = Product["data"]["availability"];

/** Product photography is stored by base name in public/images. */
export const productSrc = (image: string) => `/images/${image}.png`;

export const availabilityLabel: Record<Availability, string> = {
  available: "Available to enquire",
  reserved: "Reserved",
  sold: "Sold",
};

export const categories = [
  {
    slug: "glassware" as const,
    label: "Glassware",
    description: "Light, form and the art of glassmaking.",
    image: "/images/cat-glassware.png",
    imageAlt: "A pair of engraved glass coupes on a pale cloth",
  },
  {
    slug: "fine-art" as const,
    label: "Fine Art",
    description: "Paintings, prints and works on paper.",
    image: "/images/cat-fine-art.png",
    imageAlt: "A gilt-framed coastal painting of fishing boats",
  },
  {
    slug: "furniture" as const,
    label: "Furniture",
    description: "Considered pieces for living.",
    image: "/images/cat-furniture.png",
    imageAlt: "A mahogany side table with a single drawer",
  },
];

export const deliveryNote =
  "Tell us your location when you enquire. Packing, delivery options and any associated costs will be discussed with you before you decide to proceed.";

export function categoryLabel(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)?.label ?? slug;
}

/** Catalogue order follows the `order` field, which is “recently added”. */
export async function getProducts() {
  const products = await getCollection("products");
  return products.sort((a, b) => a.data.order - b.data.order);
}

export function relatedProducts(products: Product[], id: string, count = 3) {
  const index = products.findIndex((product) => product.id === id);
  if (index < 0) return products.slice(0, count);
  return [...products.slice(index + 1), ...products.slice(0, index)].slice(
    0,
    count,
  );
}
