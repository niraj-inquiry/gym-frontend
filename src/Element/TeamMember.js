/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import "../css/Style.css";
import { ImageShow } from "./ImageShow";
export const TeamMember = ({ TeamMemberPhoto, TeamName, ClubRelationship,Description,location,address }) => {
    return (
        <div className="col-lg-4 col-sm-6 mt-2">
            <div className="team-box border-0 mt-0 p-3" style={{width:'25rem'}}>
                {/* <div className="team-box-circle"></div> */}
                <div className="px-3 py-2">
                    <ImageShow imageurl={TeamMemberPhoto} 
                    style={{backgroundColor:'lightgrey'}}
                    className={"mt-0 rounded p-2"} width="100%" height="100%" />
                   
                    <div className="m-0 text-start" style={{}}>
                        <p className="fw-bold" style={{width:'100%'}}>{TeamName}</p>
                        {/* <span>{ClubRelationship}</span> */}
                        <p className="" style={{fontSize:'15px',fontWeight:'500',width:'100%'}}>{ClubRelationship}</p>
                        <p className="me-0 w-auto" style={{fontSize:'15px',fontWeight:'500',width:'100%'}}>
                            {Description}
                        </p>
                        <div className="d-flex align-items-center">
                            <img src={location} width="15" height="15"/>
                            <div className="ms-2">{address}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
