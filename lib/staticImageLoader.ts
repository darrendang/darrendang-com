"use client";

import type { ImageLoaderProps } from "next/image";
import images from "./responsiveImages.json";

/** Static files only: no paid image service or runtime transformation endpoint. */
export default function staticImageLoader({ src, width }: ImageLoaderProps) {
  const originalWidth = (images as Record<string, number>)[src];
  if (!originalWidth) return src; // Locked covers and unregistered artwork remain exact.
  const widths = [128, 256, 384, 640, 828, 1080, 1600].filter(w => w <= originalWidth);
  const selected = widths.find(w => w >= width) ?? widths[widths.length - 1];
  const name = src.slice("/images/".length).replace(/\.[^.]+$/, "");
  return `/images/responsive/${name}-${selected}.webp`;
}
