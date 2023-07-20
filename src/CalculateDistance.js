
export function calculateDistance(userLat, userLon, locationLat, locationLon) {
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
  