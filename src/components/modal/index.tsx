import React from 'react';
import { CloseButton, ContentWrapper, ModalWrapper, Overlay } from './style';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  func?:()=>void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children,func }: ModalProps) => {
  if (!isOpen) return null;
  const optionalFunc = func ? func : ()=>{}

  return (
     <Overlay>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={()=>{onClose(),optionalFunc()}}>×</CloseButton>
        <ContentWrapper>{children}</ContentWrapper>
      </ModalWrapper>
    </Overlay>
  );
};
