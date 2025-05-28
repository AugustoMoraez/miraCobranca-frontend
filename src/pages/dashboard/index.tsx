import { PageContent } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { PrivateRoute } from "../auth/components/privateRoute"
import { Container } from "../../AppStyle"
import { Modal } from "../../components/modal"
import { FormCreateCustomer } from "../../components/forms/create-customer"
import { useState } from "react"


export const DashboardPage = () => {
     const [modalCustomerOpen, setModalCustomerOpen] = useState(false);

    return (
        <PrivateRoute>
            <PageContent>
                <Aside />
                <Container>
                    <Modal isOpen={modalCustomerOpen} onClose={() => setModalCustomerOpen(false)}>
                        <FormCreateCustomer />
                    </Modal>
                    <Header title="Dashboard" options={[
                        { content: "+ Novo Cliente", func: () => setModalCustomerOpen(true)},
                        { content: "+ Nova Assinatura", func: () => console.log("Assinatura") },
                    ]} />
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}