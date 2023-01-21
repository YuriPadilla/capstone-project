import BikesList from "../../components/BikesList";
import Link from "next/link";

export default function Bikes() {
  return (
    <>
      <Link href="/">Home</Link>→<Link href="">Bikes</Link>
      <BikesList />
    </>
  );
}
