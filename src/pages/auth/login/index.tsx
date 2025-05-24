import { useForm } from "react-hook-form"
import { loginSchema,LoginFormDataType } from "../../../schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container, Form, Input, Button, FormContainer, BannerContainer, LogoBanner, TitleForm } from "./style"
import img from "../../../assets/img/logobanner.png"
import { Link, useNavigate } from "react-router-dom"
import { usePostMutation } from "../../../services/hooks/usePost"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/slices/user/user"
import { Loading } from "../../../components/load/register"
import { SpanErro } from "../../../components/globalComponents"

 
 
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDataType>({
    resolver: zodResolver(loginSchema),
  })

  const dispatch = useDispatch();
  const nav = useNavigate()
  const { mutate: login,error ,isPending} = usePostMutation<LoginFormDataType>("/auth/login")

  const onSubmit = (data: LoginFormDataType) => {
    login(data, {
      onSuccess: (res) => {
        dispatch(setUser(res))
        nav("/dashboard")  
      },
      onError: (err: any) => {
        console.error("Erro no login:", err.response?.data?.message || err.message,error?.message)
        alert(err.response?.data?.message || "Erro ao fazer login")
      },
    })
  }

  return (
    <Container>
      {isPending && <Loading msg="Aguarde"/>}
      <FormContainer>
        <BannerContainer>
          <LogoBanner src={img} alt="Logo" />
        </BannerContainer>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <TitleForm>LOGIN</TitleForm>

          {errors.email && <SpanErro style={{margin:"0px auto" }}>{errors.email.message}</SpanErro>}
          <Input type="email" placeholder="Seu email" {...register("email")} />

          {errors.password && <SpanErro style={{margin:"0px auto" }}>{errors.password.message}</SpanErro>}
          <Input type="password" placeholder="Sua senha" {...register("password")} />

          <Button type="submit" value="Entrar" />

          <Link to={"/register"}>Registre-se aqui</Link>
          <Link to={"/forgot-password"}>Esqueceu sua senha?</Link>
        </Form>
      </FormContainer>
    </Container>
  )
}
