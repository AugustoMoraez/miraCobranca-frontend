import { useForm } from "react-hook-form";
import { Modal } from "../../../../components/modal";
import { customer } from "../../../../schemas/customerSchema";
import {
  Actions,
  Edit,
  InfoRow,
  Input,
  InputGroup,
  Label,
  ModalContainer,
  Save,
  TextArea,
  Title,
} from "./style";
import { useEffect, useState } from "react";
import { usePut } from "../../../../services/hooks/usePut";
import { ModalMsg } from "../../../../components/ModalMsg";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerEditSchema, customerEditType } from "./schemas/customerEdit.schema";
import { SpanErro } from "../../../../components/globalComponents";

type Prop = {
  toggle: boolean;
  func: () => void;
  data: customer;
  refetchList:()=>void;
};


export const CustomerViewerModal = ({ toggle, func, data,refetchList }: Prop) => {
  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {  errors ,isDirty, isSubmitting },
  } = useForm<customerEditType>({
      resolver: zodResolver(customerEditSchema),});

  useEffect(() => {
  if (data) {
    reset({
      name: data.name,
      cpf: data.cpf,
      email: data.email,
      phone: data.phone || "",
      address: data.address || "",
    });
  }
  }, [data, reset]);

  const {mutate,isError,isSuccess,reset:mutatioReset}= usePut(`/customer/${data.id}`)

  const onSubmit = (formData: customerEditType) => {
    mutate(formData,{
      onSuccess:()=>{
        console.log("🔧 Dados para salvar:", formData);
        refetchList()
        setEdit(false)
      },
      onError:(e:any)=>{
        console.log(e)
      }, 
    })
  };

  return (
    <Modal 
    isOpen={toggle} 
    onClose={() => 
      {
        func(),
        reset(),
        setEdit(false), 
        mutatioReset()
      }} 
    func={()=>setEdit(false)}
    >
      {isSuccess && <ModalMsg msg="Editado"   sucess/>}
      {isError && <ModalMsg msg="Tente novamente"  func={func}  />}
      <ModalContainer>
        <Title>{edit ? "Editar":"Cliente"}</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input disabled={!edit} {...register("name")} />
          {errors.name && <SpanErro>Nome invalido</SpanErro>}

          <InputGroup>
            <div style={{ flex: 1 }}>
              <Label>Telefone</Label>
              <Input disabled={!edit} {...register("phone")} />
              {errors.phone && <SpanErro>Numero invalido</SpanErro>}
            </div>
            <div style={{ flex: 1 }}>
              <Label>CPF</Label>
              <Input disabled={!edit} {...register("cpf")} />
              {errors.cpf && <SpanErro>cpf invalido</SpanErro>}
            </div>
          </InputGroup>

          <Label>Email</Label>
          <Input disabled={!edit} {...register("email")} />
          {errors.email && <SpanErro>email invalido</SpanErro>}

          <Label>Endereço</Label>
          <TextArea disabled={!edit} {...register("address")} />

          <InfoRow>
            <div>Assinatura: <span>{data.subscription_Status ==="NULL" ? "INATIVA" : "ATIVA"}</span></div>
            <div>Plano: <span> Basico </span></div>
          </InfoRow>

          <Actions>
            <Edit
              $variant="outline"
               
              onClick={() => {
                if (edit) reset();  
                setEdit(!edit);
              }}
            >
              {edit ? "Cancelar" : "Editar"}
            </Edit>
            
            <Save value={"Salvar"} type="submit" disabled={!edit || isSubmitting || !isDirty}/>
              
          </Actions>
        </form>
      </ModalContainer>
    </Modal>
  );
};
