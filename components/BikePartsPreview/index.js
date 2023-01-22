import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledBikePartsPreview = styled.section`
  display: flex;
`;

export default function BikePartsPreview({ bikeParts }) {
  const bikePartsForPreview = [];
  bikeParts.forEach((bikePart) => {
    if (bikePartsForPreview.length < 4) {
      bikePartsForPreview.push(bikePart);
    }
  });

  return (
    <>
      <h2>Bike Parts</h2>
      <StyledBikePartsPreview>
        <div>
          {bikePartsForPreview.map((bikePart) => {
            return (
              <Image
                key={uuidv4()}
                src={bikePart.imageSource}
                height={50}
                width={60}
                alt={bikePart.name}
              />
            );
          })}
        </div>
        <Link href="/BikeParts">Show all...</Link>
      </StyledBikePartsPreview>
    </>
  );
}
