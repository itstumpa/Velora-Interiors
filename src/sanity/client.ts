import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "is280nl5",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});