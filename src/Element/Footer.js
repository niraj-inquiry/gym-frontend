import React, { Component,useEffect,useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { NavLink ,useNavigate} from "react-router-dom";
import { API } from "../generalfunction";
export const Footer = () => {

    const navigate=useNavigate()
    const [ country,setCountry ] = useState([]);
    const [ cultdata,setCultdata ] = useState([]);

    useEffect(() => {
        API.get('/v1.0/gymcenter/gym-country-list').then(res=>{
            if(res.data.status){
                setCountry(res.data.data);
            }
        })
    },[]);

    const handledata = (item) => {
       navigate('/centers',{state:{country:item}})
        // API.get('/v1.0/gymcenter/gym-all-data').then(res=>{
        //     if(res.data.status){
        //         setCultdata(res.data.data);
        //         const USdata = res.data.data.filter(item => item.country === "United States");
        //         console.log('US FILTER data',USdata);
                
        //         const Indiadata = res.data.data.filter(item => item.country === "India");
        //         console.log('Indiadata data',Indiadata);
        //     }
        // })
        
    }

    console.log('cult data',cultdata);
    
    return (
        <footer className="section_heading pt-4 pb-4 px-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <h4 className="text-start">Gyms Centers</h4>
                        <ul>
                            {country.map((item,index) => {
                                
                                return(
                                    <li>
                                        <a  href="/centers" onClick={()=>handledata(item)}>{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h4 className="text-start">Cult Centers</h4>
                        <ul>
                            <li>
                                <NavLink to={"/team"}> Cult Gym in London</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h4 className="text-start">Company</h4>
                        <ul>
                            <li>
                                <NavLink to={"/about"}> About us</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/privacy_policy"}>
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                {/* <NavLink to={"/Contact_Us"}>Contact</NavLink> */}
                            </li>
                            {/* <li>
                                <NavLink to={"/career"}>Careers</NavLink>
                            </li> */}
                            <li>
                                <NavLink to={"/superactive-owner"}>SuperActive Owner</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/terms_and_condtions"}>
                                    Terms & Condtions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/How_it_works"}>How it works</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Corporate Memberships</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/team"}>Team</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <h4 className="text-start">Community</h4>
                        <ul className="f-add-info">
                            <li>
                                <img className="icons" src={Images.location} />
                                365 Chapel St, Salford M3 5JT, UK
                            </li>
                            <li>
                                <img className="icons" src={Images.envelope} />
                                gym2022@gmail.com
                            </li>
                            <li>
                                <img className="icons" src={Images.whatsapp} />
                                123456789
                            </li>
                            <li>
                                <img className="icons" src={Images.phone} />
                                123456789
                            </li>
                        </ul>
                        <div className="d-flex">
                            <img
                                className="social-icons"
                                src={Images.facebook}
                            />
                            <img className="social-icons" src={Images.linkin} />
                            <img
                                className="social-icons"
                                src={Images.twitter}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &#169;2023 Gym. All right reserved
                </div>
            </div>
        </footer>
    );
};
