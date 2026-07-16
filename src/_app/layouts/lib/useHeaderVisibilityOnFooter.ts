import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";
import { useLayoutEffect } from "react";

import type { Nullable } from "@/shared/types/nullable";

import { headerVisibilityOnFooterConfig } from "../config";

type UseHeaderVisibilityOnFooterParams = {
  headerRef: RefObject<Nullable<HTMLElement>>;
  footerRef: RefObject<Nullable<HTMLElement>>;
};

gsap.registerPlugin(ScrollTrigger);

export const useHeaderVisibilityOnFooter = ({
  headerRef,
  footerRef,
}: UseHeaderVisibilityOnFooterParams): void => {
  useLayoutEffect(() => {
    const headerElement = headerRef.current;
    const footerElement = footerRef.current;

    if (!headerElement || !footerElement) {
      return;
    }

    const animateHeader = (yPercent: number): void => {
      gsap.to(headerElement, {
        yPercent,
        duration: headerVisibilityOnFooterConfig.animation.duration,
        ease: headerVisibilityOnFooterConfig.animation.ease,
        overwrite: headerVisibilityOnFooterConfig.animation.overwrite,
      });
    };

    const context = gsap.context(() => {
      gsap.set(headerElement, {
        yPercent: headerVisibilityOnFooterConfig.animation.shownYPercent,
      });

      ScrollTrigger.create({
        trigger: footerElement,
        start: headerVisibilityOnFooterConfig.trigger.start,
        end: headerVisibilityOnFooterConfig.trigger.end,
        onEnter: () =>
          animateHeader(headerVisibilityOnFooterConfig.animation.hiddenYPercent),
        onLeaveBack: () =>
          animateHeader(headerVisibilityOnFooterConfig.animation.shownYPercent),
      });
    }, footerElement);

    return () => {
      context.revert();
    };
  }, [headerRef, footerRef]);
};
