 import { Loader,Container } from "./styled";
 
type prop = {
  msg:string
}

export const Loading  = ( {msg}:prop) => {
  return (
    <Container>
        <Loader><br /><br /><br /><br /><br />{msg}</Loader>  
    </Container>
  );
};
 