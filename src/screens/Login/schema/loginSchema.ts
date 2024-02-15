import { z } from "zod";

export const loginSchema = z.object({
  userData: z.object({
    email: z.string()
      .email("Invalid email address"),
    password: z.string()
      .min(8, "Please enter a valid password")
  })
});

export type LoginSchemaProps = z.infer<typeof loginSchema>;
