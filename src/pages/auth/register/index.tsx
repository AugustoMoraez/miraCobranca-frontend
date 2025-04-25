import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Container, FormContainer, Form, ContainerAccountType, ContainerAccountTypeInfo, Title, UserType, Option, Input, Button} from "./style";
import {registerFormSchema,registerFormType } from "../../../schemas/registerUser.schema";

export const RegisterPage = () => {
    const [option, setOption] = useState("Person");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    };
   
    const {
        handleSubmit,
        register,
        formState:{
            errors
        }
    } = useForm<registerFormType>({
            resolver: zodResolver(registerFormSchema),
        });

     

    const onSubmit = (data:registerFormType) => {
        console.log(option, data);
    };



    return (
        <Container>
            <Title>Registro de conta</Title>
            <FormContainer>
                <ContainerAccountType>
                    <ContainerAccountTypeInfo>Qual seu perfil?</ContainerAccountTypeInfo>
                    <UserType id="alternativa" value={option} onChange={handleChange}>
                        <Option value="Person">Pessoa</Option>
                        <Option value="Enterprise">Empresa</Option>
                    </UserType>
                </ContainerAccountType>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    {option ===
                        "Person" ?
                        (
                            <>
                                <Input placeholder="Nome completo" {...register("name")} />
                                {errors.name && <span>{errors.name.message}</span>}

                                <Input placeholder="CPF" {...register("cpf")} />
                                {errors.cpf && <span>{errors.cpf.message}</span>}

                            </>
                        )
                        :
                        (
                            <>
                                <Input placeholder="Razão social" {...register("razao")} />
                                {errors.razao && <span>{errors.razao.message}</span>}

                                <Input placeholder="CNPJ" {...register("cnpj")} />
                                {errors.cnpj && <span>{errors.cnpj.message}</span>}
                            </>
                        )}
                    <Input placeholder="Email" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}

                    <Input placeholder="Confirmar email" {...register("confirmEmail")} />
                    {errors.confirmEmail && <span>{errors.confirmEmail.message}</span>}

                    <Input placeholder="Senha" type="password" {...register("senha")} />
                    {errors.senha && <span>{errors.senha.message}</span>}

                    <Input placeholder="Confirmar senha" type="password" {...register("confirmSenha")} />
                    {errors.confirmSenha && <span>{errors.confirmSenha.message}</span>}

                    <Button type="submit" value="Próximo" />
                </Form>
            </FormContainer>
        </Container>
    );
};