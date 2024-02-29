import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   return [
      {
         url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 1,
      },

      // {
      //    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      //    lastModified: new Date(),
      //    changeFrequency: "weekly",
      //    priority: 0.8,
      // },
      // {
      //    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      //    lastModified: new Date(),
      //    changeFrequency: "weekly",
      //    priority: 0.5,
      // },
      // {
      //    url: `${process.env.NEXT_PUBLIC_BASE_URL}/testimonials`,
      //    lastModified: new Date(),
      //    changeFrequency: "weekly",
      //    priority: 0.5,
      // },
      // {
      //    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      //    lastModified: new Date(),
      //    changeFrequency: "weekly",
      //    priority: 0.5,
      // },
      // {
      //    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      //    lastModified: new Date(),
      //    changeFrequency: "weekly",
      //    priority: 0.5,
      // },
   ];
}
