import BikePartsList from "../../components/BikePartsList";
import Link from "next/link";

export default function BikeParts() {
  return (
    <>
      <p>
        <Link href="/">Home</Link>→<Link href="">Bike Parts</Link>
      </p>
      <BikePartsList />
    </>
  );
}
