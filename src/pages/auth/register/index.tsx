import { useState } from "react";
import { Container, FormContainer,Form, ContainerAccountType, ContainerAccountTypeInfo, Title, UserType,Option, Input, Button } from "./style";


export const RegisterPage = () => {
    const [opcao, setOpcao] = useState('Pessoa');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcao(event.target.value);
        console.log(opcao)
    };
    return (
        <Container>
            <Title>Registro de conta</Title>
            <FormContainer>
                <ContainerAccountType>
                    <ContainerAccountTypeInfo>
                        Qual seu perfil?
                    </ContainerAccountTypeInfo>
                    <UserType id="alternativa" value={opcao} onChange={handleChange} >
                        <Option value="Pessoa">Pessoa</Option>
                        <Option value="Empresa">Empresa</Option>
                    </UserType>
                </ContainerAccountType>
                    {
                        opcao === "Pessoa"?
                        <Form>
                            <Input type="text" placeholder="Nome completo"/>
                            <Input type="text" placeholder="CPF"/>
                            <Input type="email" placeholder="Seu email"/>
                            <Input type="email" placeholder="Confirmar email"/>
                            <Input type="password" placeholder="Sua senha"/>
                            <Input type="password" placeholder="Confirmar senha"/>
                            <Button type="submit" value={"Proximo"}/>
                        </Form>
                        :
                        <Form>
                            <Input type="text" placeholder="Razao"/>
                            <Input type="text" placeholder="CNPJ"/>
                            <Input type="email" placeholder="Email"/>
                            <Input type="email" placeholder="Confirmar email"/>
                            <Input type="password" placeholder="Senha"/>
                            <Input type="password" placeholder="Confirmar senha"/>
                            <Button type="submit" value={"Proximo"}/>
                        </Form>
                        
                    }
            </FormContainer>
        </Container>
    )
}