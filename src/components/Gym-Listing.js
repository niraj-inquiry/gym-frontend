import React, { Component } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    Header,
    NewsFeed,
    PlayStore,
    Footer,
    GymSearch,
    GymListingBox,
    Pagination,
} from "../components";
import { NavLink } from "react-router-dom";

const Gym_Listing = () => {
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <section className="section_heading pt-4">
                <h1>Find gym near me</h1>
            </section>

            <section className="bgg-white py-3 mt-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div class="col-lg-5">
                            <GymSearch CrossHairImage={Images.crosshair} />
                        </div>

                        <div class="col-lg-4">
                            <div className="row option-btn">
                                <div className="col-sm-4">
                                    <button>
                                        <i className="fa fa-map-marker"></i>
                                        Map
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button>
                                        <i className="fa fa-filter"></i>
                                        Filter
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button>
                                        <i className="fa fa-sort"></i>
                                        Sort
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_heading mb-5 gym-listing">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            link={"/gym_listing_details"}
                        />

                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            PopularCenterText={"Popular Center"}
                            link={"/gym_listing_details"}
                        />

                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            link={"/gym_listing_details"}
                        />

                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            PopularCenterText={"Popular Center"}
                            link={"/gym_listing_details"}
                        />

                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            link={"/gym_listing_details"}
                        />

                        <GymListingBox
                            GymImg={Images.gymImg}
                            GymName={"GYM"}
                            GymAddress={"C-8/14 , sector-7"}
                            link={"/gym_listing_details"}
                        />
                    </div>

                    <Pagination />
                </div>
            </section>

            <section>
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
            </section>
            <Footer />
        </>
    );
}

export default Gym_Listing;
