import { styled } from "styled-components";

export const Container = styled.div``;

export const ModalContainer = styled.form`
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  
  position: relative;
`;

export const Title = styled.h2`
  color: #0A4634;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #0A4634;
  margin-bottom: 0.3rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  resize: none;
  min-height: 80px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-weight: bold;
  color: #0A4634;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  gap: 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'outline' }>`
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === 'outline' ? '2px solid #0A4634' : 'none'};
  background-color: ${({ variant }) =>
    variant === 'outline' ? '#fff' : '#0A4634'};
  color: ${({ variant }) =>
    variant === 'outline' ? '#0A4634' : '#fff'};

  &:hover {
    opacity: 0.9;
  }
`;
