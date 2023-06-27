import React, { Component } from "react";
import "../css/Style.css";
export const Pagination = () => {
    return (
        <div>
            <div className="d-flex justify-content-center pagination">
                <button className="active-page">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
            <p className="result-text">Showing 1-23 of 81 results</p>
        </div>
    );
};
