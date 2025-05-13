import z from "zod";

export const formSchema = z.object({
    email:z.string().email("Informe um email valido").min(1, "Informe um email valido.")
})

export type formType = z.infer<typeof formSchema> 