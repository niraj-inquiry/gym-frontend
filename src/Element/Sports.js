import React, { Component } from "react";
import "../css/Style.css";

export const Sports = (props) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className={`sport-box ${props.color}`}>
                <div className="row align-items-center">
                    <div className="col-8 text-start">
                        <h5>{props.title}</h5>
                        <div className="centers">{props.count}</div>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-auto"
                            src={props.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
    
}
