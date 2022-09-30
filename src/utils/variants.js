export const swipeVariants = {
  offscreen: {
    x: "40%",
    opacity: 0,
  },
  onscreen: {
    x: "0",
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 75,
        damping: 15,
      },
      opacity: {
        duration: 1.2,
      },
    },
  },
};
