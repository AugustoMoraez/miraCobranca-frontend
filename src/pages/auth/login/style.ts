import styled from 'styled-components';
 

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
 
`
export const FormContainer = styled.div`
display: flex;
width: 100%;
max-width: 900px;
height: 500px;
background-color: #FCFAF7;
box-shadow: 5px 5px 20px #333;
border-radius: 10px;
`
export const BannerContainer = styled.div`
height: 100%;
width: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

`
export const LogoBanner = styled.img`
  width: 100%;
  padding: 0px 10px;
`;

 

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0A4634;
  padding: 5px;
  height: 100%;
  width: 50%;
  border-bottom-right-radius: 10px;
  border-top-right-radius:10px;
  a{
    color: #fff;
  }
`
export const TitleForm = styled.h1`
  color: aliceblue;
  margin-bottom:20px;
  font-weight: lighter;

`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding:15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: none;
  outline: none;
  border: 1px solid #537668;
  color: #fff;

  &::placeholder{
    color: #FEFBFD;
    font-weight: lighter;
  }
  &:hover{
    opacity: 0.9;
  }
`

export const Button = styled.input`
  width: 100%;
  max-width: 300px;
  padding:15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #1E7A58;
  outline: none;
  border: 1px solid #1E7A58;
  color: #fff;

  
  &:hover{
    opacity: 0.9;
    cursor: pointer;
  }
`

