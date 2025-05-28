import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 16px;
`;
export const ModalWrapper = styled.div`
  background: white;
  border-radius: 8px;
  display: inline-block;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  max-height: 90vh;
  max-width: 90vw; 
  display: flex;
  justify-content: center;
  align-items: center;
`;