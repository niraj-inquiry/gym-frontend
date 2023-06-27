import React, { Component } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    Header,
    NewsFeed,
    PlayStore,
    Footer,
    BlogSearch,
    LatestBlog,
    BlogCategory,
    BlogNewsletter,
    BlogDescription,
} from "../components";

const Blog_Details = () => {
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <section className="section_heading">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-7 commpad">
                            <BlogDescription
                                BlogTitle={
                                    "Nuffield Health Manchester Printworks Fitness & Wellbeing Gym"
                                }
                                BlogImage1={Images.blogpic}
                                BlogImage2={Images.blogpic}
                                BloggerName={"John Doe"}
                                BlogDate={"12-12-2022"}
                                BlogDescription={
                                    "The Printworks entertainment district in Manchester is home to the Nuffield Health gym, which focuses on overall health and fitness rather than just bicep size."
                                }
                            />
                        </div>
                        <div className="col-lg-3 col-md-5 c-border commpad">
                            <BlogSearch />
                            <div className="mt-5">
                                <LatestBlog
                                    BlogImage={Images.blogpic}
                                    BlogName={"Latest Blog"}
                                    BlogDetails={
                                        "The most common way of working with a Personal Trainer is in a gym, but there are lots of ways to have a Personal Trainer."
                                    }
                                    BlogLink={""}
                                />

                                <LatestBlog
                                    BlogImage={Images.blogpic}
                                    BlogName={"Latest Blog"}
                                    BlogDetails={
                                        "The most common way of working with a Personal Trainer is in a gym, but there are lots of ways to have a Personal Trainer."
                                    }
                                    BlogLink={""}
                                />

                                <LatestBlog
                                    BlogImage={Images.blogpic}
                                    BlogName={"Latest Blog"}
                                    BlogDetails={
                                        "The most common way of working with a Personal Trainer is in a gym, but there are lots of ways to have a Personal Trainer."
                                    }
                                    BlogLink={""}
                                />

                                <LatestBlog
                                    BlogImage={Images.blogpic}
                                    BlogName={"Latest Blog"}
                                    BlogDetails={
                                        "The most common way of working with a Personal Trainer is in a gym, but there are lots of ways to have a Personal Trainer."
                                    }
                                    BlogLink={""}
                                />
                            </div>
                            <BlogCategory />
                            <BlogNewsletter />
                        </div>
                    </div>
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

export default Blog_Details;
