import React, { Component } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    Header,
    AllPageBanner,
    NewsFeed,
    PlayStore,
    Footer,
    BlogBox,
    Pagination,
} from "../components";
import { NavLink } from "react-router-dom";

const Blog = () => {

    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <AllPageBanner
                // BackGroundImage={Images.AllPageBannerImage}
                BackGroundImage={Images.blogequipmentgym}
                PageName={"The SuperActive Blog"}
            />

            <section className="section_heading pt-4 mb-5">
                <div className="container-fluid">
                    <div className="row">
                        <BlogBox
                            // BlogPic={Images.blogpic}
                            // BloggerName={"John Doe"}
                            // BlogDescription={
                            //     "We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations."
                            // }
                            // BlogDate={21 - 12 - 2022}
                            // BlogDetailsLink={"/blog_details"}
                        />
                    </div>
                    {/* <Pagination /> */}
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

export default Blog;
