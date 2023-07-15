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
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import Scheduler, { View, Scrolling, Resource } from "devextreme-react/scheduler";
import axios from "axios";
import './style.css';

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
  // Scheduler

  const url = 'https://js.devexpress.com/Demos/Mvc/api/SchedulerData';
  const dataSource = AspNetData.createStore({
    key: 'AppointmentId',
    loadUrl: `${url}/Get`,
    insertUrl: `${url}/Post`,
    updateUrl: `${url}/Put`,
    deleteUrl: `${url}/Delete`,

    onBeforeSend(_, ajaxOptions) {
      ajaxOptions.xhrFields = { withCredentials: true };
    },

  });
  const startDay = new Date(2023, 1, 1);
  const endDay = new Date(2023, 1, 28);
  const startDayHour = 10;
  const endDayHour = 19;
  const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);
  const groups = ['userId'];
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
  console.log('dataSource', dataSource);
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
                    {getTrainer.newTrainerData?.map((item, index) => {
                      return <option key={index}>{item.tName}</option>;
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
                <div className="col-lg-5">
                  <div className="input-group mb-3 ">
                    <span className="input-group-text border-0" id="basic-addon1">
                      Start Time
                    </span>
                    <input
                      type="date"
                      className="form-control border-0 border-bottom"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div class="input-group mb-3">
                    <span class="input-group-text border-0" id="basic-addon1">
                      End Time
                    </span>
                    <input
                      type="date"
                      value={endDate}
                      class="form-control border-0 border-bottom"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  {/* <Scheduler
                    currentView="week"
                    
                    dataSource={appointments}
                    startDayHour={startDayHour}
                    endDayHour={endDayHour}

                    groups={groups}
                    className='boxshow w-100'
                  >
                  
                    <View type="week" startDayHour={10} endDayHour={19} />
                    
                  </Scheduler> */}

                  {/* <Scheduler
                    timeZone="America/Los_Angeles"
                    dataSource={dataSource}
                    views={views}
                    defaultCurrentView="week"
                  allDayPanelMode="hidden"
                    defaultCurrentDate={currentDate}
                    height={600}
                    startDayHour={9}
                    endDayHour={19}
                    remoteFiltering={true}
                    dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
                    textExpr="Text"
                    startDateExpr="StartDate"
                    endDateExpr="EndDate"
                    allDayExpr="AllDay"
                    recurrenceRuleExpr="RecurrenceRule"
                    recurrenceExceptionExpr="RecurrenceException"
                 
                  /> */}

                  <h3>Selected Cell Value: {cellValue}</h3>

                  <table className="table table-bordered position-relative text-center">
                    <thead>
                      <tr>
                        <th></th>
                        {scheduler?.name.map((item, index) => {
                          return (

                            <th key={index} onClick={() => setData({ dayname: `${item}` })}>{item}</th>

                          )
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {scheduler?.time.map((item, index) => (
                        <tr key={index}>
                          <td onClick={() => setData({ start_time: `${item}` }) && setModalbox(!modalBox)}>{item}</td>
                          <td onClick={() => onLoad(item, index)}>{data?.title}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                          <td onClick={() => onLoad(item, index)}>{appointment_name ? appointment_name : ""}</td>
                        </tr>
                      )
                      )}
                      
                        {/* {scheduler?.time.map((item) => (
                          <tr key={item.id}>
                            {item.cells.map((cell, index) => (
                              <td key={index}>
                               {cell}
                              </td>
                            ))}
                          </tr>
                        ))} */}
                     
                    </tbody>
                    {modalBox &&
                      <div className="modal_box_appoint position-absolute">
                        <div className="border w-50 px-3 py-3 boxshow  appointment_box rounded" >
                          <div className="mb-3 text-start ">
                            <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Appointment Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="Enter Your Appointment Name"
                              onChange={(e) => setAppointment_name(e.target.value) && setData({ title: `${appointment_name}` })}

                              value={appointment_name ? appointment_name : ""}
                            />
                          </div>
                          <div className="row">
                            <div className="text-start col">
                              <label htmlFor="exampleFormControlInput1" className="form-label fs-6">Start Time</label>
                              <input
                                // type="time"
                                className="form-control"
                                value={start_time ? start_time : ""}
                                onChange={() => setData({ start_time: `${start_time}` })}
                                disabled
                              />

                            </div>
                            <div className="text-start col">
                              <label htmlFor="exampleFormControlInput1" className="form-label fs-6">End Time</label>

                              <input
                                type="time"
                                className="form-control"
                                value={end_time ? end_time : ""}
                                onClick={(e) => setData({ end_time: `${end_time}` }) && setEnd_time(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="w-50 ms-auto">
                            <div className="d-flex justify-content-evenly">
                              <button type="button"
                                className="w-auto btn btn-outline-danger fs-6 px-1 py-0"
                                onClick={() => setModalbox(false)}
                              >
                                <span className="position-relative py-2 px-2 ">Cancel</span>
                              </button>
                              <button
                                type="submit"
                                className="w-auto border-0 rounded m-0 booking_box_button"
                                onClick={() => setModalbox(false)}
                              >
                                <span className="position-relative py-2 px-2 ">
                                  OK
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </table>



                  {/* <div className="border">
                    <div className="d-flex justify-content-evenly border">
                      {dayOfWeekNames.map((item, index) => {
                        return (
                          <div key={index} className="">{item}</div>
                        )
                      })}

                    </div>
                    <div className="row">
                      <div className="col-2 ">
                        {timings?.map((value, index) => {
                          return (

                            <div key={index} className=" border border-start-0 border-top-0 ps-3">{value}</div>

                          )
                        })}

                      </div>
                      <div className="col">
                        
                      </div>
                    </div>
                  </div> */}

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
          </div>
          {/* <div className="col-lg-4 border rounded billing py-3 border h-100">
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
          </div> */}

          {/* <div className=''>Book Appointment</div> */}
          <div className="row my-3 ">
            <div className="col-12 pe-0">
              <button
                type="submit"
                className="w-auto search border-0 rounded ms-auto"
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
    </div>
  );
};

export default BookingAppointment;
