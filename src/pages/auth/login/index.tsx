import {Container,Form, Input,Button,FormContainer, BannerContainer, LogoBanner,  TitleForm} from "./style"
import img from "../../../assets/img/logobanner.png"
import { Link } from "react-router-dom"

export const LoginPage = () =>{
    const handleSubmit = (e:any) => {
      console.log(e)
    }
  
    return (
      <Container>
        <FormContainer>
         
          <BannerContainer>
            <LogoBanner src={img} alt=""/> 
             
           
          </BannerContainer>
          <Form onSubmit={handleSubmit}>
            <TitleForm>LOGIN</TitleForm>
            <Input type="email" placeholder="Seu email" required/>
            <Input type="password" placeholder="Sua senha" required />
            <Button type="submit" value="Entrar"/>
            <Link to={"/register"}>Não possui conta? Registre-se</Link>
          </Form>

        </FormContainer>
      </Container>
    )
  }
  