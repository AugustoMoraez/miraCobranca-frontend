import { UseFormReturn } from "react-hook-form";
import {BackForm, FormStep, Input, InputOption, Label,  Option, SubmitButton } from "../style";
import { registerFormType } from "../../../../schemas/registerUser.schema";
import { useState } from "react";
import { states } from "../../../../utils/states";

type StepOneData = {
    formHooK: UseFormReturn<registerFormType>,
    stepHidden: "1" | "2",
    func: () => void
}


export const StepTwo = ({ formHooK, stepHidden, func }: StepOneData) => {
    const [selectedState, setSelectedState] = useState("");
    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(event.target.value);
    };
    const {
        register,
        formState: { errors }
    } = formHooK;

    return (
        <FormStep className={stepHidden == "1" ? "hidden" : ""}>
            <BackForm onClick={() =>func()}>Voltar</BackForm>
            <Label htmlFor="state-option">Estado</Label>
            <InputOption id="state-options" value={selectedState} onChange={handleStateChange}>
                {
                    states.map((item) => (
                        <Option value={item} id={item}>{item}</Option>
                    ))
                }
            </InputOption>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" placeholder="Cidade" />

            <Label htmlFor="Bairro">Bairro</Label>
            <Input type="text" id="Bairro" placeholder="Bairro" />

            <Label htmlFor="Rua">Rua</Label>
            <Input type="text" id="Rua" placeholder="Rua" />

            <Label htmlFor="Numero">Numero</Label>
            <Input type="text" id="Numero" placeholder="Numero" />

            <Label htmlFor="Complemento">Complemento</Label>
            <Input type="text" id="Complemento" placeholder="Complemento" />

            <Label htmlFor="Contato-1">Contato 1</Label>
            <Input type="text" id="Contato-1" placeholder="Contato" />

            <SubmitButton value={"Cadastrar"} />
        </FormStep>
    )
}