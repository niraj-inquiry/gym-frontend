import React, { useState, useEffect } from 'react';
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from ".";
import { NavLink } from "react-router-dom";
import Daypasses from './Day_passes';
import Gymmembership from './Gym_membership';
import Monthly from './Monthly';
import '../css/Style.css';
import Multiplesection_footer from '../Element/Multiplesection_footer';

import { API } from '../generalfunction';
import useGeoLocation from '../geolocation';


const Explore_passes = () => {
const geolocation=useGeoLocation()
const [carddata,setCarddata]=useState()



  const onLoad=()=>{
    API.get('/v1.0/plan/get-plan-by-country/india').then(res=>{
      if(res.data.status){
        setCarddata(res.data.data)
      }
    })
  };

  useEffect(() => {
    onLoad()
    window.scrollTo(0, 0);
  }, []);

  const details = ({ item }) => {

  };


  return (
    <>
      <Header Logo={Images.logo} Hamburger={Images.menu} />

      <div className='p-3 m-3 mx-auto' style={{ width: '70%', }}>
        <h1 className='fw-bold' style={{ fontSize: '60px' }}>Explore our passes</h1>
        <h4 className='m-3' style={{ lineHeight: '35px' }}>Make fitness part of your day.<br></br>Choose from one of our three passes.</h4>

        <div className="row">

          {carddata?.slice(0, 3).map((item) =>
            <div className='col col-lg-4 col-12' key={item}>
             
              <div className="m-1" style={{ height: '50%' }} key={item._id} >
                <div className="card">
                  <div className="" style={{ backgroundColor: 'rgb(112 112 112 / 20%)' }}>
                    <div className="card-title rounded p-2" style={{ backgroundColor: '#434345', color: 'white' }}>
                      <h3 className='mb-0'>{item?.planname}</h3>
                    </div>
                    <div className='m-3'>
                      <div className='mb-3'>
                        <p className="card-text fs-5" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Single gym</p>
                        <p className="card-text fs-5" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Single visit</p>
                        <p className="card-text fs-5" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Valid for 30 days</p>
                      </div>



                      <a href={"#"} onClick={details(item)} className='fw-bold text-decoration-none details px-3 py-2 rounded-pill fs-6'>
                        {"View Details"}
                      </a>


                    </div>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>

      </div>
      <Daypasses id="day" />
      <Gymmembership />
      <Monthly />
      <div className='py-3' style={{ width: '100%' }}>
        <div>
          <div
            style={{ backgroundColor: 'cadetblue' }}
          // style={{backgroundImage:'url("https://img.freepik.com/free-photo/blurred-cardio-machines_1203-98.jpg?size=626&ext=jpg&ga=GA1.1.1783677373.1679915240&semt=ais")'}}
          >
            <div className='mx-auto py-5'>
              <div className="py-3 fs-1 fw-bold pb-3" style={{}}>Still unsure ?</div>
              <div className="pb-4  fs-4 fw-bold text-white">Answer some simple questions and we’ll do the rest.</div>
              <NavLink to={"/flexible-fitness"}>
                <button type="button" className='px-4 py-2 fs-5 fw-500 pass mb-3 rounded' style={{ border: 0 }}>
                  Find Your Pass
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Multiplesection_footer />
    </>
  )
}

export default Explore_passes;