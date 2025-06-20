import { styled } from "styled-components";


export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  margin: auto;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  border-bottom: 2px solid #ccc;
  padding: 0.5rem;
`;

export const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
`;

export const NoResults = styled.tr`
  td {
    text-align: center;
    padding: 0.5rem;
    color: #888;
  }
`;
