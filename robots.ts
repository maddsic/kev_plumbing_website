import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
   return {
      rules: [
         {
            userAgent: "*",
            allow: "/",
         },
      ],
      sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
   };
}
