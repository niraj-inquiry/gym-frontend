import React, { useState,useEffect } from 'react';
import * as Images from "../assets";
import { Header, Footer } from "../components";
import { useNavigate } from "react-router-dom";
import { IsEmail } from "../validation";
import { API } from '../generalfunction';
import MessageBox from '../Element/Modals/MessageBox';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [emailvalid, setEmailvalid] = useState();
    const [emailcheckregrex, setEmailcheckregrex] = useState();
    const [password, setPassword] = useState();
    const [showmodal, setShowmodal] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const userdata = JSON?.parse(localStorage.getItem('userdata'))

        if (userdata?.user_type?.toLowerCase() === "user") {
            console.log("userdataddd", userdata?.user_type, token)
            navigate('/account');
        }
    }, [])

    const onSubmit = () => {

        if (!email) {
            setEmailvalid(true);
        }

        if (!email === IsEmail(email)) {
            console.log('Isemail-------');
            setEmailcheckregrex(true);
        } else {
            setEmailcheckregrex(false);
        }
        if (email != null && password != null) {
            API.post('/v1.0/user/forget-password',
                {
                    email: email,
                    password: password,

                }).then(res => {
                    // alert(res?.data?.message);
                    console.log('forget response', res?.data);
                    if (res.data.status === true) {

                        setShowmodal(true);
                        setMessage(res?.data?.message)
                        // setMessage("Login Successfully")
                        localStorage.setItem("token", res?.data?.token)
                        localStorage.setItem("userdata", JSON.stringify(res?.data?.userDetails))

                        if ((res?.data?.userDetails?.user_type).toLowerCase() === "user") {
                            setTimeout(()=>{
                                // setShowmodal(true)
                                setMessage(res?.data?.message)
                                navigate('/account');
                            }, 2000)
                            // navigate('/account');
                        }
                        else {
                            console.log('res?.data?.message', res?.data?.message)

                            setTimeout(()=>{
                                // setShowmodal(true)
                                setMessage(res?.data?.message)
                                navigate('/dashboard');
                            }, 2000)
                            // navigate('/dashboard', { state: res?.data?.userDetails });
                        }

                    }
                    else{
                        setShowmodal(true);
                        // alert(res.data.message)
                        setMessage(res?.data?.message)
                        // alert(res.data.message)

                        console.log('message', res?.data?.message)
                    }

                }).catch((err) => {
                    // alert("Something went wrong")
                    setMessage("Something went wrong")
                    navigate('/forget-password');
                })
        }
        else {
            // alert("Please enter email & password");
            setMessage("Please enter email & password")

        }

    }

    return (
        <div>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <section className="section_heading py-5">
                <div className="refer-friend-box" style={{ width: '50%' }}>
                    <div className="container p-0 m-0">
                        <div className="row align-items-center m-0">
                            {/* <div className="col-lg-6 col-md-6 p-0">
                                <img
                                    className="w-100 form-image control-height-login"
                                    src={Images.LoginImage}
                                />
                            </div> */}
                            <div className="col-lg-12 col-md-12 p-5">


                                <div className="form-info-box">
                                    <h2 className="text-center">
                                        Reset Password
                                    </h2>

                                    <div className="info-form text-start mt-4">
                                        <div className="row">
                                            <div className="col-lg-12 position-relative">
                                                <input
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your Email ID"
                                                    type="email"
                                                    onClick={(e) => setEmailvalid(false)}
                                                    required
                                                />
                                                <i className="fa fa-envelope locate-me" />
                                            </div>
                                            {emailvalid && (
                                                <>
                                                    <span>❌ Please enter the email address</span>
                                                </>
                                            )}
                                            {emailcheckregrex && (
                                                <>
                                                    <span>❌ Please enter the valid email address</span>
                                                    <span style={{ color: 'grey' }}>Eg: abc@gmail.com</span>
                                                </>
                                            )}


                                            <div className="col-lg-12 position-relative mt-3">
                                                <div className="col-lg-12 position-relative mt-3">
                                                    <input
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Password"
                                                        type="password"
                                                        // onClick={(e) => setPassvalid(false)}
                                                        required
                                                    />
                                                    <i className="fa fa-lock locate-me" />
                                                    <i className="fa fa-eye" />
                                                </div>
                                            </div>



                                            <div className="col-lg-12 position-relative mt-3">
                                                <button type="submit"
                                                    onClick={() => onSubmit()}
                                                >
                                                    Reset Password
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {showmodal &&
                                        <MessageBox
                                            // modaltitle={"Login Message"}
                                            modalbody={message}
                                            modalbutton={"OK"}
                                            onClickClose={() => setShowmodal(!showmodal)}
                                        />
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ForgotPassword