import {
  StyledSelectionUl,
  StyledProductLi,
  StyledProductDiv,
  StyledImage,
  StyledDescriptionUl,
  StyledRemoveButton,
} from "./SelectedProducts.styled";
import SVGIcon from "../SVGIcon";

export default function SelectedProducts({ products, onRemoveFromShopCart }) {
  return (
    <>
      <h2>Your selection</h2>
      <StyledSelectionUl>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <StyledProductLi key={product.id}>
                <StyledProductDiv>
                  <StyledImage
                    src={product.imageSource}
                    height={70}
                    width={120}
                    alt={product.marke}
                    priority
                  />
                  <StyledDescriptionUl>
                    <li>
                      <strong>Brand:</strong> {product.marke}
                    </li>
                    <li>
                      <strong>Size:</strong> {product.size}
                    </li>
                  </StyledDescriptionUl>
                  <StyledRemoveButton
                    onClick={() => {
                      onRemoveFromShopCart(product.id);
                    }}
                  >
                    <SVGIcon variant="remove" width="30px" color="black" />
                  </StyledRemoveButton>
                </StyledProductDiv>
              </StyledProductLi>
            );
          })
        ) : (
          <p>No products to show</p>
        )}
      </StyledSelectionUl>
    </>
  );
}
