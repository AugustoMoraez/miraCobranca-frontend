import { Aside } from "../../components/aside"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "./style"


export const DashboardPage = () => {


    return (
        <PrivateRoute>
            <Container>
                <Aside/>
                <p>Dashboard</p>

            </Container>
        </PrivateRoute>
    )
}