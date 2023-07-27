import React, { Component, useEffect, useState } from "react";
import "../css/Style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isEmpty } from '../generalfunction'
import * as Images from "../assets";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import MessageBox from "./Modals/MessageBox";



export const VendorMenus = ({ onClick }) => {
    const [hideshowemenu, setHideshowmeanu] = useState(false)
    return (
        <div>
            <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                onClick={() => setHideshowmeanu(!hideshowemenu)}
            >
                Menu
            </button>
            {hideshowemenu && (
                <ul className="custommenu">
                    {/* <li><NavLink className="dropdown-item" to={'/vendor'}>Dashboard</NavLink></li> */}
                    <li><NavLink className="dropdown-item" to={'/dashboard'}>Dashboard</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/profile'}>Profile</NavLink></li>
                    <li><NavLink className="dropdown-item"
                        // to={'/home'}
                        onClick={onClick}
                    >
                        Log out</NavLink>
                    </li>
                    {/* <MessageBox /> */}
                </ul>
            )}
        </div>

    )
}
const VendorHeader = ({ onClick }) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-evenly align-items-center" style={{ width: '20%', marginLeft: 'auto' }}>
                    <div
                    //    onClick={onClick}
                    >
                        <VendorMenus onClick={onClick} />
                        {/* LogOut */}

                    </div>
                </div>
            </div>
        </nav>

    )
}


export const Menus = ({ onClick }) => {
    const [hideshowemenu, setHideshowmeanu] = useState(false)
    return (
        <div>
            <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                onClick={() => setHideshowmeanu(!hideshowemenu)}
            >
                Menu
            </button>
            {hideshowemenu && (
                <ul className="custommenu">
                    <li><NavLink className="dropdown-item" to={'/account'}>My Passes</NavLink></li>
                    {/* <li><NavLink className="dropdown-item" to={'/Payment_Details'}>Payment Details</NavLink></li> */}
                    <li><NavLink className="dropdown-item" to={'/user-settings'}>Settings</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/user-history'}>History</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/user-feedback'}>Feedback</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/user-voucher'}>Redeem a voucher</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/refer_friend'}>Refer a friend</NavLink></li>
                    <li><NavLink className="dropdown-item" to={'/user-faqs'}>FAQs </NavLink></li>
                    {/* <li><NavLink className="dropdown-item" to={'/404-not-found'}>404 </NavLink></li> */}
                    <li><NavLink className="dropdown-item"
                        // to={'/home'}
                        onClick={onClick} >
                        Log out</NavLink>
                    </li>
                </ul>
            )}
        </div>

    )
}

export const Header = ({ Logo, Hamburger }) => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    const [loginstate, setLoginstate] = useState(false);
    const [usertype, setUsertype] = useState(JSON.parse(localStorage.getItem("userdata")))
    const [showmodal, setShowmodal] = useState();
   

    const handleSignOut = async () => {
        try {
            const asw = await signOut(auth)
            setShowmodal(true)
            localStorage.clear()
            localStorage.removeItem("token")
            localStorage.removeItem("userdata")
            setTimeout(() => {
                
                setLoginstate(false)
                navigate('/')
               
            }, 2000)

        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {

        if (!isEmpty(usertype?.accessToken) || !isEmpty(token)) {
            setLoginstate(true)
        }
        else {

            setLoginstate(false)

        }

    })
    const storedUData = JSON.parse(localStorage.getItem('userAuth'));
    const storedVData = JSON.parse(localStorage.getItem('vendorAuth'));
    console.log('storedUData',storedUData);
    
    return (
        <div className="nav_header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-3">
                        <div className="logo-div">
                            <NavLink to={"/"}>
                                <img className="logo" src={Images.logo} />
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-9 col-sm-9 pe-3" >

                        <div className="text-end nav-btn large-screen">

                            { storedUData || storedVData ? (
                                (storedUData && storedUData.Uusertype === 'User') ?

                                    (<div className="d-flex align-items-center justify-content-end">
                                        <i className="fa fa-shopping-basket fs-5 me-4" onClick={() => navigate('/404-not-found')}></i>
                                        <Menus onClick={() => handleSignOut()} />
                                       
                                    </div>
                                    )
                                    : (
                                        <>
                                            <VendorHeader onClick={() => handleSignOut()} />
                                           
                                        </>
                                    )
                            )
                                :
                                <div>
                                    <NavLink
                                        to={"/vendor-login"}
                                        className="primary-button button"
                                    >
                                        Employee Benefit Login
                                    </NavLink>
                                    <NavLink to={"/login"} className="primary-button button">Login</NavLink>
                                    <NavLink
                                        to={"/register"}
                                        className="primary-button button btn-active"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            }
                        </div>
                        {showmodal &&
                            <MessageBox
                                modalbody={"Logout Successfully"}
                                modalbutton={"OK"}
                                onClickClose={() => setShowmodal(!showmodal)}
                            />
                        }

                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};
