import React, { Component,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from "../components";
import { NavLink } from "react-router-dom";
import Multisection_footer from '../Element/Multiplesection_footer';

const Term_and_condition = () => {

    useEffect(() =>{
        window.scrollTo(0, 0);    
    },[]);

    return (
    <>
        <Header Logo={Images.logo} Hamburger={Images.menu} />

        {/* <AllPageBanner
            BackGroundImage={Images.AllPageBannerImage}
            PageName={"Terms & Conditions"}
        /> */}
        <div style={{width:'80%',margin:'auto'}} className='text-start pb-5 '>
            <h2 className="my-3">SuperActive.com Terms and Conditions</h2>
            
            <nav aria-label="breadcrumb" style={{}}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item fw-bold">
                        <NavLink to={"/home"} style={{textDecoration:'none',color:'#9dbed5'}}>
                            Gyms
                        </NavLink>
                    </li>
                    <li className="breadcrumb-item active fw-bold" aria-current="page"><NavLink to={'/home'} style={{textDecoration:'none',color:'#9dbed5'}}>Legal</NavLink></li>
                    <li className="breadcrumb-item active fw-bold" aria-current="page"><NavLink to={'/home'} style={{textDecoration:'none',color:'black'}}>Terms</NavLink></li>
                </ol>
            </nav>
            <h5 className="fw-bold mt-5">TERMS AND CONDITIONS OF SALE</h5>
            <section className="section_heading pt-2">
                <div className="container-fluid mb-4">
                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>

                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>

                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>

                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>

                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>

                    <p className="w-100 text-start">
                        The Printworks entertainment district in Manchester
                        is home to the Nuffield Health gym, which focuses on
                        overall health and fitness rather than just bicep
                        size.
                    </p>

                    <p className="w-100 text-start">
                        They take pleasure in their holistic and
                        comprehensive approach to health, which is evident
                        in their members' overall wellness and capacity for
                        a higher degree of fitness than at other gyms.{" "}
                    </p>

                    <p className="w-100 text-start">
                        The staff at Nuffield is committed to your welfare
                        and is always happy to assist, from pool attendants
                        to physiotherapists. The health club is furnished
                        with a wide range of exercise tools.
                    </p>

                    <p className="w-100 text-start">
                        Whether you want to run off the day's calories on
                        the treadmills, pump and curl on the free weights,
                        or spin out on the bikes, they have a variety of
                        ways for you to get in shape.
                    </p>
                </div>
            </section>
        </div>
        
        {/* <Footer /> */}
        <Multisection_footer/>
    </>
    );
    
}

export default Term_and_condition;
