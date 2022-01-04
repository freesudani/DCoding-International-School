const transitionMain = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
};

export default transitionMain;
