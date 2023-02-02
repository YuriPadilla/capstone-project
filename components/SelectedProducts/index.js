import { bikes } from "../../lib/bikes";
import {
  StyledSelectionUl,
  StyledProductLi,
  StyledProductDiv,
  StyledImage,
  StyledDescriptionUl,
  StyledRemoveButton,
} from "./SelectedProducts.styled";
import SVGIcon from "../SVGIcon";

export default function SelectedProducts() {
  return (
    <>
      <h2>Your selection</h2>
      <StyledSelectionUl>
        {bikes.map((bike) => {
          return (
            <StyledProductLi key={bike.id}>
              <StyledProductDiv>
                <StyledImage
                  src={bike.imageSource}
                  height={70}
                  width={120}
                  alt={bike.marke}
                  priority
                />
                <StyledDescriptionUl>
                  <li>
                    <strong>Brand:</strong> {bike.marke}
                  </li>
                  <li>
                    <strong>Size:</strong> {bike.size}
                  </li>
                </StyledDescriptionUl>
                <StyledRemoveButton>
                  <SVGIcon variant="remove" width="30px" color="black" />
                </StyledRemoveButton>
              </StyledProductDiv>
            </StyledProductLi>
          );
        })}
      </StyledSelectionUl>
    </>
  );
}
