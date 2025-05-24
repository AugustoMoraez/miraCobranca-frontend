import styled from "styled-components";


export const Container = styled.div`
    background-color:rgb(235, 235, 235);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
 
`
export const Card = styled.div`
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0px 10px 50px #333;
    width: 100%;
    max-width: 450px;
    height: 600px;
    padding: 50px;
    margin: 10px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
 
`
export const Title = styled.h1`
    font-size:40px ;
    color: #0D4937;
`
export const Caption = styled.h2`
    font-size:30px ;
    color: #0D4937;
 
`
export const Item = styled.div`
    color: #0D4937;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
`
export const Content = styled.p`
   font-weight:500;
   margin-right: auto;
 
`
export const Icon = styled.div`
  padding-right: 10px;
  height: 30px;
   svg{
     font-size: 30px;
   }
 
`
export const Button = styled.button`
    background-color: #0D4937;
    color: #fff;
    padding: 15px ;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: lighter;
    font-size: 20px;
 
`
