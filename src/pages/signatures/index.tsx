import { Aside } from "../../components/aside"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "./style"


export const SignaturesPage = () => {


    return (
        <PrivateRoute>
            <Container>
                <Aside/>
                <p>Assinatura</p>

            </Container>
        </PrivateRoute>
    )
}