import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;


`

export const Title = styled.h2`
    font-weight: 300;
    cursor: default;

`;
export const HeaderOptions = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;
export const Button = styled.button`
     width: 100%;
     max-width: 150px;
     height: 30px;
     margin-left: 10px;
     border: none;
     border-radius: 5px;
     background-color: #1E7A58;
     background-color: #264653 ;
     color: #fff;
     cursor: pointer;
    
    &:hover{
        opacity: 0.8;
    }
`;