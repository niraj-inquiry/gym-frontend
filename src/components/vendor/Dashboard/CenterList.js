import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { API, isEmpty } from "../../../generalfunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import GoogleMapScreen from "./GoogleMap";
const { CenterType, Country, States, Cities } = require("./LocationData");

const CenterList = ({ data }) => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [showForm, setShowForm] = useState(false);

  // center registration start
  const [center_name, setCenterName] = useState("");
  const [centertype, setCenterType] = useState("");
  const [address, setAddress] = useState("");
  const [gstnumber, setGstNumber] = useState("");
  const [pannumber, setPanMumber] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lat, setLat] = useState(data?.lat);
  const [lng, setLng] = useState(data?.lng);

  const [centerBanner, setImage] = useState(null);
  const [getCenter, setGetCenter] = useState([]);
  const [getGymId, setGetGymId] = useState("");
  console.log("centerBanner", centerBanner);
  const created_by_useridv = JSON.parse(
    localStorage.getItem("vendorAuth")
  ).vendor;
  console.log(created_by_useridv);
  const handleChoiceChange = (e) => {
    setSelectedChoice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("address", address);
    formData.append('lat',lat)
    formData.append('lng', lng)
    formData.append("email", email);
    formData.append("contact_number", contact_number);
    formData.append("pincode", pincode);
    formData.append("district", district);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("pannumber", pannumber);
    formData.append("gstnumber", gstnumber);
    formData.append("centertype", centertype);
    formData.append("center_name", center_name);
    formData.append("centerBanner", centerBanner);
    formData.append("created_by_userid", created_by_useridv);
    // Append the centerBanner file to the FormData

    axios
      .post(
        "https://gym-api-3r8c.onrender.com/v1.0/gymcenter/gymcenter-register",
        formData
      )
      .then((res) => {
        console.log("post center api", res);

        toast.success("Center successfully created!", {
          position: "top-center",
        });
        centerGet();

        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.success("Center Creation Failed!", {
          position: "top-center",
        });
      });
  };

  const onSaveLngLat = (data) => {
    console.log("Data", data);
    if (!isEmpty(data?.lat) && !isEmpty(data?.lng)) {
      setLat(data?.lat);
      setLng(data?.lng);
    }
  };

  const centerGet = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/v1.0/gymcenter/gym-all-data")
      .then((res) => {
        setGetCenter(res.data.data);
      });
  };
  // console.log('getCenter', getCenter[0].created_by_userid)
  const handleDelete = (id) => {
    axios
      .delete(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/gym-delete-by-id/${id}`
      )
      .then((res) => {
        console.log(res);
        toast.success("Center deleted successfully", {
          position: "top-center",
        });
      });
  };
  useEffect(() => {
    centerGet();
    // handleDelete();
  }, []);
  console.log(getCenter, getGymId);
  return (
    <>
      <div className="center-list-main">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div className="add-center-list-container">
                <button className="mb-3" onClick={() => setShowForm(!showForm)}>
                  Add Center
                </button>
                <div
                  className={
                    showForm
                      ? "create-center-container-show"
                      : "create-center-container-hide"
                  }
                >
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="center_type">Center Type</label>
                        <select
                          className="form-control"
                          id="centertype"
                          name="centertype"
                          value={centertype}
                          required
                          onChange={(e) => {
                            setCenterType(e.target.value);
                            handleChoiceChange(e);
                          }}
                        >
                          <option>Choose Center Type</option>
                          {CenterType.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {selectedChoice === "Gym Center" && (
                        <>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="center_name">Center Name</label>
                            <input
                              type="text"
                              id="center_name"
                              name="center_name"
                              value={center_name}
                              className="form-control"
                              onChange={(e) => setCenterName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="contact_number">Phone</label>
                            <input
                              type="text"
                              id="contact_number"
                              name="contact_number"
                              value={contact_number}
                              className="form-control"
                              onChange={(e) => setContactNumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="gstnumber">GST No.</label>
                            <input
                              type="text"
                              id="gstnumber"
                              name="gstnumber"
                              value={gstnumber}
                              className="form-control"
                              onChange={(e) => setGstNumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="pannumber">Pan No.</label>
                            <input
                              type="text"
                              id="pannumber"
                              name="pannumber"
                              value={pannumber}
                              className="form-control"
                              onChange={(e) => setPanMumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="country">Country</label>
                            <select
                              id="country"
                              name="country"
                              value={country}
                              className="form-control"
                              onChange={(e) => setCountry(e.target.value)}
                              required
                            >
                              <option>Choose Country</option>
                              {Country.map((item, index) => {
                                return (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="state">State</label>
                            <select
                              id="state"
                              name="state"
                              value={state}
                              className="form-control"
                              onChange={(e) => setState(e.target.value)}
                              required
                            >
                              <option>Choose State</option>
                              {States.filter(
                                (item) => item.cname === country
                              ).map((ev) => {
                                return ev.sname.map((itm, i) => {
                                  return (
                                    <option key={i} value={itm}>
                                      {itm}
                                    </option>
                                  );
                                });
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="district">City/District</label>

                            <select
                              id="district"
                              name="district"
                              value={district}
                              className="form-control"
                              onChange={(e) => setDistrict(e.target.value)}
                              required
                            >
                              <option>Choose City</option>
                              {Cities.filter(
                                (item) => item.sname === state
                              ).map((itm) => {
                                return itm.cityname.map((ev, i) => {
                                  return (
                                    <option key={i} value={ev}>
                                      {ev}
                                    </option>
                                  );
                                });
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="pincode">Pin Code</label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              value={pincode}
                              className="form-control"
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="address">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Full Address"
                              id="address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="centerBanner">Choose Profile</label>
                            <input
                              type="file"
                              id="centerBanner"
                              accept="centerBanner/*"
                              className="form-control"
                              onChange={(e) => setImage(e.target.files[0])}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4">
                            <label htmlFor="">Latitude</label>
                            <input type="text" className="form-control" value={lat} />
                          </div>
                          <div className="col-lg-6 mb-4">
                            <label htmlFor="">Latitude</label>
                            <input type="text" className="form-control" value={lng} />
                          </div>
                          
                          <div className="log-lg-6 mb-4 map-col" >
                            <GoogleMapScreen
                              onSave={(data) => onSaveLngLat(data)}
                              data={{ lat: lat, lng: lng }}
                            />
                          </div>
                        </>
                      )}
                      {selectedChoice === "Activities Center" && (
                        <>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="center_name">Center Name</label>
                            <input
                              type="text"
                              id="center_name"
                              name="center_name"
                              value={center_name}
                              className="form-control"
                              onChange={(e) => setCenterName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="contact_number">Phone</label>
                            <input
                              type="text"
                              id="contact_number"
                              name="contact_number"
                              value={contact_number}
                              className="form-control"
                              onChange={(e) => setContactNumber(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="country">Country</label>
                            <select
                              id="country"
                              name="country"
                              value={country}
                              className="form-control"
                              onChange={(e) => setCountry(e.target.country)}
                              required
                            >
                              <option>Choose Country</option>
                              {Country.map((item, index) => {
                                return (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="state">State</label>
                            <select
                              id="state"
                              name="state"
                              value={state}
                              className="form-control"
                              onChange={(e) => setState(e.target.value)}
                              required
                            >
                              <option>Choose State</option>
                              {States.filter(
                                (item) => item.cname === country
                              ).map((ev) => {
                                return ev.sname.map((itm, i) => {
                                  return (
                                    <option key={i} value={itm}>
                                      {itm}
                                    </option>
                                  );
                                });
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="district">City/District</label>

                            <select
                              id="district"
                              name="district"
                              value={district}
                              className="form-control"
                              onChange={(e) => setDistrict(e.target.value)}
                              required
                            >
                              <option>Choose City</option>
                              {Cities.filter(
                                (item) => item.sname === state
                              ).map((itm) => {
                                return itm.cityname.map((ev, i) => {
                                  return (
                                    <option key={i} value={ev}>
                                      {ev}
                                    </option>
                                  );
                                });
                              })}
                            </select>
                          </div>
                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="pincode">Pin Code</label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              value={pincode}
                              className="form-control"
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-lg-6 mb-4 ">
                            <label htmlFor="centerBanner">Choose Profile</label>
                            <input
                              type="file"
                              id="centerBanner"
                              accept="centerBanner/*"
                              name="centerBanner"
                              className="form-control"
                              onChange={(e) => setImage(e.target.files[0])}
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="address">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Full Address"
                              id="address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-lg-6 mb-4">
                            <label htmlFor="">Latitude</label>
                            <input type="text" className="form-control" value={lat} />
                          </div>
                          <div className="col-lg-6 mb-4">
                            <label htmlFor="">Latitude</label>
                            <input type="text" className="form-control" value={lng} />
                          </div>
                          
                          <div className="log-lg-6 map-col mb-4">
                            <GoogleMapScreen
                              onSave={(data) => onSaveLngLat(data)}
                              data={{ lat: lat, lng: lng }}
                            />
                          </div>
                        </>
                      )}
                      <div className="col-lg-12">
                        <button type="submit" className="w-50">
                          Add Gym Center
                        </button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>

              <hr />
              <div className="center-list-table  text-center">
                <table class="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>Center Name</th>
                      <th>Country</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCenter
                      .filter(
                        (fitData) =>
                          fitData.created_by_userid === created_by_useridv
                      )
                      .map((item, index) => {
                        return (
                          <tr key={index} style={{ verticalAlign: "middle" }}>
                            <td>{item.center_name}</td>
                            <td>{item.country}</td>
                            <td>{item.email}</td>

                            <td>
                              {item.verify_status ? "Aproved" : "UnAproved"}
                            </td>
                            <td>
                              <button style={{ verticalAlign: "middle" }}>
                                <i
                                  class="fa fa-pencil-square"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              |
                              <button
                                onClick={() => handleDelete(item._id)}
                                style={{ verticalAlign: "middle" }}
                              >
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </button>
                              |
                              <Link
                                to={item?._id}
                                onClick={() => setGetGymId({ id: item?._id })}
                                propsValue={getGymId}
                              >
                                <button style={{ verticalAlign: "middle" }}>
                                  <i
                                    class="fa fa-plus-square"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterList;
