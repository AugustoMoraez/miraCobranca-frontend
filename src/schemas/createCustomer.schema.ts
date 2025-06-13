import z from "zod"
import { cpf } from "./registerUser.schema"

export const createCustomerSchema = z.object({
    email: z.string().email("Email inválido"),
    cpf:cpf,
    phone: z.string().max(20,"maximo de caracteres é 20.").optional(),
    name:z.string().min(2,"minimo de dois caracteres").max(40,"maximo de 40 caracteres")
})

export type createCustomerType = z.infer<typeof createCustomerSchema>