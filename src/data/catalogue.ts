export type CategorySlug = "glassware" | "fine-art" | "furniture";
export type Availability = "available" | "reserved" | "sold";

export interface CatalogueFact {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface HistoryMoment {
  when: string;
  title: string;
  body: string;
}

export interface Piece {
  slug: string;
  reference: string;
  title: string;
  category: CategorySlug;
  summary: string;
  description: string;
  availability: Availability;
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  galleryCaption?: string;
  facts: CatalogueFact[];
  condition: string;
  featured?: boolean;
  history?: HistoryMoment[];
}

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const categories: Category[] = [
  {
    slug: "glassware",
    label: "Glassware",
    description: "Light, form and the art of glassmaking.",
    image: "/images/cat-glassware.png",
    imageAlt: "A pair of engraved glass coupes on a pale cloth",
  },
  {
    slug: "fine-art",
    label: "Fine Art",
    description: "Paintings, prints and works on paper.",
    image: "/images/cat-fine-art.png",
    imageAlt: "A gilt-framed coastal painting of fishing boats",
  },
  {
    slug: "furniture",
    label: "Furniture",
    description: "Considered pieces for living.",
    image: "/images/cat-furniture.png",
    imageAlt: "A mahogany side table with a single drawer",
  },
];

const delivery =
  "Tell us your location when you enquire. Packing, delivery options and any associated costs will be discussed with you before you decide to proceed.";

const sharedCondition =
  "Please request additional photographs and a full condition discussion before you decide.";

export const pieces: Piece[] = [
  {
    slug: "georgian-cut-glass-decanter",
    reference: "DA-G01",
    title: "Georgian cut-glass decanter",
    category: "glassware",
    summary: "English, c.1820",
    description:
      "A well-proportioned lead-glass decanter with a faceted stopper, three-ring neck and diamond-cut lower body. The hand-cut surface brings a pleasing weight and brilliance to the table.",
    availability: "available",
    image: "/images/da-g01.png",
    imageAlt: "A Georgian cut-glass decanter with a diamond-cut body",
    gallery: [
      {
        src: "/images/da-g01-hero.png",
        alt: "Overall view of the Georgian cut-glass decanter",
      },
      {
        src: "/images/da-g01-detail-1.png",
        alt: "Close view of the diamond-cut glass",
      },
      {
        src: "/images/da-g01-detail-2.png",
        alt: "The faceted stopper of the decanter",
      },
    ],
    galleryCaption: "Overall view / Cut detail / Stopper",
    facts: [
      { label: "Reference", value: "DA-G01" },
      { label: "Period", value: "Georgian, c.1820" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Hand-cut lead glass" },
      { label: "Dimensions", value: "H 25 cm · Diameter 10.5 cm" },
    ],
    condition:
      "Light surface wear to the base and small abrasions consistent with age and use. Minor nibbles to a few cut edges. Please request additional photographs and a full condition discussion before purchase.",
    featured: true,
    history: [
      {
        when: "c.1820",
        title: "Creation",
        body: "The decanter is believed to have been cut in England during the late Georgian period. It would have been made by hand, with the stopper and body shaped before the diamond-cut pattern was applied to the lower body.",
      },
      {
        when: "1820–1900",
        title: "Early use",
        body: "The piece may have been used in a private household, passed between family members, or moved between residences. This period is unrecorded, but the wear on the base suggests it was handled regularly over many years.",
      },
      {
        when: "1900–2020",
        title: "Intervening years",
        body: "The intervening century is also unrecorded. The decanter may have been stored, displayed, inherited, sold, or moved between collections. Its current condition suggests it was cared for, but the exact route it took remains unknown.",
      },
      {
        when: "Present day",
        title: "In the collection",
        body: "The decanter is now part of the Dorset Antiques collection. It has been photographed, catalogued and prepared for the next stage of its history, which could begin with an enquiry from you.",
      },
      {
        when: "Future",
        title: "The next custodian",
        body: "If you are interested in this piece, your enquiry could be the next chapter in its story. We can discuss availability, price, condition and delivery before you decide whether to proceed.",
      },
    ],
  },
  {
    slug: "coastal-landscape",
    reference: "DA-A01",
    title: "Coastal landscape",
    category: "fine-art",
    summary: "English school, 19th century",
    description:
      "A gilt-framed coastal landscape of fishing boats at the shore, English school, nineteenth century. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-a01.png",
    imageAlt: "A gilt-framed nineteenth-century coastal landscape",
    gallery: [
      {
        src: "/images/da-a01.png",
        alt: "A gilt-framed nineteenth-century coastal landscape",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-A01" },
      { label: "Period", value: "19th century" },
      { label: "Origin", value: "English school" },
    ],
    condition: sharedCondition,
    featured: true,
  },
  {
    slug: "regency-mahogany-side-table",
    reference: "DA-F01",
    title: "Regency mahogany side table",
    category: "furniture",
    summary: "English, c.1820",
    description:
      "A Regency mahogany side table with a single drawer and turned legs, English, circa 1820. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-f01.png",
    imageAlt: "A Regency mahogany side table with a single drawer",
    gallery: [
      {
        src: "/images/da-f01.png",
        alt: "A Regency mahogany side table with a single drawer",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-F01" },
      { label: "Period", value: "Regency, c.1820" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Mahogany" },
    ],
    condition: sharedCondition,
    featured: true,
  },
  {
    slug: "pair-of-engraved-coupes",
    reference: "DA-G02",
    title: "Pair of engraved coupes",
    category: "glassware",
    summary: "English, late 19th century",
    description:
      "A pair of engraved glass coupes, English, late nineteenth century. Offered together. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-g02.png",
    imageAlt: "A pair of late nineteenth-century engraved glass coupes",
    gallery: [
      {
        src: "/images/da-g02.png",
        alt: "A pair of late nineteenth-century engraved glass coupes",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-G02" },
      { label: "Period", value: "Late 19th century" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Engraved glass" },
    ],
    condition: sharedCondition,
  },
  {
    slug: "wooded-river-landscape",
    reference: "DA-A02",
    title: "A wooded river landscape",
    category: "fine-art",
    summary: "English school, 19th century",
    description:
      "A wooded river landscape, English school, nineteenth century. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-a02.png",
    imageAlt: "A nineteenth-century painting of a wooded river landscape",
    gallery: [
      {
        src: "/images/da-a02.png",
        alt: "A nineteenth-century painting of a wooded river landscape",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-A02" },
      { label: "Period", value: "19th century" },
      { label: "Origin", value: "English school" },
    ],
    condition: sharedCondition,
  },
  {
    slug: "georgian-elm-side-chair",
    reference: "DA-F02",
    title: "Georgian elm side chair",
    category: "furniture",
    summary: "English, c.1800",
    description:
      "A Georgian elm side chair, English, circa 1800. Enquire for the price, further photographs and a condition report.",
    availability: "reserved",
    image: "/images/da-f02.png",
    imageAlt: "A Georgian elm side chair",
    gallery: [
      {
        src: "/images/da-f02.png",
        alt: "A Georgian elm side chair",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-F02" },
      { label: "Period", value: "Georgian, c.1800" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Elm" },
    ],
    condition: sharedCondition,
  },
  {
    slug: "cut-glass-pedestal-bowl",
    reference: "DA-G03",
    title: "Cut-glass pedestal bowl",
    category: "glassware",
    summary: "English, c.1880",
    description:
      "A cut-glass pedestal bowl, English, circa 1880. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-g03.png",
    imageAlt: "A cut-glass pedestal bowl",
    gallery: [
      {
        src: "/images/da-g03.png",
        alt: "A cut-glass pedestal bowl",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-G03" },
      { label: "Period", value: "c.1880" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Cut glass" },
    ],
    condition: sharedCondition,
  },
  {
    slug: "architectural-study",
    reference: "DA-A03",
    title: "An architectural study",
    category: "fine-art",
    summary: "Etching, 19th century",
    description:
      "An architectural study, a nineteenth-century etching. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-a03.png",
    imageAlt: "A nineteenth-century architectural etching",
    gallery: [
      {
        src: "/images/da-a03.png",
        alt: "A nineteenth-century architectural etching",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-A03" },
      { label: "Period", value: "19th century" },
      { label: "Material", value: "Etching" },
    ],
    condition: sharedCondition,
  },
  {
    slug: "small-mahogany-chest",
    reference: "DA-F03",
    title: "Small mahogany chest",
    category: "furniture",
    summary: "English, 19th century",
    description:
      "A small mahogany chest, English, nineteenth century. Enquire for the price, further photographs and a condition report.",
    availability: "available",
    image: "/images/da-f03.png",
    imageAlt: "A small nineteenth-century mahogany chest",
    gallery: [
      {
        src: "/images/da-f03.png",
        alt: "A small nineteenth-century mahogany chest",
      },
    ],
    facts: [
      { label: "Reference", value: "DA-F03" },
      { label: "Period", value: "19th century" },
      { label: "Origin", value: "England" },
      { label: "Material", value: "Mahogany" },
    ],
    condition: sharedCondition,
  },
];

export const deliveryNote = delivery;

export const availabilityLabel: Record<Availability, string> = {
  available: "Available to enquire",
  reserved: "Reserved",
  sold: "Sold",
};

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function pieceBySlug(slug: string) {
  return pieces.find((piece) => piece.slug === slug);
}

export function pieceByReference(reference: string) {
  return pieces.find(
    (piece) => piece.reference.toLowerCase() === reference.toLowerCase(),
  );
}

export function piecesInCategory(slug?: CategorySlug) {
  if (!slug) return pieces;
  return pieces.filter((piece) => piece.category === slug);
}

export function relatedPieces(slug: string, count = 3) {
  const index = pieces.findIndex((piece) => piece.slug === slug);
  if (index < 0) return pieces.slice(0, count);
  return [...pieces.slice(index + 1), ...pieces.slice(0, index)].slice(
    0,
    count,
  );
}

export function categoryLabel(slug: CategorySlug) {
  return categoryBySlug(slug)?.label ?? slug;
}
