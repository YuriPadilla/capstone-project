import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledBikePreview = styled.section`
  display: flex;
`;

export default function BikesPreview({ bikes }) {
  const bikesForPreview = [];
  bikes.forEach((bike) => {
    if (bikesForPreview.length < 4) {
      bikesForPreview.push(bike);
    }
  });
  return (
    <>
      <h2>Bikes</h2>
      <StyledBikePreview>
        <div>
          {bikesForPreview.map((bike) => {
            return (
              <Image
                src={bike.imageSource}
                height={50}
                width={60}
                alt={bike.marke}
              />
            );
          })}
        </div>
        <Link href="">Show all...</Link>
      </StyledBikePreview>
    </>
  );
}
