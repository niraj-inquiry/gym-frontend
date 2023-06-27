import React, { Component, useState, useEffect } from "react";
import "../css/Style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { API, convertfirstletter, fetchImage } from "../generalfunction";
import { ImageShow } from "./ImageShow";
import * as Images from '../assets'

export const GymCenter = ({
    GymImage,
    StarImage,
    CenterName,
    CenterAddress,
    Rating,
    PopularCenterText,
    link,
    data
}) => {

    const navigate = useNavigate()
    const imageUrl = GymImage;
    const [img, setImg] = useState();
    const [rating, setRating] = useState(0)
    const onLoad = async () => {
        const res = await API.get(`v.1.0/feedbackwithrating/get-all-feedback_centerid/${data?._id}`)
        if (res.data?.status) {
            setRating(res?.data.rating)
        }

    }
    useEffect(() => {
        onLoad()
        fetchImage(imageUrl).then(res => setImg(res));
    // }, [rating]);
}, []);
console.log('PopularCenterText', data,rating)
    console.log("rating", data?._id)
    console.log('home center img',img)
    return (

        <div className="col-lg-3 col-md-6 ">
            <div className="">
                <div className="center-box" style={{ height: '-webkit-fill-available' }}>
                    {PopularCenterText && (
                        <div className="popular-center">Popular Center</div>
                    )}
                    <div style={{ width: '100%', height: 'auto' }}>
                        {/* <img className="w-100" src={img?img:Images.app_store} height={250} />  */}
                        <img className="w-100" src={Images.Aboutus} height={250} /> 
                    </div>

                    <div className="py-4 center-location-box-content" style={{ height: 'fit-content' }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>
                                {/* <NavLink to={link}> */}
                                {/* <div onClick={() => navigate(link, { state: { centerid: data?._id, rating: rating, email: data?.email } })} style={{ textTransform: 'capitalize', textAlign: 'left' }}></div> */}
                                <div onClick={() => navigate(link, { state: { centerid: data?._id, rating: rating, email: data?.email } })} style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                                    <h5 className="fw-bold">{convertfirstletter(CenterName?.substr(0, 19))}</h5>
                                </div>
                                {/* </NavLink> */}
                            </h5>
                            <div style={{ paddingBottom: 13 }}>
                                <div className="rating rounded">
                                    <img src={StarImage}  />
                                    <span className="text-white" style={{ fontSize: 13 }}>{rating}</span>
                                </div>
                            </div>
                        </div>
                        {/*<div className="text-start type"> */}
                        {/* <p>{CenterName}</p> */}
                        {/* </div> */}
                        <div className="text-start adrs">
                            <p style={{ fontSize: 13 }}>{convertfirstletter(CenterAddress?.substr(0, 25))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};