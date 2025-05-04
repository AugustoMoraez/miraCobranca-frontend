import { z } from 'zod';
 

const cpfValidator = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '');  
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; 
  const digits = cpf.split('').map(Number);
  const checkDigits = (start: number, end: number) => {
    let sum = 0;
    for (let i = start; i < end; i++) {
      sum += digits[i] * (end + 1 - i);  
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  const firstCheckDigit = checkDigits(0, 9);
  const secondCheckDigit = checkDigits(0, 10);
  return digits[9] === firstCheckDigit && digits[10] === secondCheckDigit;
};

export const cpf = z.string().refine(cpfValidator, {
  message: 'CPF inválido',
});



 
export const AddressSchema = z.object({
  house_number: z.string().min(1, 'O número da casa é obrigatório'),
  street: z.string().min(1, 'A rua é obrigatória'),
  district: z.string().min(1, 'O bairro é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().min(1, 'O estado é obrigatório'),
  complement: z.string().optional(),
});
 
export const registerFormSchema = z.object({
  email: z.string().email('O e-mail deve ser válido').min(1, 'O e-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirmEmail: z.string().email("Email inválido"),
  confirmPassword: z.string().min(6, "Mínimo 6 caracteres"),
  name: z.string().min(2,"Nome obrigatório"),
  cpf: cpf,
  contact_1: z.string().min(1, 'O contato é obrigatório'),
  contact_2: z.string().optional(),
  address: AddressSchema.optional(),  
}).refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem",
    path: ["confirmEmail"],
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export type registerFormType = z.infer<typeof registerFormSchema>