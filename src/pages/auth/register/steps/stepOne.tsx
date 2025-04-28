import { UseFormReturn } from "react-hook-form";
import { AccountType, AccountTypeInfo, FormStep, Input, InputOption, Label, NextButton ,Option} from "../style";
import { registerFormType } from "../../../../schemas/registerUser.schema";
import { useState } from "react";


type StepOneData = {
    formHooK: UseFormReturn<registerFormType>,
    stepHidden: "1" | "2",
    func:()=>void
}


export const StepOne = ({formHooK,stepHidden,func}:StepOneData) => {
    const [option, setOption] = useState<"cpf" | "cnpj">("cpf");
    const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value as "cpf" | "cnpj");
    };
    const {
        register,
        formState: { errors }
    } = formHooK;

    return (
        <FormStep className={stepHidden == "2" ? "hidden" : ""}>
            <AccountType>
                <AccountTypeInfo>Qual seu perfil?</AccountTypeInfo>
                <InputOption id="accountType" value={option} onChange={handleAccountTypeChange}>
                    <Option value="cpf">Pessoa</Option>
                    <Option value="cnpj">Empresa</Option>
                </InputOption>
            </AccountType>

            <Label htmlFor="name">{option == "cpf" ? "Nome" : "Razão Social"}</Label>
            <Input placeholder={option == "cpf" ? "Nome" : "Razão Social"} id="name" {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <Label htmlFor={option == "cpf" ? "CPF" : "CNPJ"}>
                {option == "cpf" ? "CPF" : "CNPJ"}
            </Label>
            <Input
                placeholder={option == "cpf" ? "CPF" : "CNPJ"}
                id={option == "cpf" ? "CPF" : "CNPJ"}
                {...register(option)} />
            {option === "cpf" && errors.cpf && <span>{errors.cpf.message}</span>}
            {option === "cnpj" && errors.cnpj && <span>{errors.cnpj.message}</span>}

            <Label htmlFor="Email">Email</Label>
            <Input placeholder="Email" id="Email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <Label htmlFor="Confirmar Email">Confirmar Email</Label>
            <Input placeholder="Confirmar email" id="Confirmar Email" {...register("confirmEmail")} />
            {errors.confirmEmail && <span>{errors.confirmEmail.message}</span>}

            <Label htmlFor="senha">Senha</Label>
            <Input placeholder="Senha" type="password" id="senha" {...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}

            <Label htmlFor="confirmar senha">Confirmar Senha</Label>
            <Input placeholder="Confirmar senha" type="password" id="confirmar senha"{...register("confirmPassword")} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

            <NextButton onClick={() => func()}>Proximo</NextButton>
        </FormStep>
    )
}