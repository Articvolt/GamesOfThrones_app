// style.tsx
import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 500px;
  background-color: #f9f9f9;
`;

export const StyledInput = styled.input`
  display: block;
  margin: 10px 0;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
