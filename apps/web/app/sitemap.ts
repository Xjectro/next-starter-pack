import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.CLIENT_URL!,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
