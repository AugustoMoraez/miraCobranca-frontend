import { useNavigate } from "react-router-dom";
import { Container,Wrapper } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { Loading } from "../../../../components/load/register";
import { ModalMsg } from "../../../../components/ModalMsg";
import { usePostMutation } from "../../../../services/hooks/usePost";
import { useEffect } from "react";


export const RequestVerifyAccountPage = () => {
    const nav = useNavigate();
    const {email} = useSelector((state: RootState) => state.user);
    const {mutate:requestToken,isPending,isError,isSuccess} = usePostMutation("/auth/request-verification")
    const handleSend = () => {
        requestToken({email},{
            onSuccess:(res)=>{
                setTimeout(() => {
                    nav("/");
                  }, 10000);
            }
        })
    };
    useEffect(()=>{
        if(!email) nav("/")
    },[email])
    return (
        <Container>


            {isPending && <Loading msg="Aguarde" />}
            {isError && <ModalMsg msg={"Houve algum erro tente novamente"} />}
            {isSuccess ?
                <Wrapper>
                    <p>Enviado com sucesso! <br /> Acesse o link que enviamos para o email: <br /> <b>{email}</b> <br /></p>
                    <button onClick={() => nav("/")}>OK</button>
                </Wrapper>
                :
                <Wrapper>
                    <h2>Confirme seu e-mail</h2>
                    <p>Enviaremos um link de verificação para:<br /> <strong>{email}</strong></p>
                    <button onClick={handleSend}>Enviar</button>
                </Wrapper>
            }
        </Container>

    )
}