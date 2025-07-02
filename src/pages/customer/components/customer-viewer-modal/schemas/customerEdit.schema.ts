import z from "zod"
import { cpf } from "../../../../../schemas/registerUser.schema"

export const customerEditSchema = z.object({
     
    name:z.string().min(2,"minimo de dois caracteres").max(40,"maximo de 40 caracteres"),
    email: z.string().email("Email inválido"),
    cpf:cpf,
    phone: z.string().max(20,"maximo de caracteres é 20.").optional(),
    address:z.string().optional()
})

export type customerEditType  = z.infer<typeof customerEditSchema>