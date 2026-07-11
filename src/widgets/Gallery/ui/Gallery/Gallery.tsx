"use client";

import { useRef, type JSX } from "react";

import cn from "@/shared/lib/cn";
import { DefaultBg } from "@/shared/ui";

import { useGalleryHorizontalScroll } from "../../lib";

import styles from "./Gallery.module.css";

const bem = cn("Gallery");

const galleryImages = Array.from({ length: 16 }, (_, index) => `/gallery/img${index + 1}.jpg`);
const galleryImagesInArbitraryOrder = galleryImages.map(
  (_, index) => galleryImages[(index * 5) % galleryImages.length],
);

export const Gallery = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGalleryHorizontalScroll({ sectionRef, trackRef });

  return (
    <DefaultBg>
      <div ref={sectionRef} className={styles[bem("ScrollSection")]}>
        <div ref={trackRef} className={styles[bem()]}>
          {galleryImagesInArbitraryOrder.map((imageSrc) => (
            <img
              key={imageSrc}
              className={styles[bem("Image")]}
              src={imageSrc}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </DefaultBg>
  );
};
