import {
  StyledImage,
  StyledWrapper,
  StyledPreviousNextLink,
  StyledPreviousNext,
} from "./ProductDetails.styled";
import SVGIcon from "../SVGIcon";
import { bikes } from "../../lib/bikes";

export default function ProductDetails({ product }) {
  const productIndex = bikes.findIndex((bike) => {
    return bike.id === product.id;
  });

  console.log(bikes[productIndex]);

  return (
    <>
      <h2>Details</h2>
      <section>
        <StyledImage
          src={product.imageSource}
          height={240}
          width={400}
          alt={product.marke}
          priority
        />
        <StyledWrapper>
          {productIndex > 0 ? (
            <StyledPreviousNextLink
              href={`/Bikes/${bikes[productIndex - 1].id}`}
            >
              <SVGIcon variant="previous" width="50px" color="black" />
            </StyledPreviousNextLink>
          ) : (
            <StyledPreviousNext>
              <SVGIcon variant="previous" width="50px" color="#acacac" />
            </StyledPreviousNext>
          )}

          {productIndex < bikes.length - 1 ? (
            <StyledPreviousNextLink
              href={`/Bikes/${bikes[productIndex + 1].id}`}
            >
              <SVGIcon variant="next" width="50px" color="black" />
            </StyledPreviousNextLink>
          ) : (
            <StyledPreviousNext>
              <SVGIcon variant="next" width="50px" color="#acacac" />
            </StyledPreviousNext>
          )}
        </StyledWrapper>
        <article>
          <p>
            <strong>Mark:</strong> {product.marke}
            <br />
            <strong>Size:</strong> {product.size}
          </p>
        </article>
      </section>
    </>
  );
}
