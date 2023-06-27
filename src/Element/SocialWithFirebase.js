import React from 'react';
import { handleFacebookSignIn, signInWithGoogle } from "../firebase";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
import * as Images from "../assets";
import { API } from '../generalfunction';

const SocialWithFirebase = () => {
    const navigate = useNavigate();
    // const fbhandle=handleFacebookSignIn()
    const onLogin = (data) => {
     
        API.post('v1.0/user/register', {
            first_name: data?.displayName,
            last_name: "",
            email: data?.email,
            password: "",
            post_code: "",
            description: '',
            user_type: data?.user_type
        }).then(Res => {
            console.log('onlogin',Res)

            if (Res?.data?.status) {
                localStorage.setItem("token", Res.data.token)
                localStorage.setItem("userdata", JSON.stringify(Res.data.data))
                localStorage.setItem("usertype", Res.data.data.user_type)
                // alert(Res.data.message);
                if ((Res.data.data.user_type).toLowerCase() === "user") {
                    navigate('/account');
                }
                else {
                    // navigate('/vendor');
                    // navigate('/dashboard');
                    API.post('v1.0/user/login',
                    {
                        email: data?.email,
                        password: ""
                    }).then(res => {
                        if (res.data.status === true) {
                            localStorage.setItem("token", res.data.token)
                            localStorage.setItem("userdata", JSON.stringify(res.data.data))
                            if ((res.data.data.user_type).toLowerCase() === "user") {
                                navigate('/account');
                            }
                            else{
                                navigate('/dashboard', { state: res.data.data });
                            }
                        }
                    })
                }
            }
            else {
                API.post('v1.0/user/login',
                {
                    email: data?.email,
                    password: ""
                }).then(res => {
                    console.log('elseconditi',res)
                    if (res.data.status === true) {
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("userdata", JSON.stringify(res.data.data))
                        if ((res.data.data.user_type).toLowerCase() === "user") {
                            navigate('/account');
                        }
                        else{
                            navigate('/dashboard', { state: res.data.data });
                        }
                    }
                    else{
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("userdata", JSON.stringify(res.data.data))
                        if ((res.data.data.user_type).toLowerCase() === "user") {
                            navigate('/account');
                        }
                        else{
                            navigate('/dashboard', { state: res.data.data });
                        }
                    }
                })
                // alert(Res.data.message);
            }
        })
    }
    const handleGoogleSignIn = async () => {
        try {
            const res = await signInWithGoogle();
            if (res?.data?.accessToken) {
                let tempdata = { user_type: "User" }
                tempdata = { ...res?.data, user_type: "User" };
                localStorage.setItem("token", res?.data?.accessToken)
                localStorage.setItem("userdata", JSON.stringify(tempdata))
                localStorage.setItem("usertype", "User")
                onLogin(tempdata)
                navigate('/account')
            }



        } catch (err) {
            console.log("googldde", err)
            // alert(err);
            navigate('/login')
        }
    };

    return (
        <div className="social-login mt-2">
            <div onClick={handleGoogleSignIn} className="row">
                {/* <a href="#" onClick={handleGoogleSignIn}></a> */}

                <div className="ps-3 mb-0 col-lg-3 col-md-12">
                    <img src={Images.google} />
                </div>
                {/* <div className="px-3  col">{"Continue with Google"}</div> */}
                <div className="login-icon-text col mb-0">{"Continue with Google"}</div>
            </div>

            <div onClick={() => handleFacebookSignIn()} className="row">
                <div className="ps-3  mb-0 col-lg-3 col-md-12">
                    <img src={Images.facebookk} />
                </div>

                {/* <div className="px-3  col">{"Continue with Facebook"}</div> */}
                <div className="login-icon-text mb-0 col">{"Continue with Facebook"}</div>
            </div>

            <div className="row">
                <div className="ps-3  mb-0 col-lg-3 col-md-12">
                    <img src={Images.apple} />
                </div>

                {/* <div className="px-3  col">{"Continue with Apple"}</div> */}
                <div className="login-icon-text  mb-0 col">{"Continue with Apple"}</div>
            </div>
        </div>
    )
}

export default SocialWithFirebase