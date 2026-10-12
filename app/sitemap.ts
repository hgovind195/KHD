import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://keralahomes.co.in";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-11T16:11:54+05:30"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2026-10-11T17:50:12+05:30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-10-11T16:38:45+05:30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-11T16:11:54+05:30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-11T16:11:54+05:30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
