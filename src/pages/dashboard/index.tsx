import { PageContent } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "../../AppStyle"


export const DashboardPage = () => {


    return (
        <PrivateRoute>
            <PageContent>
                <Aside/>
                <Container>
                    <Header title="Dashboard" options={[
                        {content:"+ Novo Cliente",func:()=>console.log("Cliente")},
                        {content:"+ Nova Assinatura",func:()=>console.log("Assinatura")},
                    ]}/>
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}