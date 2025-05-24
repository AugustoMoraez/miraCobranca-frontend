import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePostMutation } from "../../../../services/hooks/usePost";
import { Loading } from "../../../../components/load/register";
import { ModalMsg } from "../../../../components/modal/msg";
import { Button, Container, Form, Input, Title } from "../style"
import { GrSend } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formType } from "./schema/schema";
import { SpanErro } from "../../../../components/globalComponents";
 

export const ResetPasswordPage = () => {
    const [errMsg, setErrMsg] = useState("")
    const nav = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    useEffect(() => {
        if (!token) nav("/forgot-password")
    }, [token])   
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formType>({
        resolver: zodResolver(formSchema),
    })
    const { mutate: resetPassword, isError, isPending, isSuccess } = usePostMutation("/auth/reset-password")
    const onSubmit = ({ newPassword }: formType) => {
        console.log(newPassword,token)
        resetPassword({ newPassword, token }, {
            onError: (error: any) => {
                const responseMessage = error?.response?.data?.msg;
                const fallbackMessage = error.message || 'Erro desconhecido';
                setErrMsg(responseMessage || fallbackMessage);                
            }
        })
    };
    return (
        <Container>
            {isPending && <Loading msg="Aguarde" />}
            {isError && <ModalMsg msg={errMsg} />}
            {isSuccess ? <div className="">Sucesso</div> : 
                <>
                <Title>Informe sua nova senha:</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="new-password" placeholder="Nova senha"   {...register("newPassword")} />
                        <Button type="submit" value={"Enviar"} >
                            <GrSend />
                        </Button>

                    </Form>
                    {errors.newPassword && <SpanErro> {errors.newPassword.message}</SpanErro>}
                    <Link to={"/"}>Voltar</Link>
                </>
            }
        </Container>
    )
}