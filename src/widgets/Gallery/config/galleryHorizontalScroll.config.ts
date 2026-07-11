import {
  GALLERY_HORIZONTAL_SCROLL_EASE,
  GALLERY_HORIZONTAL_SCROLL_AXIS,
  GALLERY_HORIZONTAL_SCROLL_DIRECTION_MULTIPLIER,
  GALLERY_HORIZONTAL_SCROLL_END_PREFIX,
  GALLERY_HORIZONTAL_SCROLL_INITIAL_X,
  GALLERY_HORIZONTAL_SCROLL_INVALIDATE_ON_REFRESH,
  GALLERY_HORIZONTAL_SCROLL_PIN,
  GALLERY_HORIZONTAL_SCROLL_SCRUB,
  GALLERY_HORIZONTAL_SCROLL_START,
} from "./galleryHorizontalScroll.constants";

export type GalleryHorizontalScrollConfig = {
  animation: {
    axis: string;
    ease: string;
    initialX: number;
    endPrefix: string;
    directionMultiplier: number;
  };
  trigger: {
    start: string;
    scrub: boolean;
    pin: boolean;
    invalidateOnRefresh: boolean;
  };
};

export const galleryHorizontalScrollConfig: GalleryHorizontalScrollConfig = {
  animation: {
    axis: GALLERY_HORIZONTAL_SCROLL_AXIS,
    ease: GALLERY_HORIZONTAL_SCROLL_EASE,
    initialX: GALLERY_HORIZONTAL_SCROLL_INITIAL_X,
    endPrefix: GALLERY_HORIZONTAL_SCROLL_END_PREFIX,
    directionMultiplier: GALLERY_HORIZONTAL_SCROLL_DIRECTION_MULTIPLIER,
  },
  trigger: {
    start: GALLERY_HORIZONTAL_SCROLL_START,
    scrub: GALLERY_HORIZONTAL_SCROLL_SCRUB,
    pin: GALLERY_HORIZONTAL_SCROLL_PIN,
    invalidateOnRefresh: GALLERY_HORIZONTAL_SCROLL_INVALIDATE_ON_REFRESH,
  },
};
