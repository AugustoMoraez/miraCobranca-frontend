import { useForm } from "react-hook-form";
import { Container, Input, Label, SubmitButton, Title } from "../style";
import { SpanErro } from "../../globalComponents";
import { createCustomerSchema, createCustomerType } from "../../../schemas/createCustomer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuUserRoundPlus } from "react-icons/lu";
import { usePostMutation } from "../../../services/hooks/usePost";
import { Loading } from "../../load/register";
import { ModalMsg } from "../../ModalMsg";
import { useState } from "react";

type prop = {
    func:()=>void
}

export const FormCreateCustomer = ({func}:prop) => {
    const [msgModal,setMsgModal] = useState("Tente novamente")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<createCustomerType>({
        resolver:zodResolver(createCustomerSchema)
    });

    const { mutate: registerCustomer, isPending, isError,isSuccess } = usePostMutation<createCustomerType>("/customer")

    const onSubmit = (data: createCustomerType) => {
        console.log('Dados do cliente:', data);
        registerCustomer(data, {
              onSuccess: (res) => {
                setMsgModal("Cliente cadastrado");
                
              },
              onError:(e:any)=>{
                console.log(e)
                setMsgModal(e.response?.data?.message || "Erro interno: Tente novamente.");
              }
            });
    };
    return (
        <>
        
            {isPending && <Loading msg="Aguarde..."/> }
            {isError && <ModalMsg msg={msgModal}/> }
            {isSuccess && <ModalMsg msg={msgModal} func={()=>func()} sucess/> }
            <Container onSubmit={handleSubmit(onSubmit)}>
                <Title>
                    <LuUserRoundPlus />
                    Cadastrar cliente
                </Title>
                <div>
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome"  type="text" placeholder="Digite o nome." {...register("name",{required:"Obrigatorio"})} required />
                    {errors.name && <SpanErro>{errors.name.message}</SpanErro>}
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Digite o email." {...register("email",{required:"Obrigatorio"})}required />
                    {errors.email && <SpanErro>{errors.email.message}</SpanErro>}
                </div>

                <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" type="text" placeholder="Digite o CPF." {...register("cpf",{required:"Obrigatorio"})}required />
                    {errors.cpf && <SpanErro>{errors.cpf.message}</SpanErro>}
                </div>
                <div>
                    <Label htmlFor="Telefone">Telefone</Label>
                    <Input id="Telefone" type="text" placeholder="Digite o Telefone (Opcional)." {...register("phone",{required:"Obrigatorio"})}required />
                    {errors.phone && <SpanErro>{errors.phone.message}</SpanErro>}
                </div>

                <SubmitButton type="submit">Criar</SubmitButton>
            </Container>
        </>
    );
};
