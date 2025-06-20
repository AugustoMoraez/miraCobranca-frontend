import { useState } from "react";
import { Container, Input, NoResults, Table, Td, Th } from "./style"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { customer } from "../../../../schemas/customer.schema";


type Props = {
    data: customer[];
};


export const CustomerList = ({ data }: Props) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const limit = 10;
    const offset = page * limit;



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

                      data &&  data.map((customer) => (
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

                </tbody>
            </Table>
        </Container>
    );
};
