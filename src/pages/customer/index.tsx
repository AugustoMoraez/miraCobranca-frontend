import { Aside } from "../../components/aside"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "./style"


export const CustomerPage = () => {


    return (
        <PrivateRoute>
            <Container>
                <Aside/>
                <p>Clientes</p>

            </Container>
        </PrivateRoute>
    )
}