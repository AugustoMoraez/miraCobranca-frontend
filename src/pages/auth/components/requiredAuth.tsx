import { JSX } from "react"
import { useNavigate } from "react-router-dom"

 
 
type prop ={
    children:JSX.Element
} 

export const RequiredAuth = ({children}:prop) => {
    const navigate = useNavigate();
    const token  = true;

    if(token){
    return children
  }else{
    navigate("/")
    return null;
  }
}
