import { UseFormReturn } from "react-hook-form";
import { AccountType, AccountTypeInfo, FormStep, Input, InputOption,SpanErro, Label, NextButton ,Option} from "../style";
import { registerFormType } from "../../../../schemas/registerUser.schema";
import { useEffect, useState } from "react";


type StepOneData = {
    formHooK: UseFormReturn<registerFormType>,
    stepHidden: "1" | "2",
    func:(step:"1"|"2")=>void
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

    useEffect(()=>func("1"),[
     errors.name,errors.cpf,errors.cnpj,errors.password,
     errors.confirmPassword,errors.email,errors.confirmEmail   
    ])

    return (
        <FormStep className={stepHidden == "2" ? "hidden" : ""}>
            <AccountType>
                <AccountTypeInfo>Qual seu perfil?</AccountTypeInfo>
                <InputOption id="accountType" value={option} onChange={handleAccountTypeChange}>
                    <Option value="cpf" id="1">Pessoa</Option>
                    <Option value="cnpj" id="2">Empresa</Option>
                </InputOption>
            </AccountType>

            <Label htmlFor="name">{option == "cpf" ? "Nome" : "Razão Social"}</Label>
            <Input placeholder={option == "cpf" ? "Nome" : "Razão Social"} id="name" {...register("name")} />
            {errors.name && <SpanErro>{errors.name.message}</SpanErro>}

            <Label htmlFor={option == "cpf" ? "CPF" : "CNPJ"}>
                {option == "cpf" ? "CPF" : "CNPJ"}
            </Label>
            <Input
                placeholder={option == "cpf" ? "CPF" : "CNPJ"}
                id={option == "cpf" ? "CPF" : "CNPJ"}
                {...register(option)} />
            {option === "cpf" && errors.cpf && <SpanErro>{errors.cpf.message}</SpanErro>}
            {option === "cnpj" && errors.cnpj && <SpanErro>{errors.cnpj.message}</SpanErro>}

            <Label htmlFor="Email">Email</Label>
            <Input placeholder="Email" id="Email" {...register("email")} />
            {errors.email && <SpanErro>{errors.email.message}</SpanErro>}

            <Label htmlFor="Confirmar Email">Confirmar Email</Label>
            <Input placeholder="Confirmar email" id="Confirmar Email" {...register("confirmEmail")} />
            {errors.confirmEmail && <SpanErro>{errors.confirmEmail.message}</SpanErro>}

            <Label htmlFor="senha">Senha</Label>
            <Input placeholder="Senha" type="password" id="senha" {...register("password")} />
            {errors.password && <SpanErro>{errors.password.message}</SpanErro>}

            <Label htmlFor="confirmar senha">Confirmar Senha</Label>
            <Input placeholder="Confirmar senha" type="password" id="confirmar senha"{...register("confirmPassword")} />
            {errors.confirmPassword && <SpanErro>{errors.confirmPassword.message}</SpanErro>}

            <NextButton onClick={() => func("2")}>Proximo</NextButton>
        </FormStep>
    )
}