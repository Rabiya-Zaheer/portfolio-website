import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://rabiyazaheer.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/portfolio",
    "/experience",
    "/skills",
    "/education",
    "/certificates",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
