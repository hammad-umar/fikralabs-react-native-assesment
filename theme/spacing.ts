import { scale } from "./scale";

export const spacing = {
  xxxs: scale(4),
  xxs: scale(6),
  xs: scale(10),
  sm: scale(14),
  md: scale(18),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
  xxxl: scale(64),
} as const;

export type Spacing = keyof typeof spacing;
