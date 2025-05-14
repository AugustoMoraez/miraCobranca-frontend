import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
export const Title = styled.h1`
  color: #0A4634;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const FormContainer = styled.div`
  
  width: 100%;
  max-width: 500px;
  background-color: rgb(255, 255, 255);
  box-shadow: 5px 5px 20px #333;
  border-radius: 10px;
   
  @media (max-width: 480px) {
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }
`;
 
 
export const InputOption = styled.select`
  max-height: 200px;
  overflow-y: auto;
  margin: auto;
  width: 100%;
  padding: 15px;
  background-color: #1E7A58;
  color: #fff;
  border-radius: 5px;
  outline: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px;
  }
`;
export const Option = styled.option``;

export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 20px 20px;
  
  .hidden {
    height: 0px;
    display: none;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;


export const Input = styled.input`
  width: 100%;
  padding: 15px;
  
  border-radius: 5px;
  background: none;
  outline: none;
  border: 1px solid #537668;
  color: #333;

  &::placeholder {
    color: #333;
    font-weight: lighter;
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;


export const Label = styled.label`
  margin-right: auto;
  margin-left: 5px;
  margin-top: 10px;
  font-size:12px ;
  color:rgb(108, 108, 108);
`;
export const NextButton = styled.div`
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

export const SubmitButton = styled.input`
  width: 100%;
  text-align: center;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  }
`;

export const FormStep = styled.div`
  height: auto;
  width: 100%;

`
export const BackForm = styled.p`
  
  font-size:15px ;
  cursor: pointer;
  color:#1E7A58;
  font-weight: bold;
`;
 