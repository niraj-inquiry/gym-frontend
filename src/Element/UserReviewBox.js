import React, { Component,useState,useEffect } from "react";
import "../css/Style.css";
import { fetchImage,baseURL } from "../generalfunction";
import * as Images from "../assets";
// export const Box = (props) => {
export const UserReviewBox = ({
    userFace,
    userName,
    userDate,
    userText,
    userRatings,
}) => {
    const [imageurl,setImageurl]=useState()

    useEffect(()=>{
    if(userFace!=undefined){
        fetchImage(`${baseURL}${userFace}`).then(res=>{
           setImageurl(res)
          })
        }
        else{
            setImageurl(Images.wface)
        }
    },[])
   
    console.log("face",userFace) 
    return (
        <div className="col-md-4">
            <div className="user-review-box">
                <img src={imageurl} />
                <div className="text-start">
                    <h3>{userName}</h3>
                    <small>{userDate}</small>
                    <div className="five-stars mt-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p className="w-100 text-start m-0">{userText}</p>
                </div>
            </div>
        </div>
    );
};

// export default Box;
