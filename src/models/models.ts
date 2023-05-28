import type { StructuredTextDocument } from "datocms-structured-text-to-html-string";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: { value: StructuredTextDocument };
  shortDescription: string;
  mainImage: string;
  category: string;
  slug: string;
}
