import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import type { SanityImage } from "./types";

const builder = imageUrlBuilder(client);

/**
 * Generate a Sanity image URL builder for the given image source.
 * Supports chaining transformations like .width(800).height(600).url()
 */
export function urlFor(source: SanityImage) {
  return builder.image(source);
}
