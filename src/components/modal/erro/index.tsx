import { useState } from "react";
import { Button,Container,Modal,Msg } from "./style"
import { MdCancel } from "react-icons/md";
type prop = {
    
    msg:string
    func?:()=>null
}


export const ModalErro = ({msg,func}:prop) => {
    const[toggle,setToggle] = useState<"block"|"none">("block")
    return(
        <Container display={toggle}>
            <Modal>
                <Msg>
                    <MdCancel/>
                    {msg}
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