import React, { Component } from "react";
import "../css/Style.css";

export const CustomerFirstExperience = ({ Title, Image, Desc }) => {
    
    return (
        <div className="col">
        {/* <div className="col-lg-3 col-md-6"></div> */}
            <div className="customer-exp-box m-1">
                <div style={{}} className="">
                    <img alt="gym-studio" src={Image} width='80px' style={{color:'#ff8762'}}/>
                </div>
               
                <h5>{Title}</h5>
                <p>{Desc}</p>
            </div>
        </div>
    );
};
