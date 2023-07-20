import React, { useEffect, useState } from "react";
import useGeoLocation from "./geolocation";
import axios from "axios";

// Function to calculate the distance using Haversine formula
function calculateDistance(userLat, userLon, locationLat, locationLon) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  const degToRad = (degrees) => degrees * (Math.PI / 180);

  const lat1Rad = degToRad(userLat);
  const lon1Rad = degToRad(userLon);
  const lat2Rad = degToRad(locationLat);
  const lon2Rad = degToRad(locationLon);

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;

  return distance;
}

const YourComponent = () => {
  const { location, country } = useGeoLocation();
  const [getCenter, setGetCenter] = useState(null);
  const [distance, setDistance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getC = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data")
      .then((res) => {
        setGetCenter(res.data.data[2]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setIsLoading(false);
      });
  };
console.log('getCenterss',getCenter);
  useEffect(() => {
    getC();
  }, []);

  useEffect(() => {
    // Calculate distance when both user location and getCenter data are available
    if (location.loaded && getCenter?.lat && getCenter?.lng) {
      const userLat = location.coordinates.lat;
      const userLon = location.coordinates.lng;
      const locationLat = getCenter.lat;
      const locationLon = getCenter.lng;
      const calculatedDistance = calculateDistance(userLat, userLon, locationLat, locationLon);
      setDistance(calculatedDistance);
    }
  }, [location.loaded, getCenter]);

  return (
    <div>
      {location.loaded ? (
        <div>
          <h2>User Location:</h2>
          <p>Latitude: {location.coordinates.lat}</p>
          <p>Longitude: {location.coordinates.lng}</p>
          <p>Country: {country}</p>
          {/* Add your additional logic here */}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}

      {isLoading ? (
        <h2>Loading Center Data...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : getCenter ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={getCenter.centerBanner} alt="" />
              <h2>{getCenter.center_name}</h2>
              {distance !== null && <p>Distance from your location: {distance.toFixed(2)} km</p>}
            </div>
          </div>
        </div>
      ) : (
        <h2>Center Data Not Available</h2>
      )}
    </div>
  );
};

export default YourComponent;
