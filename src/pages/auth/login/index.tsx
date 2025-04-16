import {Container,Form, Input,Button,FormContainer, BannerContainer, LogoBanner, Info, TitleForm} from "./style"
import img from "../../../assets/img/logobanner.png"

export const LoginPage = () =>{
    const handleSubmit = (e:any) => {

    }
  
    return (
      <Container>
        <FormContainer>
         
          <BannerContainer>
            <LogoBanner src={img} alt=""/> 
             
            <Info>Combata a inadimplência do seu negocio!</Info>
          </BannerContainer>
          <Form onSubmit={handleSubmit}>
            <TitleForm>LOGIN</TitleForm>
            <Input type="email" placeholder="Seu email" required/>
            <Input type="password" placeholder="Sua senha" required />
            <Button type="submit" value="Entrar"/>
          </Form>

        </FormContainer>
      </Container>
    )
  }
  