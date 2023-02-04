import { bikes } from "../../lib/bikes.js";
import Image from "next/image";
import Link from "next/link.js";
import useLocalStorageState from "use-local-storage-state";

export default function BikesList() {
  const [selectedProducts] = useLocalStorageState("selectedProducts", {
    defaultValue: [],
  });

  const bikesToShow = bikes.filter((bike) => {
    let isSelected;
    if (selectedProducts === null) {
      isSelected = false;
    } else {
      isSelected = selectedProducts.some((product) => product.id === bike.id);
    }
    return !isSelected;
  });

  return (
    <>
      <h2>Bikes</h2>
      <div>
        {bikesToShow.length > 0 ? (
          bikesToShow.map((bike) => {
            return (
              <Link key={bike.id} href={`/Bikes/${bike.id}`}>
                <Image
                  src={bike.imageSource}
                  height={100}
                  width={120}
                  alt={bike.marke}
                  priority
                />
              </Link>
            );
          })
        ) : (
          <p>No bikes to show</p>
        )}
      </div>
    </>
  );
}
