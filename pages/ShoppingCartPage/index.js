import Header from "../../components/Header";
import Link from "next/link";
import SelectedProducts from "../../components/SelectedProducts";
import {
  StyledButton,
  StyledButtonContainer,
} from "../../components/Button/Button.styled";
import LeaseTimeForm from "../../components/LeaseTimeForm";

export default function ShoppingCartPage() {
  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→Shopping Cart
      </p>
      <SelectedProducts />
      <StyledButtonContainer>
        <StyledButton type="button">Empty shopping cart</StyledButton>
      </StyledButtonContainer>
      <LeaseTimeForm />
    </>
  );
}
