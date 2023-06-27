import React, { Component,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from "../components";
import { NavLink } from "react-router-dom";

const Refer_Friend = () => {

    useEffect(() =>{
        window.scrollTo(0, 0);
      },[]);

    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <section className="section_heading py-5">
                <div className="refer-friend-box">
                    <div className="container p-0 m-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                                <div className="refer-friend-box-inner-right p-2" style={{width:'70%'}}>
                                    <h3 className="text-center fw-bold">
                                        Treat your friends to £10.
                                        Recommend a friend to SuperActive and they'll get £10!
                                    </h3>
                                    <p className="w-75" style={{fontSize:'14px'}}>
                                        Gym will give your friend $50 to use
                                        at the gym if you refer them to him.
                                        Plus, we are giving you the chance to win a year of free gym membership for you and a friend.

                                        Every time you successfully refer someone, you will get 1 competition entry. 
                                        So the more you share, the more chances you'll have to win!
                                    </p>
                                    <p className="w-75" style={{fontSize:'11px'}}>
                                        Our refer-a-friend programme is managed by Mention Me who will process your data and send you
                                        referral service emails. <NavLink to={"/terms_and_condtions"} style={{color:'#ff5722'}}>More info and your privacy rights.</NavLink>
                                    </p>
                                    <NavLink to={'/register'} className="refer-link">
                                        Give $50 off
                                    </NavLink>
                                    <p className="w-75" style={{fontSize:'11px'}}>
                                        By accepting this offer you agree to the <NavLink to={"/terms_and_condtions"} style={{color:'#ff5722'}}>Terms and Conditions</NavLink>
                                        Some gym exclusions apply.
                                        To benefit from this offer your friends must make their first pass purchase by Sunday, 30 April 2023.
                                    </p>
                                    <p className="mt-3" style={{fontSize:'11px'}}>
                                        POWERED BY MENTION ME
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-0" style={{position:'relative'}}>
                                
                                <img
                                    className="w-100 "
                                    src={Images.ReferFriendImage}
                                    // style={{minHeight:'550px',maxHeight:'550px',position:'relative'}}
                                />
                                <div className="px-5 py-3 fs-3" style={{position:'absolute',backgroundColor:'black',color:'white',right:0,top:0}}>
                                    Price Draw
                                </div>
                                <div style={{backgroundColor:'black',color:'white'}}>
                                    <div className="mx-auto fs-2 p-3" style={{width:'70%'}}>
                                        Win a year of free gym use for you and a friend 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
    
}

export default Refer_Friend;
