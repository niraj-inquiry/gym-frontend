import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Style.css";
import { useGeolocated } from "react-geolocated";
import { API, isEmpty } from "../generalfunction";
import axios from "axios";
import useGeoLocation from "../geolocation";

export const HomeBanner = ({ ImageLocate, ImageGymStudio,title,subtitle }) => {
    const navigate = useNavigate();
    const [findstate, setFinestate] = useState();
    const [status, setStatus] = useState(false)
    const [country, setcountry] = useState()
    const [searchdata, setSearchdata] = useState([])
    const getLocation = async () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {

                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition((position) => {
                        // console.log("current post",position)
                        // setStatus(null);
                        // setLat(position.coords.latitude);
                        // setLng(position.coords.longitude);
                        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg`).then(resdata => {
                            setcountry(resdata.data?.results[resdata.data?.results.length - 1]?.formatted_address)
                        })
                    }, () => {
                        // setStatus('Unable to retrieve your location');
                    },
                        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                    );

                }
                // else {
                //     navigator.permissions.revoke({ name: 'geolocation' });
                // }
        })

    }

    const onSearchLocation = async () => {

        if (!isEmpty(country)) {
            navigate(`${findstate}`, { state: { country: country,searchdata: searchdata,findstate:findstate} })
        }
        else {
            navigate(`${findstate}`, { state: "" })
        }


    }
    // const findstate = findstate ? (([_, ...words]) => words.join("-"))(findstate.replace(",", "").split(" ")).toLowerCase() : '';
    // console.log('finds',typeof findstate);
    useEffect(() => {
        getLocation()
    }, [])

    const onChangetext = () => {

        if (!isEmpty(findstate)) {
            API.get(`/v.1.0/dashboard/get-search-data/${findstate}`).then(res => {
                // console.log("ddddddddddddd",res?.data?.data)
                if (res.data.status) {
                    setStatus(true)
                    setSearchdata(res?.data?.data)
                }
                else {
                    setStatus(false)
                    setSearchdata(res?.data?.data)
                }


            })

        }
        else{
            setStatus(false)
            setSearchdata([])
        }
    }
    useEffect(() => {
        onChangetext()
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.key === 'Enter') {
                // event.preventDefault();

                navigate(`${findstate}`, { state: {  country: country,searchdata: searchdata,findstate:findstate} })
                // 👇️ your logic here
                // myFunction();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, [findstate]);

    console.log("search data", searchdata)
    return (
        <section>
            <div className="container-fluid">
                <div className="row align-items-center banner-sec">
                    <div className="col-lg-6">
                        {/* <h1 className="text-start">Any Activity</h1>
                        <h1 className="text-start">Sports, Fitness,</h1>
                        <h1 className="text-start">Gym Session or Adventure</h1> */}
                        <div className="fw-bold flip_V text-start mx-3" style={{fontSize:'58px'}}>{"Sports network".toUpperCase()}</div>
                        <h1 className="text-start mt-5 mx-3 my-3">
                            {/* Any Activity Sports, Fitness, Gym Session or Adventure */}
                            {title}
                            </h1>
                        <p className="text-start mx-3 my-4">
                            {/* Zero Contract. Unlimited Activities */}
                            {subtitle}
                        </p>

                        <div className="search fs-5 text-start mx-3">
                            <input
                                value={findstate}
                                onChange={(e) => setFinestate(e.target.value) && onChangetext()}
                                placeholder="Enter Your postcode or location"
                                type="text"
                            />

                            <img onClick={() => onSearchLocation()}
                                className="locate-me"
                                alt="gym-studio"
                                src={ImageLocate}
                            />

                            <button type="submit" onClick={() => onSearchLocation()}>
                                <span className="position-relative">
                                    Find
                                </span>
                            </button>
                        </div>
                        <div className="main-search">
                        {status === true ? searchdata?.map((item) => (
                            
                            <div onClick={()=>setFinestate(`${item?.address} `)} className="searchdata">
                                <div>{item?.address} {item?.pincode}</div>
                            </div>
                           
                            )) : (<></>)}
                             </div>
                    </div>

                    <div className="col-lg-6">
                        <img
                            className="w-100 h-auto"
                            alt="gym-studio"
                            src={ImageGymStudio}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const SubHomeBanner=({ ImageLocate})=>{
    const navigate = useNavigate();
    const [findstate, setFinestate] = useState();
    const [status, setStatus] = useState(false)
    const [country, setcountry] = useState()
    const [searchdata, setSearchdata] = useState([])
    const getLocation = async () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {

                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition((position) => {
                      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg`).then(resdata => {
                            setcountry(resdata.data?.results[resdata.data?.results.length - 1]?.formatted_address)
                        })
                    }, () => {
                        // setStatus('Unable to retrieve your location');
                    },
                        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                    );

                }
                // else {
                //     navigator.permissions.revoke({ name: 'geolocation' });
                // }
            })

    }

    const onSearchLocation = async () => {

        if (!isEmpty(country)) {
            // navigate(`${findstate}`, { state: { country: country } })
            navigate(`${findstate}`, { state: { country: country,searchdata: searchdata,findstate:findstate} })
        }
        else {
            navigate(`${findstate}`, { state: "" })
        }

    }
    // const findstate = findstate ? (([_, ...words]) => words.join("-"))(findstate.replace(",", "").split(" ")).toLowerCase() : '';
    useEffect(() => {
        getLocation()
    }, [])

    const onChangetext = () => {

        if (!isEmpty(findstate)) {
            API.get(`/v.1.0/dashboard/get-search-data/${findstate}`).then(res => {
                if (res.data.status) {
                    setStatus(true)
                    setSearchdata(res?.data?.data)
                }
                else {
                    setStatus(false)
                    setSearchdata(res?.data?.data)
                }


            })

        }
        else{
            setStatus(false)
            setSearchdata([])
        }
    }
    useEffect(() => {
        onChangetext()
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.key === 'Enter') {
                // event.preventDefault();

                navigate(`${findstate}`, { state: { finddata: findstate } })
                // 👇️ your logic here
                // myFunction();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, [findstate]);

 
    return (
    <div className="row align-items-center ">
                    <div className="col-lg-12">
                     <div className="search text-start w-100">
                            <input
                                value={findstate}
                                onChange={(e) => setFinestate(e.target.value) && onChangetext()}
                                placeholder="Enter Your postcode or location"
                                type="text"
                            />

                            <img onClick={() => onSearchLocation()}
                                className="locate-me"
                                alt="gym-studio"
                                src={ImageLocate}
                            />

                            <button type="submit" onClick={() => onSearchLocation()}>
                                <span className="position-relative">
                                    Let's go
                                </span>
                            </button>
                        </div>
                        <div className="main-search">
                        {status === true ? searchdata?.map((item) => (
                            
                            <div onClick={()=>setFinestate(`${item?.address}`)} className="searchdata">
                                <div>{item?.address} {item?.pincode}</div>
                            </div>
                           
                            )) : (<></>)}
                             </div>
                    </div>

                   
                </div>
        
    ); 
}