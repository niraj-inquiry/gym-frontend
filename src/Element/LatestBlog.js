import React, { Component } from "react";
import "../css/Style.css";

// export const Box = (props) => {
export const LatestBlog = ({ BlogImage, BlogName, BlogDetails, BlogLink }) => {
    return (
        <div className="latest-blog-box">
            <h5 className="text-start">Latest Blogs</h5>
            <div className="d-flex align-items-center">
                <div>
                    <img className="w-100 h-auto" src={BlogImage} />
                </div>
                <div>
                    <a href={BlogLink}>
                        <h6 className="text-start">{BlogName}</h6>
                    </a>
                    <p>{BlogDetails}</p>
                </div>
            </div>
        </div>
    );
};

// export default Box;
