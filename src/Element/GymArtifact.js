import React, { Component, useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { ImageShow } from "./ImageShow";


export const GymArtifact = ({ equipmentdata, amenities }) => {
    console.log("equipmentdata", equipmentdata,amenities)
    // let sortdata = equipmentdata.sort((a, b) => { return (a?.created_date - b?.created_date) })

    // let uniqueObjArray = [...new Map(sortdata.map((item) => [item["equipment_model_number"], item])).values()];

    return (
        <div style={{ width: 1000 }} className="py-3">
            <div className="container-fluid  pb-0 desk-view">
                <h4 className="text-start fw-bold">Gym Equipments</h4>
                <div className="d-flex mt-4">
                    {/* {uniqueObjArray?.length > 0 ? (uniqueObjArray?.map((item, index) => (
                        <div className="d-flex me-5 align-items-center">
                            <ImageShow imageurl={item?.equipment_image} height={30} width={30} />

                            <span className="ms-2 fs-5">{item?.equipment_name}</span>
                        </div>))) : (
                        <div className="ga-box">
                            {"No Equipments"}
                        </div>
                    )} */}
                    {equipmentdata?.length>0 ? (equipmentdata?.map((item,index) => {
                        return(
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
                {/* <div className="line my-5"></div> */}

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
                    {amenities?.length>0 ? (amenities?.map((item,index) => {
                        return(
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
        </div>
    );
};