import PriceInfo from "../components/PriceInfo";
import BikesPreview from "../components/BikesPreview";
import BikePartsPreview from "../components/BikePartsPreview";
import { bikes } from "../lib/bikes.js";
import { bikeParts } from "../lib/bikeParts";
import Link from "next/link";
import ContactInfo from "../components/ContactInfo";

export default function HomePage() {
  return (
    <>
      <p>
        <Link href="">Home</Link>
      </p>
      <PriceInfo />
      <BikesPreview bikes={bikes} />
      <BikePartsPreview bikeParts={bikeParts} />
      <ContactInfo />
    </>
  );
}
