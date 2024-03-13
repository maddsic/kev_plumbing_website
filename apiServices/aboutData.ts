// import { client } from "@/app/lib/sanity";

import { client } from "@/app/lib/sanity";

export const getAboutData = async () => {
   console.log("hiiiiiiiiiiiiiiii");
   const query = `*[_type == "about"]{
   title,
   subtitle,
   description,
   listContent,
   listDescription,
   profileImg
}`;

   const data = await client.fetch(query);
   console.log("Data from function", data);
   return data;
};
