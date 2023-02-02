import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1rem;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: center;
  gap: 1rem;
  width: 100%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: space-between;
  width: 100%;
`;

export const StyledOutput = styled.output`
  align-self: flex-end;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 79%;
  color: rgb(111, 111, 111);
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;