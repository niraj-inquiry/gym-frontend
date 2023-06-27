import React, { Component,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from "../components";
import { NavLink } from "react-router-dom";
import Multisection_footer from '../Element/Multiplesection_footer';

const How_it_works = () => {

    useEffect(() =>{
        window.scrollTo(0, 0);    
    },[]);

    const carddata = [ 
        {
            id:1,
            plan:'6-credit plan',
            name:'Eddie',
            city:'Austin',
            desc:'Eddie usually books a mental reset & gym session once a week. During a busy month, he rolls his credits over.',
            list1:{
                name:'Gym Time',
                credit:'3 credits',
            },
            list2:{
                name:'Meditation',
                credit:'3 credits',
            },

        },
        {
            id:2,
            plan:'25-credit plan',
            name:'Kate',
            city:'Amsterdam',
            desc:'Kate recently found out she’s pregnant and uses SuperActive once or twice a week to stay active.',
            list1:{
                name:'Prenatal Yoga',
                credit:'8 credits',
            },
            list2:{
                name:'Full Body Pilates',
                credit:'10 credits',
            },
            list3:{
                name:'Meditation',
                credit:'4 credits'
            },
            list4:{
                name:'Barre',
                credit:'3 scredits'
            },
        },
        {
            id:3,
            plan:'80-credit plan',
            name:'Mel',
            city:'New York',
            desc:'Mel uses SuperActive to book her favorite workouts on repeat & keep up a fitness routine.',
            list1:{
                name:'Strength Training',
                credit:'16 credits',
            },
            list2:{
                name:'Hot Yoga',
                credit:'21 credits',
            },
            list3:{
                name:'Cycling',
                credit:'30 credits'
            },
            list4:{
                name:'Cryotherapy',
                credit:'13 scredits'
            },

        }
    ]

    return (
        <>
        <Header Logo={Images.logo} Hamburger={Images.menu} />
        <div style={{background:'linear-gradient(180deg,#71b3fe 19.78%,#f7faff)'}} className="p-5">
            <div style={{width:'50%'}} className="mx-auto p-5">
                <div className="fw-bold mt-5 mb-3" style={{fontSize:'64px'}}>What are credits?</div>
                <p className="fs-4 mb-5" style={{lineHeight:'28px'}}>
                    SuperActive credits allow you to book at thousands of studios,
                    gyms, salons & spas. Use them however you like in order to create
                    a personalized fitness and wellness routine.
                </p>
                <button style={{backgroundColor:'black',color:'white'}} className="px-5 py-3 rounded-pill">See how to use your credits</button>
            </div>
        </div>
        <div  style={{width:'100%',backgroundColor:'#f7faff'}}>
            <div className="row mx-auto " style={{width:'80%'}}>
                {carddata?.map((item) => {
                    return(
                        <div className="col mt-5" key={item.id}>
                            
                            <div className="card border-0">        
                                <div className="card-body">
                                    <div className="d-flex">
                                        <img src={Images.Team} width={100} height={100}/>
                                        <div className="d-flex flex-column p-5 pt-3">
                                            <div className="card-title fw-bold " style={{fontSize: '20px'}}>{item?.plan}</div>
                                            <div className="d-flex">
                                                <div className="card-text fw-bold" style={{fontSize:'18px'}}>{item?.name}-</div>
                                                <div className="card-text" style={{fontSize:'18px'}}> {item?.city}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <p>{item?.desc}</p> 
                                    <div className="border-start-0 border-end-0 py-1 px-2"  style={{borderTop:'2px solid grey'}}>
                                        <div style={{display:'flex'}} className='justify-content-between py-3'>
                                            <div style={{fontSize: '15px'}} className="fw-bold">{item?.list1?.name}</div>
                                            <div style={{fontSize: '15px'}} className="fw-bold">{item?.list1?.credit}</div>
                                        </div>
                                    </div>
                                    <div className=" py-1 px-2"  style={{borderTop:'2px solid grey'}}>
                                        <div style={{display:'flex'}} className='justify-content-between py-3'>
                                            <div style={{fontSize: '15px'}} className="fw-bold">{item?.list2?.name}</div>
                                            <div style={{fontSize: '15px'}} className="fw-bold">{item?.list2?.credit}</div>
                                        </div>
                                    </div>

                                
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <NavLink to={"/"}>
                    <button type="button" className="explore-btn rounded-pill">
                        <span className="position-relative fs-5">
                            Try for Free
                        </span>
                    </button>                     
                </NavLink> */}
                <NavLink to={"/centers"} style={{textDecorationColor:'black'}}>
                    <div className=" my-2" style={{color:'black',}}>
                        <div className="fs-6" style={{}}>
                            See all plans
                        </div>
                    </div>                     
                </NavLink>
                
            </div>
        </div>
        <div className="row mx-auto m-5 pt-5" style={{width:'80%'}}>
            <div className="col px-5">
                <h1 className="fw-bold text-start">How your credits work</h1>
                <p className="text-start" style={{fontSize:'18px'}}>Credits can be used to book a class or appointment. The amount of credits 
                    needed to book varies by reservation type, location, popularity & time.</p>
            </div>
            <div className="col">
                <img src={Images.work}/>
            </div>

        </div>
        <div className="row mx-auto m-5 pt-5" style={{width:'80%'}}>
            <div className="col px-5">
                <h1 className="fw-bold text-start">Save with a membership</h1>
                <p className="text-start" style={{fontSize:'18px'}}>
                    Exclusive member rates and in-app promotions for newly-added studios & first-time visits can help you save some cash.
                </p>
            </div>
            <div className="col">
                <img src={Images.workimg}/>
            </div>

        </div>
        <NavLink to={"/centers"}>
            <button type="button" className="explore-btn rounded-pill px-3 py-2">
                <span className="position-relative fs-6">
                    Get Started
                </span>
            </button>                     
        </NavLink>

        <div style={{background:'linear-gradient(180deg,#fff,#f7faff 10.86%,#89c0ff 80.22%,#89c0ff)'}} className="p-5">
            <div style={{width:'70%'}} className="mx-auto p-5">
                <div className="fw-bold mt-5 mb-3" style={{fontSize:'44px'}}>Get credits. Get out there. Repeat.</div>
            </div>
        </div>

        {/* <Footer /> */}
        <Multisection_footer/>
        </>
    )
}

export default How_it_works
