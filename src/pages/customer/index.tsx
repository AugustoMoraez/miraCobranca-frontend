import { useState } from "react"
import { PageContent, Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { PrivateRoute } from "../auth/components/privateRoute"
import { FormCreateCustomer } from "../../components/forms/create-customer"
import { CustomerList } from "./components/customer-list"
import { useGet } from "../../services/hooks/useGet"
import { Loading } from "../../components/load/default"
import { customer } from "../../schemas/customer.schema"


export const CustomerPage = () => {
    const [modalCustomerOpen, setModalCustomerOpen] = useState(false);
    const { data: customer, isPending, isError } = useGet<{count:number,data:customer[]}>("/customer/all");
    console.log(customer)
    return (
        <PrivateRoute>
            <PageContent>
                {isPending && <Loading />}
                <Aside />
                <Container>
                    <Modal isOpen={modalCustomerOpen} onClose={() => setModalCustomerOpen(false)}>
                        <FormCreateCustomer />
                    </Modal>

                    <Header
                        title="Clientes"
                        options={[{ content: "+ Novo Cliente", func: () => setModalCustomerOpen(true) }]}
                    />

                    {isError && <div>Erro ao carregar os clientes.</div>}
                    {

                    customer &&<CustomerList data={customer.data ? customer.data : []} />
                    }
                </Container>
            </PageContent>
        </PrivateRoute>
    );
};
