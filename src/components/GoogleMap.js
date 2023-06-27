import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useRef, useState } from "react";
import useGeoLocation from "../geolocation";
import { isEmpty } from "../generalfunction";

const GoogleMapScreen = ({onSave,data}) => {
  console.log("data-------------------")
  const currentlocation = useGeoLocation()

  const coordinates = [
    { lat: currentlocation?.location?.coordinates?.lat, lng: currentlocation?.location?.coordinates?.lng, name: 'My delhi' }
  ]
  const mapRef = useRef(null)
  const [mapReady, setMapReady] = useState(false)
  const [coordinatesstate, setCoordinatesstate] = useState(coordinates)
  // const [centerstate, setCenterstate] = useState({ 
  //   lat:!isEmpty(currentlocation?.location?.coordinates)?currentlocation?.location?.coordinates?.lat:
  //   28.6031121, 
    
  //   lng: !isEmpty(currentlocation?.location?.coordinates)?currentlocation?.location?.coordinates?.lng:77.3668853, name: 'My delhi' })
  const [centerstate, setCenterstate] = useState({lat:isEmpty(data)?data?.lat:28.6031121,lng:isEmpty(data)?data?.lng:77.3668853 })
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg",
 
  });


  const onMarkerClick = (e, { markerId, lat, lng }) => {
    console.log('This is ->', lat, lng)

    // inside the map instance you can call any google maps method
    mapRef.current.setCenter({ lat, lng })
    // rif. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  }

  const onMouseOverEvent = (lat, lng) => {

    let tempdata = [...coordinatesstate]
    let latlngjson = { lat: lat, lng: lng }

    tempdata.push(latlngjson)
    setCoordinatesstate(tempdata)
    setCenterstate(latlngjson)
  }

  useEffect(() => {
    onSave(centerstate)
  }, [onMouseOverEvent])
  
  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={{ lat: centerstate?.lat, lng: centerstate?.lng }}
          
          onDblClick={(e) => onMouseOverEvent(e?.latLng?.lat(), e?.latLng?.lng())}
          zoom={10}
        >
          {/* {coordinatesstate?.map((item, index) => (
          <Marker 
          key={index} 
          lat={item?.lat}
           lng={item?.lng} 
           markerId={index}
           position={{lat:item.lat,lng:item.lng}}
            onClick={onMarkerClick} 
           
            />
        ))} */}
{!isEmpty(centerstate)&&(
           <Marker

            lat={centerstate?.lat}
            lng={centerstate?.lng}
            markerId={centerstate?.name}
            position={{ lat: centerstate?.lat, lng: centerstate?.lng }}
            onClick={onMarkerClick}

          /> )}
        </GoogleMap>
      )}
    </div>
  )
}
export default GoogleMapScreen