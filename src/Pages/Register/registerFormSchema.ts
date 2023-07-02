import { z } from "zod";

export const registerFormSchema = z.object({
    name: z
    .string()
    .nonempty("O nome é obrigatório.")
    .min(2, "O nome precisa conter pelo menos 2 caracteres."),

    email: z
    .string()
    .nonempty("O email é obrigatório.")
    .email("O email fornecido é inválido."),
    
    password: z
    .string()
    .nonempty("A senha é obrigatória.")
    .regex(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula.")
    .regex(/([a-z])/, "Deve conter ao menos 1 letra minúscula.")
    .regex(/(\d)/, "Deve conter ao menos 1 número.")
    .regex(/(\W)/, "Deve conter ao menos 1 caracter especial.")
    .min(8, "No mínimo 8 caracteres."),

    confirmPassword: z
    .string()
    .nonempty("Confirmar a senha é obrigatório."),

}).refine(({ password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem.", 
    path: ["confirmPassword"],
})


export type TRegisterForm = z.infer<typeof registerFormSchema>;