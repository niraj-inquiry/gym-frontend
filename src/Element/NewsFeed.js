import React, { Component, useState } from "react";
import "../css/Style.css";
import { API } from "../generalfunction";

export const NewsFeed = ({ Title, Icon, Details }) => {
    const [email,setEmail]=useState()
    const onSubscribe=()=>{
            API.get(`/v.1.0/subscribe/add-subscribe/${email}`).then(res=>{
             
                if(res?.data?.status){
                    alert(res?.data?.message)
                    setEmail("")
                }else{
                    alert(res?.data?.message)
                    setEmail("")
                }
            })
    }
    return (
        <div className="newsfeed section_heading bgg-white ">
            <div className="news-inner text-center">
                <h3>{Title}</h3>
                <p className="mt-4">{Details}</p>
                
                <div className="search text-start mx-auto mt-4">
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter your Email ID"
                     type="text" />
                    <img className="locate-me" alt="gym-studio" src={Icon} />

                    <button onClick={()=>onSubscribe()} type="submit">
                        <span className="position-relative">Subscribe</span>
                    </button>
                </div>
                </div>
            
        </div>
    );
};
