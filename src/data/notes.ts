export interface Note {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export const notes: Note[] = [
  {
    slug: "the-beauty-of-a-surface-with-a-past",
    eyebrow: "Materials / 4 minute read",
    title: "The beauty of a surface with a past",
    description:
      "On patina, wear and the small details that make an antique its own.",
    image: "/images/note-patina.png",
    imageAlt:
      "A cut-glass decanter and tumbler beside an ornate gilt picture frame",
    paragraphs: [
      "An antique rarely arrives unmarked. The base of a decanter is softened by years of being set down. A cut edge carries a tiny nibble. A mahogany drawer shows the polish of hands that opened it long before ours.",
      "Those traces are not faults to be polished away. They are how an object tells you it has already lived somewhere — on a sideboard, in a changing light, among people who used it rather than merely displayed it.",
      "When we look at a piece for the collection, we look for that character as carefully as we look at the cut, the timber or the brushwork. The photographs, the dimensions and the condition notes are there so you can look just as closely before you enquire.",
    ],
  },
  {
    slug: "finding-a-place-for-a-painting",
    eyebrow: "Living with art / 3 minute read",
    title: "Finding a place for a painting",
    description:
      "A few considered notes on scale, light and living with a work you love.",
    image: "/images/note-painting.png",
    imageAlt: "A gilt-framed coastal painting hanging on a pale wall",
    paragraphs: [
      "A painting needs a wall that can hold it without crowding the room. Scale comes first: a coastal landscape wants enough quiet around the frame that the boats and the weather still have room to breathe.",
      "Light matters next. A work on canvas or paper is happier out of hard, direct sun, where the colours can be read rather than washed out. The rest is living with it — sitting with the picture until the place feels inevitable.",
      "If a painting in the collection has caught your eye, tell us about the room you have in mind. We can share further photographs, the dimensions, and a condition discussion before you decide.",
    ],
  },
];

export function noteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
