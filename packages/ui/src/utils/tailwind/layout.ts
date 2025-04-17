import type { ResponsiveValue } from "@repo/ui/types/responsive";
import { getResponsiveClasses } from "./responsive";

export function getColumnsClasses(columns?: ResponsiveValue<number>): string {
  return getResponsiveClasses(columns, "grid-cols");
}

export function getWidthClasses(
  width?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(width, "w");
}

export function getHeightClasses(
  height?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(height, "h");
}

export function getDisplayClasses(display?: ResponsiveValue<string>): string {
  return getResponsiveClasses(display, "");
}

export function getFlexClasses(
  flex?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(flex, "flex");
}
