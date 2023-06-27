import React, { Component } from "react";
import "../css/Style.css";

// export const Box = (props) => {
export const Box = ({ title, image, desc }) => {
    return (
        <div className="col-lg-4">
            <div className="gym-work-box">
                <img className="mb-3" src={image} />
                <h4 className="mb-3">{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
};

// export default Box;
