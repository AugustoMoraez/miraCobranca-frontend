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

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #218838;
        }
    }
`;
