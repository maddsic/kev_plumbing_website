import { z } from "zod";

export const ContactSchema = z.object({
   name: z.string().min(1).max(30),
   telephone: z.string().min(1).max(20),
   last_name: z.string().min(1).max(30),
   message: z.string().min(1),
});
