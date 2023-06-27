import React, { Component } from "react";
import "../css/Style.css";
export const BlogDescription = ({
    BlogTitle,
    BlogImage1,
    BlogImage2,
    BloggerName,
    BlogDate,
    BlogDescription,
}) => {
    return (
        <div>
            <img className="w-100 h-auto" src={BlogImage1} />
            <h2 className="text-start mt-3">{BlogTitle}</h2>
            <div className="blog-box-details">
                <div className="d-flex">
                    <div>
                        <i className="fa fa-user"></i>
                        &nbsp; {BloggerName}
                    </div>
                    <div className="ml-3">
                        <i className="fa fa-calendar"></i>
                        &nbsp; {BlogDate}
                    </div>
                </div>
            </div>
            <p className="w-100 text-start">{BlogDescription}</p>

            <p className="w-100 text-start">{BlogDescription}</p>

            <img className="w-100 h-auto my-3" src={BlogImage1} />

            <p className="w-100 text-start">{BlogDescription}</p>

            <p className="w-100 text-start">{BlogDescription}</p>

            <img className="w-100 h-auto my-3" src={BlogImage2} />
        </div>
    );
};
