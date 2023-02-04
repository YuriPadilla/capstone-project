import {
  StyledForm,
  StyledFormContainer,
  StyledFieldset,
  StyledInputContainer,
  StyledOutput,
  StyledButtonContainer,
  StyledDescriptionUl,
} from "./LeaseTimeForm.styled.js";

export default function LeaseTimeForm({
  onLeaseDays,
  initialDate,
  finalDate,
  getLeaseDays,
  howManyBikes,
}) {
  return (
    <StyledForm onChange={onLeaseDays}>
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
        {initialDate !== undefined &&
        finalDate !== undefined &&
        finalDate >= initialDate &&
        howManyBikes >= 1 ? (
          <StyledDescriptionUl>
            <li>
              <strong>Selected bikes:</strong> {howManyBikes} bike
              {howManyBikes > 1 && "s"}
            </li>
            <li>
              <strong>Lease time:</strong> {getLeaseDays()} day
              {getLeaseDays() > 1 && "s"}
            </li>
            <li>
              <strong>Final price:</strong> $
              {(getLeaseDays() * 10 + 5) * howManyBikes}
            </li>
          </StyledDescriptionUl>
        ) : (
          <p>
            Select{" "}
            {(initialDate === undefined && "days") ||
              (isNaN(initialDate) && "days") ||
              (finalDate === undefined && "days") ||
              (isNaN(finalDate) && "days") ||
              (finalDate < initialDate && "days correctly")}{" "}
            {(initialDate === undefined && howManyBikes === 0 && "and") ||
              (isNaN(initialDate) && howManyBikes === 0 && "and") ||
              (finalDate === undefined && howManyBikes === 0 && "and") ||
              (isNaN(finalDate) && howManyBikes === 0 && "and") ||
              (finalDate < initialDate && howManyBikes === 0 && "and")}{" "}
            {howManyBikes === 0 && "bikes"}
          </p>
        )}
      </output>
    </StyledForm>
  );
}
