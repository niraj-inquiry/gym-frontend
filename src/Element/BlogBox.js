import React, { Component,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { NavLink } from "react-router-dom";
export const BlogBox = ({
    BlogPic,
    BloggerName,
    BlogDate,
    BlogDescription,
    BlogDetailsLink,
}) => {

    useEffect(() =>{
        window.scrollTo(0, 0);
      },[]);
    const data = [
        {
            id:1,
            name:'John Doe',
            title:'Top 5 gyms in Solihull 1',
            desc:'We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations.',
            date:"21 - 12 - 2022",
        },
        {
            id:2,
            name:'Robin Doe',
            title:'Top 5 gyms in Solihull 1',
            desc:'We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations.',
            date:"21 - 12 - 2022",
        },
        {
            id:3,
            name:'Abhishek Doe',
            title:'Top 5 gyms in Solihull 1',
            desc:'We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations.',
            date:"21 - 12 - 2022",
        },
        {
            id:4,
            name:'Rohan Doe',
            title:'Top 5 gyms in Solihull 1',
            desc:'We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations.',
            date:"21 - 12 - 2022",
        },
        {
            id:5,
            name:'Rehan roy',
            title:'Top 5 gyms in Solihull 1',
            desc:'We take great pride in building and maintaining One Network, Any Location, and Thousands of Gyms. Each and every one of them is accessible through Zero Contract, and in terms of locations.',
            date:"21 - 12 - 2022",
        },
    ]
    return (
        <div className="" >
            <div className="fs-3 fw-bold">Recent posts:</div>
            <div className="blog-box mx-auto" style={{width:'60%'}}>

                <div className="row align-items-center m-0 p-0">
                    {data.map((item) =>{
                        return(
                            
                            <div className="col col-lg-4 col-sm-6 m-0 p-0">
                                <div className="border m-4" style={{boxShadow:'0 20px 40px 0 rgba(0,0,0,0.2)'}}>
                                    <div className="" style={{}}>
                                        <div style={{position:'relative',}}>
                                            <NavLink to={'/blog_details'}>
                                                {/* <img src={Images.blogpic} /> */}
                                                <img src={Images.equipmentgym}/>
                                            </NavLink>
                                            
                                        </div>
                                        
                                        
                                        <h5 className="" style={{position:'',}}>
                                            {/* <a href={"/blog_details"}>Top 5 gyms in Solihull</a> */}
                                            {/* <NavLink to={"/blog_details"} className='fw-bold text-decoration-none details px-3 py-2 rounded-pill fs-6'>
                                                {item.title}
                                            </NavLink> */}
                                        </h5>
                                    </div>
                                    <div className="px-3 py-2" style={{position:''}}>
                                        
                                        <div className="d-flex justify-content-between">
                                            <div className="" style={{}}>
                                                <i className="fa fa-user"></i>
                                                &nbsp; {item.name}
                                            </div>
                                            <div className="ml-3">
                                                <i className="fa fa-calendar"></i>
                                                &nbsp; {item.date}
                                            </div>
                                        </div>
                                        <p className="w-100" style={{fontSize:'15px',textAlign:'left'}}>{item.desc}</p>
                                        <div className="">
                                            {/* <a href={"/blog_details"}>
                                                Read More &nbsp;
                                                <i className="fa fa-arrow-right"></i>
                                            </a> */}
                                            {/* <NavLink to={"/blog_details"} className='fw-bold text-decoration-none details px-3 py-2 rounded-pill fs-6'>
                                                Read More &nbsp;
                                                <i className="fa fa-arrow-right"></i>
                                            </NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>   
            </div>
        </div>
    );
};
