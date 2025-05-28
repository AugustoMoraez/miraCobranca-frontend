import React from 'react';
import { CloseButton, ContentWrapper, ModalWrapper, Overlay } from './style';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
     <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ContentWrapper>{children}</ContentWrapper>
      </ModalWrapper>
    </Overlay>
  );
};
