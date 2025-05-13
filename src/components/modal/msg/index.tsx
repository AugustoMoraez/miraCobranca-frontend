import { useState } from "react";
import { Button,Container,Modal,Msg } from "./style"
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

type prop = {
    sucess?:boolean,
    msg:string
    func?:()=>null
}

export const ModalMsg = ({msg,func,sucess}:prop) => {
    const[toggle,setToggle] = useState<"block"|"none">("block")
    return(
        <Container display={toggle}>
            <Modal>
                <Msg>
                    { sucess ? <FaCheckCircle/> : <MdCancel/>}
                    { msg }
                </Msg>
                <Button 
                onClick={()=>
                    {
                    setToggle("none");
                    func&&func()
                    }}>
                    OK
                </Button>
            </Modal>
        </Container>
    )
}