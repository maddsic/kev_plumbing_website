import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
   const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
      "https://dunedinplumbing.co.uk";
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
