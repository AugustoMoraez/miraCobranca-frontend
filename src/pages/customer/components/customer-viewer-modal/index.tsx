import { Modal } from "../../../../components/modal"
import { customer } from "../../../../schemas/customer"
import { Actions, Button, CloseButton, Container, InfoRow, Input, InputGroup, Label, ModalContainer, TextArea, Title } from "./style"

type prop = {
    toggle: boolean,
    func: () => void,
    data: customer
}

export const CustomerViewerModal = ({ toggle, func, data }: prop) => {
    return (
        <Modal isOpen={toggle} onClose={() => func()}>
            <ModalContainer>
               
                <Title>Cliente</Title>

                <Label>Nome</Label>
                <Input value={data.name} readOnly />

                <InputGroup>
                    <div style={{ flex: 1 }}>
                        <Label>Número</Label>
                        <Input type={"number"}  readOnly />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Label>CPF</Label>
                        <Input value={data.cpf} readOnly />
                    </div>
                </InputGroup>

                <Label>Email</Label>
                <Input value={data.email} readOnly />

                <Label>Endereço</Label>
                <TextArea  readOnly />

                <InfoRow>
                    <div>Assinatura: <span>[{"data.status"}]</span></div>
                    <div>Plano: <span>[{"data.plan"}]</span></div>
                </InfoRow>

                <Actions>
                    <Button variant="outline">Editar</Button>
                    <Button>Salvar</Button>
                </Actions>
            </ModalContainer>

        </Modal>
    )
}