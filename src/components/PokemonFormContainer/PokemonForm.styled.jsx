import styled from "styled-components"; 

export const FormContainer = styled.form`
  margin-bottom: 20px;
  text-align: center;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  text-align: center;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 450px) {
    margin-top: 10px;
  }
`;


