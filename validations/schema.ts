import { z } from "zod";

export const ContactSchema = z.object({
   name: z.string().min(1).max(30),
   email: z.string().email().min(1),
   last_name: z.string().min(1).max(30),
   message: z.string().min(1),
});
