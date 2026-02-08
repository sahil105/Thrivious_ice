import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

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

  // Calculate center point (average of all markers)
  const centerLat = markers.reduce((sum, m) => sum + m.lat, 0) / markers.length;
  const centerLng = markers.reduce((sum, m) => sum + m.lng, 0) / markers.length;

  useEffect(() => {
    // Initialize map only once
    if (!mapInstanceRef.current && mapRef.current) {
      // Fix for default marker icons
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Create map instance
      const map = L.map(mapRef.current).setView([centerLat, centerLng], 2);

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add markers
      markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng])
          .addTo(map)
          .bindPopup(marker.label);
      });

      mapInstanceRef.current = map;
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array - only run once

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '600px', 
        marginTop: '20px',
        zIndex: 0
      }} 
    />
  );
};

export default MapContainer;
