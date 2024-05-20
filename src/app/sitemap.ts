import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dismo.co.uk",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es",
          de: "https://acme.com/de",
        },
      },
    },
    {
      url: "https://dismo.co.uk/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/about",
          de: "https://acme.com/de/about",
        },
      },
    },
  ];
}
