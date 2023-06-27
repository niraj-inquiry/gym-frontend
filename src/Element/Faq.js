import React, { Component,useEffect,useState } from "react";
import "../css/Style.css";
import { API } from "../generalfunction";

export const Faq = ({ Sign,onClick ,Question, Answer, BlockAns, ActiveView }) => {
   
    return (
        <div onClick={onClick} className={`accordian ${ActiveView}`}>
            <div className="acc-head">
                <div className="sign">{Sign}</div>
                {Question}
            </div>
            <div className={`acc-body ${BlockAns}`}>{Answer}</div>
        </div>
    );
};
