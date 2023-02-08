import Header from "../../components/Header";
import ShoppingCart from "../../components/ShoppingCart";
import BikePartsList from "../../components/BikePartsList";
import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function BikeParts() {
  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→<Link href="">Bike Parts</Link>
      </p>
      <ShoppingCart />
      <BikePartsList />
      <NavBar />
    </>
  );
}
