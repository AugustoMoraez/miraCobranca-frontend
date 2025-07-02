import z from "zod"
import { cpf } from "./registerUser.schema"

export const customerSchema = z.object({
    id:z.string(),
    name:z.string().min(2,"minimo de dois caracteres").max(40,"maximo de 40 caracteres"),
    email: z.string().email("Email inválido"),
    cpf:cpf,
    phone: z.string().max(20,"maximo de caracteres é 20.").optional(),
    subscription_Status: z.enum( [ 
    "NULL",
    "ACTIVE",
    "PEDING",
    "DISABLED"]),
    stripeCustomerId: z.string(),
    userID:  z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    address:z.string().optional()
})

export type customer  = z.infer<typeof customerSchema>