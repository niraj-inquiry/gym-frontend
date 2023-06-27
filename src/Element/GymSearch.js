import React, { Component } from "react";
import "../css/Style.css";
export const GymSearch = ({ CrossHairImage }) => {
    return (
        <form className="search text-start">
            <input placeholder="Find your location" type="text" />
            <img className="locate-me" alt="gym-studio" src={CrossHairImage} />

            <button type="submit">
                <span className="position-relative">Search</span>
            </button>
        </form>
    );
};
