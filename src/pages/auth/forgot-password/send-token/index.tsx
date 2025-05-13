import { Link } from "react-router-dom";
import { Button, Container, Form, Input, Shape, Shape2, Title } from "../style"
import { GrSend } from "react-icons/gr";
import { usePostMutation } from "../../../../services/usePost";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formType } from "./schema/schema";
import { SpanErro } from "../../register/style";
import { ModalMsg } from "../../../../components/modal/msg";
import { Loading } from "../../../../components/load/register";
import { useState } from "react";

export const ForgotPasswordPage = () => {
    const [errMsg, setErrMsg] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formType>({
        resolver: zodResolver(formSchema),
    })
    const { mutate: requestToken, error, isPending, isSuccess } = usePostMutation("/auth/forgot-password")
    const onSubmit = ({ email }: formType) => {
        requestToken({ email }, {
            onError: (error: any) => {
                const responseMessage = error?.response?.data?.message;
                const fallbackMessage = error.message || 'Erro desconhecido';
                setErrMsg(responseMessage || fallbackMessage);
                console.log(error)
            }
        })
    };
    return (
        <Container>
            {isPending && <Loading msg="Enviando" />}
            {error && <ModalMsg msg={errMsg} />}
            {isSuccess && <ModalMsg msg={"Enviamos o link para seu email!"} sucess={true} />}
            <Shape />
            <Shape2 />
            <Title>Nós enviaremos um link de redefinição para você.</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="email" placeholder="Seu email" className={errors.email && "erro"} {...register("email")} />
                <Button type="submit" value={"Enviar"} >
                    <GrSend />
                </Button>
            </Form>
            {errors.email && <SpanErro style={{ margin: "0px auto" }}>{errors.email.message}</SpanErro>}
            <Link to={"/"}>Voltar</Link>
        </Container>
    )
}