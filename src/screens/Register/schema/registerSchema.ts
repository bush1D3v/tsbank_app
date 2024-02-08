import { z } from "zod";

export const registerSchema = z.object({
  userData: z.object({
    name: z.string()
      .min(15, "Please enter your complete name"),
    email: z.string()
      .min(1, "This field has to be filled")
      .email("This is not a valid email"),
    password: z.string()
      .min(8, "Password must have at least 8 characters")
      .max(16, "Password limited to 16 characters"),
    cpf: z.string()
      .min(11, "Invalid cpf")
      .max(11, "Invalid cpf"),
    phone: z.string()
      .min(10, "Invalid phone")
      .max(11, "Invalid phone"),
  }),
});

export type RegisterSchemaProps = z.infer<typeof registerSchema>;
