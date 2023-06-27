import React from 'react';
import { Header, AllPageBanner, Footer } from ".";
import '../css/Style.css';
import Multiplesection_footer from '../Element/Multiplesection_footer';
import * as Images from "../assets";
import Card_passes from './card/Card_passes';
import { HomeBanner, } from "../components";
import { NavLink } from "react-router-dom";
import { SubHomeBanner } from '../Element/HomeBanner';

const UserFeedback = () => {


    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <section className='section_heading w-80 mx-auto commpad p-5' style={{ backgroundColor: '#d3d3d370' }}>
                <div style={{ width: '100%', margin: 'auto' }} className='text-start pb-5 '>
                    <h1>Pending feedback</h1>

                    <nav aria-label="breadcrumb" style={{}} className='mb-5'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item fw-700">
                                <NavLink to={"/home"} style={{ textDecoration: 'none', color: '#9dbed5' }}>
                                    Gyms
                                </NavLink>
                            </li>
                            <li className="breadcrumb-item active fw-700" aria-current="page">
                                <NavLink to={'/account'} style={{ textDecoration: 'none', color: 'black' }}>
                                    My Account
                                </NavLink>
                            </li>
                        </ol>
                    </nav>
                    <div className='row mx-0 my-3' style={{ fontSize: 20 }}>{"You have no pending feedbacks"}</div>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='col mx-0 px-3 py-3' style={{ backgroundColor: '#fff' }}>
                                <div className='row py-2 px-3'>
                                    {"To leave feedback use your pass at the gym."}<br></br>
                                </div>
                                <div className='row py-2 px-3'>
                                    {"You can leave one piece of feedback for every visit with a Day Pass, and every 5th visit with a Monthly+ Pass."}<br></br>
                                </div>
                                <div className='row  py-2 px-3'>
                                    {"The gym will then appear here for you to review."}<br></br>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col px-5 py-3  border' style={{backgroundColor:'#9e9e9e',color:'#fff'}}>
                                <div className='row fs-4 fw-bold text-center'>
                                    {"Receive £5 of free credit when you leave feedback 5 times."}
                                </div>
                                <div className='row align-items-center justify-content-center my-3'>
                                    <i className='fa fa-star col-1 fs-4' style={{color:'#000'}}></i>
                                    <i className='fa fa-star col-1 fs-4' style={{color:'#000'}}></i>
                                    <i className='fa fa-star col-1 fs-4' style={{color:'#000'}}></i>
                                    <i className='fa fa-star col-1 fs-4' style={{color:'#000'}}></i>
                                    <i className='fa fa-star col-1 fs-4' style={{color:'#000'}}></i>
                                </div>
                                <div className='row justify-content-center fs-6 fw-bold'>
                                    {"5 more to go"}
                                </div>
                            </div>
                            <div className='col px-4 py-3 mt-4 border' style={{backgroundColor:'#fff'}}>
                                {/* <div className='py-3 border-bottom row align-items-center'> */}
                                    <h3 className='col mb-0 py-2 border-bottom '>{"How does it work?"}</h3>
                                    
                                {/* </div> */}
                                <div className='row justify-content-between py-3 px-2'>
                                    <div className='col-1 rounded-pill feedback' style={{backgroundColor:'#9e9e9e',color:'#fff'}}>1</div>
                                    <div className='col-10'>
                                        <div className='row fw-bold'>
                                            {"Redeem your pass at the gym"}
                                        </div>
                                        <div className='row'>
                                            {"Take your 8 digit pass code to the gym reception."}
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-between py-3 px-2'>
                                    <div className='col-1 rounded-pill feedback' style={{backgroundColor:'#9e9e9e',color:'#fff'}}>2</div>
                                    <div className='col-10'>
                                        <div className='row fw-bold'>
                                            {"Let others know how you'd rate your experience"}
                                        </div>
                                        <div className='row'>
                                            {"Is it busy after work? Is there a huge range of equipment? Your reviews help everyone to find their perfect gym."}
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-between py-3 px-2'>
                                    <div className='col-1 rounded-pill feedback' style={{backgroundColor:'#9e9e9e',color:'#fff'}}>3</div>
                                    <div className='col-10'>
                                        <div className='row fw-bold'>
                                            {"Earn gym credit"}
                                        </div>
                                        <div className='row'>
                                            {"Leave five reviews and you'll get £5 credit."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            <Footer />
        </>
    )
}

export default UserFeedback
