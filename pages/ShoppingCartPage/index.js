import Header from "../../components/Header";
import Link from "next/link";
import ShoppingCart from "../../components/ShoppingCart";
import SelectedProducts from "../../components/SelectedProducts";
import {
  StyledButton,
  StyledButtonContainer,
} from "../../components/Button/Button.styled";
import LeaseTimeForm from "../../components/LeaseTimeForm";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import ToastNotification from "../../components/ToastNotification";

export default function ShoppingCartPage() {
  const [selectedProducts, setSelectedProducts, { removeItem }] =
    useLocalStorageState("selectedProducts", { defaultValue: [] });

  const [initialDate, setInicialDate] = useState();
  const [finalDate, setFinalDate] = useState();

  const [toastAction, setToastAction] = useState("");

  function handleEmptyShoppingCart() {
    removeItem();
  }

  function handleRemoveFromShopCart(id) {
    setSelectedProducts((previousState) => {
      return previousState.filter((product) => product.id !== id);
    });
  }

  function handleChange(event) {
    if (event.target.name === "from") {
      setInicialDate(new Date(event.target.value).getTime());
    } else if (event.target.name === "until") {
      setFinalDate(new Date(event.target.value).getTime());
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    setToastAction("enter");
    setTimeout(() => setToastAction("exit"), 3000);
  }

  function getLeaseDays() {
    if (
      initialDate !== undefined &&
      finalDate !== undefined &&
      finalDate >= initialDate
    ) {
      const leaseTime = finalDate - initialDate;
      const leaseDays = Math.round(leaseTime / (24 * 60 * 60 * 1000)) + 1;
      return leaseDays;
    }
  }

  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→Shopping Cart
      </p>
      <ShoppingCart />
      <SelectedProducts
        products={selectedProducts}
        onRemoveFromShopCart={handleRemoveFromShopCart}
      />
      <StyledButtonContainer>
        <StyledButton type="button" onClick={handleEmptyShoppingCart}>
          Empty shopping cart
        </StyledButton>
      </StyledButtonContainer>
      <LeaseTimeForm
        handleChange={handleChange}
        onSubmit={handleSubmit}
        initialDate={initialDate}
        finalDate={finalDate}
        getLeaseDays={getLeaseDays}
        howManyBikes={selectedProducts.length}
      />
      <ToastNotification
        toastAction={toastAction}
        toastMessage="Booking successful"
      />
    </>
  );
}
