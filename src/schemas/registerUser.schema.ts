import { z } from "zod";

export const registerFormSchema = z.object({
    razao: z.string().min(1, "Razão social é obrigatória").optional(),
    cnpj: z.string().min(14, "CNPJ inválido").optional(),
    name: z.string().min(1, "Nome é obrigatório").optional(),
    cpf: z.string().min(11, "CPF inválido").optional(),
    email: z.string().email("Email inválido"),
    confirmEmail: z.string().email("Email inválido"),
    senha: z.string().min(6, "Mínimo 6 caracteres"),
    confirmSenha: z.string().min(6, "Mínimo 6 caracteres"),
}).refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem",
    path: ["confirmEmail"],
}).refine((data) => data.senha === data.confirmSenha, {
    message: "As senhas não coincidem",
    path: ["confirmSenha"],
});

export type registerFormType = z.infer<typeof registerFormSchema>;