import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./style.css";
import { API } from "../../../generalfunction";
import Equipment from "./CenterDetails/Equipment";
import Amentities from "./CenterDetails/Amentities";
import Schedule from "./CenterDetails/Schedule";
import Trainer from "./CenterDetails/Trainer";
import Facilities from "./CenterDetails/Facilities";
import Gallery from "./CenterDetails/Gallery";
const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const CenterDetails = (props) => {
  const { centerdetails } = useParams();
  const [getCenter, setGetCenter] = useState([]);
  console.log(getCenter);
  const [showBasics, setShowBasics] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const centerGet = () => {
    axios
      .get(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/gymcenter-data/${centerdetails}`
      )
      .then((res) => {
        setGetCenter(res.data?.message);
      });
  };
  
  useEffect(() => {
    centerGet();
      setShowFeature(true)
  }, []);

  console.log('setGetCenter', getCenter);
  return (
    <div className="asx">
      <div className="container pt-4">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2>Basics Details</h2>
              <button type="button" className="explore-btn rounded-pill basic_info" onClick={() => setShowBasics(!showBasics)}>
                {" "}
                <span className="position-relative fs-6">
                  {showBasics ? "Hide" : "View"} Basics Details
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`row py-4 ${showBasics ? "show-basics" : "hide-basics"}`}
        >
          <div className="col-lg-6 mb-4">
            <label>Center Name</label>
            <input
              type="text"
              className="form-control"
              value={getCenter.center_name}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              value={getCenter.contact_number}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Email</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.email}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Center Type</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.centertype}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Country</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.country}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>State</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.state}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>District</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.district}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Address</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.address}
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label>Pin Code</label>

            <input
              type="text"
              className="form-control"
              value={getCenter.pincode}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <div
              className="title-feature"
            >
              <button type="button" className="explore-btn rounded-pill basic_info" onClick={() => setShowFeature(!showFeature)}>
                {" "}
                Add More Feature
              </button>
            </div>
          </div>
        </div>
        <div
          className={`row p-4 ${showFeature ? "show-feature" : "hide-feature"
            } `}
        >
          <Equipment centerdetails={centerdetails}/>

          
          <hr />
          <Amentities
            centerdetails={centerdetails}
          />
          <hr />
        
          <Schedule
          centerdetails={centerdetails}
            Days={Days} 
          />
          <hr />
         
          <Trainer
            Days={Days}
            centerdetails={centerdetails}
          />
         <hr/>
         <Facilities/>
         <hr/>
         <Gallery/>
        </div>
      </div>
    </div>

  );
};

export default CenterDetails;