import { PageContent } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "../../AppStyle"
import { api } from "../../services/axiosInstancy"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Loading } from "../../components/load/register"
import { useState } from "react"


export const ConfigPage = () => {
    const[load,setLoad]=useState(false)
    const { stripe_connect_id} = useSelector((state: RootState) => state.user);
    const createAccountOnboardingLink = async () => {
        if (!stripe_connect_id) {
            alert("Conta Stripe Connect não encontrada.");
            return;
        }
        setLoad(true)
        try {
            const response = await api.get(`/stripe/account-link-generate/${stripe_connect_id}`);
            const { url } = response.data;

            if (url) {
                window.location.href = url; // Redireciona para o onboarding da Stripe
            } else {
                alert("Erro ao gerar link de onboarding.");
            }
        } catch (error) {
            console.error("Erro ao gerar link de onboarding:", error);
            alert("Erro ao conectar com o Stripe.");
        }
        setLoad(false)
    }

    return (
        <PrivateRoute>
            <PageContent>
                {load && <Loading msg="Aguarde"/>}
                <Aside/>
                <Container>
                    <Header title="Configurações" options={[
                        {content:"Meus Dados", func:createAccountOnboardingLink}
                    ]}/>

                </Container>
            </PageContent>
        </PrivateRoute>
    )
}