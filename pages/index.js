import ShoppingCart from "../components/ShoppingCart";
import PriceInfo from "../components/PriceInfo";
import BikesPreview from "../components/BikesPreview";
import BikePartsPreview from "../components/BikePartsPreview";
import { bikes } from "../lib/bikes.js";
import { bikeParts } from "../lib/bikeParts";
import Link from "next/link";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <ShoppingCart />
      <p>
        <Link href="">Home</Link>
      </p>
      <PriceInfo />
      <BikesPreview bikes={bikes} />
      <BikePartsPreview bikeParts={bikeParts} />
      <ContactInfo />
      <NavBar />
    </>
  );
}
