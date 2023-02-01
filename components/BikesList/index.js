//import { v4 as uuidv4 } from "uuid";
import { bikes } from "../../lib/bikes.js";
import Image from "next/image";
import Link from "next/link.js";
import { useState, useEffect } from "react";

export default function BikesList() {
  //****************************** Part of code used from:
  //https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
  //Answer from "Saeid Shoja", edited Apr 12, 2022 at 13:22
  //This is to avoid errors of hydration when refreshing.
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  //*******************************

  function getProductsShoppingCart() {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("selectedProducts"));
    }
  }

  const productsShoppingCart = getProductsShoppingCart();

  const bikesToShow = bikes.filter((bike) => {
    let isSelected;
    if (typeof window !== "undefined") {
      if (productsShoppingCart === null) {
        isSelected = false;
      } else {
        isSelected = productsShoppingCart.some(
          (product) => product.id === bike.id
        );
      }
    }
    return !isSelected;
  });

  console.log("Here the basket:", productsShoppingCart);
  console.log("Here the bikesToShow:", bikesToShow);
  console.log("Here the length of bikesToShow:", bikesToShow.length);

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
