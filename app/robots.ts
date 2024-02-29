import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
   const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
      process.env.NEXT_PUBLIC_BASE_URL; // Remove trailing slash if exists

   return {
      rules: [
         {
            userAgent: "*",
            allow: "/",
         },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
   };
}
