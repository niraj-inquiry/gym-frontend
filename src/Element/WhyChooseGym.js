import React, { Component } from "react";
import "../css/Style.css";

export const WhyChooseGym = ({ Icon, Para }) => {
    return (
        <div className="col-lg-4 col-sm-4 rounded" style={{width:'20rem'}}>
            <div className="icon-red-box">
                <img src={Icon} />
            </div>
            <p className="why-choose-us-text">{Para}</p>
        </div>
    );
};
