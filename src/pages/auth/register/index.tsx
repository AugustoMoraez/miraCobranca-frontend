import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container,BackForm, FormContainer, Form,  Title,  Option, Input, SubmitButton, NextButton, Label,  FormStep, InputOption, AccountType, AccountTypeInfo } from "./style";
import { registerFormSchema, registerFormType } from "../../../schemas/registerUser.schema";
import { states } from "../../../utils/states";

export const RegisterPage = () => {
    const [option, setOption] = useState<"cpf"|"cnpj">("cpf");
    const [selectedState, setSelectedState] = useState("");
    const [stepHidden, setStepHidden] = useState<"1"|"2">("1");
     
    const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value as "cpf" | "cnpj");
    };
    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(event.target.value);
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
        console.log(selectedState,option, data);
    };



    return (
        <Container>
            <Title>
                {stepHidden == "1" ? "Registro de conta" : "Endereço" }                
            </Title>
            <FormContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormStep className={stepHidden == "2" ? "hidden": ""}>
                        <AccountType>
                            <AccountTypeInfo>Qual seu perfil?</AccountTypeInfo>
                            <InputOption id="accountType" value={option} onChange={handleAccountTypeChange}>
                                <Option value="cpf">Pessoa</Option>
                                <Option value="cnpj">Empresa</Option>
                            </InputOption>
                        </AccountType>

                        <Label htmlFor="name">{option=="cpf"?"Nome":"Razão Social"}</Label>
                        <Input placeholder={option=="cpf"?"Nome":"Razão Social"} id="name" {...register("name")} />
                        {errors.name && <span>{errors.name.message}</span>}

                        <Label htmlFor={option=="cpf"?"CPF":"CNPJ"}>
                            {option=="cpf"?"CPF":"CNPJ"}
                        </Label>
                        <Input 
                        placeholder={option=="cpf"?"CPF":"CNPJ"} 
                        id={option=="cpf"?"CPF":"CNPJ"} 
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

                        <NextButton onClick={()=>setStepHidden("2")}>Proximo</NextButton>
                    </FormStep>
                    <FormStep className={stepHidden == "1" ? "hidden": ""}>
                        <BackForm onClick={()=>setStepHidden("1")}>Voltar</BackForm>
                        <Label htmlFor="state-option">Estado</Label>
                        <InputOption id="state-options" value={option} onChange={handleStateChange}>
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