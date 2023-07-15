import React, { useEffect, useState } from "react";
import "../css/Style.css";
import * as Images from "../assets";
import { Header, AllPageBanner, Footer } from "../components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API, isEmpty } from "../generalfunction";
import { IsEmail, name, validatePIN } from "../validation";
import SocialWithFirebase from "../Element/SocialWithFirebase";
import MessageBox from "../Element/Modals/MessageBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [firstname, setFirstname] = useState(null);
  const [firstnamevalid, setFirstnamevalid] = useState();
  const [firstnameregrex, setFirstnameregrex] = useState();

  const [lastname, setLastname] = useState(null);
  const [lastnamevalid, setLastnamevalid] = useState();

  const [email, setEmail] = useState(null);
  const [emailvalid, setEmailvalid] = useState();
  const [emailcheckregrex, setEmailcheckregrex] = useState();

  const [password, setPassword] = useState(null);
  const [passvalid, setPassvalid] = useState();
  const [hideshow, setHideshow] = useState(false);

  const [postcode, setPostcode] = useState(null);
  const [postcodevalid, setPostcodevalid] = useState();
  const [postcoderegrex, setPostcoderegrex] = useState();

  const [description, setDescription] = useState(null);
  const [descriptionvalid, setDescriptionvalid] = useState();
  const [value, setvalue] = useState(false);
  const [vendoroptions, setVendoroption] = useState();
  const navigate = useNavigate();
  const [showmodal, setShowmodal] = useState();
  const [message, setMessage] = useState();

  // const options = ["How do you know us"];

  const onLoad = async () => {
    const vendoroptionsres = await API.get("v1.0/role/get-role");

    if (vendoroptionsres.data.status) {
      setVendoroption(vendoroptionsres.data.data);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!isEmpty(token)) {
      navigate("/account");
    }
    onLoad();
  }, []);

  const OnRegister = async () => {
    API.post("/v1.0/user/register", {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      post_code: postcode,
      description: "",
      user_type: vendoroptions[description]?.rolename,
    })
      .then((res) => {
        console.log("res", res);
        if (res.data.data.user_type === "User") {
          toast.success(`Verification email sent on ${email} ` , {
              position: "top-center",
          });
          navigate("/login");
        } else {
          navigate("/vendor-login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.success(`Failed to registration` , {
            position: "top-center",
        });
      });
  };

  return (
    <>
      <Header Logo={Images.logo} Hamburger={Images.menu} />

      <section className="section_heading py-5">
        <div className="refer-friend-box" style={{ width: "70%" }}>
          <div
            className="container p-0 w-100"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "1335px",
            }}
          >
            <ToastContainer />
            <div className="row align-items-center m-0" style={{}}>
              <div className="col-lg-6 col-md-6 p-0">
                <img
                  className="w-100 form-image control-height-register"
                  src={Images.RegisterImage}
                />
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="form-info-box">
                  <div className="p-0">
                    <h2 className="text-center">Register</h2>
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
                            <i className="fa fa-user locate-me" />
                          </div>

                          {firstnamevalid && (
                            <>
                              <span className="w-50">
                                ❌ Please enter the first name
                              </span>
                            </>
                          )}
                          {firstnameregrex && (
                            <>
                              <span>❌ Please enter the valid name</span>
                              <br></br>
                              <span style={{ color: "grey" }}>Eg: kalpana</span>
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
                            <i className="fa fa-user locate-me" />
                          </div>
                          {lastnamevalid && (
                            <>
                              <span className="w-50">
                                ❌ Please enter the last name
                              </span>
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
                              onClick={(e) => setEmailvalid(false)}
                              required
                            />
                            <i className="fa fa-envelope locate-me" />
                          </div>
                          {emailvalid && !emailcheckregrex && (
                            <>
                              <span>❌ Please enter the email address</span>
                            </>
                          )}
                          {emailcheckregrex && !emailvalid && (
                            <>
                              <span>
                                ❌ Please enter the valid email address
                              </span>
                              <br></br>
                              <span style={{ color: "grey" }}>
                                Eg: abc@gmail.com
                              </span>
                            </>
                          )}
                        </div>

                        <div
                          onClick={() => setHideshow(!hideshow)}
                          className="col-lg-12 position-relative mt-3"
                        >
                          <div>
                            <input
                              placeholder="Password"
                              type={hideshow ? "password" : "text"}
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              onClick={(e) => setPassvalid(false)}
                              required
                            />
                            <i className="fa fa-lock locate-me" />
                            <i
                              className={
                                hideshow
                                  ? "fa fa-eye"
                                  : "fa fa-eye-slash  hide-pass"
                              }
                            />
                          </div>
                          {passvalid && (
                            <>
                              <span>❌ Please enter the email address</span>
                            </>
                          )}
                        </div>

                        <div className="col-lg-6 position-relative mt-3">
                          <div>
                            <input
                              placeholder="post code"
                              type="number"
                              name="postcode"
                              value={postcode}
                              onChange={(e) => setPostcode(e.target.value)}
                              onClick={(e) => setPostcodevalid(false)}
                              required
                            />
                            <i className="fa fa-envelope locate-me" />
                          </div>
                          {postcodevalid && !postcoderegrex && (
                            <>
                              <span>
                                ❌ Please enter the post code/pin code
                              </span>
                            </>
                          )}
                          {postcoderegrex && !postcodevalid && (
                            <>
                              <span>
                                ❌ Please enter the valid post code/pin code
                              </span>
                              <br></br>
                              <span style={{ color: "grey" }}>Eg: XXXXXX</span>
                            </>
                          )}
                        </div>

                        <div className="col-lg-6 position-relative mt-3">
                          <div>
                            <select
                              name="description"
                              value={description}
                              onChange={(e) => {
                                if (e.target.value >= 0) {
                                  setDescription(e.target.value);
                                  setDescriptionvalid(true);
                                }
                              }}
                              onClick={(e) => setDescriptionvalid(false)}
                              required
                            >
                              <option>{"Please select"}</option>
                              {vendoroptions?.map((option, index) => {
                                return (
                                  <option
                                    value={index}
                                    style={{ color: "#000" }}
                                  >
                                    {option?.rolename}
                                  </option>
                                );
                              })}
                            </select>
                            <i className="fa fa-users locate-me" />
                          </div>
                          {descriptionvalid && (
                            <>
                              <span className="w-50">
                                ❌ Select the dropdown list
                              </span>
                            </>
                          )}
                        </div>

                        <div className="col-lg-12 position-relative mt-3"></div>

                        <div className="col-lg-12 position-relative">
                          <input
                            checked={value}
                            onChange={(e) => {
                              setvalue(e.target.checked);
                            }}
                            type="checkbox"
                            className="ty"
                            required
                          />
                          <label>
                            I agree with Gym{" "}
                            <a href="/terms_and_condtions">
                              Terms & Conditions
                            </a>
                          </label>
                        </div>

                        <div className="col-lg-12 position-relative mt-3">
                          <button type="submit" onClick={() => OnRegister()}>
                            Register
                          </button>
                          <p className="m-0 w-100 py-2 fs-6 text-center">
                          Already a registered User? <Link to="/login"> Login</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="divider">
                      <div className="line"></div>
                      <div className="ortext">or</div>
                    </div>
                    {showmodal && (
                      <MessageBox
                        // modaltitle={"Login Message"}
                        modalbody={message}
                        modalbutton={"OK"}
                        onClickClose={() => setShowmodal(!showmodal)}
                      />
                    )}
                    {/* <div className="social-login mt-2">
                                            <a href="#">
                                                <img src={Images.google} />{" "}
                                                Continue with Google
                                            </a>

                                            <a href="#">
                                                <img src={Images.facebookk} />{" "}
                                                Continue with Facebook
                                            </a>

                                            <a href="#">
                                                <img src={Images.apple} />{" "}
                                                Continue with Apple
                                            </a>
                                        </div> */}
                    <SocialWithFirebase />
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
};

export default Register;
