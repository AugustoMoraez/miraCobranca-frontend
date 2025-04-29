import { useForm } from "react-hook-form"
import { loginSchema,LoginFormDataType } from "../../../schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container, Form, Input, Button, FormContainer, BannerContainer, LogoBanner, TitleForm } from "./style"
import img from "../../../assets/img/logobanner.png"
import { Link, useNavigate } from "react-router-dom"
import { usePost } from "../../../services/usePost"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/slices/user"
import { SpanErro } from "../register/style"

 
type LoginData = {
  email: string
  password: string
}

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
  const { mutate: login,error } = usePost<LoginData>("/auth/login")

  const onSubmit = (data: LoginFormDataType) => {
    login(data, {
      onSuccess: (res) => {
        console.log("Login bem-sucedido:", res)
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
          <Link to={"/register"}>Não possui conta? Registre-se</Link>
        </Form>
      </FormContainer>
    </Container>
  )
}
