"use server";

import { z } from "zod";
import emailjs from "@emailjs/browser";
import { ContactSchema } from "@/validations/schema";
import { useEffect } from "react";

type formValues = z.infer<typeof ContactSchema>;

export async function sendMail(data: formValues) {
   const result = ContactSchema.safeParse(data);

   if (typeof window !== "undefined") {
      localStorage.setItem("myCat", "Tom");
   }

   if (result.success) {
      const templateParams = {
         from_name: result?.data?.name,
         from_email: result?.data?.email,
         to_name: "Dunedine Plumbing Enterprise",
         message: result?.data?.message,
      };

      emailjs
         .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_EMAIL_TEMPLETE_ID ?? "",
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
         )
         .then(response => {
            console.log("Email: sent successfully", response);
            return { success: true, data: response };
         });
   } else if (result.error) {
      return { success: false, error: result.error.format() };
   }
   return result;
}
