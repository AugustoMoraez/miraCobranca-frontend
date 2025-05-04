import { Button, Caption, Card, Container, Content, Icon, Item, Title } from "./style"
import { FaCreditCard } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { TbDiscount } from "react-icons/tb";
import { JSX, useEffect } from "react";
import { Loading } from "../../components/load/register";
import { ModalErro } from "../../components/modal/erro";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useGet } from "../../services/useGet";

type Item = {
    icon: JSX.Element,
    content: string
}
type data = {
    sessionID:string,
    sessionURL:string
}
const contentItem: Item[] = [
    { icon: <FaCreditCard />, content: "Crie cobrancas recorrentes ilimitadas via cartão de crédito." },
    { icon: <IoDocumentTextOutline />, content: "Tenha acesso a relatorios detalhados sobre seus recebimentos." },
    { icon: <FaRegUser />, content: "Cadastre e gerencie seus clientes com facilidade." },
    { icon: <TbDiscount />, content: "Taxa de 3,99% + 0,39 centavos por cobrança." }
]

export const SubscriptionPage = () => {
    const nav = useNavigate();
    const { token, stripe_id } = useSelector((state: RootState) => state.user);
  
    useEffect(() => {
      if (!token) {
        nav("/");
      }
      
    }, [token, nav]);
  
    const { data, isPending, isError } = useGet<data>(`/stripe/checkout/${stripe_id}`);
  
    const redirect = () => {
      if (data) {
        window.location.href = data.sessionURL;  
      }
    };
  
    return (
      <>
        {isPending && <Loading msg="Aguarde" />}
        {isError && <ModalErro msg="URL não obtida" />}
  
        <Container>
          <Card>
            <div>
              <Title>Plano Premium</Title>
              <Caption>R$99,99/mês</Caption>
            </div>
            {contentItem.map((item, index) => (
              <Item key={index}>
                <Icon>{item.icon}</Icon>
                <Content>{item.content}</Content>
              </Item>
            ))}
            <Button onClick={redirect}>Comece agora</Button>
          </Card>
        </Container>
      </>
    );
  };