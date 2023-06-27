import React, { Component } from "react";
import "../css/Style.css";
import { NavLink } from "react-router-dom";
export const GymListingBox = ({
    GymImg,
    GymName,
    GymAddress,
    PopularCenterText,
    link,
}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="center-box">
                {PopularCenterText && (
                    <div className="popular-center">Popular Center</div>
                )}
                <img className="w-100 h-auto" src={GymImg} />
                <div className="pt-4 pb-1 px-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>
                            <NavLink to={link}>
                                The Bomb Squad & CrossFit
                            </NavLink>
                        </h5>
                        <div className="rating">
                            <i class="fa fa-star text-white"></i>
                            <span className="text-white">4.5</span>
                        </div>
                    </div>
                    <div className="text-start type">
                        <p>{GymName}</p>
                    </div>
                    <div className="text-start adrs">
                        <p>{GymAddress}</p>
                    </div>
                </div>

                <div className="px-2 py-2">
                    <div className="line"></div>
                    <h6>Available Workout</h6>

                    <ul className="d-flex">
                        <li>
                            <a href="">Cross Functional</a>
                        </li>
                        <li>
                            <a href="">Group X</a>
                        </li>
                        <li>
                            <a href="">Yoga</a>
                        </li>
                        <li>
                            <a href="">Dance</a>
                        </li>
                        <li>
                            <a href="">HRX</a>
                        </li>
                        <li>
                            <a href="">Strength & Conditioning</a>
                        </li>
                        <li>
                            <a href="">Boxing</a>
                        </li>
                        <li>
                            <a href="">HIIT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
