import React, { Component,useEffect,useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from "../components";
import { IsEmail  } from "../validation";
import { useNavigate } from "react-router-dom";
import { isEmpty,API,fetchImage } from "../generalfunction";
import axios from "axios";

const Career = () => {

    const navigate=useNavigate();

    const [imgurl,setImgurl]=useState()

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

    const [ select,setSelect ] = useState(null);
    const [ selectvalid,setSelectvalid ] = useState();

    const [ jobposition,setJobposition ] = useState(null);
    const [ jobpositionvalid,setJobpositionvalid ] = useState();
    
    useEffect(() =>{
        window.scrollTo(0, 0);
    },[]);

    const dropdownvalue = [{field:'doctor'},{field:'Chemical engineer'},{field:'Mechanical Engineer'},{field:'Developer'}]
 
    const changeHandler = (e) => {
        // alert(e)
        console.log('selsct 0 ',e.target.files[0])
        setSelect(e.target.files[0]);
    };

    const OnRegister = async () => {
        const form = new FormData();
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

        if(!phoneno.match('[0-9]{10}')){
            setPhonenocheckregrex(true);
        }else {
            setPhonenocheckregrex(false);
        };

        if (!select) {
            setSelectvalid(true);
        };

        if (!jobposition) {
            jobpositionvalid(true);
        };

        if (firstname != null && lastname != null && email != null && phoneno != null && jobposition != null) {
            form.append('firstname', firstname)
            form.append('lastname', lastname)
            form.append('email', email)
            form.append('phonenumber', phoneno)
            form.append('profession', jobposition)
            form.append('uploadcv', select)

            const response = await API.post('v1.0/career/add-career-details', form
            // {
            //     firstname: firstname,
            //     lastname: lastname,
            //     email: email,
            //     phonenumber:phoneno,
            //     profession:jobposition,
            //     uploadcv:select,
                
            // }
            )
            console.log('career data',response.data);

            if (response?.data?.status===true){
                
                navigate('/home')
            }
            else{
                alert(response.error);
            }
               
        }
        else {
            alert("Please enter all field")
        }

    }


    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

            <section className="section_heading py-5">
                <div className="refer-friend-box" style={{width:'70%'}}>
                    <div className="container p-0 m-0">
                        <div className="row align-items-center m-0">
                            <div className="col-lg-6 col-md-6 p-0">
                                <img
                                    className="w-100 form-image control-height-career"
                                    src={Images.careerImage}
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 p-0">
                                <div className="form-info-box">
                                    <h2 className="text-center">Career</h2>
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
                                                        onClick={(e) => setPhonenovalid(false) && setPhoneno(false)}
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
                                                    <select 
                                                         className="jobposition"
                                                        onChange={(e) => setJobposition(e.target.value)}
                                                        onClick={(e) => setJobpositionvalid(false) && setJobposition(false)}
                                                    >
                                                        <option>
                                                            Select your job
                                                            position
                                                        </option>
                                                        {/* <option>doctor</option> */}
                                                        {dropdownvalue.map((item) =><option className="jobpositionfocus">{item.field}</option>
                                                        
                                                        )}
                                                    </select>
                                                    <i className="fa fa-briefcase locate-me" />
                                                </div>
                                                {jobpositionvalid && (
                                                    <>
                                                        <span className="w-50">❌ Select the job position</span>
                                                    </>
                                                )}
                                                
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <div>
                                                    <input
                                                        placeholder="No File"
                                                        type="file"
                                                        className="file_text ps-2"
                                                        // onChange={(e) => setSelect(e.target.value)}
                                                        onChange={(e)=>changeHandler(e)}
                                                        onClick={(e) => setSelectvalid(false)}
                                                        accept=".doc,.docx,.pdf"
                                                        required
                                                    />
                                                    {/* <button className="file_upload">
                                                        Upload CV
                                                    </button> */}
                                                    {selectvalid && (
                                                        <>
                                                            <span className="w-50">❌ Please choose the file/document</span>
                                                        </>
                                                    )}
                                                </div>
                                                
                                            </div>

                                            <div className="col-lg-12 position-relative mt-3">
                                                <button type="submit" onClick={OnRegister}>
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

export default Career;
