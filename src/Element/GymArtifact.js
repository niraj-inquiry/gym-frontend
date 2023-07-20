import React, { Component, useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { ImageShow } from "./ImageShow";
import { TeamMember } from "./TeamMember";


export const GymArtifact = ({ equipmentdata, amenities, trainerdata }) => {
    console.log("equipmentdata", equipmentdata, amenities)
    // let sortdata = equipmentdata.sort((a, b) => { return (a?.created_date - b?.created_date) })

    // let uniqueObjArray = [...new Map(sortdata.map((item) => [item["equipment_model_number"], item])).values()];

    return (
        <div style={{ width: 1000 }} className="py-3">
            <div className="container-fluid  pb-0 desk-view">
                <h4 className="text-start fw-bold">Gym Equipments</h4>
                <div className="d-flex mt-4">
                    
                    {equipmentdata?.length > 0 ? (equipmentdata?.map((item, index) => {
                        return (
                            <div className="d-flex me-4 align-items-center" key={index}>
                                {/* <ImageShow imageurl={item?.equipment_image} height={30} width={30} /> */}
                                <img src={Images.Cardio} height={25} width={25} />
                                <span className="ms-2 fs-6">{item?.equipment_name}</span>
                            </div>
                        )
                    }))
                        : (
                            <div className="ga-box">
                                {"No Equipments"}
                            </div>
                        )
                    }

                </div>


            </div>
            <div className="divider border line my-5">
               

            </div>
            <div className="container-fluid  desk-view pt-2">
                <h4 className="text-start fw-bold">Gym Amenities</h4>
                <div className="d-flex mt-4">
                    {/* {amenities?.length > 0 ? (amenities?.map((item) =>
                        <div className="d-flex me-5 align-items-center">
                            <img src={Images.Cardio} height={30} width={30} />
                            <span className="ms-2 fs-5">{item}</span>
                        </div>)
                    ) : (<div className="ga-box">
                        {"No Amenities"}
                    </div>)} */}
                    {amenities?.length > 0 ? (amenities?.map((item, index) => {
                        return (
                            <div className="d-flex me-5 align-items-center" key={index}>
                                <img src={Images.studio} height={25} width={25} />
                                <span className="ms-2 fs-6">{item?.amentitiesName}</span>
                            </div>

                        )
                    }))
                        :
                        (<div className="ga-box ">
                            {"No Amenities"}
                        </div>)
                    }

                </div>
            </div>
            <div className="divider border line my-5">
            </div>
            <div className="container-fluid  desk-view pt-2">
                <h4 className="text-start fw-bold">Gym Trainer</h4>
                <div className="row">

                    {trainerdata?.length > 0 ? (trainerdata?.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-sm-6 mt-2 me-4" style={{ width: '20rem' }}>
                                <div className="team-box border boxshow mt-0 p-3 rounded ">

                                    <div className="d-flex">
                                        <div style={{width:'30%'}}>
                                            <img src={Images.face} width={100} height={90} />

                                        </div>


                                        <div className="d-flex justify-content-center align-items-center flex-column px-3"  style={{width:'70%'}}>
                                            <p className="fw-bold text-start mb-0 w-100">{item?.tName}</p>
                                            <p className="small_text text-start">
                                                He is responsible for educating clients.
                                            </p>

                                        </div>
                                    </div>

                                </div>
                               
                            </div>

                        )
                    }))
                        :
                        (<div className="ga-box ">
                            {"No Amenities"}
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};