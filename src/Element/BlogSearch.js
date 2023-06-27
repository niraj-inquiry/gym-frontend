import React, { Component } from "react";
import "../css/Style.css";
export const BlogSearch = () => {
    return (
        <form className="search text-start blog-search">
            <input placeholder="Find your location" type="text" />
            <i className="fa fa-search locate-me"></i>

            <button type="submit">
                <span className="position-relative">Search</span>
            </button>
        </form>
    );
};
