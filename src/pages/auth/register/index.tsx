import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, FormContainer, Form, ContainerAccountType, ContainerAccountTypeInfo, Title,  Option, Input, SubmitButton, NextButton, Label,  FormStep, InputOption } from "./style";
import { registerFormSchema, registerFormType } from "../../../schemas/registerUser.schema";
import { states } from "../../../utils/states";
export const RegisterPage = () => {
    const [option, setOption] = useState("Person");
    const [selectedState, setSelectedState] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.id ==="accountType"){
            setOption(event.target.value);
        }else{
            setSelectedState(event.target.value);
        }
    };

    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm<registerFormType>({
        resolver: zodResolver(registerFormSchema),
    });



    const onSubmit = (data: registerFormType) => {
        console.log(option, data);
    };



    return (
        <Container>
            <Title>Registro de conta</Title>
            <FormContainer>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormStep className="">
                        <ContainerAccountType>
                            <ContainerAccountTypeInfo>Qual seu perfil?</ContainerAccountTypeInfo>
                            <InputOption id="accountType" value={option} onChange={handleChange}>
                                <Option value="Person">Pessoa</Option>
                                <Option value="Enterprise">Empresa</Option>
                            </InputOption>
                        </ContainerAccountType>


                        {option ===
                            "Person" ?
                            (
                                <>
                                    <Label htmlFor="name">Nome</Label>
                                    <Input placeholder="Nome completo" id="name" {...register("name")} />
                                    {errors.name && <span>{errors.name.message}</span>}

                                    <Label htmlFor="CPF">CPF</Label>
                                    <Input placeholder="CPF" id="CPF" {...register("cpf")} />
                                    {errors.cpf && <span>{errors.cpf.message}</span>}

                                </>
                            )
                            :
                            (
                                <>
                                    <Label htmlFor="Razão social">Razão social</Label>
                                    <Input placeholder="Razão social" id="Razão social" {...register("name")} />
                                    {errors.name && <span>{errors.name.message}</span>}

                                    <Label htmlFor="CNPJ">CNPJ</Label>
                                    <Input placeholder="CNPJ" id="CNPJ" {...register("cnpj")} />
                                    {errors.cnpj && <span>{errors.cnpj.message}</span>}
                                </>
                            )}
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

                        <NextButton>Proximo</NextButton>
                    </FormStep>
                    <FormStep>
                        <Label htmlFor="state-option">Estado</Label>
                        <InputOption id="state-options" value={option} onChange={handleChange}>
                            {
                                states.map((item)=>(
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
 
                        
                        <SubmitButton value={"Cadastrar"}/>
                    </FormStep>
                </Form>
            </FormContainer>
        </Container>
    );
};