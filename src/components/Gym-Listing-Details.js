import React, { Component, useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";

import {
    Header,
    NewsFeed,
    PlayStore,
    Footer,
    Faq,
    GymArtifact,
    GymPlan,
    UserReviewBox,
} from "../components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API, fetchImage, isEmpty, baseURL } from "../generalfunction";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import useGeoLocation from "../geolocation";
import { InputBoxReadOnlycmp, InputBoxTextArea } from "../Element/vendercom/InputBox";
import { GymDetailsAllPhotos } from "../Element/Modals/MessageBox";
import { ImageShow } from "../Element/ImageShow";
import { CustomButton } from "../Element/vendercom/AddButton";
import { GoogleMapfilter } from '../Element/GoogleMapfilter'
const Gym_Listing_Details = () => {
    console.log('')
    const [open, setOpen] = useState(false);
    const [alluserreview, setAlluserreview] = useState([]);
    const [showfeedback, setShowfeedback] = useState(false);
    const [feedbackdata, setFeedbackdata] = useState([]);
    const [country, setCountry] = useState()
    const [userinfo, setUserinfo] = useState(JSON.parse(localStorage.getItem('userdata')))
    const location = useLocation();
    const geolocation = useGeoLocation()
    console.log("location-------------1", location?.state, geolocation?.country)

    let centerid = location?.state?.centerid;
    console.log('centerid', centerid)
    const ratings = location?.state?.rating;
    // console.log('centerid', location.state);
    const d = new Date();
    let day = d.getDay()
    const [state, setState] = useState([])
    console.log('state',state);
    const [gymstate, setGymstate] = useState()
    const [facilitiesstate, setFacilitiestate] = useState([])
    const [equip, setEquip] = useState([])
    const daysname = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [imgurl, setImgurl] = useState()
    const [comment, setComment] = useState()
    const [rating, setRating] = useState(0)
    const [multiplephoto, setMultiplephoto] = useState([]);
    const [ratinglist, setRatinglist] = useState([
        { name: 1, status: false },
        { name: 2, status: false },
        { name: 3, status: false },
        { name: 4, status: false },
        { name: 5, status: false },
    ])
    const [showmodal, setShowmodal] = useState(false)
    console.log('imgurl', gymstate?.gymcenterinfo)
    const onload = async () => {

        let body = {
            gymcenterid: location?.state?.centerid,
            email: location?.state?.email
        }
        API.post('v1.0/gymcenterdetails/get-gym-center-all-details', body).then((gymdata) => {
            console.log("ddddddddddddddd", gymdata?.data?.data)
            if (gymdata?.data?.status === true) {
               
                if (gymdata?.data?.data) {

                    API.get(`v1.0/plan/get-plan/${!isEmpty(geolocation?.country) ? geolocation?.country : gymdata?.data?.data?.country}/${gymdata?.data?.data?._id}`).then(res => {
                        if (res?.data?.status) {

                            setState(res?.data?.data);
                        }

                    })
                }
              

                setGymstate(gymdata?.data?.data)
               

                setEquip(gymdata.data.data?.gymeqeuipmentsinfo)
                let trainertemp = []
                gymdata.data.data?.gymfaciltiesinfo?.map(async (item) => {
                    const gymres = await API.get(`v1.0/user/get-data-by-userid/${item?.user_id}`)
                    trainertemp.push(gymres.data.data)
                })

                setFacilitiestate(trainertemp)
            }


        })
       
        allUserReview();

    }

    console.log('state', state)
    const show = (e) => {
        e.target.value();
        setOpen(true);

    }


    const navigate = useNavigate()
    const onLink = (item) => {
        console.log('datai',item);
        const forwardData = Object?.assign({}, item, gymstate);
        const newforwardData=JSON.stringify(forwardData)
        console.log('newforwardData',newforwardData);
        localStorage.setItem('selectdat',newforwardData)
        const loggedUser=JSON.parse(localStorage.getItem('userAuth'))
        if (loggedUser) {
            navigate('/booking_appointment')
        } else {
            navigate('/login')
        }
        // const userdata = JSON.parse(localStorage.getItem('userdata'))
        // console.log('userdata',userdata);
        // const usertype = userdata?.user_type
        // console.log('usertype', usertype)
        // console.log('forwardData', forwardData)

        // if (!isEmpty(usertype)) {
        //     switch (usertype) {
        //         case "User":
                   
        //             navigate('/booking_appointment', { state: { plan: forwardData } })
        //             break;

        //         default:
        //             navigate('/dashboard')
        //             break;
        //     }
        // }
        // else {
        //     navigate('/login')
        // }




    }
    const onComment = async () => {

        if (!isEmpty(userinfo?._id)) {
            let body = {
                rating: rating,
                feedback_by_userid: userinfo?._id,
                centerid: centerid,
                comment: comment,
                // like,
            }
            API.post(`v.1.0/feedbackwithrating/add-new-feedbackwithrating`, body).then(res => {

                if (res.data.status) {
                    setComment('')
                    window.location.reload(true)
                    // onload()
                }
            })
        }
        else {
            navigate('/login')
        }
        console.log('comment',comment)
    }

    const allUserReview = async () => {
        const resdata = await API.get(`v.1.0/feedbackwithrating/get-all-feedback_centerid/${centerid}`)
        console.log('resdata--------allUserReview----', resdata?.data)
        if (resdata?.data?.status === true) {
            let temp = [...resdata?.data?.data]
            setAlluserreview(temp)

        }
        else {
            // alert('please enter the correct voucher code')

        }
    }
    console.log('alluserreview', alluserreview)


    const userReview = async () => {

        let body = {
           
            centerid: centerid,
           
        }
        const resdata = await API.post(`v.1.0/feedbackwithrating/add-new-feedbackwithrating`, body)
        console.log('resdata------------', resdata)


    }
    const onClickGiveRating = (index) => {
        let temparr = [...ratinglist]
        temparr[index].status = !temparr[index].status
        const count = temparr.filter(function (value) {
            return value.status === true;
        }).length
        setRating(count)

        setRatinglist(temparr)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        onload();
        allUserReview();
        // userReview();
    }, [])
    console.log("mult", alluserreview)
    console.log('gymstate', gymstate)
    return (


        <>
            {showmodal ? (<GymDetailsAllPhotos
                data={multiplephoto}
                showhide={showmodal}
                setShowhide={setShowmodal}
            />) : (
                <>
                    <Header Logo={Images.logo} Hamburger={Images.menu} />
                    <div className="container-fluid px-4">
                     
                        <div className=" px-0 mx-0 py-4 ">
                           
                            <h2 className="text-start pt-2 pt-5">{gymstate?.center_name}</h2>
                            {/* address */}
                            <div className="row">
                                <h4 className="col text-start pt-2 pb-2"> {gymstate?.address}</h4>
                                {/* ratings */}
                                <div className="col">
                                    <div className="rating px-4 py-2 rounded ms-auto">
                                        <i className="fa fa-star me-3"></i>
                                        <span className="text-white">{isNaN(ratings) ? 0 : ratings}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* images section */}
                        <div className="row position-relative" style={{ height: 450 }}>
                            <div className="col h-100">
                                <img src={Images.Aboutus} className={"rounded-2"} height={"100%"} width={'100%'} />
                                {/* <ImageShow imageurl={multiplephoto[0]}   /> */}
                            </div>
                            <div className="col h-100 justify-content-between">
                                <div className="h-50">

                                    <img src={Images.Aboutus} className={"rounded-2"} height={"100%"} width={'100%'} />
                                    {/* <ImageShow imageurl={multiplephoto[1]} height={"100%"} width={'100%'} className={"rounded-2"} /> */}
                                </div>
                                <div className="h-50 pt-4">
                                    {/* <ImageShow imageurl={multiplephoto[2]} height={"100%"} width={'100%'} className={"rounded-2"} /> */}
                                    <img src={Images.Aboutus} className={"rounded-2"} height={"100%"} width={'100%'} />
                                </div>

                            </div>
                            <div className="position-absolute bottom-0 text-end">
                                <button type="button" className="gym-detail-btn rounded w-20 px-2 py-1 m-3" onClick={() => setShowmodal(!showmodal)} >
                                    {"All Photos"}
                                </button>
                            </div>

                        </div>
                        {/* plan cards */}
                        <div className="w-100 justify-content-center align-items-center py-5 " style={{ background: '#f6f6f6' }}>

                            <div className="row mt-4 w-100 justify-content-center align-items-center">
                                <h2 className="text-center">{"How would you like to visit?"}</h2>
                                <div className="row d-flex" style={{ width: 1000 }}>
                                    {state?.length > 0 && state?.map((item, index) => (
                                        <div className="col-4 pt-4" >
                                            <GymPlan
                                                item={item}
                                                key={index}
                                                PassIcon={item?.photo}
                                                PassTitle={item?.planname}
                                                Amount={item.rate}
                                                LinkText={`Buy ${item?.planname} Plan`}
                                                onClick={() => onLink(item)}
                                                Features={item?.features}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* equiment and amentities */}
                        <div className="row justify-content-center align-items-center my-5">
                            {/* {equip?.length > 0 && (
                                <GymArtifact equipmentdata={equip}
                                    amenities={gymstate?.gymamenities} />)} */}
                            {/* {gymstate?.length > 0 && ( */}
                            <GymArtifact equipmentdata={gymstate?.equipmentData}
                                amenities={gymstate?.amentitiesData} />
                            {/* )} */}
                        </div>
                        {/* map */}
                        <div>
                            <div className="">
                                <h2 className="text-center">Locate Our Center</h2>
                                <div className="row mt-4">
                                    <div className="col-lg-6 col-md-5 p-0 position-relative">
                                        <GoogleMapfilter data={[{ lat: gymstate?.gymcenterinfo?.lat, lng: gymstate?.gymcenterinfo?.lng }]} />
                                    </div>
                                    <div className="col-lg-6 col-md-7 p-4 bgg-white gym-timing">
                                        <div className="row">
                                            <h3>Location & Opening Hours</h3>
                                        </div>

                                        <small>
                                            Opening times are for Super Active Day and
                                            Monthly+ passes
                                        </small>

                                        <div className="row mt-4">
                                            {/* {gymstate?.gymopenhours?.map((item) =>
                                                <div className="col-4">
                                                    <div className={daysname[day]?.toLowerCase() == item?.days?.toLowerCase() ? "time-box active-day" : "time-box"}>
                                                        <p>{item?.days}</p>
                                                        <small>{item?.hours}</small>
                                                    </div>
                                                </div>
                                            )} */}
                                            {gymstate?.scheduleData?.map((item) =>
                                                <div className="col-4">
                                                    <div className={daysname[day]?.toLowerCase() == item?.day?.toLowerCase() ? "time-box active-day text-center" : "time-box"}>
                                                        <p>{item?.day}</p>
                                                        <small>{item?.startTime}-{item?.endTime}</small>
                                                    </div>
                                                </div>
                                            )}

                                        </div>

                                        <div className="get-direction">
                                            <i className="fa fa-map-marker"></i>
                                            <a href="">Get directions to this gym</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* about  */}
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <div className="pt-4 mx-auto" style={{ width: 1000 }}>
                                <div className=" mt-5 w-100 justify-content-center align-items-center">
                                    <h2>{"About this"}</h2>

                                    <div className="w-100 text-start">
                                        {gymstate?.aboutus}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* reviews */}
                        <div className="pt-4 mx-auto" style={{ width: 1000 }}>
                            {alluserreview?.slice(0, 3)?.map((item, index) => {
                                console.log('item', item)
                                return (
                                    <div className="section_heading" key={index}>
                                        {(
                                            <div className="container-fluid py-5 my-2 border-bottom border-2">
                                                <div className="row justify-content-end">
                                                    <div className="col-2">
                                                        <div className="row justify-content-evenly">
                                                            {Array(item?.rating).fill()?.map((item, index) => (
                                                                <i className={'fa fa-star col-1 fs-4 col'} style={{ color: '#000' }}></i>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="position-relative">

                                                    <InputBoxReadOnlycmp

                                                        label={isEmpty(item?.first_name) ? "Anonymous" : `${item?.first_name} ${item?.last_name}`}
                                                        type={'text'}
                                                        defaultValue={item?.comment}

                                                    />


                                                </div>


                                            </div>
                                        )}
                                    </div>
                                )
                            })

                            }
                        </div>
                        {showfeedback &&
                            <div className="section_heading py-5 my-2 border-bottom border-2 mx-auto" style={{ width: 1000 }}>
                                <div className="container-fluid">
                                    <div className="row justify-content-end">
                                        <div className="col-2">
                                            <div className="row justify-content-evenly">

                                                {ratinglist?.map((item, index) =>
                                                    <i onClick={() => onClickGiveRating(index)} className={item?.status === true ? 'fa fa-star col-1 fs-4 col-lg-1 ' : 'fa fa-star-o col-lg-1 fs-4 col'} style={{ color: '#000' }}></i>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="row"> */}
                                    <div className="position-relative">
                                        <InputBoxTextArea
                                            label={'Add Comments'}
                                            type={'text'}
                                            placeholder={"Enter the comments"}
                                            state={comment}
                                            setState={setComment}

                                        />
                                        <i className="fa fa-paper-plane comment" onClick={() => onComment()}></i>
                                    </div>

                                    {/* <div className="col">
                                <div className="row justify-content-evenly">

                                    {ratinglist.map((item, index) =>
                                        <i onClick={() => onClickGiveRating(index)} className={item?.status === true ? 'fa fa-star col-1 fs-4 col ' : 'fa fa-star-o col-1 fs-4 col'} style={{ color: '#000' }}></i>
                                    )}
                                </div>
                            </div> */}
                                    {/* </div> */}
                                    {/* <div className="w-100 border">
                            <button type="button" className="border explore-btn rounded-pill my-2" onClick={() => setShowfeedback(true)}>
                                <span className="position-relative fs-6" onClick={() => onComment()}>
                                    Send
                                </span>
                            </button>
                        </div> */}
                                </div>
                            </div>
                        }
                        <button type="button" className="explore-btn rounded-pill float-end my-3" onClick={() => setShowfeedback(true)}>
                            <span className="position-relative fs-6">
                                Add Comments
                            </span>
                        </button>
                    </div>
                    <Multiplesection_footer />
                </>
            )}
        </>
    );

}

export default Gym_Listing_Details;