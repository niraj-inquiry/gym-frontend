import React, { Component,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    Header,
    AllPageBanner,
    NewsFeed,
    PlayStore,
    Footer,
    WhyChooseGym,
} from "../components";
import Multiplesection_footer from '../Element/Multiplesection_footer';

const About = () => {

    useEffect(() =>{
        window.scrollTo(0, 0);
      },[]);

    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <AllPageBanner
                // BackGroundImage={Images.AllPageBannerImage}
                BackGroundImage={Images.Aboutus}
                PageName={"About Us"}
            />
            <div className="mx-auto" style={{width:'80%'}}>
                <section className="section_heading pt-4">
                    <div className="container-fluid">
                        {/* <h2 className="text-center">About our GYM</h2> */}
                        <h2 className="text-center">About Us</h2>

                        <p className="w-100" style={{lineHeight:'28px',textAlign:'justify'}}>
                            The Printworks entertainment district in Manchester
                            is home to the Nuffield Health gym, which focuses on
                            overall health and fitness rather than just bicep
                            size.They take pleasure in their holistic and
                            comprehensive approach to health, which is evident
                            in their members' overall wellness and capacity for
                            a higher degree of fitness than at other gyms.
                            The staff at Nuffield is committed to your welfare
                            and is always happy to assist, from pool attendants
                            to physiotherapists. The health club is furnished
                            with a wide range of exercise tools.Whether you want to run off the day's calories on
                            the treadmills, pump and curl on the free weights,
                            or spin out on the bikes, they have a variety of
                            ways for you to get in shape.

                        </p>

                        {/* <p className="w-100 text-start">
                            They take pleasure in their holistic and
                            comprehensive approach to health, which is evident
                            in their members' overall wellness and capacity for
                            a higher degree of fitness than at other gyms.
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
                        </p> */}
                    </div>
                </section>

                <section className="section_heading commpad">
                    <div className="container-fluid bgg-white pb-0">
                        <h2 className="text-center">Why Choose Our Center</h2>
                        <div className="row mt-4" style={{justifyContent:'center'}}>
                            <WhyChooseGym
                                Icon={Images.head}
                                Para={"Discuss Choose, and Commit"}
                            />

                            <WhyChooseGym
                                Icon={Images.bulb}
                                Para={"Attemp to comprehend"}
                            />

                            <WhyChooseGym
                                Icon={Images.mindset}
                                Para={"Embrace a growth mindset"}
                            />

                            <WhyChooseGym
                                Icon={Images.exercise}
                                Para={"Bettet Work out"}
                            />

                            <WhyChooseGym
                                Icon={Images.trophy}
                                Para={"Win by playing"}
                            />

                            <WhyChooseGym
                                Icon={Images.yoga}
                                Para={"Expert Instructor"}
                            />
                        </div>
                    </div>
                </section>

                {/* <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <NewsFeed
                                    Title={"Stay Updated With Us"}
                                    Icon={Images.darkmail}
                                    Details={
                                        "Sign up to get a regular dose of fitness news, updates and exclusive offers."
                                    }
                                />
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <PlayStore
                                    Title={"GET OUR APP TODAY"}
                                    PhoneImage={Images.mobile}
                                    GooglePlayImage={Images.google_play}
                                    AppStoreImage={Images.app_store}
                                    PlayStoreLink={
                                        "https://play.google.com/store/games"
                                    }
                                    AppStoreLink={
                                        "https://www.apple.com/in/app-store/"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            
            {/* <Footer /> */}
            <Multiplesection_footer/>
        </>
    );
    
}

export default About;
