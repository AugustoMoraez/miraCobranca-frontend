import { Container, Input, Label, SubmitButton, Title } from "./style";



export const FormCreateCustomer = () => {
    return (
        <Container >
            <Title>Criar um Cliente</Title>
            <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" type="text" placeholder="Digite o nome" required />            
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Digite o email" required />            
            </div>

            <div>
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" name="cpf" type="text" placeholder="Digite o CPF" required />
            </div>

            <SubmitButton type="submit">Criar</SubmitButton>
        </Container>
    );
};
