import type { JSX } from "react";

import cn from "@/shared/lib/cn";
import { DefaultBg } from "@/shared/ui";

import styles from "./Gallery.module.css";

const bem = cn("Gallery");

const galleryImages = Array.from({ length: 16 }, (_, index) => `/gallery/img${index + 1}.jpg`);

export const Gallery = (): JSX.Element => {
  return (
    <DefaultBg>
      <div className={styles[bem()]}>
        {galleryImages.map((imageSrc) => (
          <img
            key={imageSrc}
            className={styles[bem("Image")]}
            src={imageSrc}
            alt=""
            loading="lazy"
          />
        ))}
      </div>
    </DefaultBg>
  );
};
