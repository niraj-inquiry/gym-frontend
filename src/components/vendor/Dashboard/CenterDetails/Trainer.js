import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trainer = ({Days,centerdetails}) => {
    const [tName, setTName] = useState('');
    const [tDay, setTDay] = useState('');
    const [tProfile, setTProfile] = useState('');
    const [tstartTime, setTstartTime] = useState('');
    const [tendTime, setTendTime] = useState('');
    const [tactivity, setTactivity] = useState('');
    const [getCenter, setGetCenter] = useState([]);
    
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
        
      }, []);
    return (
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
                            {Days?.map((item, index) => {
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
                        <button type="submit" className="center_details_btn">Add New Trainer</button>
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
                            {getCenter?.newTrainerData?.map((item, index) => {
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
           <ToastContainer/>
        </div>
    )
}

export default Trainer
