"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

const Map = () => {
   const mapRef = React.useRef<HTMLDivElement>(null);

   const initializeMap = async () => {
      const loader = new Loader({
         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
         version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = (await loader.importLibrary(
         "marker"
      )) as google.maps.MarkerLibrary;

      //   location in lng and lat
      const position = {
         lat: 55.94768,
         lng: -3.21138,
      };

      //   map options
      const mapOptions: google.maps.MapOption = {
         center: position,
         zoom: 17,
         mapId: "my id",
      };

      //   setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //   using the Marker
      const marker = new Marker({
         map: map,
         position: position,
      });
   };

   useEffect(() => {
      initializeMap();
   }, []);

   return <div className="h-[600px] -mt-48" ref={mapRef}></div>;
};

export default Map;
