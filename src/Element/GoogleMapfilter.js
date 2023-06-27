import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useRef, useState } from "react";
import useGeoLocation from "../geolocation";
import { isEmpty } from "../generalfunction";
import * as Images from "../assets";
export const GoogleMapfilter = ({data}) => {
    console.log("data-------------------",data)
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
    const [centerstate, setCenterstate] = useState({lat:!isEmpty(data[0]?.lat)?(parseFloat(data[0]?.lat)):28.6031121,lng:!isEmpty(data[0]?.lng)?parseFloat(data[0]?.lng):77.3668853})
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg",
   
    });
  
  
    const onMarkerClick = (e, { lat, lng }) => {
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
    //   onSave(centerstate)
    }, [onMouseOverEvent])
    
    return (
      
      <div className="map" >
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={{ lat: centerstate?.lat, lng: centerstate?.lng }}
            
            onDblClick={(e) => onMouseOverEvent(e?.latLng?.lat(), e?.latLng?.lng())}
            zoom={10}
          >
       {data?.map((item, index) => (
            <Marker 
            key={index} 
            lat={parseFloat(item?.lat)}
             lng={parseFloat(item?.lng)} 
             markerId={index}
           
             position={{lat:parseFloat(item?.lat),lng:parseFloat(item?.lng)}}
            //   onClick={onMarkerClick} 
             
              />
          ))} 
  
          </GoogleMap>
        )}
      </div>
    )
  }



  export const GMap = ({data}) => {
    const googleMapRef = useRef(null);
    let googleMap = null;
   
    // list of icons
    const iconList = {
      icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
      icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
      icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
      icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
    }
   
    // list of the marker object along with icon
    const markerList = [
      { lat: 59.2967322, lng: 18.0009393, icon: iconList.icon1 },
      { lat: 59.2980245, lng: 17.9971503, icon: iconList.icon2 },
      { lat: 59.2981078, lng: 17.9980875, icon: iconList.icon3 },
      { lat: 59.2987638, lng: 17.9917639, icon: iconList.icon4 }
    ]
   
    useEffect(() => {
      googleMap = initGoogleMap();
      var bounds = new window.google.maps.LatLngBounds();
      data?.map(x => {
        const marker = createMarker(x);
        bounds.extend(marker.position);
      });
      googleMap.fitBounds(bounds); // the map to contain all markers
    }, []);
   
   
    // initialize the google map
    const initGoogleMap = () => {
      return new window.google.maps.Map(googleMapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
   
    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
      position: { lat:parseFloat(markerObj.lat), lng:parseFloat(markerObj.lng) },
      map: googleMap,
      icon: {
        url: markerObj.icon,
        // set marker width and height
        scaledSize: new window.google.maps.Size(50, 50)
      }
    });
   
    return <div
      ref={googleMapRef}
      style={{ width: 600, height: 500 }}
    />
  }
   
