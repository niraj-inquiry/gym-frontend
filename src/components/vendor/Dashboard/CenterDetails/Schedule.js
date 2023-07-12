import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Schedule = ({ centerdetails, Days }) => {
    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [getCenter, setGetCenter] = useState([]);
    const handleSchedule = (e) => {
        e.preventDefault();
        axios
            .patch(
                `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/add-gym-schedule/${centerdetails}`,
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
    }, [])
    return (
        <div className="col-12 border py-4">
            <h2>+ Add Schedule</h2>
            <form onSubmit={(e) => handleSchedule(e)} >
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <select
                            className="form-control"
                            name="day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        >

                            {Days?.map((item, index) => {
                                return (
                                    <option key={index} value={item} >{item}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input
                            type="time"
                            className="form-control"
                            name="startTime"
                            value={startTime}
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

                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-responsive"  >
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getCenter?.scheduleData?.map((item, index) => {
                                    return (
                                        <tr key={index} >
                                            <td>{item?.day}</td>
                                            <td>{item?.startTime}</td>
                                            <td>{item?.endTime}</td>
                                            <td>Edit | Delete</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Schedule