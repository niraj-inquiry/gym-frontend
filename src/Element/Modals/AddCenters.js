import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { InputBox, InputBoxReadOnlycmp, InputBoxTextArea, InputBoxcmp, TextArea } from '../../Element/vendercom/InputBox'
import { CountryDropdown, DistrictDropdown, Dropdown, StateDropdown } from '../../Element/vendercom/Dropdown'
import { API, isEmpty } from '../../generalfunction'
import Countries from '../../json/Countries.json'
import Tabs from './Tabs'
import Equipment from '../vendercom/Equipment'
import Amentities from '../vendercom/Amentities'
import { AddButton, CustomButton } from '../vendercom/AddButton'
import Schedule from '../vendercom/Schedule'
import TrainerDetails from '../vendercom/TrainerDetails'
import GoogleMapScreen from '../../components/GoogleMap'
import { Modal } from 'react-bootstrap'
import { convertfirstletter } from '../../generalfunction'

const AddCenters = ({ data, setdata, modalstate, onClose, vendoroption }) => {


  const textareaRef = useRef(null);
  // const handleInput = () => {
  //   const textarea = textareaRef.current;
  //   textarea.style.height = 'auto'; // Reset the height to auto to recalculate the height based on content
  //   textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight of the textarea
  // };
  const tabsinfo = [
    { name: 'Basic Info', status: true },
    { name: 'About Us', status: false },
    // { name: 'Photos & Videos', status: false },
    // { name: 'Payment', status: false },
    // { name: '1', status: false },
  ]

  const [selecttab, setSelecttab] = useState(0)
  const [addnewequip, setAddnewequip] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [gymDetails, setGymDetails] = useState();
  const [gymdetailsstatus, setGymdetailstatus] = useState(false);
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [gymcenterid, setGymcenderid] = useState(data?._id);

  // gymdetails

  const [aboutus, setAboutus] = useState();
  const [center_name, setCenter_name] = useState(data?.center_name);
  const [address, setAddress] = useState(data?.address);
  const [pincode, setPincode] = useState(data?.pincode);
  const [contact_number, setContact_number] = useState(data?.contact_number);
  const [description, setDescription] = useState(data?.description);
  const [gstnumber, setGstnumber] = useState(data?.gstnumber);
  const [pannumber, setPannumber] = useState(data?.pannumber)
  const [country, setCountry] = useState(data?.country);
  const [state, setState] = useState(data?.state);
  const [district, setDistrict] = useState(data?.district);
  const [countryindex, setCountryindex] = useState();
  const [statelist, setStatelist] = useState();
  const [districtslist, setDistrictlist] = useState();
  const [image, setImage] = useState();
  const [lat, setLat] = useState(data?.lat);
  const [lng, setLng] = useState(data?.lng);
  const [centeremail, setCenteremail] = useState(data?.centeremail);
  const [updateimage, setUpdateimage] = useState();
  const [trainerdetailsdata, setTrainerdetailsdata] = useState([]);
  const [tempdata, setTempdata] = useState()
  const [vendoroptions, setVendoroption] = useState(vendoroption)
  const [selecvendor, setSelectvendor] = useState(null);

  const [statedata, setStatedata] = useState(data)


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

  // const onCreateAccount = async () => {
  //   console.log("center_name", userdata)
  //   // if (!isEmpty(gymDetails.center_name) && !isEmpty(gymDetails.address) &&
  //   //   !isEmpty(gymDetails.country) && !isEmpty(gymDetails.state) && !isEmpty(gymDetails.pincode)
  //   //   &&!isEmpty(gymDetails.districts) &&
  //   //   !isEmpty(gymDetails.description) && !isEmpty(gymDetails.contact_number)

  //   // ) {
  //   const formdata = new FormData();

  //   formdata.append("center_name", center_name);
  //   formdata.append("address", address);
  //   formdata.append("state", state);
  //   formdata.append("country", country);
  //   formdata.append("pincode", pincode);
  //   formdata.append("contact_number", contact_number);
  //   formdata.append("description", description);
  //   formdata.append("district", district);
  //   formdata.append("email", userdata?.email);
  //   // formdata.append("_id", gymcenterid);
  //   formdata.append("gstnumber", gstnumber);
  //   formdata.append("pannumber", gstnumber);
  //   formdata.append("created_by_userid", userdata?._id);

  //   if (image?.length > 0) {
  //     for (var k = 0, len = image?.length; k < len; k++) {
  //       var file = image[k];
  //       formdata.append("image", file);
  //     }
  //   }

  //   if (gymdetailsstatus) {

  //     await API.put("v1.0/gymcenter/update-gym-center-data", formdata).then(
  //       (res) => {
  //         console.log("update-gym-center-data", res.data)
  //         if (res?.data?.status === true) {
  //           alert(res?.data?.message);
  //           return true;
  //         }
  //       }
  //     );
  //   }
  //   else {

  //     await API.post("v1.0/gymcenter/gymcenter-register", formdata).then(
  //       (res) => {
  //         console.log("gymcenter-register", res)
  //         if (res?.data?.status === true) {
  //           alert(res?.data?.message);
  //           return { status: true };
  //           // navigate('/lists/allgymlist')
  //         }
  //       }
  //     );
  //   }
  // };
  // const onSavegymdetails = async () => {
  //   const resgym = await onCreateAccount();
  //   console.log("RES", resgym)
  // }
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
    formdata.append("centertype", vendoroptions[description]?.rolename);

    formdata.append("pannumber", pannumber);
    formdata.append("created_by_userid", userdata?._id);
    formdata.append("gstnumber", gstnumber);
    formdata.append("centeremail", centeremail);
    formdata.append("lat", lat);
    formdata.append("lng", lng);
    if (image?.length > 0) {
      for (var k = 0, len = image?.length; k < len; k++) {
        var file = image[k];
        formdata.append("image", file);
      }
    }

    if (gymdetailsstatus) {

      await API.put("v1.0/gymcenter/update-gym-center-data", formdata).then(
        (res) => {
          console.log("update-gym-center-data", res?.data)
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
            setGymcenderid(res?.data?.data?._id)
            alert(res?.data?.message);
            return { status: true };
            // navigate('/lists/allgymlist')
          }
        }
      );
    }
  };
  // const onSavegymdetails = async () => {
  //   const resgym = await onCreateAccount();
  //   console.log("RES", resgym)
  //   setSelecttab(selecttab)

  // }
  const onSavegymdetails = async () => {
    // const resgym = await onCreateAccount();
    // console.log("RES", resgym)
    if (selecttab === 0) {
      let temp = selecttab + 1;
      setSelecttab(temp)

      console.log('selecttab === 0', temp)
    } else {
      let temp = [selecttab[1]];
      console.log('selecttab[1]', temp)
    }
    // setSelecttab(index)

  }
  console.log('tab data', selecttab)

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

    let temp = [...schedule];
    let restemp = temp.filter((v, i) => i !== index);

    setSchedule(restemp);
  };

  const onSaveSchedule = (data, index) => {
    let temp = [...schedule];
    temp[index] = data;
    setSchedule(temp);
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


  const onSubmitequipment = async () => {
    console.log("gymcenterid", gymcenterid)
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
  //   Save data
  const onAddData = async () => {
    const creatres = await onCreateAccount();
    onSubmitequipment();
    let body = {
      gymcenterid: gymcenterid,
      aboutus: aboutus,
      gymeequipments: addnewequip,
      gymamenities: amenities,
      gymopenhours: schedule,
      gymtrainer: trainerdetailsdata
    };

    API.post("v1.0/gymcenterdetails/add-gym-center-details", body).then(
      (res) => {
        console.log("add-gym-center-details", res.data);
        if (res.data.status) {
          alert(res.data.message);
          // navigate('/lists/allgymlist')
        }
        else {
          alert(res.data.message);
        }
      }
    );
  };
  const onSaveLngLat = (data) => {
    console.log("Data", data)
    if (!isEmpty(data?.lat) && !isEmpty(data?.lng)) {
      setLat(data?.lat)
      setLng(data?.lng)
    }
  }
  console.log("centerid", gymcenterid);
  const onLoad = async () => {
    const datares = await API.post("v1.0/gymcenterdetails/get-gym-center-all-details", {
      gymcenterid: gymcenterid
    })
    if (datares.data.status) {
      console.log("data--------------", datares.data.data)
      setAboutus(datares?.data?.data?.aboutus)
      setCenter_name(datares?.data?.data?.gymcenterinfo?.center_name);
      setAddress(datares?.data?.data?.gymcenterinfo?.address);
      setState(datares?.data?.data?.gymcenterinfo?.state);
      setCountry(datares?.data?.data?.gymcenterinfo?.country);
      setDistrict(datares?.data?.data?.gymcenterinfo?.district);
      setPincode(datares?.data?.data?.gymcenterinfo?.pincode);
      setContact_number(datares?.data?.data?.gymcenterinfo?.contact_number);
      setDescription(datares?.data?.data?.gymcenterinfo?.description);
      setGymcenderid(datares?.data?.data?.gymcenterid);
      setGstnumber(datares?.data?.data?.gymcenterinfo?.gstnumber)
      setGymDetails(datares?.data?.data?.gymcenterinfo);
      setGymdetailstatus(true);
      setAddnewequip(datares?.data?.data?.gymeequipments);
      setAmenities(datares?.data?.data?.gymamenities);

      setSchedule(datares?.data?.data?.gymopenhours);
      setTrainerdetailsdata(datares?.data?.data?.gymtrainer)
    }
  }
  useEffect(() => {
    if (!isEmpty(gymcenterid)) {
      onLoad()
    }
  }, [])

  const onGoBack = () => {
    if (selecttab === 1) {
      let temp = selecttab - 1;
      setSelecttab(temp)

      console.log('selecttab === 1', temp)
    }
  }
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Reset the height to auto to recalculate the height based on content
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight of the textarea
  };
  return (

    <div

      style={{ display: modalstate ? 'flex' : 'none', backgroundColor: '#80808073' }} className={modalstate ? "modal fade show" : "modal fade"} id="exampleModal" tabindex="-1" aria-hidden="false">

      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center w-100 fw-bold fs-4" id="exampleModalLabel">
              {"Gym Center"}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          {/* <Tabs json={tabsinfo} onClick={(data) => { setSelecttab(data) }} /> */}
          {selecttab === 0 && (
            <div className="modal-body pt-0 mt-5">
              <div className=" profile-box pt-0 border-0">
                <div className='d-flex align-items-center'>
                  <i className="bi bi-check-circle fs-5 me-2"></i>
                  <h3 className='text-start fw-bold px-2 text-decoration-underline mb-0'>Basic Info</h3>
                </div>

                {/* <h3 className='text-start fw-bold px-2 text-decoration-underline'>Basic Info</h3> */}
                {/* gymdetails */}

                {/* <div className="row g-4 m-0">
                  <InputBox
                    defaultValue={data?.center_name}
                    label={"Center name"}
                    state={center_name}
                    setState={setCenter_name}
                  />
                  <InputBox
                    defaultValue={data?.centeremail}
                    label={"Center Email"}
                    state={centeremail}
                    setState={setCenteremail}
                  />
                  <InputBox
                    defaultValue={data?.address}
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
                    label={"Gst Number"}
                    state={gstnumber}
                    setState={setGstnumber}
                  />
                  <InputBox
                    type="text"
                    label={"PAN Number"}
                    state={pannumber}
                    setState={setPannumber}
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


                  <InputBox
                    type="text"
                    label={"Latitude"}
                    state={lat}
                    setState={setLat}
                  />
                  <InputBox
                    type="text"
                    label={"Longitude"}
                    state={lng}
                    setState={setLng}
                  />
                  <div className="col-md-6" style={{ height: 200 }} >
                    <GoogleMapScreen onSave={(data) => onSaveLngLat(data)} data={{ lat: lat, lng: lng }} />
                  </div>
                  <div className="col-md-6">

                    <select name="vendor"
                      className='form-select'
                      value={selecvendor}
                      onChange={(e) => {
                        if (e.target.value >= 0) {
                          setSelectvendor(e.target.value)

                        }
                      }}

                      required
                    >
                      <option>
                        {"Please select"}
                      </option>
                      {vendoroption?.map((option, index) => {
                        return (<option value={index} style={{ color: "#000" }}>{option?.rolename}</option>)
                      })}
                    </select>
                  </div>
                  <button
                    type="button"
                    style={{ backgroundColor: "black", borderRadius: 5 }}
                    className="explore-btn px-2 py-1"
                    onClick={() => onSavegymdetails()}
                  >
                    <span className="position-relative fs-5 w-20">Save</span>
                  </button>
                </div> */}
                <div className='px-4'>
                  <div className="row g-4 m-0 mt-4">
                    {/* <div className='text-start fw-bold mt-0'>{"Other Details"}</div> */}
                    <InputBox
                      defaultValue={data?.center_name}
                      label={"Center name"}
                      state={center_name}
                      setState={setCenter_name}
                    />
                    {/* <InputBox

                      label={"Description"}
                      state={description}
                      setState={setDescription}
                    /> */}
                    <InputBox
                      defaultValue={data?.address}
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


                    <InputBox
                      type="text"
                      label={"Latitude"}
                      state={lat}
                      setState={setLat}
                    />
                    <InputBox
                      type="text"
                      label={"Longitude"}
                      state={lng}
                      setState={setLng}
                    />
                    <div className="col-md-6">
                      <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
                        {"Choose the Roles/Activity"}
                      </label>
                      <select name="vendor"
                        className='form-select'
                        value={selecvendor}
                        onChange={(e) => {
                          if (e.target.value >= 0) {
                            setSelectvendor(e.target.value)

                          }
                        }}

                        required
                      >
                        <option>
                          {"Please select"}
                        </option>
                        {vendoroption?.map((option, index) => {
                          return (<option value={index} style={{ color: "#000" }}>{option?.rolename}</option>)
                        })}
                      </select>
                    </div>
                    <div className="col-md-6" style={{ height: 200 }} >
                      <GoogleMapScreen onSave={(data) => onSaveLngLat(data)} data={{ lat: lat, lng: lng }} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                      <InputBoxTextArea

                        label={"Description"}
                        state={description}
                        setState={setDescription}
                        inputcss={"h-50"}

                      />
                    </div>

                  </div>
                  <div className='horizontal-divider border border-2 my-5'></div>
                  <div className="row g-4 m-0 mt-4">
                    <div className='text-start fw-bold mt-0'>{"Tax Info"}</div>

                    <InputBox
                      type="number"
                      label={"Gst Number"}
                      state={gstnumber}
                      setState={setGstnumber}

                    />
                    <InputBox
                      type="number"
                      label={"PAN Number"}
                      state={pannumber}
                      setState={setPannumber}

                    />

                  </div>
                  <div className='horizontal-divider border border-2 my-5'></div>

                  <div className="row g-4 m-0 mt-4">
                    <div className='text-start fw-bold mt-0'>{"Gym Owner Details"}</div>
                    <div className='col'>
                      <InputBoxcmp
                        defaultValue={data?.center_name}
                        label={"Name"}
                        state={center_name}
                        setState={setCenter_name}
                        type={"text"}
                      />
                    </div>
                    <div className='col'>
                      <InputBoxcmp
                        defaultValue={data?.centeremail}
                        label={"Email"}
                        state={centeremail}
                        setState={setCenteremail}
                        type={"email"}
                      />
                    </div>
                    <div className='col'>
                      <InputBoxcmp
                        label={"Contact Number"}
                        state={contact_number}
                        setState={setContact_number}
                        type={"number"}
                      />
                    </div>

                  </div>
                </div>

              </div>
              <button
                type="button"
                style={{ backgroundColor: "black", borderRadius: 5 }}
                className="explore-btn px-3 py-1"
                onClick={(index) => onSavegymdetails(index)}
              >
                <span className="position-relative fs-5 w-20">Save & Proceed</span>
              </button>
            </div>)}

          {selecttab === 1 && (
            <div className="profile-box px-3 border-0 pt-0">

              <div className='text-start fs-2 px-3 py-3' onClick={() => onGoBack()}>
                {/* <i className="bi bi-arrow-left-circle-fill"></i> */}
                <i className="bi bi-arrow-left-circle"></i>
              </div>
              <div className="row justify-content-end p-5 pt-0">
                <div className='d-flex align-items-center'>
                  <i className="bi bi-check-circle fs-5 me-2"></i>
                  <h3 className='text-start fw-bold px-2 text-decoration-underline mb-0'>
                    {"More Details"}
                  </h3>
                </div>

                <div className="col-lg-12 col-md-12 g-4 pt-0 m-0 flex px-5">
                  {/* <div className="add_more_box px-5 py-5">
                    <InputBoxTextArea
                      //    defaultValue={data?.aboutus}
                      // type={"textarea"}
                      label={"About us"}
                      state={aboutus}
                      setState={setAboutus}
                    />
                  </div> */}
                  <div className=" py-4">
                    {/* <InputBoxTextArea
                      //    defaultValue={data?.aboutus}
                      type={"textarea"}
                      label={"About us"}
                      state={aboutus}
                      setState={setAboutus}
                      inputcss={'about-us-textarea'}
                    /> */}
                    <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>
                      {"About Us"}
                    </label>
                    <textarea
                      ref={textareaRef}
                      onInput={handleInput}
                      style={{ resize: 'none', overflowY: 'hidden', width: '100%' }}
                      className='rounded border'
                    />
                  </div>
                </div>
                {/* equipments */}
                {addnewequip?.length > 0
                  ? addnewequip?.map((item, index) => (
                    <Equipment
                      onDelete={() => onRemoveEquipment(index)}
                      onSave={(data) => onSaveEquipment(data, index)}
                      data={item}
                    />
                  ))
                  : ""}
                {/* <div className="border mx-auto">
                  <AddButton
                    label={"+ add equipments"}
                    onClick={() => onAddEquipments()}
                  />
                </div> */}
                <CustomButton
                  label={"+ Add Equipments"}
                  onClick={() => onAddEquipments()}
                  className={" w-100 fw-bold my-3"}
                  buttoncss={"active-tabs px-2 py-1 rounded me-0 float-end vendorlistbutton fs-6"}
                />
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
                {/* <div className="">
                  <AddButton
                    label={"+ add Amentities"}
                    onClick={() => onAddAmenities()}
                  />
                </div> */}
                <CustomButton
                  label={"+ Add Amentities"}
                  onClick={() => onAddAmenities()}
                  className={" w-100 fw-bold my-3"}
                  buttoncss={"active-tabs px-2 py-1 rounded me-0 float-end vendorlistbutton fs-6"}
                />

                {schedule?.length > 0 &&
                  schedule?.map((item, index) => (
                    <Schedule
                      onDelete={() => onRemoveSchedule(index)}
                      onSave={(data) => onSaveSchedule(data, index)}
                      data={item}
                    />
                  ))}
                {/* <div className="">
                  <AddButton
                    label={"+  Schedule"}
                    onClick={() => onAddSchedule()}
                  />
                </div> */}
                <CustomButton
                  label={"+ Schedule"}
                  onClick={() => onAddSchedule()}
                  className={" w-100 fw-bold my-3"}
                  buttoncss={"active-tabs px-2 py-1 rounded me-0 float-end vendorlistbutton fs-6"}
                />

                {/* schedule */}



                {/* trainer */}
                {trainerdetailsdata?.length > 0 &&
                  trainerdetailsdata?.map((item, index) => (
                    <TrainerDetails
                      data={item}
                      onDelete={() => onRemoveTrainer(index)}
                      onSave={(data) => onSaveTrainer(data, index)}
                      vendoroptions={vendoroption}
                    />
                  ))}
                {/* <div className="">
                  <AddButton
                    label={"+  Add New Trainer"}
                    onClick={() => onAddTrainer()}
                  />
                </div> */}
                <CustomButton
                  label={"+ Add New Trainer"}
                  onClick={() => onAddTrainer()}
                  className={" w-100 fw-bold my-3"}
                  buttoncss={"active-tabs px-2 py-1 rounded me-0 float-end vendorlistbutton fs-6"}
                />

                <div onClick={() => onAddData()} className="mainsavebtn">
                  {"Save data"}
                </div>
              </div>
            </div>)}
        </div>
      </div>

    </div>

  )
}

export default AddCenters