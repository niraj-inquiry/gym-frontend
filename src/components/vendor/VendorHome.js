import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import SideMenu from "../../Element/vendercom/SideMenu";
import { Header } from "../../Element/Header";
import UserDetail from "../../Element/vendercom/UserDetail";
import GymDetails from "../../Element/vendercom/GymDetails";
import Equipment from "../../Element/vendercom/Equipment";
import Amentities from "../../Element/vendercom/Amentities";
import Schedule from "../../Element/vendercom/Schedule";
import { AddButton } from "../../Element/vendercom/AddButton";
import { API, isEmpty } from "../../generalfunction";
import {
  InputBox,
  InputBoxTextArea,
  InputBoxcmp,
} from "../../Element/vendercom/InputBox";
import Countries from "../../json/Countries.json";
import {
  CountryDropdown,
  DistrictDropdown,
  StateDropdown,
} from "../../Element/vendercom/Dropdown";
import TrainerDetails from "../../Element/vendercom/TrainerDetails";
import * as Images from "../../assets";
const VendorHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  const [addnewequip, setAddnewequip] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [gymDetails, setGymDetails] = useState();
  const [gymdetailsstatus, setGymdetailstatus] = useState(false);
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [gymcenterid, setGymcenderid] = useState();

  // gymdetails
  const [aboutus, setAboutus] = useState();
  const [center_name, setCenter_name] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [contact_number, setContact_number] = useState();
  const [description, setDescription] = useState();
  const [gstnumber, setGstnumber] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();
  const [image, setImage] = useState();
  const [updateimage, setUpdateimage] = useState();
  const [trainerdetailsdata, setTrainerdetailsdata] = useState([]);
  const [tempdata, setTempdata] = useState()

  const onLoad = () => {
    let datadetails;
    console.log("ddd", userdata?._id)
    API.post("v1.0/gymcenterdetails/get-gym-center-all-details", {
      gymcenterid: gymcenterid,
      email: userdata?.email,
    }).then((res) => {

      if (res.data.status) {
        console.log("res0000000000000", res.data.data.gymtrainer)
        let gymdata = res.data.data.gymcenterinfo[0]


        if (res?.data?.data?.gymcenterinfo?.length > 0) {
          setAboutus(gymdata.aboutus);
          setCenter_name(res.data.data?.center_name);
          setAddress(res.data.data?.address);
          setState(res.data.data?.state);
          setCountry(res.data.data?.country);
          setDistrict(res.data.data?.district);
          setPincode(res.data.data?.pincode);
          setContact_number(res.data.data?.contact_number);

          setDescription(res.data.data?.description);
          setGymcenderid(gymdata?.gymcenterid);
          setGstnumber(res.data.data?.gstnumber)
          setGymDetails(res.data.data);
          setGymdetailstatus(true);
        }
        else {

          setGymdetailstatus(true);
          setAboutus(res.data.data.aboutus);
          setCenter_name(res?.data?.data?.gymcenterinfo?.center_name);
          setAddress(res?.data?.data?.gymcenterinfo?.address);
          setState(res?.data?.data?.gymcenterinfo?.state);
          setCountry(res?.data?.data?.gymcenterinfo?.country);
          setDistrict(res?.data?.data?.gymcenterinfo?.district);
          setPincode(res?.data?.data?.gymcenterinfo?.pincode);
          setContact_number(res?.data?.data?.gymcenterinfo?.contact_number);
          setDescription(res?.data?.data?.gymcenterinfo.description);
          setGymcenderid(res.data.data.gymcenterid);
          setGstnumber(res?.data?.data?.gymcenterinfo?.gstnumber)
          setGymDetails(res.data.data.gymcenterinfo);
          setGymdetailstatus(true);

          setAddnewequip(res.data.data.gymeequipments);
          setAmenities(res.data?.data?.gymamenities);
          setAboutus(res.data.data.aboutus);
          setSchedule(res.data.data.gymopenhours);
          setTrainerdetailsdata(res.data.data.gymtrainer)
        }

      }
    });
  };


  //addequipment

  const onAddEquipments = () => {
    if (isEmpty(addnewequip)) {
      let temp = [];
      temp.push("");
      setAddnewequip(temp);
    } else {
      let temp = [...addnewequip];
      temp.push("");
      setAddnewequip(temp);
    }
  };
  const onRemoveEquipment = (index) => {
    let temp = [...addnewequip];
    let res = temp.filter((v, i) => i !== index);
    setAddnewequip(res);
  };
  const onSaveEquipment = (data, index) => {
    console.log("onsaveequip", data)
    let temp = [...addnewequip];
    temp[index] = data;
    setAddnewequip(temp);
  };



  // amenities
  const onAddAmenities = () => {
    if (isEmpty(amenities)) {
      let temp = [];
      temp.push("");
      setAmenities(temp);
    } else {
      let temp = [...amenities];
      temp.push("");
      setAmenities(temp);
    }
  };
  const onRemoveAmenities = (index) => {
    let temp = [...amenities];
    let res = temp.filter((v, i) => i !== index);
    setAmenities(res);
  };

  const onSaveAmenities = (data, index) => {

    let temp = [...amenities];
    temp[index] = data;
    setAmenities(temp);
  };
  // schedule
  const onAddSchedule = () => {
    if (isEmpty(schedule)) {
      let temp = [];
      temp.push("");
      setSchedule(temp);
    } else {
      let temp = [...schedule];
      temp.push("");
      setSchedule(temp);
    }
  };
  const onRemoveSchedule = (index) => {
    console.log("onRemove", index)
    let temp = [...schedule];
    let restemp = temp.filter((v, i) => i !== index);
    console.log("onRemove", restemp)
    setSchedule(restemp);
  };

  const onSaveSchedule = (data, index) => {
    let temp = [...schedule];
    temp[index] = data;
    setSchedule(temp);
  };

  const onCreateAccount = async () => {
    console.log("center_name", userdata)
    // if (!isEmpty(gymDetails.center_name) && !isEmpty(gymDetails.address) &&
    //   !isEmpty(gymDetails.country) && !isEmpty(gymDetails.state) && !isEmpty(gymDetails.pincode)
    //   &&!isEmpty(gymDetails.districts) &&
    //   !isEmpty(gymDetails.description) && !isEmpty(gymDetails.contact_number)

    // ) {
    const formdata = new FormData();

    formdata.append("center_name", center_name);
    formdata.append("address", address);
    formdata.append("state", state);
    formdata.append("country", country);
    formdata.append("pincode", pincode);
    formdata.append("contact_number", contact_number);
    formdata.append("description", description);
    formdata.append("district", district);
    formdata.append("email", userdata?.email);
    formdata.append("_id", gymcenterid);
    formdata.append("gstnumber", gstnumber);
    formdata.append("created_by_userid", userdata?._id);

    if (image?.length > 0) {
      for (var k = 0, len = image?.length; k < len; k++) {
        var file = image[k];
        formdata.append("image", file);
      }
    }

    if (gymdetailsstatus) {

      await API.put("v1.0/gymcenter/update-gym-center-data", formdata).then(
        (res) => {
          console.log("update-gym-center-data", res.data)
          if (res?.data?.status === true) {
            alert(res?.data?.message);
            return true;
          }
        }
      );
    }
    else {

      await API.post("v1.0/gymcenter/gymcenter-register", formdata).then(
        (res) => {
          console.log("gymcenter-register", res)
          if (res?.data?.status === true) {
            alert(res?.data?.message);
            return { status: true };
            // navigate('/lists/allgymlist')
          }
        }
      );
    }
  };

  const onSubmitequipment = async () => {
    const tempequ = [...addnewequip];
    for (let i = 0; i < tempequ.length; i++) {
      const formdata = new FormData();
      formdata.append("gymid", gymcenterid);
      formdata.append("user_id", userdata?._id);
      formdata.append("description", tempequ[i]?.description);
      formdata.append("equipment_brand", tempequ[i]?.equipment_brand);
      formdata.append("equipment_name", tempequ[i]?.equipment_name);
      formdata.append("equipments", tempequ[i]?.equipments);
      formdata.append(
        "equipment_model_number",
        tempequ[i]?.equipment_model_number
      );
      API.post("v1.0/gymequipment/add-gym-equipments", formdata).then((res) => {

        if (res.data.status) {
          let tempdata = {
            equipmentsid: res.data.data[0]._id,
            name: res.data.data[0].equipment_name,
          };
          addnewequip[i] = tempdata;
          setAddnewequip(addnewequip);
          return true;
        }
      });
    }
  };

  const onSaveUserProfile = (data) => {
    console.log("onSaveUserProfile", data, userdata);
    const formdata = new FormData();
    formdata.append("first_name", data?.first_name);
    formdata.append("last_name", data?.last_name);
    formdata.append("email", data?.email);
    formdata.append("description", data?.description);
    formdata.append("post_code", data?.post_code);
    formdata.append("user_id", userdata?._id);

    // formdata.append("photos", location?.state?.photos);
    //   if(data.image?.length > 0){
    //           for(var k=0, len = data.image.length; k < len; k++){

    //               var file = data.image[k];
    //               formdata.append("image", file);

    //           }
    //       }
    API.put("v1.0/user/update-user", formdata).then((res) => {
      console.log('updateuser', res)
      if (res.data.status) {

        alert(res.data.message);

        setUserdata(JSON.stringify(res.data.userDetail));
      } else {
        alert(res.data.message);
      }
    });
  };
  const onSelectCountry = (e) => {
    let countryindexvalue = Countries?.findIndex(
      (x) => x.country_name == e.target.value
    );

    setCountry(e.target.value);
    setCountryindex(countryindexvalue);
    setStatelist(Countries[countryindexvalue]?.states);
  };
  const onSelectstate = (e) => {
    setState(e.target.value);
    let stateindexvalue = Countries[countryindex]?.states.findIndex(
      (x) => x.state == e.target.value
    );

    setDistrictlist(
      Countries[countryindex]?.states[stateindexvalue]?.districts
    );
  };
  const onSavegymdetails = async () => {
    const resgym = await onCreateAccount();
    console.log("RES", resgym)
  };
  //   Save data
  const onAddData = async () => {
    const creatres = await onCreateAccount();

    console.log("onsave", amenities)
    onSubmitequipment();
    let body = {
      gymcenterid: gymcenterid,
      aboutus: aboutus,
      gymeequipments: addnewequip,
      gymamenities: amenities,
      gymopenhours: schedule,
      gymtrainer: trainerdetailsdata
    };
    console.log("body----------", body)
    API.post("v1.0/gymcenterdetails/add-gym-center-details", body).then(
      (res) => {
        console.log("add-gym-center-details", res.data);
        if (res.data.status) {
          alert(res.data.message);
        }
      }
    );
  };

  const onRemoveTrainer = (index) => {
    let temp = [...trainerdetailsdata];
    let res = temp.filter((v, i) => i !== index);
    setTrainerdetailsdata(res);
  };
  const onAddTrainer = () => {
    if (isEmpty(trainerdetailsdata)) {
      let temp = [];
      temp.push("");
      setTrainerdetailsdata(temp);
    } else {
      let temp = [...trainerdetailsdata];
      temp.push("");
      setTrainerdetailsdata(temp);
    }
  };


  const onSaveTrainer = (data, index) => {
    let temp = [...trainerdetailsdata];
    temp[index] = data;
    setTrainerdetailsdata(temp);
  };

  // useEffect(() => {
  //   onLoad();
  //   // setUserdata(JSON.parse(localStorage.getItem('userdata')))
  // }, []);
  // console.log("userdata",center_name)
  // const onsetdata = useCallback(() => {
  //   onLoad();
  // }, []);
  useEffect(() => {
    onLoad();

    //  onsetdata();
  }, [gymcenterid]);


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 px-0 side-nav-bar">
            <SideMenu />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 p-0">
            <Header />

            <div className="row mt-5 p-5">
              <div className="col-lg-6 col-md-6">
                <div className="profile-box">
                  <h2>User Profile</h2>
                  <UserDetail
                    data={userdata}
                    setData={setUserdata}
                    onSave={(data) => onSaveUserProfile(data)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div class=" profile-box">
                  <h3>Center Details</h3>
                  {/* gymdetails */}

                  <div className="row g-4 p-5 pt-3 m-0">
                    <InputBox
                      defaultValue={center_name}
                      label={"Center name"}
                      state={center_name}
                      setState={setCenter_name}
                    />
                    <InputBox
                      label={"Address"}
                      state={address}
                      setState={setAddress}
                    />
                    <div className="col-md-6">
                      <CountryDropdown
                        state={country}
                        onChange={(e) => onSelectCountry(e)}
                        key="country"
                        label={"Country"}
                        json={Countries}
                        defaultvalue={"Choose Your Country..."}
                      />
                    </div>
                    <div className="col-md-6">
                      <StateDropdown
                        state={state}
                        key="state"
                        onChange={(e) => onSelectstate(e)}
                        label={"State"}
                        json={statelist}
                        defaultvalue={"Choose Your State..."}
                      />
                    </div>
                    <div className="col-md-6">
                      <DistrictDropdown
                        state={district}
                        key="District"
                        onChange={(e) => setDistrict(e.target.value)}
                        label={"District"}
                        json={districtslist}
                        defaultvalue={"Choose Your District..."}
                      />
                    </div>
                    <InputBox
                      label={"Pin Code"}
                      state={pincode}
                      setState={setPincode}
                    />
                    <InputBox
                      label={"Contact Number"}
                      state={contact_number}
                      setState={setContact_number}
                    />

                    <InputBox

                      label={"Description"}
                      state={description}
                      setState={setDescription}
                    />
                    <InputBox
                      type="text"
                      label={"Gst         Number"}
                      state={gstnumber}
                      setState={setGstnumber}
                    />
                    <div className="col-md-6">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                        style={{ textAlign: "left", width: "100%" }}
                      >
                        Images
                      </label>
                      <input
                        onChange={(event) => {
                          setImage(event.target.files);
                        }}
                        placeholder="No File"
                        type="file"
                        className="file_text ps-2 form-control"
                        accept=".jpg,.jpeg,.png"
                        multiple
                        required
                      />
                    </div>
                    <button
                      type="button"
                      style={{ backgroundColor: "black", borderRadius: 5 }}
                      className="explore-btn px-2 py-1"
                      onClick={() => onSavegymdetails()}
                    >
                      <span className="position-relative fs-5 w-20">Save</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* gymdetails */}
              {/* <GymDetails data={gymDetails} setData={setGymDetails} onSave={(data) => onSaveGymdata(data)} /> */}
              <div class="mt-5 profile-box">
                <div class="row">

                  <div className="col-lg-12 col-md-12 g-4 p-5  m-0 flex">
                    <div className="add_more_box px-5 py-5">
                      <InputBoxTextArea
                        //    defaultValue={data?.aboutus}
                        // type={"textarea"}
                        label={"About us"}
                        state={aboutus}
                        setState={setAboutus}
                      />
                    </div>
                  </div>

                  {addnewequip?.length > 0
                    ? addnewequip?.map((item, index) => (
                      <Equipment
                        onDelete={() => onRemoveEquipment(index)}
                        onSave={(data) => onSaveEquipment(data, index)}
                        data={item}
                      />
                    ))
                    : ""}
                  <div className="">
                    <AddButton
                      label={"+ add equipments"}
                      onClick={() => onAddEquipments()}
                    />
                  </div>
                  {/* equipments */}


                  {/* Amentities */}
                  {amenities?.length > 0 &&
                    amenities?.map((item, index) => (
                      <Amentities
                        onDelete={() => onRemoveAmenities(index)}
                        onSave={(data) => onSaveAmenities(data, index)}
                        item={item}
                      />
                    ))}
                  <div className="">
                    <AddButton
                      label={"+ add Amentities"}
                      onClick={() => onAddAmenities()}
                    />
                  </div>

                  {schedule?.length > 0 &&
                    schedule?.map((item, index) => (
                      <Schedule
                        onDelete={() => onRemoveSchedule(index)}
                        onSave={(data) => onSaveSchedule(data, index)}
                        data={item}
                      />
                    ))}
                  <div className="">
                    <AddButton
                      label={"+  Schedule"}
                      onClick={() => onAddSchedule()}
                    />
                  </div>

                  {/* schedule */}



                  {/* trainer */}
                  {trainerdetailsdata?.length > 0 &&
                    trainerdetailsdata?.map((item, index) => (
                      <TrainerDetails
                        data={item}
                        onDelete={() => onRemoveTrainer(index)}
                        onSave={(data) => onSaveTrainer(data, index)}
                      />
                    ))}
                  <div className="">
                    <AddButton
                      label={"+  Add New Trainer"}
                      onClick={() => onAddTrainer()}
                    />
                  </div>

                  <div onClick={() => onAddData()} className="mainsavebtn">
                    {"Save data"}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default VendorHome;
