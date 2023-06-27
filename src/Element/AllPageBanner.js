import React, { Component } from "react";
import "../css/Style.css";
export const AllPageBanner = ({ BackGroundImage, PageName }) => {
    return (
        <section className="position-relative">
            <img className="page-banner-img" src={BackGroundImage}/>
            <div className="page-name px-5 py-4">
                <h1 className="m-0 px-3 py-2" style={{border:'5px solid grey',backgroundColor:'white',color:'black'}}>{PageName}</h1>
            </div>
        </section>
    );
};
