/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    GymCenter,
    Header,
    HomeBanner,
    Sports,
    CustomerFirstExperience,
} from "../components";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API, baseURL, isEmpty } from "../generalfunction";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import useGeoLocation from "../geolocation";
import region from '../countryjson.json'

const Home = () => {
    const [claimcardclose, setClaimcardclose] = useState(true)
    const [gymcenterstate, setGymcenterstate] = useState();
    const location = useGeoLocation();
    const locationlat = Math.round(location?.coordinates?.lat);
    const locationlng = Math.round(location?.coordinates?.lng);
    console.log('location-----------------', location);

    // console.log('gymcenterstate',gymcenterstate)
    // const found = region.filter(element => element.lat == locationlat && element.lng == locationlng);
    // console.log('foundregion', found);

    const onLoadGym = async () => {
        // console.log("useGeoLocation",location?.coordinates?.lat?.split('.')[0])
        const loaddata = await API.get('v1.0/gymcenter/get-verify-all-data')

        if (loaddata.data.status === true) {
            if (isEmpty(location?.country)) {
                setGymcenterstate(loaddata?.data?.data)
            }
            else {
                const countryfilter = loaddata?.data?.data.filter(resp => resp?.country == location?.country)
                setGymcenterstate(countryfilter)
            }
        }
        else {
            setGymcenterstate(loaddata?.data?.data)
            console.log('gymcenterstate', gymcenterstate)
        }
    }



    useEffect(() => {
        onLoadGym();
    }, [])

    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            {claimcardclose && (
                <div className="offer-box">
                    <div onClick={() => setClaimcardclose(!claimcardclose)}>
                        <i className="fa fa-close"></i>
                    </div>
                    <p>
                        20% off a monthly pass as part of an exclusive deal.
                        Offer expires on January 8 at midnight
                    </p>
                    {/* <a href="">Claim Now</a> */}
                    <NavLink to={'/user-voucher'}>Claim Now</NavLink>
                </div>
            )}
            <HomeBanner
                title={"Any Activity Sports, Fitness, Gym Session or Adventure "}
                subtitle={"Zero Contract. Unlimited Activities"}
                ImageLocate={Images.crosshair}
                ImageGymStudio={Images.banner}
            />

            {/* how gym works */}
            <section className="section_heading commpad"
            //  style={{fontFamily:'"Euclid Circular A", sans-serif'}}
            >
                <div className="container-fluid bgg-white">
                    <h2 className="text-center">How our  works</h2>
                    <p className="text-center">
                        A network of fitness centres, spas, swimming pools,
                        and other facilities is called Centers. You have
                        unlimited access to fitness with just one pass.
                    </p>
                    <div className="row how_our_work">
                        <div className="col-lg-4 col-md-4 col-sm-4 ">
                            <div className="brouse-box">
                                <svg style={{ border: '2px solid #FF5722', backgroundColor: '#FF5722' }} className="p-2 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M640 944 c-19 -8 -44 -26 -56 -40 -18 -22 -29 -25 -100 -28 -92 -4 -161 -27 -233 -80 -134 -99 -198 -276 -157 -436 81 -317 471 -425 701 -195 130 130 159 319 74 487 -27 54 -29 63 -18 95 24 73 -15 162 -85 194 -49 22 -79 23 -126 3z m110 -37 c35 -18 70 -74 70 -113 0 -32 -62 -166 -100 -214 l-20 -25 -20 25 c-38 48 -100 182 -100 214 0 18 10 48 23 67 37 55 93 73 147 46z m-270 -147 l0 -80 -60 0 c-35 0 -60 4 -60 10 0 24 41 89 75 118 20 18 38 32 40 32 3 0 5 -36 5 -80z m60 43 c0 -21 9 -57 20 -80 l19 -43 -29 0 -30 0 0 80 c0 47 4 80 10 80 6 0 10 -17 10 -37z m-197 -53 l-35 -70 -61 0 -61 0 39 41 c35 36 128 99 146 99 4 0 -9 -31 -28 -70z m505 -139 c12 -26 24 -67 28 -90 l7 -41 -82 0 c-62 0 -81 3 -81 14 0 17 90 166 100 166 4 0 17 -22 28 -49z m-551 7 c-3 -13 -9 -49 -12 -80 l-7 -58 -80 0 -80 0 7 43 c4 23 14 59 22 80 l15 37 70 0 c68 0 70 -1 65 -22z m183 -58 l0 -80 -81 0 -82 0 7 57 c13 107 9 103 87 103 l69 0 0 -80z m159 14 c58 -92 57 -94 -39 -94 l-80 0 0 80 0 80 39 0 c37 0 41 -3 80 -66z m-354 -191 c3 -32 9 -68 12 -80 5 -22 3 -23 -65 -23 l-70 0 -15 38 c-8 20 -18 56 -22 80 l-7 42 80 0 80 0 7 -57z m195 -23 l0 -80 -69 0 c-78 0 -74 -4 -87 103 l-7 57 82 0 81 0 0 -80z m196 23 c-13 -107 -9 -103 -87 -103 l-69 0 0 80 0 80 81 0 82 0 -7 -57z m199 15 c-4 -24 -14 -60 -22 -80 l-15 -38 -70 0 c-68 0 -70 1 -65 23 3 12 9 48 12 80 l7 57 80 0 80 0 -7 -42z m-532 -228 c19 -38 32 -70 28 -70 -18 0 -111 63 -146 99 l-39 41 61 0 61 0 35 -70z m137 -10 c0 -74 -1 -80 -17 -71 -39 21 -103 108 -103 141 0 6 25 10 60 10 l60 0 0 -80z m160 70 c0 -33 -64 -120 -102 -141 -17 -9 -18 -3 -18 71 l0 80 60 0 c35 0 60 -4 60 -10z m135 -31 c-35 -36 -128 -99 -146 -99 -4 0 9 32 28 70 l35 70 61 0 61 0 -39 -41z" />
                                        <path d="M663 868 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13 -42 13 -71 -1z m67 -43 c26 -32 -13 -81 -47 -59 -35 22 -23 74 17 74 10 0 23 -7 30 -15z" />
                                    </g>
                                </svg>
                                <div className="pt-3 pb-3" style={{ fontSize: '15px' }}>Centers wherever you are</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 second-box">
                            <div className="brouse-box">
                                <svg style={{ border: '2px solid #FF5722', backgroundColor: '#FF5722' }} className="p-2 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M44 788 c-12 -5 -27 -21 -33 -34 -15 -34 -15 -474 0 -508 20 -44 46 -47 324 -42 143 2 271 5 285 5 14 0 88 -2 164 -5 152 -6 186 1 205 42 15 34 15 474 0 508 -19 41 -53 48 -205 42 -76 -3 -150 -5 -164 -5 -14 0 -144 2 -290 4 -173 3 -272 0 -286 -7z m544 -40 c7 -7 12 -20 12 -30 0 -11 7 -18 20 -18 13 0 20 7 20 18 0 37 20 42 160 42 92 0 140 -4 148 -12 17 -17 17 -479 0 -496 -8 -8 -56 -12 -148 -12 -140 0 -160 5 -160 42 0 11 -7 18 -20 18 -13 0 -20 -7 -20 -18 0 -40 -15 -42 -280 -42 -186 0 -259 3 -268 12 -17 17 -17 479 0 496 17 17 519 17 536 0z" />
                                        <path d="M600 620 c0 -33 3 -40 20 -40 17 0 20 7 20 40 0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40z" />
                                        <path d="M120 620 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20 -193 0 -200 -1 -200 -20z" />
                                        <path d="M720 560 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z m120 0 l0 -40 -40 0 -40 0 0 40 0 40 40 0 40 0 0 -40z" />
                                        <path d="M600 500 c0 -33 3 -40 20 -40 17 0 20 7 20 40 0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40z" />
                                        <path d="M120 500 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20 -193 0 -200 -1 -200 -20z" />
                                        <path d="M600 380 c0 -33 3 -40 20 -40 17 0 20 7 20 40 0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40z" />
                                        <path d="M120 380 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20 -193 0 -200 -1 -200 -20z" />
                                        <path d="M720 380 c0 -18 7 -20 80 -20 73 0 80 2 80 20 0 18 -7 20 -80 20 -73 0 -80 -2 -80 -20z" />
                                    </g>
                                </svg>
                                <div className="pt-3 pb-3" style={{ fontSize: '15px' }}>The right pass for you</div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="third-box">
                                <svg style={{ border: '2px solid #FF5722', backgroundColor: '#FF5722' }} className="p-2 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M119 814 c-102 -69 -119 -83 -119 -100 0 -18 187 -146 208 -142 12 2 18 15 20 41 3 35 5 37 36 37 57 0 73 -23 120 -176 24 -78 53 -158 65 -177 36 -58 88 -77 214 -77 l107 0 0 -34 c0 -54 19 -60 74 -25 87 55 156 109 156 124 0 19 -186 147 -208 143 -12 -2 -18 -15 -20 -41 l-3 -37 -82 0 c-123 0 -118 -6 -186 215 -54 176 -94 215 -217 215 l-54 0 0 34 c0 63 -19 63 -111 0z m161 -64 c78 -6 117 -23 143 -63 8 -13 31 -76 51 -142 68 -222 71 -225 225 -225 l101 0 0 41 0 40 53 -38 c29 -21 66 -47 81 -59 l29 -21 -79 -57 -79 -57 -5 38 -5 38 -125 5 c-183 7 -188 12 -256 232 -53 175 -72 198 -159 198 l-55 0 0 -41 0 -40 -53 38 c-29 21 -66 47 -81 59 l-29 21 79 57 79 57 5 -38 5 -38 75 -5z" />
                                    </g>
                                </svg>
                                <div className="p-3" style={{ fontSize: '15px' }}>Simple online or app booking.</div>
                            </div>
                        </div>
                    </div>


                    <div className="text-center">
                        <NavLink to={"/flexible-gym-day-and-monthly-passes"}>
                            <button type="button" className="explore-btn rounded-pill">
                                <span className="position-relative fs-5">
                                    Explore
                                </span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="section_heading">
                <div className="container-fluid">
                    <h2 className="text-center">
                        Sports we provide around you
                    </h2>
                    <p className="text-center">
                        A network of fitness centres, spas, swimming pools,
                        and other facilities is called Centers. You have
                        unlimited access to fitness with just one pass.
                    </p>

                    <div className="row mt-5">
                        <Sports
                            title={"Kid playing football"}
                            count={`${12} Centers`}
                            image={Images.football}
                            color={"hexF0F4C3"}
                        />

                        <Sports
                            title={"Boxing Session"}
                            count={`${12} Centers`}
                            image={Images.boxing}
                            color={"hexe9d1ff"}
                        />

                        <Sports
                            title={"Women cycle session "}
                            count={`${12} Centers`}
                            image={Images.cycle}
                            color={"hexFFCDD2"}
                        />
                        <Sports
                            title={"Adventure session"}
                            count={`${12} Centers`}
                            image={Images.paintball}
                            color={"hexB3E5FC"}
                        />

                        <Sports
                            title={"Crossfit"}
                            count={`${12} Centers`}
                            image={Images.crossfit}
                            color={"hexFFE0B2"}
                        />
                        <Sports
                            title={"Swimming Session"}
                            count={`${12} Centers`}
                            image={Images.swim}
                            color={"hexC8E6C9"}
                        />
                    </div>
                </div>
            </section>

            <section className="section_heading commpad pb-0">
                <div className="container-fluid bgg-white">
                    <h2 className="text-center">
                        Centers near your location
                    </h2>
                    <p className="text-center">
                        A network of fitness centres, spas, swimming pools,
                        and other facilities is called center. You have
                        unlimited access to fitness with just one pass.
                    </p>
                    <div className="row center-location" T={console.log('gymcenterstate', gymcenterstate)}>
                        {/* <ImageSlider slides={gymcenterstate}/> */}
                        {gymcenterstate?.slice(0, 4).map((item, index) => {


                            return (
                                <GymCenter
                                    key={index}
                                    CenterName={item.center_name}
                                    GymImage={`${baseURL}${item?.photos[0]}`}

                                    StarImage={Images.star}

                                    GymCenter={"GYM"}
                                    CenterAddress={item.address}
                                    link={"/gym_listing_details"}
                                    data={item}
                                />

                            )
                        })}
                        {/* {gymcenterstate?.slice(0, 4).map((item, index) => {
                            return (
                                <div className="col-lg-3" key={index}>
                                    <div className="card" >
                                        <img src={Images.gym} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <h3 className="card-title">{item.center_name}</h3>

                                                <div className="rating rounded">
                                                <img src={Images.star} height={10}  width={25}/>

                                                </div>
                                            </div>
                                            <div className="text-start">{item.address}</div>

                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })} */}

                    </div>

                </div>
            </section>



            <section className="section_heading ">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="zigzag">
                                <h2 className="text-start">Partnership</h2>
                                <p className="text-start">
                                    Use the advantages of fitness to reward
                                    and motivate your clients.SuperActive enables leading brands to reward
                                    and incentivise their customers or employees with access to thousands
                                    of fitness facilities. Whether you are looking to drive acquisition or
                                    reward loyalty, SuperActive can support you with your goals through a range of tailored solutions.
                                </p>
                                <NavLink to={"/Partnership"}>
                                    <button>explore</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <img
                                className="w-100"
                                src={Images.section_one_image}
                                style={{ height: '600px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_heading">
                <div className="container-fluid bgg-white pt-0 pb-0">
                    <div className="row align-items-center reverse">
                        <div className="col-lg-6 px-0">
                            <img
                                className="w-100 "
                                src={Images.section_two_image}
                                style={{ height: '600px' }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="zigzag zigzag-right-side">
                                <h2 className="text-end">Our Blogs</h2>
                                <p className="text-end w-100">
                                    News, Reviews, and Advice from experts
                                    in the fitness industry to help the GYM
                                    community.Our job is making it easier for you
                                    to take your fitness and nutrition to the next
                                    level - without all the stress, complication, and necessary cost.
                                </p>
                                <NavLink to={"/blog"}>
                                    <button>Explore our Blog</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_heading py-4 pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="zigzag">
                                <h2 className="text-start">
                                    Refer a Friend
                                </h2>
                                <p className="text-start">
                                    Get Rs. 500 off each of your next two
                                    passes.We are giving you the chance to win a year of free gym membership for you and a friend.
                                    Every time you successfully refer someone, you will get 1 competition entry. So the more you share, the more chances you'll have to win!
                                </p>
                                <NavLink to={"/refer_friend"}>
                                    <button>explore</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <img
                                className="w-100"
                                src={Images.section_three_image}
                                style={{ height: '600px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_heading">
                <div className="container-fluid bgg-white px-0 py-0">
                    <div className="row align-items-center reverse mx-0">
                        <div className="col-lg-6 px-0">
                            <img
                                className="w-100"
                                src={Images.section_two_image}
                                style={{ height: '600px' }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="zigzag zigzag-right-side">
                                <h2 className="text-end">Gym Owner</h2>
                                <p className="text-end w-100">
                                    List your club for FREE and benefit from
                                    gym marketing, reaching millions of new
                                    customers.Creating opportunities for more people
                                    to engage in physical fitness & generating value for our fitness venue partners.
                                </p>
                                <NavLink to={"/superactive-owner"}>
                                    <button>explore</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_heading pb-5">
                <div className="container-fluid bgg-white">
                    <h2 className="text-center">
                        Customer First Experiences
                    </h2>
                    <p className="text-center">
                        100% enjoyment from beginning to end
                    </p>
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 mt-4">
                        <CustomerFirstExperience
                            Image={Images.price}
                            Title={"Best Prices"}
                            Desc={
                                "We work with thousands of providers across the UK to find the best valu experiences on the market."
                            }
                        />

                        <CustomerFirstExperience
                            Image={Images.booking}
                            Title={"Best Prices"}
                            Desc={
                                "We work with thousands of providers across the UK to find the best valu experiences on the market."
                            }
                        />

                        <CustomerFirstExperience
                            Image={Images.money}
                            Title={"Best Prices"}
                            Desc={
                                "We work with thousands of providers across the UK to find the best valu experiences on the market."
                            }
                        />

                        <CustomerFirstExperience
                            Image={Images.pay}
                            Title={"Best Prices"}
                            Desc={
                                "We work with thousands of providers across the UK to find the best valu experiences on the market."
                            }
                        />

                        <CustomerFirstExperience
                            Image={Images.reward}
                            Title={"Best Prices"}
                            Desc={
                                "We work with thousands of providers across the UK to find the best valu experiences on the market."
                            }
                        />
                    </div>
                </div>
            </section>



            <Multiplesection_footer />



        </>
    );

}

export default Home;