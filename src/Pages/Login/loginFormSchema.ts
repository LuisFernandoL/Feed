import { z } from "zod";

export const loginFormSchema = z.object({
  
    email: z
    .string()
    .nonempty("O email é obrigatório.")
    .email("O email fornecido é inválido."),
    
    password: z
    .string()
    .nonempty("A senha é obrigatória.")
    
})

export type TLoginForm = z.infer<typeof loginFormSchema>;