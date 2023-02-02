import { StyledShoppingCart } from "./ShoppingCart.styled";
import SVGIcon from "../SVGIcon";
import useLocalStorageState from "use-local-storage-state";

export default function ShoppingCart() {
  const [selectedProducts] = useLocalStorageState("selectedProducts", {
    defaultValue: [],
  });

  return (
    <StyledShoppingCart
      href="/ShoppingCartPage"
      disabled={selectedProducts?.length === 0 || selectedProducts === null}
    >
      <SVGIcon
        variant="shoppingCart"
        width="50px"
        color={`${
          selectedProducts?.length === 0 || selectedProducts === null
            ? "transparent"
            : "black"
        }`}
      />
    </StyledShoppingCart>
  );
}
