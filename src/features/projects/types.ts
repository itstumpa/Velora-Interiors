export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  location: string;
  year: number;
  area: string;
  tags: string[];
}

export type ProjectCategory =
  | "residential"
  | "commercial"
  | "hospitality"
  | "retail";
