import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container, Form, Input, Button, FormContainer, BannerContainer, LogoBanner, TitleForm } from "./style"
import img from "../../../assets/img/logobanner.png"
import { Link } from "react-router-dom"
import { useLogin } from "./useLogin"

// Schema de validação com Zod
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

// Tipagem baseada no schema
type LoginFormData = z.infer<typeof loginSchema>

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate: login, isPending } = useLogin()

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: (res) => {
        console.log("Login bem-sucedido:", res)
        // Exemplo: localStorage.setItem("token", res.token)
        // navigate("/dashboard")
      },
      onError: (err: any) => {
        console.error("Erro no login:", err.response?.data?.message || err.message)
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

          <Input type="email" placeholder="Seu email" {...register("email")} />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

          <Input type="password" placeholder="Sua senha" {...register("password")} />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

          <Button type="submit" value="Entrar" />
          <Link to={"/register"}>Não possui conta? Registre-se</Link>
        </Form>
      </FormContainer>
    </Container>
  )
}
