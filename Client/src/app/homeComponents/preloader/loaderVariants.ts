import type { Variants } from "framer-motion";

// ─── Easing ──────────────────────────────────────────────────────────────────

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// ─── Overlay ─────────────────────────────────────────────────────────────────

export const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(12px)",
    transition: { duration: 0.75, ease: EASE_PREMIUM },
  },
};

// ─── Background blobs ─────────────────────────────────────────────────────────

export const blobOneVariants: Variants = {
  initial: { opacity: 0, scale: 0.7 },
  animate: {
    opacity: 0.65,
    scale: 1,
    transition: { duration: 1.6, ease: EASE_PREMIUM },
  },
};

export const blobTwoVariants: Variants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: {
    opacity: 0.55,
    scale: 1,
    transition: { duration: 1.8, delay: 0.2, ease: EASE_PREMIUM },
  },
};

// ─── Logo ─────────────────────────────────────────────────────────────────────

export const logoContainerVariants: Variants = {
  initial: { opacity: 0, scale: 0.82, rotate: -5 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 230,
      damping: 18,
      delay: 0.3,
    },
  },
};

export const logoGlowVariants: Variants = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: [0, 0.55, 0.3],
    scale: [0.3, 1.6, 1.2],
    transition: { duration: 1.5, delay: 0.4, ease: EASE_PREMIUM },
  },
};

// ─── Brand word ───────────────────────────────────────────────────────────────

export const wordContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.78,
    },
  },
};

export const letterVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(5px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_PREMIUM },
  },
};

// ─── Subtitle ─────────────────────────────────────────────────────────────────

export const subtitleVariants: Variants = {
  initial: { opacity: 0, y: 8, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 1.2, ease: EASE_PREMIUM },
  },
};

// ─── Terminal ─────────────────────────────────────────────────────────────────

export const terminalVariants: Variants = {
  initial: { opacity: 0, y: 48, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 22,
      delay: 1.4,
    },
  },
};

// ─── Floating cards ───────────────────────────────────────────────────────────

export const floatingCardReveal: Variants = {
  initial: { opacity: 0, scale: 0.88, y: 12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 210,
      damping: 22,
    },
  },
};

// ─── Pipeline connector ───────────────────────────────────────────────────────

export const pipelineLineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.28, ease: EASE_PREMIUM },
  },
};
