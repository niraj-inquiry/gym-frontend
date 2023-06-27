import React, { Component,useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import {
    Header,
    AllPageBanner,
    NewsFeed,
    PlayStore,
    Footer,
    TeamMember,
} from "../components";
import Multisection_footer from '../Element/Multiplesection_footer';
import { API, convertfirstletter } from "../generalfunction";

const Team=()=>{
    const [list,setList]=useState([])
const onLoad=async()=>{
    const loadres=await API.get('v.1.0/team/get-all-team-info')
    if(loadres.data.status)
    {
        console.log("dddddddddddddddddd",loadres.data)
    setList(loadres?.data?.data)
    }
}
    useEffect(() =>{
       onLoad()
      },[]);

    return(
        <>
        <Header Logo={Images.logo} Hamburger={Images.menu} />

        <AllPageBanner
            BackGroundImage={Images.AllPageBannerImage}
            PageName={"Our Team"}
        />
        <div className="mx-auto" style={{width:'80%'}}>
            <section className="section_heading commpad team-sec">
                <div className="container-fluid pb-0">
                    <h2 className="text-center">Meet our leadership team</h2>
                    <p className="text-center fs-6">From building a world-class company to taking class after work, meet the team championing SuperActive’ vision.</p>
                    <div className="row">
                        {list.map((item)=>
                        <TeamMember
                            TeamMemberPhoto={item?.photo}
                            TeamName={`${item?.first_name}    ${item?.last_name}`}
                            ClubRelationship={convertfirstletter(item?.occupation)}
                            Description={item?.description}
                            location={Images.locationpin}
                            address={`Based in ${item?.country}, ${item?.address}`}
                        />
                        )}
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
        </div>
        
        {/* <Footer /> */}
        <Multisection_footer/>
    </>
    )
}

export default Team

