"use client";

import { useRef } from "react";
import {
  useInView,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type MotionValue,
  type UseInViewOptions,
} from "framer-motion";

type MotionTransition = NonNullable<HTMLMotionProps<"div">["transition"]>;
type AnimationEase = MotionTransition extends { ease?: infer Ease } ? Ease : never;

/**
 * Animation presets for scroll-triggered enter/exit animations.
 *
 * Each preset defines the "hidden" state. The "visible" state is always
 * `{ x: 0, y: 0, opacity: 1, scale: 1 }`.
 */
const presets = {
  /** Fade in only */
  fadeIn: { opacity: 0 },

  /** Fade up from below */
  fadeUp: { opacity: 0, y: 40 },

  /** Fade down from above */
  fadeDown: { opacity: 0, y: -40 },

  /** Slide left-to-right (starts off-screen left) */
  ltr: { opacity: 0, x: -120 },

  /** Slide right-to-left (starts off-screen right) */
  rtl: { opacity: 0, x: 120 },

  /** Slide top-to-bottom */
  ttb: { opacity: 0, y: -80 },

  /** Slide bottom-to-top */
  btt: { opacity: 0, y: 80 },

  /** Scale up from smaller */
  scaleUp: { opacity: 0, scale: 0.9 },

  /** Scale down from larger */
  scaleDown: { opacity: 0, scale: 1.1 },

  /** Slide left-to-right (longer distance) */
  ltrFar: { opacity: 0, x: -200 },

  /** Slide right-to-left (longer distance) */
  rtlFar: { opacity: 0, x: 200 },

  /** Subtle fade up (small distance) */
  fadeUpSm: { opacity: 0, y: 20 },

  /** Subtle fade down (small distance) */
  fadeDownSm: { opacity: 0, y: -20 },
} as const;

export type AnimationPreset = keyof typeof presets;

interface UseScrollAnimationOptions {
  /** Animation preset name */
  preset?: AnimationPreset;
  /** Duration in seconds (default: 0.75) */
  duration?: number;
  /** Delay in seconds (default: 0) */
  delay?: number;
  /** Easing curve (default: [0.25, 0.1, 0.25, 1]) */
  ease?: AnimationEase;
  /** IntersectionObserver margin (default: "-20% 0px -20% 0px") */
  margin?: UseInViewOptions["margin"];
  /** Only animate on first appearance (default: false) */
  once?: boolean;
}

const visible = { x: 0, y: 0, opacity: 1, scale: 1 };

/**
 * Hook that returns a ref and framer-motion props for scroll-triggered
 * enter/exit animations. Attach `ref` to the wrapper element and spread
 * `animationProps` onto a `motion.*` component.
 *
 * @example
 * ```tsx
 * const { ref, animationProps } = useScrollAnimation({ preset: "ltr" });
 *
 * return (
 *   <motion.div ref={ref} {...animationProps}>
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollAnimation({
  preset = "fadeUp",
  duration = 0.75,
  delay = 0,
  ease = [0.25, 0.1, 0.25, 1],
  margin = "-20% 0px -20% 0px",
  once = false,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  const hidden = presets[preset];

  return {
    ref,
    isInView,
    animationProps: {
      animate: isInView ? visible : hidden,
      transition: { duration, delay, ease },
    },
  };
}

/**
 * Helper that returns static framer-motion props without a ref.
 * Useful when you manage `isInView` yourself or want to pass it from a parent.
 *
 * @example
 * ```tsx
 * const props = getScrollAnimationProps("rtl", isInView, { duration: 1 });
 * <motion.h2 {...props}>Title</motion.h2>
 * ```
 */
export function getScrollAnimationProps(
  preset: AnimationPreset,
  isInView: boolean,
  options: { duration?: number; delay?: number; ease?: AnimationEase } = {}
) {
  const { duration = 0.75, delay = 0, ease = [0.25, 0.1, 0.25, 1] } = options;
  const hidden = presets[preset];

  return {
    animate: isInView ? visible : hidden,
    transition: { duration, delay, ease },
  };
}

/* ------------------------------------------------------------------ */
/*  Scroll-driven (parallax-style) animation                          */
/* ------------------------------------------------------------------ */

/** Scroll-linked transform configs per preset */
const scrollPresetConfigs: Record<
  AnimationPreset,
  { prop: "x" | "y" | "scale"; values: [number, number, number, number] }
> = {
  fadeIn:     { prop: "y",     values: [0, 0, 0, 0] },
  fadeUp:     { prop: "y",     values: [40, 0, 0, -40] },
  fadeDown:   { prop: "y",     values: [-40, 0, 0, 40] },
  fadeUpSm:   { prop: "y",     values: [20, 0, 0, -20] },
  fadeDownSm: { prop: "y",     values: [-20, 0, 0, 20] },
  ltr:        { prop: "x",     values: [-120, 0, 0, -120] },
  rtl:        { prop: "x",     values: [120, 0, 0, 120] },
  ltrFar:     { prop: "x",     values: [-200, 0, 0, -200] },
  rtlFar:     { prop: "x",     values: [200, 0, 0, 200] },
  ttb:        { prop: "y",     values: [-80, 0, 0, 80] },
  btt:        { prop: "y",     values: [80, 0, 0, -80] },
  scaleUp:    { prop: "scale", values: [0.9, 1, 1, 0.9] },
  scaleDown:  { prop: "scale", values: [1.1, 1, 1, 1.1] },
};

interface UseScrollDrivenOptions {
  /** Animation preset name */
  preset?: AnimationPreset;
  /**
   * Scroll progress breakpoints [enterStart, enterEnd, exitStart, exitEnd].
   * 0 = element enters viewport bottom, 1 = element leaves viewport top.
   * Default: [0, 0.3, 0.7, 1]
   */
  range?: [number, number, number, number];
}

/**
 * Scroll-driven animation hook. The element's position/opacity is directly
 * linked to scroll progress — no delay, instant response.
 *
 * @example
 * ```tsx
 * const { ref, style } = useScrollDriven({ preset: "ltr" });
 *
 * return (
 *   <motion.h2 ref={ref} style={style}>
 *     Title
 *   </motion.h2>
 * );
 * ```
 */
export function useScrollDriven({
  preset = "ltr",
  range = [0, 0.3, 0.7, 1],
}: UseScrollDrivenOptions = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const config = scrollPresetConfigs[preset];
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
  const transform = useTransform(scrollYProgress, range, config.values);

  const style: Record<string, MotionValue<number>> = { opacity };
  style[config.prop] = transform;

  return { ref, style, scrollYProgress };
}
