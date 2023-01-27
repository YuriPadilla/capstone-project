import { v4 as uuidv4 } from "uuid";
import { bikes } from "../../lib/bikes.js";
import Image from "next/image";
import Link from "next/link.js";

export default function BikesList() {
  return (
    <>
      <h2>Bikes</h2>
      <div>
        {bikes.map((bike) => {
          return (
            <Link key={uuidv4()} href={`/Bikes/${bike.id}`}>
              <Image
                src={bike.imageSource}
                height={100}
                width={120}
                alt={bike.marke}
                priority
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
