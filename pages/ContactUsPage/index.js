import Header from "../../components/Header";
import ShoppingCart from "../../components/ShoppingCart";
import ContactUsForm from "../../components/ContactUsForm";
import Link from "next/link";
import { useState } from "react";
import ToastNotification from "../../components/ToastNotification";

export default function ContactUsPage() {
  const [toastAction, setToastAction] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    setToastAction("enter");
    setTimeout(() => setToastAction("exit"), 3000);
  }

  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→<Link href="">Contact us</Link>
      </p>
      <ShoppingCart />
      <ContactUsForm handleSubmit={handleSubmit} />
      <ToastNotification
        toastAction={toastAction}
        toastMessage="Your message was sent"
      />
    </>
  );
}
