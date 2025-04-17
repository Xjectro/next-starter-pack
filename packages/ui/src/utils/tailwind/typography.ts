import type { ResponsiveValue } from "@repo/ui/types/responsive";
import { getResponsiveClasses } from "./responsive";

export function getTextSizeClasses(
  size?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(size, "text");
}

export function getFontWeightClasses(
  weight?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(weight, "font");
}

export function getLineHeightClasses(
  lineHeight?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(lineHeight, "leading");
}
