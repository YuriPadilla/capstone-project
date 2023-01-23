import Header from "../../components/Header";
import BikesList from "../../components/BikesList";
import Link from "next/link";

export default function Bikes() {
  return (
    <>
      <Header />
      <p>
        <Link href="/">Home</Link>→<Link href="">Bikes</Link>
      </p>
      <BikesList />
    </>
  );
}
