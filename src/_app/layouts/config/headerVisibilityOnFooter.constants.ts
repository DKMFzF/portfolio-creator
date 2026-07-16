export const headerVisibilityOnFooterConstants = {
  animation: {
    shownYPercent: 0,
    hiddenYPercent: -300,
    duration: 0.4,
    ease: "power2.out",
    overwrite: "auto",
  },
  trigger: {
    start: "top bottom",
    end: "bottom bottom",
  },
} as const;
