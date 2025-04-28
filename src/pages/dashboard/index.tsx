import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "./style"


export const DashboardPage = () => {


    return (
        <PrivateRoute>
            <Container>
                Dashboard
            </Container>
        </PrivateRoute>
    )
}