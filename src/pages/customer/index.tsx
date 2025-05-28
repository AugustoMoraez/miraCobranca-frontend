import { PageContent,Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { PrivateRoute } from "../auth/components/privateRoute"
 


export const CustomerPage = () => {


    return (
        <PrivateRoute>
            <PageContent>
                <Aside />
                <Container>
                    <Header title="Clientes" options={[
                        { content: "+ Novo Cliente", func: () => console.log("Cliente") },
                       
                    ]} />
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}