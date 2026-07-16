import { headerVisibilityOnFooterConstants } from "./headerVisibilityOnFooter.constants";

export const headerVisibilityOnFooterConfig = {
  animation: {
    shownYPercent: headerVisibilityOnFooterConstants.animation.shownYPercent,
    hiddenYPercent: headerVisibilityOnFooterConstants.animation.hiddenYPercent,
    duration: headerVisibilityOnFooterConstants.animation.duration,
    ease: headerVisibilityOnFooterConstants.animation.ease,
    overwrite: headerVisibilityOnFooterConstants.animation.overwrite,
  },
  trigger: {
    start: headerVisibilityOnFooterConstants.trigger.start,
    end: headerVisibilityOnFooterConstants.trigger.end,
  },
} as const;
