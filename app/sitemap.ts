import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.1to1pediatrics.com"

  const routes = [
    "",
    "/concussion",
    "/why-1-to-1",
    "/telemedicine",
    "/register",
    "/hmo-patients",
    "/dr-nash",
    "/dr-borden",
    "/contact",
    "/newborn-program",
    "/staff",
    "/testimonials",
    "/helpful-links",
    "/privacy-policy",
    "/tylenol-note",
    "/vaccination-policy",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
