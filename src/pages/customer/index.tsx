import { useState } from "react"
import { PageContent, Container } from "../../AppStyle"
import { Aside } from "../../components/aside"
import { Header } from "../../components/header"
import { Modal } from "../../components/modal"
import { PrivateRoute } from "../auth/components/privateRoute"
import { FormCreateCustomer } from "../../components/forms/create-customer"
import { CustomerList } from "./components/customer-list"


export const CustomerPage = () => {
    const [modalCustomerOpen, setModalCustomerOpen] = useState(false);
   
    
    return (
        <PrivateRoute>
            <PageContent>
                
                <Aside />
                <Container>
                    <Modal isOpen={modalCustomerOpen} onClose={() => setModalCustomerOpen(false)}>
                        <FormCreateCustomer func={()=>setModalCustomerOpen(false)}/>
                    </Modal>

                    <Header
                        title="Clientes"
                        options={[{ content: "+ Novo Cliente", func: () => setModalCustomerOpen(true) }]}
                    />

                     
                   

                    <CustomerList/>
                    
                </Container>
            </PageContent>
        </PrivateRoute>
    );
};
