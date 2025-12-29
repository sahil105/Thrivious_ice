import React from 'react';

const MapContainer = () => {
  const markers = [
    { lat: -30.5595, lng: 22.9375, label: "South Africa" },
    { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    { lat: 25.3548, lng: 51.1839, label: "Qatar" },
    { lat: 15.5527, lng: 48.5164, label: "Yemen" },
    { lat: 23.8859, lng: 45.0792, label: "Saudi Arabia" },
    { lat: -19.0154, lng: 29.1549, label: "Zimbabwe" },
    { lat: 40.7128, lng: -74.0060, label: "New York" },
    { lat: 12.8797, lng: 121.7740, label: "Philippines" },
    { lat: -0.7893, lng: 113.9213, label: "Indonesia" },
    { lat: -25.2744, lng: 133.7751, label: "Australia" },
    { lat: 4.2105, lng: 101.9758, label: "Malaysia" },
    { lat: 5.1521, lng: 46.1996, label: "Somalia" },
    { lat: 3.9193, lng: -56.0278, label: "Suriname" },
    { lat: -14.2350, lng: -51.9253, label: "Brazil" },
    { lat: 31.0461, lng: 34.8516, label: "Israel" },
  ];
  
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
  const apiKey = "AIzaSyCZCxLJYDcWONUbd7ndQfzLZiAKy1qhgwE";
  
  const markerQueryString = markers
    .map((marker) => `markers=color:red%7Clabel:${marker.label[0]}%7C${marker.lat},${marker.lng}`)
    .join("&");
  
  const mapUrl = `${baseUrl}?size=800x800&maptype=roadmap&${markerQueryString}&key=${apiKey}`;
  
  return (
    <img src={mapUrl} alt="Map with markers" />
  );
  // const markers = [
  //   { lat: 25.2048, lng: 55.2708, label: 'Dubai' },
  //   { lat: -33.8679, lng: 151.2073, label: 'Sydney' },
  //   { lat: 51.5074, lng: -0.1278, label: 'London' },
  //   { lat: 40.7128, lng: -74.0060, label: 'New York' },
  //   { lat: 31.7683, lng: 35.2137, label: 'Israel' },
  //   // Add more locations here
  // ];

  // const apiKey = `AIzaSyCZCxLJYDcWONUbd7ndQfzLZiAKy1qhgwE`
  
  // // Construct the URL for the static map
  // const url = `https://maps.googleapis.com/maps/api/staticmap?center=${markers[0].lat},${markers[0].lng}&zoom=2&size=600x400&maptype=roadmap&key=${apiKey}&${markers.map(marker => `markers=label:${marker.label}|${marker.lat},${marker.lng}`).join('&')}`;

  // return (
  //   <div>
  //     <img src={url} alt="Map" />
  //   </div>
  // );
};

export default MapContainer;
