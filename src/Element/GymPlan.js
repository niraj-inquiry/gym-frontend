import React, { Component } from "react";
import "../css/Style.css";
import { ImageShow } from "./ImageShow";
import { convertfirstletter, isEmpty } from "../generalfunction";
import { useNavigate } from "react-router-dom";
import * as Images from '../assets';

export const GymPlan = ({
    PassIcon,
    PassTitle,
    Amount,
    LinkText,
    onClick,
    Features,
    item
}) => {
    console.log("pladdd", item)
    return (
        <div className="">
            <div className="pass-box" style={{backgroundColor:'#fff'}}>
               
                <div className="row align-items-center">
                    <div className="col-2">
                        
                        <img src={Images.monthlypass} />
                    </div>
                    <div className="col text-start">
                        <h3 className="fw-bold">{convertfirstletter(PassTitle)}</h3>
                    </div>
                </div>
                <div className="row w-100 ">
                   

                    <ul className="col-8  mx-auto">
                        <li>Multi-gym access</li>
                        <li>Unlimited visits</li>
                        <li>No contracts, cancel anytime</li>
                        <li>Fitness apps included</li>
                    </ul>
                </div>


                <div className="line"></div>
                <p>
                    From {item.country == 'India' ? '₹' : '£'}<span>{Amount}/</span> <b> {PassTitle.slice(0, PassTitle.indexOf(" "))}</b>
                </p>
                <div onClick={onClick} className="linkbutton">{LinkText}</div>

            </div>
        </div>
    );
};