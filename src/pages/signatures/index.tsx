import { useState } from "react"
import { PageContent, Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { FormCreateSignature } from "../../components/forms/create-signature"
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { PrivateRoute } from "../auth/components/privateRoute"


export const SignaturesPage = () => {
    const [modalSignatureToggle, setModalSignatureToggle] = useState(false);

    return (
        <PrivateRoute>
            <PageContent>
                <Aside />
                <Container>
                    <Modal isOpen={modalSignatureToggle} onClose={() => setModalSignatureToggle(false)}>
                        <FormCreateSignature />
                    </Modal>
                    <Header title="Assinaturas" options={[
                        { content: "+ Nova Assinatura", func: () => setModalSignatureToggle(true)} 
                    ]} />
                </Container>

            </PageContent>
        </PrivateRoute>
    )
}