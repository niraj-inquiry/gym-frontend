import React, { Component } from "react";
import "../css/Style.css";
export const BlogNewsletter = () => {
    return (
        <div className="newsletter section_heading bgg-white mt-5">
            <div className="news-inner">
                <h5>Join Newsletter</h5>
                <form className="search text-start">
                    <input placeholder="Enter your Email ID" type="text" />
                    <i className="fa fa-envelope locate-me"></i>

                    <button type="submit">
                        <span className="position-relative">Subscribe</span>
                    </button>
                </form>
            </div>
        </div>
    );
};
