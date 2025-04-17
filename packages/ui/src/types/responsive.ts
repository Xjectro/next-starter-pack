export type Breakpoint = "default" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveObject<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveValue<T> = T | ResponsiveObject<T>;

export function isResponsiveObject<T>(
  value: ResponsiveValue<T>,
): value is ResponsiveObject<T> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
