import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index: 99;
`;

export const Loader = styled.div`
    color: #fff;
    font-weight: 600;
    position: relative;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 70px;
    height: 100px;
    background: #fff;
    border-radius: 4px;
    
    &::before{
        content: '';
        position: absolute;
        width: 44px;
        height: 15px;
        left: 50%;
        top: 0;
        background-image:
        radial-gradient(ellipse at center, #0000 24%,#0A4634 25%,#0A4634 64%,#0000 65%),
        linear-gradient(to bottom, #0000 34%,#0A4634 35%);
        background-size: 12px 12px , 100% auto;
        background-repeat: no-repeat;
        background-position: center top;
        transform: translate(-50% , -65%);
        box-shadow: 0 -3px rgba(0, 0, 0, 0.25) inset;
    }

    &::after{
        content: '';
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        width: 66%;
        height: 60%;
        background: linear-gradient(to bottom, #1E7A58 30%, #0000 31%);
        background-size: 100% 16px;
        animation: writeDown 2s ease-out infinite;
    }

 @keyframes writeDown {
    0% { height: 0%; opacity: 0;}
    20%{ height: 0%; opacity: 1;}
    80% { height: 65%; opacity: 1;}
    100% { height: 65%; opacity: 0;}
 }
`;
 