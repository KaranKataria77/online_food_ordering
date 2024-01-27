// "use client";
// import { useState, useMemo, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
//   getDetails,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// export default function Places() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey:
//       process.env.NEXT_PUBLIC_MAP_API_KEY || "",
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }, []);

//   async function success(position: any) {
//     // get address on basis of lat and lang on initial app load
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const geocoder = new google.maps.Geocoder();
//     const latlng = {
//       lat: latitude,
//       lng: longitude,
//     };
//     const results = await geocoder.geocode({ location: latlng });
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`, results);
//   }

//   function error() {
//     console.log("Unable to retrieve your location");
//   }
//   const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div>

//       <GoogleMap
//         zoom={10}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         {selected && <Marker position={selected} />}
//       </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }: { setSelected: any }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   //   to get lat and lng from address drop down when user search their address
//   const handleSelect = async (address: any) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });

//     const parameter = {
//       // Use the "place_id" of suggestion from the dropdown (object), here just taking the first suggestion for brevity
//       placeId: results[0].place_id,
//       // Specify the return data that you want (optional)
//       //   fields: ["name", "rating"],
//     };
//     const details = await getDetails(parameter);
//     console.log("check location ", details);
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e: any) => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//       />
//       <ComboboxPopover>
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };
