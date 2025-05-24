import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Wrapper } from "./style";
import { useEffect } from "react";
import { usePostAuto } from "../../../../services/hooks/usePost";
import { Loading } from "../../../../components/load/register";
import { ModalMsg } from "../../../../components/modal/msg";


export const VerifyAccountPage = () => {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    useEffect(() => {
        if (!token) nav("/request-verification-account")
    }, [token])

    const { isPending, isError, isSuccess } = usePostAuto("/auth/verify-account", { token })
   
    return (
        <Container>

            {isPending && <Loading msg="Aguarde" />}
            {isError && <ModalMsg msg={"Houve algum erro tente novamente"} />}
            {isSuccess &&
                <Wrapper>
                    <h2>Sua conta foi verificada com sucesso!</h2>

                    <button onClick={()=> nav("/")}>Voltar</button>
                </Wrapper>}

        </Container>

    )
}