import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./style.css";
import { API } from "../../../generalfunction";
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
  // console.log('centerdetails',centerdetails)
  const [getCenter, setGetCenter] = useState([]);
  console.log(getCenter);
  const [showBasics, setShowBasics] = useState(false);
  const [showFeature, setShowFeature] = useState(false);


  // form data
  const [about_us, setAbout] = useState("");
  const [address, setAddress]=useState("")
  const [equipment_name, setEquipment] = useState("");
  const [equipment_brand, setBrand] = useState("");
  const [equipment_modal_number, setModelNo] = useState("");
  const [equipment_image, setImage] = useState("");
  const [amentitiesName, setAminities] = useState("");
  const [day, setDay] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [tName, setTName] = useState('')
  const [tDay, setTDay] = useState('')
  const [tProfile, setTProfile] = useState('')
  const [tstartTime, setTstartTime] = useState('')
  const [tendTime, setTendTime] = useState('')
  const [tactivity, setTactivity] = useState('')
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/update-gym-by-id/${centerdetails}`,
        {
          equipmentData: [
            {
              about_us,
              equipment_name,
              equipment_brand,
              equipment_modal_number,
              equipment_image,
            },
          ],
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("equipmentData successfully created!", {
          position: "top-center",
        });
        centerGet()
          
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAminities = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/update-gym-by-id/${centerdetails}`,
        {
          amentitiesData: [
            {
              amentitiesName,
            },
          ],
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("amentitiesData successfully created!", {
          position: "top-center",
        });
        centerGet()

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSchedule = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/update-gym-by-id/${centerdetails}`,
        {
          scheduleData: [
            {
              day,
              startTime,
              endTime
            },
          ],
        }
      )
      .then((res) => {
        console.log(res);
        toast.success(" scheduleData successfully created!", { 
          position: "top-center",
        });
        centerGet()

      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleTrainer = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/update-gym-by-id/${centerdetails}`,
        {
          newTrainerData: [
            {
              tName,
              tDay,
              tProfile,
              tstartTime,
              tendTime,
              tactivity
            },
          ],
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("newTrainerData successfully created!", {
          position: "top-center",
        });
        centerGet()

      })
      .catch((err) => {
        console.log(err);
      });
  }
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

  console.log(tDay, day);
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
          <div className="col-12 mb-4 border rounded p-3">
            <h2 className="mb-2">+ Add Equipments</h2>
            <form onSubmit={(e) => handleUpdate(e)}>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Equipment Name"
                    name="equipment_name"
                    value={equipment_name}
                    onChange={(e) => setEquipment(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="About Us"
                    name="about_us"
                    value={about_us}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Equipment Brand"
                    name="equipment_brand"
                    value={equipment_brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Equipment Modal Number"
                    name="equipment_modal_number"
                    value={equipment_modal_number}
                    onChange={(e) => setModelNo(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="file"
                    className="form-control"
                    name="equipment_image"
                    value={equipment_image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3 text-end">
                  <button type="submit" className="center_details_btn">
                    Save Equipments
                  </button>
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col-lg-12">
                <table className="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>Equipment Name</th>
                      <th>Equipment Brand</th>
                      <th>Equipment Modal Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCenter.equipmentData?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.equipment_name}</td>
                          <td>{item.equipment_brand}</td>
                          <td>{item.equipment_modal_number}</td>
                          <td>Edit | Delete</td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
            </div>
            <ToastContainer />
          </div>
          <hr />
          <div className="col-12 border  py-4">
            <h2>+ Add Amentities</h2>
            <form onSubmit={(e) => handleAminities(e)}>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Add Aminities"
                    className="form-control"
                    value={amentitiesName}
                    onChange={(e) => setAminities(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 text-end" >
                  <button type="submit" className="center_details_btn">
                    Add Aminities
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <table className="table table-striped table-responsive"  >
                  <thead>
                    <tr>
                      <th>Aminities Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCenter.amentitiesData?.map((itm, index) => {
                      return (
                        <tr key={index} >
                          <td>{itm.amentitiesName}</td>
                          <td>Edit | Delete</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-12 border py-4">
            <h2>+ Add Schedule</h2>
            <form onSubmit={(e) => handleSchedule(e)} >
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <select className="form-control"
                    name="day" value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >

                    {Days.map((item, index) => {
                      return (
                        <option key={index} value={item} >{item}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="col-lg-6 mb-3">
                  <input type="time" className="form-control"
                    name="startTime" value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input type="time" className="form-control"
                    name="endTime" value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 text-end">
                  <button type="submit" className="center_details_btn">Add Schedule</button>
                </div>
                <div className="col-12">
                  <table className="table table-striped table-responsive" >
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getCenter.scheduleData?.map((item, index) => {
                        return (
                          <tr key={index} >
                            <td>{item.day}</td>
                            <td>{item.startTime} AM </td>
                            <td>{item.endTime} PM</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div className="col-12 border py-4">
            <h2>+ Add New Trainer</h2>
            <form onSubmit={(e) => handleTrainer(e)} >
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <input type="text" placeholder="Trainer Name"
                    className="form-control"
                    name="tName"
                    value={tName}
                    onChange={(e) => setTName(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <select className="form-control"
                    name="tDay" value={tDay}
                    onChange={(e) => setTDay(e.target.value)}
                  >
                    {Days.map((item, index) => {
                      return (
                        <option key={index} value={item} >{item}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="col-lg-6 mb-3">
                  <input type="file" className="form-control"
                    name="tProfile" value={tProfile}
                    onChange={(e) => setTProfile(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input type="time"
                    className="form-control"
                    name="tstartTime" value={tstartTime}
                    onChange={(e) => setTstartTime(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input type="time"
                    className="form-control"
                    name="tendTime" value={tendTime}
                    onChange={(e) => setTendTime(e.target.value)}
                  />
                </div>
                <div className="col-lg-6">
                  <input type="text" className="form-control"
                    name="tactivity" value={tactivity}
                    placeholder="Enter your Activity Name"
                    onChange={(e) => setTactivity(e.target.value)}
                  />
                </div>
                <div className="col-12 text-end">
                  <button type="submit"  className="center_details_btn">Add New Trainer</button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <table className="table table-striped table-responsive" >
                  <thead>
                    <tr>
                      <th>Trainer Name</th>
                      <th>Day</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCenter.newTrainerData?.map((item, index) => {
                      return (
                        <tr key={index} >
                          <td>{item.tName}</td>
                          <td>{item.tDay}</td>
                          <td>{item.tstartTime}</td>
                          <td>{item.tendTime}</td>
                          <td>Edit | Delete</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>

  );
};

export default CenterDetails;