"use client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MyMapComponent";

const MyApp = () => {
  console.log("status ", Status);
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <div>
      <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY as string}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
};

export default MyApp;
