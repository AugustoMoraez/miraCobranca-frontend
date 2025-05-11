import { UseFormReturn } from "react-hook-form";
import {   FormStep, Input, SpanErro, Label, NextButton } from "../style";
import { registerFormType } from "../../../../schemas/registerUser.schema";
 


type StepOneData = {
    formHooK: UseFormReturn<registerFormType>,
    stepHidden: "1" | "2",
    func:(step:"1"|"2")=>void
}


export const StepOne = ({formHooK,stepHidden,func}:StepOneData) => {
     
    const {
        register,
        formState: { errors }
    } = formHooK;

    const nextStep = () => {
        formHooK.trigger([
            "name", "cpf", "password", "confirmPassword", "email", "confirmEmail"
        ]).then((isValid) => {
            if(isValid){
                setTimeout(() => func("2"), 0);
            }
        });
    }

    return (
        <FormStep className={stepHidden == "2" ? "hidden" : ""}>
         
            <Label htmlFor="name">Nome</Label>
            <Input placeholder={"Nome"} id="name" {...register("name")} />
            {errors.name && <SpanErro>{errors.name.message}</SpanErro>}

            <Label htmlFor={"cpf"}>CPF</Label>
            <Input placeholder={"cpf"} id={"cpf"} {...register("cpf")} />
            {errors.cpf && <SpanErro>{errors.cpf?.message}</SpanErro>}

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
            <Input placeholder="Confirmar senha" type="password" id="confirmar senha" {...register("confirmPassword")} />
            {errors.confirmPassword && <SpanErro>{errors.confirmPassword.message}</SpanErro>}

            <NextButton onClick={nextStep}>Proximo</NextButton>
        </FormStep>
    )
}