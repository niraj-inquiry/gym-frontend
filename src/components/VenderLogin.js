/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from ".";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { API, isEmpty } from "../generalfunction";

import { IsEmail } from "../validation";
import { signInWithGoogle } from "../firebase";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../services/Firebase";
import SocialWithFirebase from "../Element/SocialWithFirebase";
import MessageBox from "../Element/Modals/MessageBox";

const VenderLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailvalid, setEmailvalid] = useState();
  const [emailcheckregrex, setEmailcheckregrex] = useState();
  const [passvalid, setPassvalid] = useState();
  const [showmodal, setShowmodal] = useState();
  const [message, setMessage] = useState();
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = async () => {
    setIsLogin(true);
    try {
      await API.post("/v1.0/user/login", {
        email: email,
        password: password,
      }).then((response) => {
        
        const { data } = response;
        const vData = {
          vendor: data.data.email,
          vpass: data.data.password,
          Vusertype: data.data.user_type,
          vid:data.data._id,
          vName:data.data.first_name+" "+data.data.last_name,
          vpost_code:data.data.post_code
        };
        if (data.data.email && data.data.password) {
          if (data.data.user_type === "Vendor") {
            localStorage.setItem("vendorAuth", JSON.stringify(vData));
            navigate("/dashboard");
          } else {
            alert(
              "Your Authentication is User Type! Do you want to Login as a User"
            );
            navigate("/login");
          }
        }
        setIsLogin(false)
      })
      //   const response = await API.post(
      //     "/v1.0/user/login",
      //     {
      //       email: email,
      //       password: password,
      //     }
      //   );

      //   const { data } = response;
      //   const vData={
      //     vendor:data.data.email,
      //     vpass:data.data.password,
      //     Vusertype:data.data.user_type
      //   }
      //   if (data.data.email && data.data.password ) {
      //     if (data.data.user_type==="Vendor") {

      //         localStorage.setItem('vendorAuth', JSON.stringify(vData) )
      //       navigate('/dashboard')
      //     } else {
      //       alert('Your Authentication is User Type! Do you want to Login as a User')
      //       navigate('/login')
      //     }
      //   }
    } catch (err) {
      console.log(err);
      alert(`Wrong User Name and Password`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      if (res?.data?.accessToken) {
        let tempdata = { user_type: "User" };
        tempdata = { ...res?.data, user_type: "User" };
        localStorage.setItem("userdata", JSON.stringify(tempdata));
        navigate("/account");
      }
    } catch (err) {
      console.log("googldde", err);
      // alert(err);
      navigate("/login");
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log("re", re);
        navigate("/account");
      })
      .catch((err) => {
        console.log("err", err.message);
        navigate("/login");
      });
  };

  useEffect(() => {
    // if (localStorage.getItem('vendorAuth')) {
    //     navigate('/dashboard')
    // }
  }, []);
  return (
    <div>
      <Header Logo={Images.logo} Hamburger={Images.menu} />

      <section className="section_heading py-5">
        <div className="refer-friend-box">
          <div className="container p-0 m-0">
            <div className="row align-items-center m-0">
              <div className="col-lg-6 col-md-6 p-0">
                <img
                  className="w-100 form-image control-height-login"
                  src={Images.LoginImage}
                />
              </div>
              <div className="col-lg-6 col-md-6 p-5">
                <div className="form-info-box">
                  <h2 className="text-center">Vendor Login</h2>

                  <div className="info-form text-start mt-4">
                    <div className="row">
                      <div className="col-lg-12 position-relative">
                        <input
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter Email ID"
                          type="email"
                          onClick={(e) => setEmailvalid(false)}
                          required
                        />
                        <i className="fa fa-envelope locate-me" />
                      </div>
                      {emailvalid && (
                        <div
                          className="alert alert-warning d-flex align-items-center py-1 my-2"
                          role="alert"
                        >
                          ❌ Please enter the email address
                        </div>
                      )}
                      {emailcheckregrex && (
                        <div
                          className="alert alert-warning d-flex align-items-center"
                          role="alert"
                        >
                          <span>❌ Please enter the valid email address</span>
                          <span style={{ color: "grey" }}>
                            Eg: abc@gmail.com
                          </span>
                        </div>
                      )}
                      <div className="col-lg-12 position-relative mt-3">
                        <input
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          type="password"
                          onClick={(e) => setPassvalid(false)}
                          required
                        />
                        <i className="fa fa-lock locate-me" />
                        <i className="fa fa-eye" />
                      </div>
                      {passvalid && (
                        <div
                          className="alert alert-warning d-flex align-items-center"
                          role="alert"
                        >
                          <span>❌ Please enter the password</span>
                        </div>
                      )}

                      <div className="col-lg-12 position-relative mt-3"></div>

                      <div className="col-lg-12 position-relative">
                        <a href="/forgot-password" className="forgot-password">
                          Forgot Password
                        </a>
                      </div>

                      <div className="col-lg-12 position-relative mt-3">
                        <button type="submit" onClick={() => onSubmit()}>
                        {isLogin === true ? "Processig.." : "Login"}
                        </button>
                        <p className="m-0 w-100 py-3">
                          New User? <Link to="/register"> Sign Up</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  {showmodal && (
                    <MessageBox
                      modalbody={message}
                      modalbutton={"OK"}
                      onClickClose={() => setShowmodal(!showmodal)}
                    />
                  )}
                  <div className="divider">
                    <div className="line"></div>
                    <div className="ortext">or</div>
                  </div>
                  <SocialWithFirebase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenderLogin;
