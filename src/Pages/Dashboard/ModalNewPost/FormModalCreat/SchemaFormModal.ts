import { z } from "zod";

export const SchemaFormModal = z.object({
  title: z
    .string()
    .nonempty("É obrigatório um título")
    .min(3, "Título necessita ter no minimo 8 caracteres "),
  image: z
    .string()
    .nonempty("É obrigatório uma imagem")
    .min(8, "Minimo 8 caracteres para adicionar uma url de uma imagen"),
  description: z
    .string()
    .min(8, "Minimo 8 caracteres para adicionar uma descrição"),
});

export type IPostNew = z.infer<typeof SchemaFormModal>;
