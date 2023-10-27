export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const authLeft = {
  initial: {
    opacity: 0,
    backGroundColor: "transparent",
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
