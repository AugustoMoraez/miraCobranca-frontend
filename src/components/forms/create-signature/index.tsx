import { Controller, useForm } from "react-hook-form";
import { Container, Input, Label, SubmitButton, Title } from "../style";
import { SpanErro } from "../../globalComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostMutation } from "../../../services/hooks/usePost";
import { Loading } from "../../load/register";
import { ModalMsg } from "../../ModalMsg";
import { useState } from "react";
import { createSignatureSchema, createSignatureType } from "../../../schemas/createSignature.schema";
import { CiCreditCard1 } from "react-icons/ci";
import { NumericFormat } from "react-number-format";



export const FormCreateSignature = () => {
    const [msgError, setMsgError] = useState("Tente novamente")
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<createSignatureType>({
        resolver: zodResolver(createSignatureSchema)
    });

    const { mutate: registerSignature, isPending, isError } = usePostMutation<createSignatureType>("/customer")

    const onSubmit = ({ description, name, unit_amount }: createSignatureType) => {
        console.log('Dados do cliente:', { description, name, unit_amount });

        // registerSignature(data, {
        //       onSuccess: (res) => {
        //          console.log(res)

        //       },
        //       onError:(e:any)=>{
        //         console.log(e)
        //         setMsgError(e.response?.data?.message || "Erro interno: Tente novamente.");
        //       }
        //     });
    };
    return (
        <>

            {isPending && <Loading msg="Aguarde..." />}
            {isError && <ModalMsg msg={msgError} />}
            <Container onSubmit={handleSubmit(onSubmit)}>
                <Title>
                    <CiCreditCard1 />
                    Criar Assinatura
                </Title>
                <div>
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" type="text" placeholder="EX: Plano Basico" {...register("name", { required: "Obrigatorio" })} required />
                    {errors.name && <SpanErro>{errors.name.message}</SpanErro>}
                </div>

                <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Input id="description" type="text" placeholder="Digite a descrição" {...register("description", { required: "Obrigatorio" })} required />
                    {errors.description && <SpanErro>{errors.description.message}</SpanErro>}
                </div>

                <div>
                    <Label htmlFor="unit_amount">Valor</Label>
                    <Controller
                        name="unit_amount"
                        control={control}
                        rules={{ required: "Obrigatório" }}
                        render={({ field }) => (
                            <NumericFormat
                                value={field.value / 100}
                                thousandSeparator="."
                                decimalSeparator=","
                                prefix="R$ "
                                decimalScale={2}
                                fixedDecimalScale
                                allowNegative={false}
                                placeholder="R$0,00"
                                onValueChange={({ floatValue }) => {
                                    field.onChange(Math.round((floatValue || 0) * 100));
                                }}
                            />
                        )}
                    />
                    {errors.unit_amount && <SpanErro>{errors.unit_amount.message}</SpanErro>}
                </div>


                <SubmitButton type="submit">Criar</SubmitButton>
            </Container>
        </>
    );
};
