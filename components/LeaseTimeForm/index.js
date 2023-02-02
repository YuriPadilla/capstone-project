import {
  StyledForm,
  StyledFormContainer,
  StyledFieldset,
  StyledInputContainer,
  StyledOutput,
  StyledButtonContainer,
} from "./LeaseTimeForm.styled.js";

export default function LeaseTimeForm() {
  return (
    <StyledForm>
      <StyledFieldset>
        <StyledInputContainer>
          <label htmlFor="from">*From:</label>
          <input type="date" id="from" name="from" required />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="until">*Until:</label>
          <input type="date" id="until" name="until" required />
        </StyledInputContainer>
      </StyledFieldset>
      <output>
        {2}days: ${25}
      </output>
    </StyledForm>
  );
}
