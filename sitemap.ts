import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: "https://dunedin-plumbing.vercel.app/",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1,
      },
      {
         url: "https://dunedin-plumbing.vercel.app/#about",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
      {
         url: "https://dunedin-plumbing.vercel.app/#services",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.5,
      },
      {
         url: "https://dunedin-plumbing.vercel.app/#testimonials",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.5,
      },
      {
         url: "https://dunedin-plumbing.vercel.app/#projects",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.5,
      },
      {
         url: "https://dunedin-plumbing.vercel.app/#contact",
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.5,
      },
   ];
}
