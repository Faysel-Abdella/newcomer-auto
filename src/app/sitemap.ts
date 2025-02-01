import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com", // Change this once hosted
      priority: 1,
    },
  ];
}
