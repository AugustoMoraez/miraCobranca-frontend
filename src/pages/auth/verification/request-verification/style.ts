import styled from "styled-components";

 


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 5px 5px   20px #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    button {
        padding: 0.5rem 1rem;
        background-color:rgb(29, 124, 95);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            opacity:0.7;
        }
    }
`;

