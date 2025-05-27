import { Aside } from "../../components/aside"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "./style"


export const ConfigPage = () => {


    return (
        <PrivateRoute>
            <Container>
                <Aside/>
                <p>Config</p>

            </Container>
        </PrivateRoute>
    )
}