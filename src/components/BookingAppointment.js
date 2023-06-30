import React, { useState } from 'react';
import { Header } from '../Element/Header';
import * as Images from '../assets';
import Calendar from '../Element/Calendar';
import DayCalendar from '../Element/DayCalendar';
import Countries from '../../src/json/Countries.json';
import AllBooking from '../Element/AllBooking';
import { useLocation, useNavigate } from "react-router-dom";
import { isEmpty } from '../generalfunction';

const BookingAppointment = () => {

  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();
  const [district, setDistrict] = useState('');
  // const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')));
  const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')));
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
  localStorage.setItem('previousdata',JSON.stringify(previousdata))
  console.log('BookingAppointment',previousdata)
  const selectedPData=JSON.parse(localStorage.getItem('selectdat'))

  return (
    <div>
      <Header Logo={Images.logo} Hamburger={Images.menu} />
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
             <table className='table' >
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
                  <td>{selectedPData.country==='India' ? `₹ ${selectedPData.rate}` :` $ ${selectedPData.rate}` }</td>
                </tr>
               </tbody>
             </table>
          </div>
        </div>
      </div>
      <div className='row mx-0 align-items-center justify-content-center pb-3  px-5'>
        <h1 className='text-center mt-2 mb-5 fw-bold'>{previousdata?.center_name}</h1>
        <div className='col-3 border mx-5 rounded billing py-5'>
          <h1 className='text-center py-2'>Billing Information</h1>
          <div className=' row mx-auto px-3'>
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
               
                className="form-control"
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"

                className="form-control"
                onChange={(e) => handleInput(e)}
                required

              />
            </div>
            <div className="col-lg-12 mb-4 ">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
               
                className="form-control"
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
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                
                className="form-control"
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
              <label htmlFor="city">City/District</label>

              <select
                id="city"
                name="city"
              
                className="form-control"
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
        {/* <hr/> */}
        {/* <div className="vr"></div> */}
        <div className='col-8'>
          {/* <Calendar/> */}
          <AllBooking />
          {/* <DayCalendar /> */}
        </div>
        <button type="button"
         className="explore-btn rounded-pill w-auto ms-auto px-5"
        onClick={() => onCardClick(templocation)} 
        >
          <span className="position-relative fs-5">
            
            Proceed
          </span>
        </button>
      </div>


    </div>
  )
}

export default BookingAppointment