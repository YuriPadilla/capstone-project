import BikesList from "../../components/BikesList";
import Link from "next/link";

export default function Bikes() {
  return (
    <>
      <p>
        <Link href="/">Home</Link>→<Link href="">Bikes</Link>
      </p>
      <BikesList />
    </>
  );
}
