import styled, { css } from "styled-components";

export const StyledShoppingCart = styled.button`
  position: fixed;
  z-index: 1;
  top: 85px;
  right: 20px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background: transparent;
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        box-shadow: 2px 3px 20px rgb(95, 117, 129);
      `;
    }
  }}
`;
