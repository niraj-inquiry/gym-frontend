import React, { useEffect, useState } from "react";
import { Header } from "../Element/Header";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import axios from "axios";
import "../css/Style.css";
const Findgym = () => {
  const [getCenter, setGetCenter] = useState([]);
  const [getPlan, setGetPlan] = useState([]);
  const [getFilterData, setGetFilterData] = useState("");
  const [showFilterItem, setShowFilterItem] = useState(false);
  const getCenterData = () => {
    axios
      .get(
        "https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data"
      )
      .then((res) => {
        setGetCenter(res.data.data);
      });
  };
  const getAllPlan = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/v1.0/plan/get-all-plan")
      .then((res) => {
        setGetPlan(res.data.data);
      });
  };
  console.log("getCenter", getCenter);
  useEffect(() => {
    getCenterData();
    getAllPlan();
  }, []);
  return (
    <>
      <Header />

      {/* center start */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="input-group mb-3 ">
              <input
                type="search"
                className="form-control"
                value={getFilterData}
                placeholder="Find Fitness Center In Your Location..."
                onChange={(e) => setGetFilterData(e.target.value)}
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="add-filter">
              <span onClick={() => setShowFilterItem(!showFilterItem)}>
                Filter <i class="fa fa-filter" aria-hidden="true"></i>{" "}
              </span>
              <span>
                Map <i class="fa fa-map" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div className={showFilterItem? 'show-filter-item':'hide-filter-item'}>
            <h2>show filter item</h2>
        </div>
        <div className="row">
          {getCenter
            .filter(
              (filteritem) =>
                filteritem.center_name.toLowerCase().includes(getFilterData) ||
                filteritem.address.toLowerCase().includes(getFilterData) ||
                filteritem.pincode.toLowerCase().includes(getFilterData)
            )
            .map((item, index) => {
              return (
                <div className="col-lg-4 center-card" key={index}>
                  <div className="card">
                    <img
                      src="/assets/gym.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body py-4">
                      <span>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        0{" "}
                      </span>
                      <h3 className="card-title py-2">{item.center_name}</h3>
                      <p className="card-text pb-2">{item.address}</p>
                      <div className="d-flex justify-content-between plan-btn">
                        {getPlan.map((planitem, index) => {
                          return (
                            <button className="rounded" key={index}>
                              {planitem.planname} <br />{" "}
                              {planitem.country === "India"
                                ? ` ₹ ${planitem.rate}`
                                : `$ ${planitem.rate}`}{" "}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* center end */}

      <Multiplesection_footer />
    </>
  );
};

export default Findgym;
