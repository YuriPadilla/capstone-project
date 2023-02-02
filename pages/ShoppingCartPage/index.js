import Header from "../../components/Header";
import Link from "next/link";
import SelectedProducts from "../../components/SelectedProducts";
import {
  StyledButton,
  StyledButtonContainer,
} from "../../components/Button/Button.styled";
import LeaseTimeForm from "../../components/LeaseTimeForm";
import useLocalStorageState from "use-local-storage-state";

export default function ShoppingCartPage() {
  const [selectedProducts, setSelectedProducts, { removeItem }] =
    useLocalStorageState("selectedProducts", { defaultValue: [] });

  function handleEmptyShoppingCart() {
    removeItem();
  }

  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→Shopping Cart
      </p>
      <SelectedProducts products={selectedProducts} />
      <StyledButtonContainer>
        <StyledButton type="button" onClick={handleEmptyShoppingCart}>
          Empty shopping cart
        </StyledButton>
      </StyledButtonContainer>
      <LeaseTimeForm />
    </>
  );
}
