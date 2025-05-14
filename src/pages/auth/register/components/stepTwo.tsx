import { UseFormReturn } from "react-hook-form";
import {BackForm, FormStep, Input, InputOption, Label,  Option,  SubmitButton } from "../style";
import { registerFormType } from "../../../../schemas/registerUser.schema";
import { states } from "../../../../utils/states";
import { SpanErro } from "../../../../components/globalComponents";

type prop = {
    formHooK: UseFormReturn<registerFormType>,
    stepHidden: "1" | "2",
    func: () => void
}


export const StepTwo = ({ formHooK, stepHidden, func }: prop) => {
    
    const {
        register,
        formState: { errors }
    } = formHooK;

    return (
        <FormStep className={stepHidden == "1" ? "hidden" : ""}>
            <BackForm onClick={() =>func()}>Voltar</BackForm>
            
            <Label htmlFor="state-option">Estado</Label>
            <InputOption 
            id="state-options" 
            defaultValue={"MA"} 
            {...register('address.state')}>
                {
                    states.map((item) => (
                        <Option value={item}  key={item}>{item}</Option>
                    ))
                }
            </InputOption>

            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" placeholder="Cidade" {...register("address.city")} />
            {errors.address?.city && <SpanErro>{errors.address?.city.message}</SpanErro>}


            <Label htmlFor="Bairro">Bairro</Label>
            <Input type="text" id="Bairro" placeholder="Bairro" {...register("address.district")}/>
            {errors.address?.district && <SpanErro>{errors.address?.district.message}</SpanErro>}


            <Label htmlFor="Rua">Rua</Label>
            <Input type="text" id="Rua" placeholder="Rua" {...register("address.street")}/>
            {errors.address?.street && <SpanErro>{errors.address?.street.message}</SpanErro>}


            <Label htmlFor="Numero">Numero</Label>
            <Input type="text" id="Numero" placeholder="Numero" {...register("address.house_number")}/>
            {errors.address?.house_number && <SpanErro>{errors.address?.house_number.message}</SpanErro>}


            <Label htmlFor="Complemento">{"Complemento(opcional)"}</Label>
            <Input type="text" id="Complemento" placeholder="Complemento" {...register("address.complement")}/>
            {errors.address?.complement && <SpanErro>{errors.address?.complement.message}</SpanErro>}


            <Label htmlFor="Contato-1">Contato 1</Label>
            <Input type="text" id="Contato-1" placeholder="Contato" {...register("contact_1")}/>
            {errors.contact_1 && <SpanErro>{errors.contact_1.message}</SpanErro>}

            <SubmitButton type="submit" value={"Cadastrar"} />
        </FormStep>
    )
}