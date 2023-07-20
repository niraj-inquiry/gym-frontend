import React, { useState } from "react";
import { Header, AllPageBanner, Footer } from ".";
import "../css/Style.css";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import * as Images from "../assets";
import Card_passes from "./card/Card_passes";
import { HomeBanner } from "../components";
import { NavLink } from "react-router-dom";
import { SubHomeBanner } from "../Element/HomeBanner";
import UserDetail from "../Element/vendercom/UserDetail";
import {
  UserSettingInput,
  InputBoxReadOnlycmp,
  InputBoxTextArea,
} from "../Element/vendercom/InputBox";
import { UserSettingDropdownCustom } from "../Element/vendercom/Dropdown";
import CommunicationForm from "../Element/Modals/CommunicationForm";
import {
  UserSettingAddButton,
  CustomButton,
} from "../Element/vendercom/AddButton";
import { API } from "../generalfunction";
import MessageBox from "../Element/Modals/MessageBox";

const UserSettings = () => {
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const genderdropdown = ["Male", "Female"];
  const [editstatus, setEditstatus] = useState(true);
  const [changedata, setChangedata] = useState(userdata);
  const json = [
    { name: "SMS", status: false },
    { name: "Email", status: false },
    { name: "Telephone", status: false },
  ];

  const preferrences = [
    { name: "Promotions & offers", status: false },
    { name: "The newsletter", status: false },
    { name: "My account", status: false },
    { name: "Information about gyms", status: false },
  ];
  const [communicationjson, setCommunicationjson] = useState(json);
  const [preferrencejson, setPreferrencejson] = useState(preferrences);
  const onChangeCommunication = (data, index) => {
    let temparray = [...communicationjson];
    temparray[index].status = !temparray[index].status;
    setCommunicationjson(temparray);
  };
  const onChangePreferrence = (data, index) => {
    let temparray = [...preferrencejson];
    temparray[index].status = !temparray[index].status;
    setPreferrencejson(temparray);
  };
  const [contactnumber, setContactnumber] = useState(userdata?.contactnumber);
  const [workpostcode, setWorkpostcode] = useState();
  const [homepostcode, setHomepostcode] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState();
  const [email, setEmail] = useState(userdata?.email);
  const [password, setPassword] = useState();
  const [gender, setGender] = useState(userdata?.gender);
  const [name, setName] = useState();
  const [showmodal, setShowmodal] = useState();
  const [message, setMessage] = useState();
  const [fullName, setFullName] = useState(
    `${userdata?.first_name} ${userdata?.last_name}`
  );

  const onSaveChanges = async () => {
    // console.log('userdata savebtn', userdata);

    const formdata = new FormData();
    // formdata.append("first_name", firstname);
    // formdata.append("last_name", lastname);
    formdata.append("first_name", firstName);
    formdata.append("last_name", lastName);
    formdata.append("gender", gender);
    formdata.append("email", email);
    formdata.append("password", password);
    // formdata.append("post_code", userdata?.post_code);
    formdata.append("user_id", userdata?._id);
    formdata.append("homepostcode", homepostcode);
    formdata.append("workpostcode", workpostcode);
    formdata.append("contactnumber", contactnumber);
    // formdata.append("photos", location?.state?.photos);
    //   if(data.image?.length > 0){
    //           for(var k=0, len = data.image.length; k < len; k++){

    //               var file = data.image[k];
    //               formdata.append("image", file);

    //           }
    //       }
    API.put("v1.0/user/update-user", formdata).then((res) => {
      console.log("updateuser", res);
      if (res?.data?.status) {
        setShowmodal(true);
        // alert(res.data.message);
        setMessage(res?.data?.message);
        localStorage.setItem("userdata", JSON.stringify(res.data.userDetail));
        setChangedata(JSON.stringify(res.data.userDetail));
        setEditstatus(true);
      } else {
        // alert(res.data.message);
        setMessage(res?.data?.message);
      }
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const [firstName, lastName] = value.split(" ");

    setFullName(value);
    // You can also set separate states for firstName and lastName if needed
    // setFirstName(firstName);
    // setLastName(lastName);
  };
  const [firstName, lastName] = fullName.split(" ");
  const userInfo = JSON.parse(localStorage.getItem("userAuth"));
  return (
    <>
      <Header Logo={Images.logo} Hamburger={Images.menu} />
      <section
        className="section_heading w-80 mx-auto commpad p-5"
        style={{ backgroundColor: "#d3d3d370" }}
      >
        <div
          style={{ width: "100%", margin: "auto" }}
          className="text-start pb-5 "
        >
          <h1>Settings</h1>

          <nav aria-label="breadcrumb" style={{}}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item fw-700">
                <NavLink
                  to={"/home"}
                  style={{ textDecoration: "none", color: "#9dbed5" }}
                >
                  Gyms
                </NavLink>{" "}
              </li>
              <li className="breadcrumb-item active fw-700" aria-current="page">
                <NavLink
                  to={"/account"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  My Account
                </NavLink>
              </li>
            </ol>
          </nav>
          <div className="text-end">
            <i
              className="fa fa-edit editclass"
              onClick={() => setEditstatus(!editstatus)}
            ></i>
          </div>
          <div className="row">
            <div className="col-lg-6 py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="py-3 border-bottom row align-items-center">
                  <h3 className="col mb-0">{"Personal Details"}</h3>
                </div>

                <div className="row py-2">
                  <div
                    className={"d-flex flex-row py-2 justify-content-between"}
                  >
                    <label
                      htmlFor="validationDefault02"
                      className="form-label mb-0 col-6"
                      style={{}}
                    >
                      {"Name"}
                    </label>
                    <div className={`d-flex align-items-center col-6 `}>
                      <input
                        type={"text"}
                        value={userInfo.Uname}
                        onChange={handleInputChange}
                        className={
                          editstatus
                            ? "border-0 text-center w-100 px-3 py-1"
                            : " px-3 py-1 w-100 border"
                        }
                        required
                        defaultValue={`${userdata?.first_name}  ${userdata?.last_name}`}
                        readOnly={editstatus}
                      />
                    </div>
                  </div>

                  <UserSettingInput
                    label={"Date Of Birth"}
                    type={"date"}
                    className={"d-flex flex-row py-2 justify-content-between"}
                    defaultValue={userdata?.dob}
                    // inputcss={"border-0"}
                    inputcss={
                      editstatus
                        ? "border-0 text-center w-100 px-3 py-1"
                        : " px-3 py-1 w-100 border"
                    }
                    readOnlyStatus={editstatus}
                    setState={setDob}
                    state={dob}
                  />

                  <UserSettingDropdownCustom
                    label={"Gender"}
                    className={"d-flex border-0 setting-dropdown w-100 py-2"}
                    defaultvalue={
                      isNaN(userdata?.gender) ? "" : userdata?.gender
                    }
                    inputcss={
                      editstatus
                        ? "ms-1 px-3 py-1 w-100 text-center border-0"
                        : "px-3 py-1 w-100 text-center"
                    }
                    json={genderdropdown}
                    setState={setGender}
                  />

                  <UserSettingInput
                    label={"Mobile Phone"}
                    type={"number"}
                    className={"d-flex flex-row py-2 justify-content-between"}
                    // inputcss={"border-0"}
                    inputcss={
                      editstatus
                        ? "border-0 text-center px-3 py-1 w-100"
                        : " px-3 py-1 w-100 border"
                    }
                    defaultValue={isNaN(userdata?.contactnumber)}
                    readOnlyStatus={editstatus}
                    state={contactnumber}
                    setState={setContactnumber}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="py-3 border-bottom row align-items-center">
                  <h3 className="col mb-0">{"Account Details & Post Codes"}</h3>
                  {/* <i className="fa fa-edit editclass col-lg-1" onClick={() => setEditstatus(!editstatus)}></i> */}
                </div>
                <div className="row py-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Email
                    </span>
                    <input type="email"
                    value={userInfo.Uemail}
                     className="form-control" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Password
                    </span>
                    <input type="password"
                    value={userInfo.upass}
                     className="form-control" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Pin Code
                    </span>
                    <input type="password"
                    value={userInfo.Upincode}
                     className="form-control" />
                  </div>
                  {/* <UserSettingInput
                                        label={"Email"}
                                        type={"email"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                        defaultValue={isNaN(userdata?.email)?"":userdata?.email}
                                        readOnlyStatus={editstatus}
                                        state={email}
                                        setState={setEmail}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}
                                    />


                                    <UserSettingInput
                                        label={"Password"}
                                        type={"password"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                        readOnlyStatus={editstatus}
                                        state={password}
                                        setState={setPassword}
                                        defaultValue={userdata?.password}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}
                                    />
                                    <UserSettingInput
                                        label={"Home postcode *"}
                                        type={"text"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                        // inputcss={"px-3 py-1"}
                                        // defaultValue={"Not Set"}
                                        readOnlyStatus={editstatus}
                                        state={homepostcode}
                                        setState={setHomepostcode}
                                        defaultValue={isNaN(userdata?.homepostcode)?"":userdata?.homepostcode}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}

                                    />
                                    <UserSettingInput
                                        label={"Work postcode *"}
                                        type={"text"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                        // inputcss={"px-3 py-1"}
                                        // defaultValue={"Not Set"}
                                        readOnlyStatus={editstatus}
                                        state={workpostcode}
                                        setState={setWorkpostcode}
                                        defaultValue={isNaN(userdata?.workpostcode)?"":userdata?.workpostcode}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}

                                    /> */}
                </div>
              </div>
            </div>
            {/* <div className='col-lg-6  py-2'>
                            <div className='container-fluid border w-auto py-1' style={{ backgroundColor: '#fff' }}>
                                <div className='py-3 border-bottom row align-items-center'>
                                    <h3 className='col mb-0'>{"Post Codes"}</h3>
                                    
                                <div className='row py-2'>
                                    <UserSettingInput
                                        label={"Home postcode *"}
                                        type={"text"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                       
                                        readOnlyStatus={editstatus}
                                        state={homepostcode}
                                        setState={setHomepostcode}
                                        defaultValue={userdata?.homepostcode}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}

                                    />
                                    <UserSettingInput
                                        label={"Work postcode *"}
                                        type={"text"}
                                        className={"d-flex flex-row py-2 justify-content-between"}
                                      
                                        readOnlyStatus={editstatus}
                                        state={workpostcode}
                                        setState={setWorkpostcode}
                                        defaultValue={userdata?.workpostcode}
                                        inputcss={editstatus ? "border-0 text-center px-3 py-1 w-100" : " px-3 py-1 w-100 border"}

                                    />

                                </div>
                            </div>
                        </div> */}
            <div className="col-lg-6  py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 className="py-3 border-bottom mb-0">
                  {"Communication Channels"}
                </h3>
                <div className="row py-2">
                  <CommunicationForm
                    communicationjson={communicationjson}
                    onClick={(data, index) =>
                      onChangeCommunication(data, index)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6  py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff" }}
              >
                <div className="py-3 border-bottom row align-items-center">
                  <h3 className="col mb-0">{"Emergency details"}</h3>
                  {/* <i className="fa fa-edit editclass col-lg-1" onClick={() => setEditstatus(!editstatus)}></i> */}
                </div>
                <div className="row py-2">
                  <UserSettingInput
                    label={"Name *"}
                    type={"text"}
                    className={"d-flex flex-row py-1 mb-0"}
                    inputcss={
                      editstatus
                        ? "border-0 text-center px-3 py-1 w-100"
                        : " px-3 py-1 w-100 border"
                    }
                    // inputcss={"px-3 py-1"}
                    defaultValue={""}
                    readOnlyStatus={editstatus}
                  />
                  <UserSettingInput
                    label={"Phone number *"}
                    type={"number"}
                    className={"d-flex flex-row py-1"}
                    inputcss={
                      editstatus
                        ? "border-0 text-center px-3 py-1 w-100"
                        : " px-3 py-1 w-100 border"
                    }
                    // inputcss={"px-3 py-1"}
                    defaultValue={""}
                    readOnlyStatus={editstatus}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6  py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 className="py-3 border-bottom">
                  {"SuperActive communication preferences"}
                </h3>
                <div className="row py-2 ">
                  <CommunicationForm
                    communicationjson={preferrencejson}
                    onClick={(data, index) => onChangePreferrence(data, index)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 py-2">
              <div
                className="container-fluid border w-auto py-1 rounded"
                style={{ backgroundColor: "#fff", marginTop: "-4%" }}
              >
                <h3 className="py-3 border-bottom">
                  {"Manage your personal data"}
                </h3>
                <div className="w-100 " style={{ fontSize: 12 }}>
                  {
                    "Enter your password to view and download the personal data you have provided to us."
                  }
                </div>
                <div className="row py-2 ">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <UserSettingInput
                      placeholder={"Password"}
                      type={"password"}
                      className={"w-100 py-1 border rounded"}
                      inputcss={" w-100 px-3 py-1 border-0"}

                      // readOnlyStatus={editstatus}
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <CustomButton
                      label={"Download"}
                      className={"explore-btn py-1 w-auto"}
                    />
                  </div>
                </div>
                <div className="w-100 " style={{ fontSize: 13 }}>
                  {
                    "To request more information on how we are processing your personal data, or to have it erased, email us at "
                  }
                  <b>{"info@superactive.com"}</b>
                  <div style={{ height: 85 }} className="pb-4 mb-1">
                    <InputBoxTextArea inputcss={"w-100 h-100"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showmodal && (
            <MessageBox
              // modaltitle={"User Setting"}
              modalbody={message}
              modalbutton={"OK"}
              onClickClose={() => setShowmodal(!showmodal)}
            />
          )}
          <UserSettingAddButton
            label={"Save Changes"}
            onClick={() => onSaveChanges()}
          />
        </div>
      </section>
      {/* <Multiplesection_footer /> */}
      <Footer />
    </>
  );
};

export default UserSettings;
