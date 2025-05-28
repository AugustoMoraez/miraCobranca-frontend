import { styled } from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  padding: 10px 16px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background-color: #004ecc;
  }
`;
