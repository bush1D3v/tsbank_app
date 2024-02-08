import { z } from "zod";

export const loginSchema = z.object({
  userData: z.object({
    email: z
      .string()
      .min(1, "This field has to be filled")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Please enter a valid password")
      .max(16, "Password limited to 16 characters")
  })
});

export type LoginSchemaProps = z.infer<typeof loginSchema>;
