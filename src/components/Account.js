import React from 'react';
import { Header, AllPageBanner, Footer } from ".";
import '../css/Style.css';
import Multiplesection_footer from '../Element/Multiplesection_footer';
import * as Images from "../assets";
import Card_passes from './card/Card_passes';
import { HomeBanner, } from "../components";
import { NavLink } from "react-router-dom";
import { SubHomeBanner } from '../Element/HomeBanner';

const Account = () => {

    const tabbuttonactive = () => {
        console.log('tabbutton active')
        return (

            <div><h1>hello</h1></div>
        )
    }

    const tabbuttonlink = () => {
        console.log('tabbutton link')
        return (

            <div><h1>hello</h1></div>
        )
    }
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <section className='section_heading w-80 mx-auto commpad p-5' style={{ backgroundColor: '#d3d3d370' }}>
                <div style={{ width: '100%', margin: 'auto' }} className='text-start pb-5 '>
                    <h1>My Passes</h1>

                    <nav aria-label="breadcrumb" style={{}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item fw-700"><NavLink to={"/home"} style={{ textDecoration: 'none', color: '#9dbed5' }}>Gyms</NavLink> </li>
                            <li className="breadcrumb-item active fw-700" aria-current="page"><NavLink to={'/account'} style={{ textDecoration: 'none', color: 'black' }}>My Passes</NavLink></li>
                        </ol>
                    </nav>

                    <div className="">
                        <div className="row-4" style={{  marginLeft: 'auto' }}>
                            <div className="list-group flex-row justify-content-end" id="list-tab" role="tablist">
                                <a className="col-lg-6 w-auto list-group-item-passes list-group-item-passes-action active py-3 px-5 rounded text-center" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" style={{ fontSize: '15px', textDecoration: 'none' }}>Active Passes</a>
                                <a className="col-lg-6 w-auto list-group-item-passes list-group-item-passes-action py-3 px-5 rounded text-center" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" style={{ fontSize: '15px', textDecoration: 'none' }}>Used Passes</a>
                            </div>
                        </div>
                        <div className="row-8">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                    <section className="section_heading pb-5 pt-4 px-0" style={{}}>
                                        <div className="container-fluid rounded" style={{ backgroundColor: '#fff' }}>
                                            <div className="row align-items-center banner-sec justify-content-start mx-auto" style={{ paddingTop: '30px' }}>
                                                <div className="col-lg-6">
                                                    <div className="text-start mx-3 fw-bold mb-3" style={{ fontSize: '30px' }}>
                                                        Ready to SuperActive? Get your pass!
                                                    </div>

                                                    <div className="" style={{ boxShadow: '0 20px 40px 0 rgba(0,0,0,0.2)' }}>
                                                        <SubHomeBanner ImageLocate={Images.crosshair}/>
                                                        
                                                        {/* <input
                                                        // onChange={(e)=>setFinestate(e.target.value)}
                                                            placeholder="Enter Postcode or Location"
                                                            type="text"
                                                            style={{}}
                                                        />
                                                        <img
                                                            className="locate-me"
                                                            alt="gym-studio"
                                                            src={Images.crosshair}
                                                            style={{right:'175px'}}
                                                        />

                                                        <button type="submit" onClick={()=>{
                                                        // navigate('/centers',{state:findstate})
                                                        }}>
                                                            <span className="position-relative">
                                                                Let's Go
                                                            </span>
                                                        </button> */}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                    <section className="section_heading p-5 px-0" style={{}}>
                                        <div className="container-fluid" style={{ backgroundColor: '#fff' }}>
                                            <div className="row align-items-center banner-sec justify-content-start mx-auto" style={{ paddingTop: '30px' }}>
                                                <div className="col-lg-6">
                                                    <div className="text-start mx-3 fw-bold mb-3" style={{ fontSize: '30px' }}>
                                                        Ready to SuperActive? Get your pass!
                                                    </div>

                                                    <div className="" style={{ boxShadow: '0 20px 40px 0 rgba(0,0,0,0.2)' }}>
                                                   
                                                        <SubHomeBanner ImageLocate={Images.crosshair}/>

                                                        {/* <button type="submit" onClick={() => {
                                                            // navigate('/centers',{state:findstate})
                                                        }}>
                                                            <span className="position-relative">
                                                                Let's Go
                                                            </span>
                                                        </button> */}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* <Multiplesection_footer /> */}
            <Footer />
        </>
    )
}

export default Account
