import React, { useEffect, useState } from "react";
import { Header } from "../Element/Header";
import * as Images from "../assets";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import { GoogleMapfilter } from "../Element/GoogleMapfilter";
import axios from "axios";
import { themes } from "@mobiscroll/react";
import { GymPlan } from "../Element/GymPlan";
import { useNavigate } from "react-router-dom";
import { GymArtifact } from "../Element/GymArtifact";
import { API, isEmpty } from "../generalfunction";
import './style.css'
const Gym_Listing_Details = () => {
  const navigate = useNavigate();
  const daysname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [gymstate, setGymstate] = useState();
  const [getCentId, setGetCentId] = useState([]);
  const [state, setState] = useState([]);
  const cid = localStorage.getItem("selectedId");
  const [getPlan, setGetPlan] = useState([]);
  const getCenterById = () => {
    API.get(
      `/v1.0/gymcenter/gymcenter-data/${cid}`
    )
      .then((res) => {
        setGetCentId(res.data.message);
      });
  };
  console.log("getCentId", getCentId);
  const onLink = (item) => {
    console.log("datai", item);
    const forwardData = Object?.assign({}, item, getCentId);
    const newforwardData = JSON.stringify(forwardData);
    console.log("newforwardData", newforwardData);
    localStorage.setItem("selectdat", newforwardData);
    const loggedUser = JSON.parse(localStorage.getItem("userAuth"));
    if (loggedUser) {
      navigate("/booking_appointment");
    } else {
      navigate("/login");
    }
  };

  const onGetPlan = async () => {
    API.get(`https://gym-api-3r8c.onrender.com/v1.0/plan/get-all-plan`)
      .then((res) => {
        setGetPlan(res.data.data);
      });
  };
  console.log("getPlan", getPlan);
  useEffect(() => {
    onGetPlan();
    getCenterById();
    window.scroll(0, 0);
  }, []);
  const d = new Date();
  let day = d.getDay();
  var selectdat =JSON.parse( localStorage.getItem('selectdat'))
  console.log('selectdat',selectdat);
  return (
    <>
      <Header Logo={Images.logo} Hamburger={Images.menu} />

      <div className="container pt-5 center-card">
        <div className="row">
          <div className="col-12">
            <div className="center-details">
              <div>
                <h1>{getCentId.center_name}</h1>
                <p>
                  <b>{getCentId.address}</b>
                </p>
              </div>
              <div>
                <p>
                  Includes access to: <b>Gym</b>
                  <i class="fa fa-home" aria-hidden="true"></i>
                </p>
                <p>
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half" ></i>
                  </span>
                  <span  > <b> 5k Reviews</b></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* images section */}
        <div className="row position-relative" style={{ height: 450 }}>
          <div className="col h-100">
            <img
              src={Images.equipmentgym}
              className={"rounded-2"}
              height={"100%"}
              width={"100%"}
            />
            {/* <ImageShow imageurl={multiplephoto[0]}   /> */}
          </div>
          <div className="col h-100 justify-content-between">
            <div className="h-50">
              <img
                src={Images.partnership}
                className={"rounded-2"}
                height={"100%"}
                width={"100%"}
              />
              {/* <ImageShow imageurl={multiplephoto[1]} height={"100%"} width={'100%'} className={"rounded-2"} /> */}
            </div>
            <div className="h-50 pt-4">
              {/* <ImageShow imageurl={multiplephoto[2]} height={"100%"} width={'100%'} className={"rounded-2"} /> */}
              <img
                src={Images.refer_image}
                className={"rounded-2"}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
          <div className="position-absolute bottom-0 text-end">
            <button
              type="button"
              className="gym-detail-btn rounded w-20 px-2 py-1 m-3"
            //   onClick={() => setShowmodal(!showmodal)}
            >
              {"All Photos"}
            </button>
          </div>
        </div>
        {/* plan cards */}
        <div
          className="w-100 justify-content-center align-items-center py-5 "
          style={{ background: "#f6f6f6" }}
        >
          <div className="row mt-4 w-100 justify-content-center align-items-center">
            <h2 className="text-center">{"How would you like to visit?"}</h2>
            <div className="row d-flex" style={{ width: 1000 }}>
              {getPlan?.length > 0 &&
                getPlan?.map((item, index) => (
                  <div className="col-4 pt-4">
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
          <GymArtifact
            equipmentdata={getCentId?.equipmentData}
            amenities={getCentId?.amentitiesData}
          />
        </div>
        <div>
          <div className="">
            <h2 className="text-center">Locate Our Center</h2>
            <div className="row mt-4 mx-0">
              <div className="col-lg-6 col-md-5 p-0 position-relative">
                <GoogleMapfilter
                  data={[
                    {
                      lat: gymstate?.gymcenterinfo?.lat,
                      lng: gymstate?.gymcenterinfo?.lng,
                    },
                  ]}
                />
              </div>
              <div className="col-lg-6 col-md-7 p-4 bgg-white gym-timing">
                <div className="row">
                  <h3>Location & Opening Hours</h3>
                </div>

                <small>
                  Opening times are for Super Active Day and Monthly+ passes
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
                  {getCentId?.scheduleData?.map((item) =>
                    <div className="col-4">
                      <div 
                      className={daysname[day]?.toLowerCase() == item?.day?.toLowerCase() ? "time-box active-day text-center" : "time-box"}>
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
      </div>


      <Multiplesection_footer />
    </>
  );
};

export default Gym_Listing_Details;
