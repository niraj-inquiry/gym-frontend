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
import { resources, generateAppointments } from '../json/data';
// import * as AspNetData from 'devextreme-aspnet-data-nojquery';
// import Scheduler, { View, Scrolling, Resource } from "devextreme-react/scheduler";
import axios from "axios";
import './style.css';
// import { Calender } from "../Element/Calender/index";
import Scheduler_calendar from "../Element/Scheduler_calendar";


const BookingAppointment = () => {
  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();

  const [modalBox, setModalbox] = useState();
  const [start_time, setStart_time] = useState();
  const [end_time, setEnd_time] = useState();

  const scheduler_data = [
    {

      name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
      items: ['', '', '', '', '', '', ''],
    }
  ]
  const scheduler = scheduler_data[0];
  const [cellValue, setCellValue] = useState('');
  console.log('scheduler', scheduler);
  const [appointment_name, setAppointment_name] = useState();
  const [data, setData] = useState({ dayname: '', start_time: '', end_time: '', title: '' })
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

  console.log('getData', getData);
  const [getTrainer, setGetTrainer] = useState([]);
  const [strainer, setStrainer] = useState("");
  console.log("selectedPData", selectedPData.planname);
  const getTrainerList = () => {
    axios
      .get(
        "https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data"
      )
      .then((res) => {
        const filterTrainer = res.data.data.find(
          (item) => item.center_name === selectedPData.center_name
        );
        setGetTrainer(filterTrainer);
      });
  };
  console.log("getTrainer", getTrainer.newTrainerData);
  const filtTrainerData = Array.isArray(getTrainer.newTrainerData)
    ? getTrainer.newTrainerData.find((item) => item.tName === strainer)
    : "";
  console.log("filtTrainerData", filtTrainerData);
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
  const getPlan = selectedPData.planname;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  console.log("startDate", startDate);
  useEffect(() => {
    const calculateEndDate = () => {
      if (getPlan === "Day Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 0);
        return nextDate.toISOString().split("T")[0];
      } else if (getPlan === "Weekly Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 7);
        return nextDate.toISOString().split("T")[0];
      } else if (getPlan === "Monthly Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 30);
        return nextDate.toISOString().split("T")[0];
      } else {
        // For other plans or empty startDate, return an empty string or handle accordingly
        return "";
      }

    };

    const calculatedEndDate = calculateEndDate();

    setEndDate(calculatedEndDate);
    window.scroll(0, 0);
  }, [startDate, getPlan]);

  useEffect(() => {
    getTrainerList();
    window.scroll(0, 0);
  }, []);

  const currentDate = new Date(2021, 3, 27);
  const dayOfWeekNames = ['', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timings = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const blank_data = ['', '', '', '', '', '', ''];

  const views = ['week',];
  // console.log(appointments,'appointments');
  // console.log('dataSource', dataSource);
  const renderDateCell = () => {
    return (
      <div className="name">{dayOfWeekNames}</div>
    );
  }

  const onAppointment = (index, item, currentIndex) => {
    console.log('Clicked on index:', index, item);
    console.log('Current Index:', currentIndex);
    setModalbox(!modalBox);
    const updatedData = [...scheduler_data]; // Create a copy of the data array
    // updatedData[index] = 'New Value'; 
    updatedData[index] = appointment_name;
    setData(updatedData);

    // console.log('onAppointment', index);

  }
  console.log('appointment_name', appointment_name);
  let getDay = ""
  console.log('getDay', getDay);
  console.log('booking_data', data);

  const onLoad = (item, index) => {
    // setData({ dayname: `${item}` })
    setModalbox(!modalBox);
    setStart_time(item);
    getCellValue(item)
    // {...cell.getCellProps()}
    console.log('onLoad', item, index)
  }
  const getCellValue = (item) => {
    setCellValue(item)
  }
  console.log('setCellValue', cellValue);
  localStorage.setItem('trainername', strainer)


  const validateForm = (data) => {
    const { address, city, state, country, phone} = data;

    // Perform validation logic
    switch (true) {
      case !address:
        alert("Address is required.");
        return false;

      case !city:
        alert("City is required.");
        return false;

      case !state:
        alert("State is required.");
        return false;

      case !country:
        alert("Country is required.");
        return false;

      case !phone:
        alert("Phone number is required.");
        return false;
      
      default:
        console.log("Validation successful");
        return true;
    }
  };

  const handleAppointmet = () => {
    if (validateForm(getData)) {
      localStorage.setItem('billingData', JSON.stringify(getData));
      navigation("/revieworder");
    }
  }

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
        <div className="row mx-0 w-100">
          <div className="col-lg-10">
            <h2 className=" logo_color py-4">Trainer Schedule</h2>
            <div className="border p-3 rounded">
              <div className="row align-items-center">
                <div className="col-lg-5 border-dark mb-3">
                  <label>Choose Trainer</label>
                  <select
                    value={strainer}
                    onChange={(e) => setStrainer(e.target.value)}
                    className="form-select"
                  >
                    <option>Choose Trainer</option>
                    {getTrainer?.newTrainerData?.map((item, index) => {
                      return <option key={index} >{item.tName}</option>;
                    })}
                  </select>
                </div>

                <div className="border-start col-lg-7">
                  {!filtTrainerData ? (
                    <>
                      <div className="text-center fs-6 fw-bold">
                        Data Not Found Choose Any Trainer
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex justify-content-between align-items-center" >
                        <div >
                          <h2 className="ms-2">
                            {filtTrainerData.tName}

                          </h2>
                          <img src="/assets/5stars.png" className="pt-2" alt="" width={80} />
                        </div>
                        <div>
                          <img
                            src="/assets/trainer.png"
                            height={70}
                            width={70}
                            alt=""
                          />
                        </div>
                      </div>

                    </>
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  {!filtTrainerData ?
                    <>
                      <div className="fs-6 text-center">
                        Data Not Found Choose Any Trainer
                      </div>
                    </> :
                    <>

                      <table className="table table-striped table-responsive">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtTrainerData.tDay.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.day}</td>
                                <td>{item.startTime} AM</td>
                                <td>{item.endTime}PM</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                    </>}
                </div>
              </div>
            </div>

          </div>
          <hr className="my-5" />
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-3 logo_color">Schedule Your Flexible Timing</h2>
              <div className="row justify-content-between mx-0">

                <div className="col-lg-12">

                  <Scheduler_calendar />

                </div>
              </div>
            </div>
            <div className="col border rounded billing py-3 border h-100">
              <div className="">
                <h1 className="text-center pb-3 logo_color">
                  Billing Information
                </h1>
                <div className=" row mx-auto px-3">
                  <div className="col-lg-12 mb-4 ">
                    <input
                      type="text"
                      id="name"
                      value={UserDetails?.Uname}
                      name="name"
                      className="form-control  fs-6 py-2"
                      placeholder="Enter Your Full Name"
                      required
                      disabled
                    />
                  </div>
                  <div className="col-lg-12 mb-4 ">
                    <input
                      type="email"
                      value={UserDetails?.Uemail}
                      id="email"
                      name="email"
                      placeholder="Enter Your Email Id"
                      className="form-control  fs-6 py-2"
                      onChange={(e) => handleInput(e)}
                      required
                      disabled
                    />
                  </div>
                  <div className="col-lg-12 mb-4 ">
                    <input
                      type="text"
                      className="form-control  fs-6 py-2"
                      placeholder="Phone Number"
                      value={getData.phone}
                      onChange={(e) => setGetData({ ...getData, phone: e.target.value })}
                    />
                  </div>
                  <div className="col-lg-12 mb-4 ">
                    <select
                      id="country"
                      name="country"
                      className="form-control  fs-6 py-2"

                      required
                      value={getData.country}
                      onChange={(e) => { setGetData({ ...getData, country: e.target.value }); onSelectCountry(e) }}
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

                      required
                      value={getData.state}
                      onChange={(e) => { setGetData({ ...getData, state: e.target.value }); onSelectstate(e) }}
                    >
                      <option>Choose State</option>
                      {statelist?.map((item) => (
                        <option
                          value={item?.state}
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

                      required
                      value={getData.city}
                      onChange={(e) => { setGetData({ ...getData, city: e.target.value }); setDistrict(e.target.value) }}
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
                      required
                      value={getData.address}
                      onChange={(e) => setGetData({ ...getData, address: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row my-3 ">
            <div className="col-12 pe-0">
              <button
                type="submit"
                className="w-auto search border-0 rounded ms-auto booking_box_button"
                onClick={handleAppointmet}
              >
                <span className="position-relative py-2 px-3 ">
                  Booking Appointment
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingAppointment;
