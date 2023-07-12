import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trainer = ({ centerdetails, Days }) => {
  const [tName, setTName] = useState("");
  const [tProfile, setTProfile] = useState(null);
  const [tRating, setTRating] = useState("");
  const [tDayData, setTDayData] = useState([]);
  const [getCenter, setGetCenter] = useState([]);
  console.log("tDayData", tDayData);
  const handleTrainer = (e) => {
    e.preventDefault();
    const imgPath=tProfile.name

    axios
      .patch(
        `http://localhost:8000/v1.0/gymcenter/add-new-trainer/${centerdetails}`,
        {
            newTrainerData:[
                {
                    tName,
                    tRating,
                    tProfile:imgPath,
                    tDay:tDayData
                }
            ]
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("newTrainerData successfully created!", {
          position: "top-center",
        });
        centerGet();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDayDataChange = (index, field, value) => {
    const updatedDayData = [...tDayData];
    updatedDayData[index][field] = value;
    setTDayData(updatedDayData);
  };

  const addNewDayData = () => {
    setTDayData([...tDayData, { day: "", startTime: "", endTime: "" }]);
  };

  const removeDayData = (index) => {
    const updatedDayData = [...tDayData];
    updatedDayData.splice(index, 1);
    setTDayData(updatedDayData);
  };

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
  }, []);

  return (
    <div className="col-12 border py-4">
      <h2>+ Add New Trainer</h2>
      <form onSubmit={handleTrainer}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              value={tName}
              onChange={(e) => setTName(e.target.value)}
              placeholder="Trainer Name"
              required
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="file"
              className="form-control"
              accept="tProfile/*"
              name="tProfile"
              onChange={(e) => setTProfile(e.target.files[0])}
              required
            />
          </div>
          <div className="col-lg-6 mb-3">
            <input
              type="text"
              className="form-control"
              value={tRating}
              onChange={(e) => setTRating(e.target.value)}
              placeholder="Trainer Rating"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tDayData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <select
                        className="form-control"
                        value={item.day}
                        onChange={(e) =>
                          handleDayDataChange(index, "day", e.target.value)
                        }
                        required
                      >
                        <option value="">Select Day</option>
                        {Days.map((day, dayIndex) => (
                          <option key={dayIndex} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="time"
                        className="form-control"
                        value={item.startTime}
                        onChange={(e) =>
                          handleDayDataChange(
                            index,
                            "startTime",
                            e.target.value
                          )
                        }
                        placeholder="Start Time"
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        className="form-control"
                        value={item.endTime}
                        onChange={(e) =>
                          handleDayDataChange(index, "endTime", e.target.value)
                        }
                        placeholder="End Time"
                        required
                      />
                    </td>
                    <td>
                      {index > 0 && (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeDayData(index)}
                        >
                          <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addNewDayData}
            >
              Add Day
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-end">
            <button type="submit" className="center_details_btn">
              Add New Trainer
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-responsive">
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
              {/* {getCenter?.newTrainerData?.map((item, index) => (
                <tr key={index}>
                  <td>{item.tName}</td>
                  <td>{item.tDay}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>Edit | Delete</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Trainer;
