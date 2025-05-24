import { Button, Caption, Card, Container, Content, Icon, Item, Title } from "./style"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { plans } from "./data";
import { api } from "../../services/axiosInstancy";
import { clearUser } from "../../redux/slices/user/user";
import {fetchData} from "./data"





export const SubscriptionPage = () => {
  const [clicked, setClick] = useState(false)
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { token, AccountVerification, stripe_id, subscription_Status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (subscription_Status === "ACTIVE") {
      nav("/dashboard");
      return;
    }

    if (!token || !AccountVerification) {
      nav("/");
    }
  }, [token, subscription_Status, AccountVerification, nav]);




  const handleCheckout = async (plan: "basic" | "pro" | "premium") => {
    setClick(true)
    api.post<fetchData>(`/stripe/checkout/${stripe_id}/${plan}`, undefined)
      .then(response => {
        console.log(response.data);
        dispatch(clearUser());
        window.location.href = response.data.sessionURL;
      })
      .catch(error => {
        alert(error);
        setClick(false);  
      });
  };

  return (


    <Container>
      {
        plans.map((plan) => (

          <Card>
            <div>
              <Title>{plan.title}</Title>
              <Caption>{plan.caption}</Caption>
            </div>
            {plan.benefits.map((item, index) => (
              <Item key={index}>
                <Icon>{item.icon}</Icon>
                <Content>{item.content}</Content>
              </Item>
            ))}
            <Button onClick={() => handleCheckout(plan.name)} disabled={clicked}>Comece agora</Button>
          </Card>
        ))
      }
    </Container>

  );
};