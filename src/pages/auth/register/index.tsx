import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, FormContainer, Form, Title, } from "./style";
import { registerFormSchema, registerFormType } from "../../../schemas/registerUser.schema";
import { usePostMutation } from "../../../services/hooks/usePost";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/user/user";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/load/register";
import { ModalMsg } from "../../../components/ModalMsg";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";

export const RegisterPage = () => {
  const [stepHidden, setStepHidden] = useState<"1" | "2">("1");
  const [msgErro, setMsgErro] = useState<string>("");
  const dispatch = useDispatch();
  const nav = useNavigate()
  const formHook = useForm<registerFormType>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate: register, isPending, isError } = usePostMutation<registerFormType>("/user/register")

  const onSubmit = (data: registerFormType) => {
    register(data, {
      onSuccess: (res) => {
        dispatch(setUser(res));
        nav("/request-verify-account");

      },
      onError: (err: any) => {
        setStepHidden("1");
        setMsgErro(err.response?.data?.message || "Erro interno: Tente novamente mais tarde");
      },
    });
  };

  return (
    <>
      {isPending && <Loading msg="Registrando" />}
      {isError && <ModalMsg msg={msgErro} />}
      <Container>
        <Title>
          {stepHidden == "1" ? "Registro de conta" : "Endereço"}
        </Title>
        <FormContainer>
          <Form onSubmit={formHook.handleSubmit(onSubmit)}>

            <StepOne
              formHooK={formHook}
              func={(step) => setStepHidden(step)}
              stepHidden={stepHidden} />

            <StepTwo
              formHooK={formHook}
              func={() => setStepHidden("1")}
              stepHidden={stepHidden} />

          </Form>
        </FormContainer>
      </Container>
    </>
  );
};