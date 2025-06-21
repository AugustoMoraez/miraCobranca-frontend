import { useState } from "react";
import { Container, Input, NoResults, Table, Td, Th } from "./style"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { customer } from "../../../../schemas/customer";
import { useGetWithParams } from "../../../../services/hooks/useGet";


 


export const CustomerList = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const limit = 10;
    const offset = page * limit;

    const { data: list, isPending, isError } = useGetWithParams<{count:number,data:customer[]}>(
    "/customer/all",
    { page, limit: 10 });
        console.log(list)
    return (
        <Container>
            <Input
                type="text"
                placeholder="Pesquisar por nome ou email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Table>
                <thead>
                    <tr>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        <Th>Cpf</Th>
                        <Th>Assinatura</Th>
                        <Th>Status</Th>
                        <Th>Ações</Th>
                    </tr>
                </thead>
                <tbody>
                     
                    {

                     list && list.data.map((customer) => (
                            <tr key={customer.id}>
                                <Td>{customer.name}</Td>
                                <Td>{customer.email}</Td>
                                <Td>{customer.cpf}</Td>
                                <Td>{customer.subscription_Status}</Td>
                                <Td>{customer.subscription_Status === 'ACTIVE' ? 'Ativa' : 'Inativa'}</Td>
                                <Td>
                                    <button aria-label="Excluir cliente">
                                        <MdDelete />
                                    </button>
                                    <button aria-label="Editar cliente">
                                        <FaEdit />
                                    </button>
                                </Td>
                                
                            </tr>
                        ))
                    }  
                    {
                        list?.data.length === 0 && 
                        <NoResults>
                            <td colSpan={6} >Nenhum cliente</td>
                        </NoResults>
                    }
                </tbody>
            </Table>
        </Container>
    );
};

