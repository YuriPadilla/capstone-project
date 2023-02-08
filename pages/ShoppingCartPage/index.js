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
import { useAtom } from "jotai";
import { inputDateAtom } from "@/store/atoms";
import NavBar from "../../components/NavBar";

export default function ShoppingCartPage() {
  const [selectedProducts, setSelectedProducts, { removeItem }] =
    useLocalStorageState("selectedProducts", { defaultValue: [] });

  const [inputDateValues, setInputDateValues] = useAtom(inputDateAtom);
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
      setInputDateValues({ ...inputDateValues, from: event.target.value });
    } else if (event.target.name === "until") {
      setInputDateValues({ ...inputDateValues, until: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    setInputDateValues({ from: "", until: "" });
    event.target.elements.from.value = "";
    event.target.elements.until.value = "";
    event.target.elements.from.focus();
    removeItem();

    setToastAction("enter");
    setTimeout(() => setToastAction("exit"), 3000);
  }

  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→<Link href="/Bikes">Bikes</Link>→Shopping
        Cart
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
        howManyBikes={selectedProducts.length}
        fromDate={inputDateValues.from}
        untilDate={inputDateValues.until}
      />
      <ToastNotification
        toastAction={toastAction}
        toastMessage="Booking successful"
      />
      <NavBar />
    </>
  );
}
