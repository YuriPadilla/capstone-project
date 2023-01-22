import PriceInfo from "../components/PriceInfo";
import BikesPreview from "../components/BikesPreview";
import { bikes } from "../lib/bikes.js";
import Link from "next/link";
import ContactInfo from "../components/ContactInfo";

export default function HomePage() {
  return (
    <>
      <Link href="">Home</Link>
      <PriceInfo />
      <BikesPreview bikes={bikes} />
      <ContactInfo />
    </>
  );
}
