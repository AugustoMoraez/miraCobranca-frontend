import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
   
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Loader = styled.span`
   
  transform: translateZ(1px);
   
&:after {
  content: '$';
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  line-height:40px;
  font-size: 32px;
  font-weight: bold;
  color:#0a4634;
  background:rgb(255, 255, 255);
   
  border: 4px double ;
  box-sizing: border-box;
  box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
  animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes coin-flip {
  0%, 100% {
    animation-timing-function: cubic-bezier(3, 1, 2, 2);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
`;
 