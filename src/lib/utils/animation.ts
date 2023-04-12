import { Transition, Variants } from "framer-motion";

export const rightToLeft: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const leftToRight: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export const bottomToTop: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const appearAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const transition: Transition = { duration: 0.4, delay: 0.4 };
