import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useLayoutEffect } from "react";

import type { Nullable } from "@/shared/types/nullable";

import { galleryHorizontalScrollConfig } from "../config";

type UseGalleryHorizontalScrollParams = {
  sectionRef: RefObject<Nullable<HTMLDivElement>>;
  trackRef: RefObject<Nullable<HTMLDivElement>>;
};

gsap.registerPlugin(ScrollTrigger);

export const useGalleryHorizontalScroll = ({
  sectionRef,
  trackRef,
}: UseGalleryHorizontalScrollParams): void => {
  useLayoutEffect(() => {
    const sectionElement = sectionRef.current;
    const trackElement = trackRef.current;

    if (!sectionElement || !trackElement) {
      return;
    }

    const context = gsap.context(() => {
      const scrollDistance = Math.max(
        trackElement.scrollWidth - sectionElement.clientWidth,
        galleryHorizontalScrollConfig.animation.initialX,
      );

      if (scrollDistance === galleryHorizontalScrollConfig.animation.initialX) {
        return;
      }

      gsap.set(trackElement, {
        [galleryHorizontalScrollConfig.animation.axis]:
          galleryHorizontalScrollConfig.animation.initialX,
      });

      gsap.to(trackElement, {
        [galleryHorizontalScrollConfig.animation.axis]:
          galleryHorizontalScrollConfig.animation.directionMultiplier * scrollDistance,
        ease: galleryHorizontalScrollConfig.animation.ease,
        scrollTrigger: {
          trigger: sectionElement,
          start: galleryHorizontalScrollConfig.trigger.start,
          end: `${galleryHorizontalScrollConfig.animation.endPrefix}${scrollDistance}`,
          scrub: galleryHorizontalScrollConfig.trigger.scrub,
          pin: galleryHorizontalScrollConfig.trigger.pin,
          invalidateOnRefresh: galleryHorizontalScrollConfig.trigger.invalidateOnRefresh,
        },
      });
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [sectionRef, trackRef]);
};
