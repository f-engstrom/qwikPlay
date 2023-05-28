import type { StructuredTextDocument } from "datocms-structured-text-to-html-string";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: { value: StructuredTextDocument };
  shortDescription: string;
  mainImage: { url: string };
  alternativeImages: { url: string }[];
  category: string;
  slug: string;
}
