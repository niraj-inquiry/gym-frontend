import React, { useEffect, useState } from "react";
import { Header } from "../Element/Header";
import * as Images from "../assets";
import Calendar from "../Element/Calendar";
import DayCalendar from "../Element/DayCalendar";
import Countries from "../../src/json/Countries.json";
import AllBooking from "../Element/AllBooking";
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from "../generalfunction";
import "../css/Style.css";
import { resources, generateAppointments } from "../json/data";
import Scheduler, {
  Resource,
  View,
  Scrolling,
} from "devextreme-react/scheduler";
import axios from "axios";

const BookingAppointment = () => {
  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();
  const [district, setDistrict] = useState("");
  // const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')));
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [trainer, setTrainer] = useState(false);
  const [showdate, setShowdate] = useState(false);
  const navigation = useNavigate();
  const UserDetails = JSON.parse(localStorage.getItem("userAuth"));
  const selectedPData = JSON.parse(localStorage.getItem("selectdat"));
  const [getData, setGetData] = useState({
    name: UserDetails.Uname,
    address: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: UserDetails.Uemail,
  });
 const [getTrainer, setGetTrainer]=useState([])
 const getTrainerList=()=>{
   axios.get('https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data')
   .then((res)=>{
    const filterTrainer=res.data.data.find((item)=>item.center_name===selectedPData.center_name)
    setGetTrainer(filterTrainer)
    console.log('fitmind',res.data.data);
   })
 }
 console.log('getTrainer',getTrainer);
  const location = useLocation();
  const handleInput = (e) => {
    setGetData({ ...getData, [e.target.name]: e.target.value });
  };

  const onSelectCountry = (e) => {
    let countryindexvalue = Countries?.findIndex(
      (x) => x.country_name == e.target.value
    );

    setCountryindex(countryindexvalue);
    setStatelist(Countries[countryindexvalue]?.states);
  };
  const onSelectstate = (e) => {
    let stateindexvalue = Countries[countryindex]?.states.findIndex(
      (x) => x.state == e.target.value
    );

    setDistrictlist(
      Countries[countryindex]?.states[stateindexvalue]?.districts
    );
  };

  const templocation = location?.state;

  const gym_name = templocation?.vendor?.center_name;

  console.log("templocation", templocation);

  const onCardClick = (templocation) => {
    console.log("find-gym-item", localStorage.getItem("usertype"));
    navigation("/revieworder");
  };
  const groups = ["userId"];
  const startDayHour = 10;
  const endDayHour = 19;
  const currentDate = new Date();
  const data = selectedPData.planname;
  const startDay = new Date(2023, 1, 1);
  const endDay = new Date(2023, 1, 28);
  const appointments = generateAppointments(
    startDay,
    endDay,
    startDayHour,
    endDayHour
  );
  const renderScheduler = () => {
    if (data === "Day Pass") {
      return (
        <Scheduler
          dataSource={appointments}
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          defaultCurrentDate={currentDate}
          // defaultCurrentView="Timeline"
          groups={groups}
        >
          <View type="day" groupOrientation="horizontal" />
          <Resource
            dataSource={resources}
            label="Employee"
            groupOrientation="horizontal"
            fieldExpr="userId"
          />
          <Scrolling mode="virtual" />
        </Scheduler>
      );
    } else if (data === "Weekly Pass") {
      return (
        <Scheduler
          dataSource={appointments}
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          defaultCurrentDate={currentDate}
          // defaultCurrentView="Timeline"
          groups={groups}
        >
          <View type="workWeek" groupOrientation="horizontal" />
          <Resource
            dataSource={resources}
            label="Employee"
            groupOrientation="horizontal"
            fieldExpr="userId"
          />
          <Scrolling mode="virtual" />
        </Scheduler>
      );
    } else if (data === "Monthly Pass") {
      return (
        <Scheduler
          dataSource={appointments}
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          defaultCurrentDate={currentDate}
          // defaultCurrentView="Timeline"
          groups={groups}
        >
          <View type="month" groupOrientation="horizontal" />
          <Resource
            dataSource={resources}
            label="Employee"
            groupOrientation="horizontal"
            fieldExpr="userId"
          />
          <Scrolling mode="virtual" />
        </Scheduler>
      );
    } else {
      return null; // Render nothing if the viewType doesn't match any condition
    }
  };
useEffect(()=>{
  getTrainerList()
},[])
  return (
    <div>
      <Header Logo={Images.logo} Hamburger={Images.menu} />
      <div className="container pt-4">
        <div className="py-5 border-bottom">
          <div className="row">
            <div className="col-lg-6 col-6">
              <h3 className="logo_color">GYM Details</h3>
              <h3 className="fw-bold">{selectedPData.center_name}</h3>
              <h5>{selectedPData.address}</h5>
            </div>
            <div className="col-lg-6 col-6 text-end">
              <p className=" logo_color">
                ₹
                <span className="fw-bold">
                  {selectedPData.rate}/{selectedPData.planname}
                </span>
              </p>
              <p>
                {" "}
                <b> ({selectedPData.planname})</b>
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h3>
              {" "}
              <b> All Features included with plan</b>
            </h3>
            <div className="w-50">
              <div className="row pass-box border-0 p-0">
                <div className="col-6">
                  <ul className=" col">
                    <li>500 Visitors</li>
                    <li>Unlimited Projects</li>
                    <li>extended free trial</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className=" col">
                    <li>500 Visitors</li>
                    <li>Unlimited Projects</li>
                    <li>extended free trial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-0 align-items-center justify-content-center w-100">
        <div className="col-lg-4 border rounded billing py-3 border h-100">
            <div className="">
              <h1 className="text-center pb-3 logo_color">
                Billing Information
              </h1>
              <div className=" row mx-auto px-3">
                <div className="col-lg-12 mb-4 ">
                  <input
                    type="text"
                    id="name"
                    value={UserDetails.Uname}
                    name="name"
                    className="form-control  fs-6 py-2"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="col-lg-12 mb-4 ">
                  <input
                    type="email"
                    value={UserDetails.Uemail}
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Id"
                    className="form-control  fs-6 py-2"
                    onChange={(e) => handleInput(e)}
                    required
                  />
                </div>
                <div className="col-lg-12 mb-4 ">
                  <input
                    type="text"
                    className="form-control  fs-6 py-2"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 mb-4 ">
                  <select
                    id="country"
                    name="country"
                    className="form-control  fs-6 py-2"
                    onChange={(e) => onSelectCountry(e)}
                    required
                  >
                    <option>Choose Country</option>
                    {Countries?.map((item) => (
                      <option value={item.country_name}>
                        {item?.country_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-12 mb-4 ">
                  <select
                    id="state"
                    name="state"
                    className="form-control  fs-6 py-2"
                    onChange={(e) => onSelectstate(e)}
                    required
                  >
                    <option>Choose State</option>
                    {statelist?.map((item) => (
                      <option
                        value={item.state}
                        T={console.log("item state", item?.state)}
                      >
                        {item?.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-12 mb-4 ">
                  <select
                    id="city"
                    name="city"
                    className="form-control  fs-6 py-2"
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  >
                    <option>Choose City</option>
                    {districtslist?.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 ">
                  <textarea
                    className="form-control  fs-6 py-2"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter Your Address"
                    rows="3"
                  ></textarea>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-8 ">
            <h2 className=" logo_color py-4">Check Trainer Availablity</h2>
                <select >
                  <option>Choose Trainer</option>
                  {getTrainer.newTrainerData?.map((item, index)=>{
                    return(
                      <option key={index} >{item.tName}</option>
                    )
                  })}
                </select>
           
          </div>
          

          {/* <div className=''>Book Appointment</div> */}
        </div>
        <div className="row">
        <div className="col-12">
                  <button
                    type="submit"
                    className="w-auto search border-0 rounded ms-auto  me-5"
                    onClick={() => navigation("/revieworder")}
                  >
                    <span className="position-relative py-2 px-3 ">
                      Booking Appointment
                    </span>
                  </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
