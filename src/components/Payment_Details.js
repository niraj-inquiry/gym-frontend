import React, { useState } from 'react';
import { Header, AllPageBanner, Footer } from ".";
import '../css/Style.css';
import Multiplesection_footer from '../Element/Multiplesection_footer';
import * as Images from "../assets";
import Card_passes from './card/Card_passes';
import {HomeBanner,} from "../components";
import { NavLink } from "react-router-dom";

const Payment_Details = () => {
    const [ cardname, setCardname ] = useState(false);
    const [ number,setNumber ] = useState(false);
    const [ code,setCode ] = useState(false);
    const [ date,setDate ] = useState(false);
    
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <section className='section_heading w-80 mx-auto commpad p-5' style={{backgroundColor:'#d3d3d370'}}>
                <div className='container text-start pb-5 '>
                    <h1>My Passes</h1>
                
                    <nav aria-label="breadcrumb" style={{}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item fw-700"><NavLink to={"/home"} style={{textDecoration:'none',color:'#9dbed5'}}>Gyms</NavLink> </li>
                            <li className="breadcrumb-item active fw-700" aria-current="page"><NavLink to={'/account'} style={{textDecoration:'none',color:'black'}}>My Account</NavLink></li>
                            <li className="breadcrumb-item active fw-700" aria-current="page"><NavLink to={'/Payment_Details'} style={{textDecoration:'none',color:'black'}}>Cards</NavLink></li>
                        </ol>
                    </nav>
                    <div className='row'>
                    <div className="col-lg-6 card mt-5" style={{}}>
                        <div className=' p-4 pt-0'>
                            <ul className="list-group list-group-flush py-3">
                                <li className="list-group-item fs-4 px-0 text-start">Add your debit or credit card details</li>
                                <hr className="dropdown-divider"/>
                            </ul>
                            <div className="mb-3 mt-3 row ">
                                <label for="inputPassword" className="col-lg-4 col-md-6 col-sm-6 col-form-label">Cardholder name*</label>
                                <div className="col-lg-8 col-lg-6 col-sm-6">
                                    <input type="text" className="form-control rounded-0" id="inputPassword" style={{borderColor:'#707070'}} onFocus={(e) => setCardname(false)} onMouseDown={() => setCardname(!cardname)}/>
                                    {cardname && (
                                        <span style={{color:'red'}}>This is not a valid cardholder name</span>
                                    )}
                                </div>
                                
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-lg-4 col-md-6 col-sm-6 col-form-label">Card number*</label>
                                <div className="col-lg-8 col-lg-2 col-sm-1">
                                    <input type="number" className="form-control rounded-0" id="inputPassword" style={{borderColor:'#707070'}} onFocus={(e) => setNumber(false)} onMouseDown={() => setNumber(!number)}/>
                                    {number && (
                                        <span style={{color:'red'}}>This is not a valid debit or credit card</span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-lg-4 col-md-6 col-sm-6 col-form-label">Security code*</label>
                                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                                    <input type="number" placeholder="123" className="col-lg-6 col-md-6 col-sm-6 form-control rounded-0 me-3" id="inputPassword" style={{borderColor:'#707070'}} onFocus={(e) => setCode(false)} onMouseDown={() => setCode(!code)}/>
                                    <img  src={Images.creditcard} className='col-lg-3 col-md-3 col-sm-3' height={40}/>
                                    {code && (
                                        <span style={{color:'red'}}>This is not a valid security code</span>
                                    )}
                                </div>
                                
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-lg-4 col-md-6 col-sm-6 col-form-label">Expiry date*</label>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <input type="month" className="form-control rounded-0" id="inputPassword" style={{borderColor:'#707070'}} onFocus={(e) => setDate(false)} onMouseDown={() => setDate(!date)}/>
                                    {date && (
                                        <span style={{color:'red'}}>This is not a valid expiry date</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <NavLink to={"/flexible-gym-day-and-monthly-passes"}>
                            <button type="button" className="explore-btn w-100">
                                <span className="position-relative fs-5">
                                    Save Card
                                </span>
                            </button>
                        </NavLink>
                    </div>
                    </div>
                </div>
                
            </section>
            <Multiplesection_footer />
        </>
    )
}

export default Payment_Details
