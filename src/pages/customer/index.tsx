import { useState } from "react"
import { PageContent, Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { PrivateRoute } from "../auth/components/privateRoute"
import { FormCreateCustomer } from "../../components/forms/create-customer"



export const CustomerPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <PrivateRoute>
            <PageContent>
                <Aside />
                <Container>
                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                        <FormCreateCustomer/>
                    </Modal>
                    <Header title="Clientes" options={[
                        { content: "+ Novo Cliente", func: () => setModalOpen(true) },
                    ]} />
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}