"use client";

import React, { useRef, useEffect } from "react";

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, []);

  return <div style={{ width: "100%", height: 200 }} ref={ref} id="map" />;
}

export default MyMapComponent;
