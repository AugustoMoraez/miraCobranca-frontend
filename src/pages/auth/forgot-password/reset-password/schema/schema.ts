import z from "zod";
import { passwordSchema } from "../../../../../schemas/registerUser.schema";
 
export const formSchema = z.object({
    newPassword:passwordSchema
})

export type formType = z.infer<typeof formSchema> 