import React, { Component,useState,useEffect } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from ".";
import { IsEmail } from "../validation";
import { useNavigate } from "react-router-dom";
import { API, isEmpty } from "../generalfunction";
import axios from "axios";

const ContactUs = () => {

    const [firstname, setFirstname] = useState(null);
    const [ firstnamevalid,setFirstnamevalid ] = useState();

    const [lastname, setLastname] = useState(null);
    const [ lastnamevalid,setLastnamevalid ] = useState();

    const [email, setEmail] = useState(null);
    const [ emailvalid,setEmailvalid ] = useState();
    const [ emailcheckregrex,setEmailcheckregrex ] = useState();

    const [ phoneno,setPhoneno ] = useState(null);
    const [ phonenovalid,setPhonenovalid ] = useState();
    const [ phonenocheckregrex,setPhonenocheckregrex ] = useState();

    const [message, setMessage] = useState(null);
    const [ messagevalid,setMessagevalid ] = useState();

    const navigate=useNavigate();


    useEffect(()=>{
       
    
    },[]);

    const OnRegister = async () => {

        if(!firstname){
            setFirstnamevalid(true);
        };

        if(!lastname){
            setLastnamevalid(true);
        };

        if (!email) {
            setEmailvalid(true);
        };
        if(!email === IsEmail(email)){
            console.log('Isemail-------');
            setEmailcheckregrex(true);
        }else {
            setEmailcheckregrex(false);
        };

        
        if (!phoneno) {
            setPhonenovalid(true);
        };
            // console.log('phone number',Isphonenumber);

        if(!phoneno.match('[0-9]{10}')){
            setPhonenocheckregrex(true);
        }else {
            setPhonenocheckregrex(false);
        };

        if(!message){
            setMessagevalid(true);
        };

        if (firstname != null && lastname != null && email != null && phoneno != null && message != null) {
            const response = await API.post('/v1.0/contact/add-contact', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phonenumber:phoneno,
                message:message

            })
            console.log('contactusdara',response);
           
            if (response?.data?.status===true){
                    // navigate('/team')
                    console.log('contactus',response.data);
            }
            else{
                alert(response?.data?.message)
            }
               
        }
        else {
            alert("Please enter all field")
        }

    }

    useEffect(() =>{
        window.scrollTo(0, 0);
      },[]);
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <section className="section_heading py-5">
                <div className="refer-friend-box" style={{width:'70%'}}>
                    <div className="container p-0 m-0">
                        <div className="row align-items-center m-0">
                            <div className="col-lg-6 col-md-6 p-0">
                                <img
                                    className="w-100 form-image"
                                    src={Images.refer_image}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 p-0">
                                <div className="form-info-box">
                                    <h2 className="text-center">
                                        Contact Us
                                    </h2>
                                    <></>
                                    <div className="info-form text-start mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 position-relative">
                                                <div>
                                                    <input
                                                        placeholder="First Name"
                                                        type="text"
                                                        name="firstname"
                                                        value={firstname}
                                                        onChange={(e) => setFirstname(e.target.value)}
                                                        onClick={(e) => setFirstnamevalid(false)}
                                                        required
                                                    />
                                                    <i className="fa fa-user locate-me"/>
                                                </div>
                                                
                                                {firstnamevalid && (
                                                    <>
                                                        <span className="w-50">❌ Please enter the first name</span>
                                                    </>
                                                )}
                                                {/* {firstnameregrex && (
                                                    <>
                                                        <span>❌ Please enter the valid name</span><br></br>
                                                        <span style={{color:'grey'}}>Eg: kalpana</span>
                                                    </>
                                                )} */}
                                            </div>

                                            <div className="col-lg-6 position-relative">
                                                <div>
                                                    <input
                                                        placeholder="Last Name"
                                                        type="text"
                                                        name="lastname"
                                                        value={lastname}
                                                        onChange={(e) => setLastname(e.target.value)}
                                                        onClick={(e) => setLastnamevalid(false)}
                                                        required
                                                    />
                                                    <i className="fa fa-user locate-me"/>
                                                </div>
                                                {lastnamevalid && (
                                                    <>
                                                        <span className="w-50">❌ Please enter the last name</span>
                                                    </>
                                                )}
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <div>
                                                    <input
                                                        placeholder="Email"
                                                        type="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        onClick={(e) => setEmailvalid(false) && setEmail(false)}
                                                        required
                                                    />
                                                    <i className="fa fa-envelope locate-me"/>
                                                </div>
                                                {emailvalid &&(
                                                    <>
                                                        <span>❌ Please enter the email address</span>      
                                                    </>
                                                )}
                                                {emailcheckregrex && (
                                                    <>
                                                        <span>❌ Please enter the valid email address</span><br></br>
                                                        <span style={{color:'grey'}}>Eg: abc@gmail.com</span>
                                                    </>
                                                )} 
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <div>
                                                    <input
                                                    placeholder="Phone Number"
                                                    type="number"
                                                    value={phoneno}
                                                    onChange={(e) => setPhoneno(e.target.value)}
                                                    onClick={(e) => setPhonenovalid(false)}
                                                    minlength="10" 
                                                    maxlength="10"
                                                    required
                                                    />
                                                    <i className="fa fa-phone locate-me"/>
                                                </div>
                                                {phonenovalid && (
                                                    <>
                                                        <span className="w-50">❌ Please enter the phone number</span>
                                                    </>
                                                )}
                                                {phonenocheckregrex && (
                                                    <>
                                                        <span>❌ Please enter the correct phone number</span><br></br>
                                                        <span style={{color:'grey'}}>Eg: XXXXXXXXXX</span>
                                                    </>
                                                )}
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <div>
                                                    <textarea
                                                        placeholder="Message"
                                                        type="text"
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        onClick={(e) => setMessagevalid(false)}
                                                        required
                                                    />
                                                    <i className="fa fa-edit"/>
                                                </div>
                                                {messagevalid && (
                                                    <>
                                                        <span className="w-50">❌ Please enter the Message</span>
                                                    </>
                                                )}
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <button type="submit" onClick={() => OnRegister()}>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ContactUs;