import React, { useState } from 'react';
import { Header } from '../Element/Header';
import * as Images from '../assets';
import Calendar from '../Element/Calendar';
import DayCalendar from '../Element/DayCalendar';
import Countries from '../../src/json/Countries.json';
import AllBooking from '../Element/AllBooking';
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from '../generalfunction';
import "../css/Style.css";


const BookingAppointment = () => {

  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();
  const [district, setDistrict] = useState('');
  // const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')));
  const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')));
  const [trainer, setTrainer] = useState(false);
  const [showdate, setShowdate] = useState(false);
  const navigation = useNavigate();
  const [getData, setGetData] = useState({
    name: "",
    address: '',
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
  });
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

  const templocation = location?.state

  const gym_name = templocation?.vendor?.center_name

  console.log('templocation', templocation);

  const onCardClick = (templocation) => {
    console.log('find-gym-item', localStorage.getItem('usertype'))
    navigation('/revieworder')
    // if (!isEmpty(userdata?.user_type)) {
    //   switch (userdata?.user_type) {
    //     case "User":
    //       navigation('/revieworder', { state: { plan: templocation, vendor: templocation?.vendor } })

    //       break;

    //     default:
    //       navigation('/dashboard')
    //       break;
    //   }
    // }
    // else {
    //   navigation('/login')
    // }

  }

  let previousdata = location?.state?.plan
  localStorage.setItem('previousdata', JSON.stringify(previousdata))
  console.log('BookingAppointment', previousdata)
  const selectedPData = JSON.parse(localStorage.getItem('selectdat'))

  return (
    <div>
      <Header Logo={Images.logo} Hamburger={Images.menu} />
      <div className="container pt-4">
        <div className='py-5 border-bottom'>
        <div className="row">
          <div className="col-lg-6 col-6">

            <h3 className='logo_color'>{"GYM Details"}</h3>
            <h3 className='fw-bold'>{"Fitness Center"}</h3>
            <h5>{"C-25 Sector 58 Noida"}</h5>
          </div>
          <div className='col-lg-6 col-6 text-end'>
            <p className=' logo_color'>₹<span className='fw-bold'>120/day</span></p>
            <p> <b> (  Day Pass)</b></p>
          </div>

          {/* <h2>Your Choosen Plan</h2>
            <table className='table table-info' >
              <thead>
                <tr>
                  <th>Center Name</th>
                  <th>Pass Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedPData.center_name}</td>
                  <td>{selectedPData.planname}</td>
                  <td>{selectedPData.country === 'India' ? `₹ ${selectedPData.rate}` : ` $ ${selectedPData.rate}`}</td>
                </tr>
              </tbody>
            </table> */}

        </div>
        <hr />
        <div>
          <h3>All Features included with plan</h3>
          <div className='w-50'>
            <div className='row pass-box border-0 p-0'>
              <div className='col-6'>
                {/* <div><li>500 Visitors</li></div>
                <div>Unlimited Projects</div>
                <div>extended free trial</div> */}
                <ul className=" col">
                  <li>500 Visitors</li>
                  <li>Unlimited Projects</li>
                  <li>extended free trial</li>

                </ul>
              </div>
              <div className='col-6'>
                {/* <div>500 Visitors</div>
                <div>Unlimited Projects</div>
                <div>extended free trial</div> */}
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
        <div className='row mx-0 align-items-center justify-content-center w-100'>
        <div className='col-lg-4 border rounded billing py-5 border h-100'>
          <div className=''>
          <h1 className='text-center pb-3 logo_color'>Billing Information</h1>
          <div className=' row mx-auto px-3'>
            <div className="col-lg-12 mb-4 ">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control  fs-6 py-2"
                placeholder='Enter Your Full Name'
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="col-lg-12 mb-4 ">
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email Id'
                className="form-control  fs-6 py-2"
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control  fs-6 py-2"
                id="exampleFormControlTextarea1"
                placeholder='Enter Your Address'
                rows="3"></textarea>
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
                  <option value={item.country_name}>{item?.country_name}</option>
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
                  <option value={item.state} T={console.log('item state', item?.state)}>{item?.state}</option>
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
          </div>
          </div>
        </div>
        
        <div className='col-lg-8 px-3 '>
          {/* <Calendar/> */}
          
          <AllBooking />
          {/* <DayCalendar /> */}
        </div>
        {/* <div className=''>Book Appointment</div> */}

      </div>
      <button type="submit" className='w-auto search border-0 rounded ms-auto my-3 me-5' onClick={() =>  navigation('/revieworder')}>
        <span className="position-relative py-2 px-3 ">
          Booking Appointment
        </span>
      </button>
      </div>
      
    </div>
  )
}

export default BookingAppointment