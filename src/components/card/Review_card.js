import React, { useEffect, useState } from "react";
import '../../css/Style.css';
import * as Images from "../../assets";
import { ImageShow } from "../../Element/ImageShow";
import { InputBox, InputBoxcmp } from "../../Element/vendercom/InputBox";
import { AddButton, CustomButton } from "../../Element/vendercom/AddButton";
import { baseURL, convertfirstletter, isEmpty } from "../../generalfunction";
import loading from '../../assets/loading.gif'
import useGeoLocation from "../../geolocation";
import ImgCmp from "../../Element/ImgCmp";

const Review_card = ({ vendoritem, plan, onDelete, onSave,data }) => {
    console.log("Review_card", vendoritem,plan,data)
    let geolocation = useGeoLocation()
    const [total, setTotal] = useState(!isEmpty(plan?.plan?.rate || plan?.rate) ? plan?.plan?.rate || plan?.rate : 0)
    const [visit, setVisit] = useState(1)
    const [loadimg,setLoadimg] = useState();
    const [voucherflag, setVocherflag] = useState(false)
    const onCount = (key) => {

        switch (key) {
            case "-":
                if (total > plan?.rate && visit > 1) {
                    let desc = visit - 1
                    setVisit(desc)
                    setTotal(plan?.rate * desc)
                    onSave("-", plan?.rate)
                }
                break;
            case "+":
                let sum = visit + 1
                setVisit(sum)
                setTotal(plan?.rate * sum)
                onSave("+", plan?.rate)
                break

            default:
                break;
        }


    }

    const onLoad =()=>{
        if(!isEmpty(vendoritem?.gymcenterinfo)){

            setLoadimg(vendoritem?.gymcenterinfo?.photos[0])
        }
        else{

            setLoadimg(vendoritem?.photos[0])
        }
    }

    useEffect(()=>{
        onLoad()
        
    },[])

    console.log('message',total)

    return (
        <>
            {/* {isEmpty(vendoritem) ? <>

            </> : ( */}
                <div className="my-3">
                    <div className="container text-start mb-5 px-0 rounded">
                        {/* <div className="row mx-0">
                        <div className=" text-end fs-4 fw-500" onClick={onDelete} >
                            <i className="bi bi-x-lg"></i>
                        </div>
                    </div> */}
                        <div className="row mx-0">
                            {/* <div className=" col fs-3 fw-bold" >{plan?.planname}</div> */}
                            <div className="col text-end fs-6 fw-500" onClick={onDelete} >
                                <i className="bi bi-x-lg"></i>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="fs-4 fw-bold" >{convertfirstletter(plan?.planname || plan?.plan?.planname)}</div>
                        </div>
                        <div className="row">
                            <div className="  fs-5 " >{convertfirstletter(vendoritem?.center_name || data?.data?.vendor?.gymcenterinfo?.center_name )}</div>
                        </div>
                        <div className="row mb-3">
                            <div className=" fs-6" >{convertfirstletter(vendoritem?.address || data?.data?.vendor?.gymcenterinfo?.address)}</div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-6 px-0">

                                {/* <ImageShow imageurl={loadimg} width={"100%"} height={200} style={{borderRadius:'15px'}}/> */}

                            </div>
                            <div className="col-6 ">
                                <div className="fw-bold lh-base fs-5 text-center">{`SUPER ACTIVE ${plan?.planname?.toUpperCase() || plan?.plan?.planname?.toUpperCase()}`}</div>
                                <div className="lh-base text-center fs-6 my-1">{"Unlimited visits at multiple gyms"}</div>
                                <div className="lh-base text-center fs-6 my-1">{"Access 951 gyms nationwide"}</div>
                                <div className="lh-base text-center fs-6 my-1">{"Online fitness apps included"}</div>

                            </div>
                        </div>
                        {plan?.duration== 'month' ? (<div className="row">
                            <div className="pricecontainer rounded px-2 py-3 my-4">
                                <div className="row">

                                    <div className="col-9">
                                        <div className="fs-5"> Monthly recurring payments</div>

                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="fs-5">{`${geolocation?.country == 'India' ? '₹' : '£'} ${total}`}</div>
                                    </div>
                                </div>

                            </div>
                        </div>) : (
                            <div className="row pt-4">
                                <div className="pricecontainer rounded px-3 py-3">
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="fs-5">{`Total ${convertfirstletter(plan?.planname)}`}</div>
                                            <div className="fs-6 mt-2">{"This Pass will allow you 1 visit. Valid for the next 30 days"}</div>
                                        </div>
                                        <div className="col-3 text-end">
                                            <div className="fs-5">{`${geolocation?.country == 'India' ? '₹' : '£'} ${total}`}</div>

                                            <div className="d-flex justify-content-end w-auto mt-1">

                                                <div onClick={() => onCount("-")} className="countbutton px-4 py-1 rounded-start">
                                                    -
                                                </div>
                                                <div className="text-black py-1 px-4 fw-bold bg-white count">{visit}</div>
                                                <div onClick={() => onCount("+")} className="countbutton px-4 py-1 rounded-end">
                                                    +
                                                </div>

                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}


                    </div>
                </div>
                {/* )} */}
        </>
    )
}

export default Review_card