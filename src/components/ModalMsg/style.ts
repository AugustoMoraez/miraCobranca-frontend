import styled from "styled-components";

type prop = {
    display:"block"|"none"
}
export const Container = styled.div<prop>`
    display: ${prop => prop.display};
    position: absolute;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
`;
export const Modal = styled.div`
   
    max-width: 300px;
    
     
    border-radius: 5px;
    padding: 10px;
    height:auto;
    background-color: aliceblue;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;
export const Msg = styled.p`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size:18px ;
    svg{
        color: #1E7A58;
        font-size: 50px;
    }

`;
export const Button = styled.button`
    width: 100%;
  text-align: center;
  padding: 15px;
  margin: 15px 0px 5px 0px;
  border-radius: 5px;
  background-color: #1E7A58;
  outline: none;
  border: 1px solid #1E7A58;
  color: #fff;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;