import { useState } from "react";
import { Container, Input, NoResults, Pagination, Table, Td, Th } from "./style"
import { customer } from "../../../../schemas/customer";
import { useGetWithParams } from "../../../../services/hooks/useGet";





export const CustomerList = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const limit = 10;
    const offset = (page - 1) * limit;



    const { data: list, isPending } = useGetWithParams<{ count: number, data: customer[] }>(
        "test/customer/all",
        { limit, offset });
    return (
        <>


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
                            <Th>Cpf</Th>
                            <Th>Assinatura</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {isPending &&
                            <NoResults>
                                <td colSpan={6} >Carregando...</td>
                            </NoResults>}
                        {

                            list && list.data.map((customer) => (
                                <tr key={customer.id}>
                                    <Td>{customer.name}</Td>
                                    <Td>{customer.cpf}</Td>
                                    <Td>{"Sem plano"}</Td>
                                </tr>
                            ))
                        }
                        {
                            list?.data.length === 0 &&
                            <NoResults>
                                <td colSpan={6} rowSpan={3} >Nenhum cliente</td>
                            </NoResults>
                        }
                    </tbody>
                    {
                        list &&
                        <Pagination>
                            <button
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                            >
                                Anterior
                            </button>

                            <span>Página {page}</span>

                            <button
                                onClick={() =>
                                    setPage((prev) =>
                                        list.count > prev * limit ? prev + 1 : prev
                                    )
                                }
                                disabled={list.count <= page * limit}
                            >
                                Próxima
                            </button>
                        </Pagination>
                    }

                </Table>
            </Container>
        </>
    );
};

