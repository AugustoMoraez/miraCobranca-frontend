import z from "zod";


export const createSignatureSchema = z.object({

     
    name: z.string().min(1, "Obrigatório"),
    description: z.string().min(1, "Obrigatório"),
    unit_amount: z.number().min(100, "Valor mínimo de R$1,00"), 
})

export type createSignatureType = z.infer<typeof createSignatureSchema>