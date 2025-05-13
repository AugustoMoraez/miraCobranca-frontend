import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 10px;

  a{
    margin-top: 10px;
    color: #1E7A58;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  color: #1E7A58;
  text-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  font-size: 18px;
  text-align:center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: aliceblue;
  margin-top: 20px;

  display: flex;
  align-items: center;
  z-index: 98;
`;

export const Input = styled.input`
  flex: 1;
  height: 50px;
  outline: none;
  border: 2px solid #1E7A58;
  border-right: none;  
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  padding: 10px;
  font-size: 16px;
  margin: 0;
   z-index: 98;
`;

export const Button = styled.button`
  width: 60px;
  height: 50px;
  border: 2px solid #1E7A58;
  border-left: none;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #1E7A58;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
   z-index: 98;
  &:hover {
    cursor: pointer;
  }
`;

export const Shape = styled.div`
  position: absolute;
  width: 35vw;
  height: 35vw;
  background-color: rgba(30, 122, 88, 0.15);
  border-radius: 50%;
  top: -5%;
  left: -5%;
  z-index: 0;

  @media (max-width: 600px) {
    width: 50vw;
    height: 50vw;
    top: -10%;
    left: -10%;
  }
`;

export const Shape2 = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background-color: rgba(30, 122, 88, 0.1);
  border-radius: 50%;
  bottom: -8%;
  right: -8%;
  z-index: 0;

  @media (max-width: 600px) {
    width: 60vw;
    height: 60vw;
    bottom: -12%;
    right: -12%;
  }
`;
