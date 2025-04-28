import {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, FormContainer, Form,  Title,  } from "./style";
import { registerFormSchema, registerFormType } from "../../../schemas/registerUser.schema";
import { StepOne } from "./steps/stepOne";
import { StepTwo } from "./steps/stepTwo";
import { usePost } from "../../../services/usePost";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/user";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const [stepHidden, setStepHidden] = useState<"1"|"2">("1");
    const dispatch = useDispatch();
    const nav = useNavigate()
    const formHook = useForm<registerFormType>({
        resolver: zodResolver(registerFormSchema),
    });

    const {mutate:register} = usePost<registerFormType>("/user/register")

    const onSubmit = (data: registerFormType) => {
        register(data, {
            onSuccess: (res) => {
              console.log("registro bem-sucedido:", res)
              dispatch(setUser(res))
              nav("/dashboard")  
            },
            onError: (err: any) => {
              console.error("Erro no registro:", err.response?.data?.message || err.message)
              alert(err.response?.data?.message || "Erro ao fazer registro")
            },
          })
    };

    return (
        <Container>
            <Title>
                {stepHidden == "1" ? "Registro de conta" : "Endereço" }                
            </Title>
            <FormContainer>
                <Form onSubmit={formHook.handleSubmit(onSubmit)}>

                    <StepOne 
                    formHooK={formHook} 
                    func={(step )=> setStepHidden(step)} 
                    stepHidden={stepHidden} />
                    
                    <StepTwo 
                    formHooK={formHook} 
                    func={()=> setStepHidden("1")} 
                    stepHidden={stepHidden} />
                    
                </Form>
            </FormContainer>
        </Container>
    );
};