import { PageContent,Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { PrivateRoute } from "../auth/components/privateRoute"


export const SignaturesPage = () => {


    return (
        <PrivateRoute>
            <PageContent>
                <Aside />
                <Container>
                    <Header title="Assinaturas" options={[
                        { content: "+ Nova Assinatura", func: () => console.log("assomatira") },

                    ]} />
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}