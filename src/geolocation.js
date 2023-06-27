import React,{useState,useEffect} from 'react';
import region from './countryjson.json'
import { useGeolocated } from "react-geolocated";
import axios from 'axios';



const useGeoLocation = () => {
    const [location,setLocation] = useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    });
   
const [country,setCountry]=useState()


    useEffect(() => {
       navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
      
            if(result.state==="granted"){
                navigator.geolocation.getCurrentPosition((position) =>
                 {
                   console.log("current post",position)
                    // setStatus(null);
                    // setLat(position.coords.latitude);
                    // setLng(position.coords.longitude);

                            setLocation({
            loaded:true,
            coordinates:{
                lat:position?.coords?.latitude,
                lng:position?.coords?.longitude,
            }
        })
         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg`).then(resdata=>{
         console.log("Res",resdata.data) 
         setCountry(resdata.data?.results[resdata.data?.results.length-1]?.formatted_address)
                        })
                  }, () => {
                    // setStatus('Unable to retrieve your location');
                  },
                  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
                  );
             
            }
            else{
               
                navigator.permissions.revoke({name:'geolocation'}).then((result)=>{
                    console.log("ver",result)
                })
            //       Promise.all([
            //     navigator.permissions.query({ name: "geolocation" }),
            //     navigator.permissions.query({name: 'push', userVisibleOnly: 'true'})
                
            //   ])
            //   .then(([{ state: geoState }, { state: notifState }]) => {
            //     console.log("Geolocation permission state is:", geoState);
            //     console.log("Push permission state is:", notifState);
            //   });
            }
        })

    },[])


console.log("Location---------------",location,country)
  
    return {location,country};
}

export default useGeoLocation