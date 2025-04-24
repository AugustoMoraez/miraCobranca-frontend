import { Button, Caption, Card, Container, Content, Icon, Item, Title } from "./style"
import { FaCreditCard } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { TbDiscount } from "react-icons/tb";
import { JSX } from "react";

export const SubscriptionPage =()=>{
    type Item = {
        icon:JSX.Element,
        content:string
    }
    const contentItem:Item[] =[
        {icon:<FaCreditCard/>,content:"Crie cobrancas recorrentes ilimitadas via cartão de crédito."},
        {icon:<IoDocumentTextOutline/>,content:"Tenha acesso a relatorios detalhados sobre seus recebimentos."},
        {icon:<FaRegUser/>,content:"Cadastre e gerencie seus clientes com facilidade."},
        {icon:<TbDiscount/>,content:"Taxa de 3,99% + 0,39 centavos por cobrança."}
    ]


    return(
        <Container>
            <Card>
                <div>
                <Title>Plano Premium</Title>
                <Caption>R$99,99/mês</Caption>
                </div>
                {
                    contentItem.map((item,index)=>(

                        <Item key={index}>
                            <Icon>{item.icon}</Icon>
                            <Content>{item.content}</Content>
                        </Item>
                    ))
                }
                <Button>Comece agora</Button>
            </Card>
        </Container>
    )
}