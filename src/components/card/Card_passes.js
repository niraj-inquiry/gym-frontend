import React, { useEffect, useState } from 'react';
import '../../css/Style.css';
import './card.css';
import { NavLink } from "react-router-dom";
import { API, baseURL } from "../../generalfunction";
import { ImageShow } from '../../Element/ImageShow';
import useGeoLocation from "../../geolocation";
import region from '../../countryjson.json';


const Card_passes = ({ data, onEditplan }) => {

    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mt-5  layout">
                <div className="card p-3 cardpass">
                    <div className="imgbody" style={{}}>
                        <ImageShow imageurl={data?.photo} height="100%" width={80} style={{ borderRadius: '150px' }} />
                       
                    </div>

                    <div className="card-body">
                        <div className='edit-icon'> <i class="fa fa-edit editclass" onClick={onEditplan}></i><br></br>
                        </div>
                        <span
                            className="px-3 py-1 rounded passtype">
                            {data?.passtype}
                        </span>
                        <div className="card-title fw-500 text-left mt-5 planname">
                            {data?.planname}
                        </div>
                        <div className="card-text aboutus">
                            {data?.aboutus}
                        </div>
                        <div className='mb-5'>FROM /
                            <strong>$
                                <span className='rate'>{data?.rate}</span>
                            </strong>/ {data?.duration}
                            <span className='fs-5 fw-bold discount'>
                                Discount Upto:&nbsp;&nbsp;{data?.discount}
                            </span>
                        </div>
                        {/* todo I want to add benefit fancilaity    */}
                        {data?.bebenefits && (<div className="border-start-0 border-end-0 py-4 px-2 benefits">
                            <div className=' d-flex'>

                                <i className="bi bi-check-circle-fill checkicon"></i>
                                <div className='benefitslist'>{data?.item}</div>
                            </div>
                        </div>
                        )}
                        {/* <div className="card-title fw-500 mb-3">{item?.benefits}</div>
                                <div className="card-text mb-3">{item?.benefitsitem}</div> */}
                    </div>
                    <NavLink to={"/centers"} style={{ bottom: 0 }}>
                        <button type="button" className="explore-btn w-100">
                            <span className="position-relative fs-5">
                                Explore
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Card_passes  