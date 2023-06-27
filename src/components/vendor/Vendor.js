
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";
// import SideMenu from "../../Element/vendercom/SideMenu";
// import { Header } from "../../Element/Header";
// import UserDetail from '../../Element/vendercom/UserDetail'
// import GymDetails from '../../Element/vendercom/GymDetails'
// import Equipment from '../../Element/vendercom/Equipment'
// import Amentities from '../../Element/vendercom/Amentities'
// import Schedule from '../../Element/vendercom/Schedule'
// import { AddButton } from "../../Element/vendercom/AddButton";
// import { API, isEmpty } from "../../generalfunction";
// import { InputBox, InputBoxTextArea } from "../../Element/vendercom/InputBox";
// import Countries from '../../json/Countries.json'
// import { CountryDropdown, DistrictDropdown, StateDropdown } from "../../Element/vendercom/Dropdown";

// const Vendor = () => {
//     return (
//         <>

//             <>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg-3 col-md-3 col-sm-3 px-0">
//                             <SideMenu />
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 p-0">

//                             <Header />

//                             <div className="">
//                                 <h2>User Profile</h2>
//                                 <UserDetail data={userdata} setData={setUserdata}
//                                     onSave={(data) => onSaveUserProfile(data)}
//                                 />
//                                 <h3>Gym Center Details</h3>
//                                 {/* gymdetails */}
//                                 <div className="g-4 p-5 pt-3 m-0 flex">

//                                     <InputBoxTextArea
//                                         //    defaultValue={data?.aboutus}
//                                         // type={"textarea"}
//                                         label={"About us"}
//                                         state={aboutus}
//                                         setState={setAboutus}
//                                     />
//                                 </div>
//                                 <div className="row g-4 p-5 pt-3 m-0">

//                                     <InputBox

//                                         label={"Center name"}
//                                         state={center_name}
//                                         setState={setCenter_name}
//                                     />
//                                     <InputBox label={"Address"}
//                                         state={address}
//                                         setState={setAddress}
//                                     />
//                                     <div className="col-md-3">
//                                         <CountryDropdown
//                                             state={country}
//                                             onChange={(e) => onSelectCountry(e)}
//                                             key="country"
//                                             label={"Country"}
//                                             json={Countries}
//                                             defaultvalue={"Choose Your Country..."} />

//                                     </div>
//                                     <div className="col-md-3">
//                                         <StateDropdown
//                                             state={state}
//                                             key="state"
//                                             onChange={(e) => onSelectstate(e)}
//                                             label={"State"}
//                                             json={statelist}
//                                             defaultvalue={"Choose Your State..."} />

//                                     </div>
//                                     <div className="col-md-3">
//                                         <DistrictDropdown
//                                             state={district}
//                                             key="District"
//                                             onChange={(e) => setDistrict(e.target.value)}
//                                             label={"District"}
//                                             json={districtslist}
//                                             defaultvalue={"Choose Your District..."} />

//                                     </div>
//                                     <InputBox
//                                         label={"Pin Code"}
//                                         state={pincode}
//                                         setState={setPincode}
//                                     />
//                                     <InputBox type="number"
//                                         label={"Contact Number"}
//                                         state={contact_number}
//                                         setState={setContact_number}
//                                     />



//                                     <InputBox type="text" label={"Description"}
//                                         state={description}
//                                         setState={setDescription}
//                                     />

//                                     <div className="col-md-3">
//                                         <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Images</label>
//                                         <input
//                                             onChange={(event) => {
//                                                 setImage(event.target.files);
//                                             }}
//                                             placeholder="No File"
//                                             type="file"
//                                             className="file_text ps-2 form-control"
//                                             accept=".jpg,.jpeg,.png"
//                                             multiple
//                                             required
//                                         />
//                                     </div>
//                                     <button type="button" style={{ backgroundColor: 'black', borderRadius: 5 }} className="explore-btn px-2 py-1"
//                                         onClick={() => onSavegymdetails()}
//                                     >
//                                         <span className="position-relative fs-5 w-20" >
//                                             Save
//                                         </span>
//                                     </button>
//                                 </div>

//                                 {/* gymdetails */}
//                                 {/* <GymDetails data={gymDetails} setData={setGymDetails} onSave={(data) => onSaveGymdata(data)} /> */}

//                                 <div class="row">
//                                     {/* {addnewequip?.length > 0 ? (addnewequip?.map((item, index) =>
//                                                 (
//                                                       <Equipment
//                                                             onDelete={() => onRemoveEquipment(index)}
//                                                             onSave={(data) => onSaveEquipment(data, index)}
//                                                             item={item}
//                                                       />
//                                                 ))) : ""
//                                                 } */}
//                                     <AddButton label={"+ add equipments"} onClick={() => onAddEquipments()} />

//                                     {/* Amentities */}
//                                     {/* {amenities?.length > 0 && (amenities?.map((item, index) => <Amentities
//                                                       onDelete={() => onRemoveAmenities(index)}
//                                                       onSave={(data) => onSaveAmenities(data, index)}
//                                                       item={item}
//                                                 />))} */}
//                                     <AddButton label={"+ add Amentities"} onClick={() => onAddAmenities()} />


//                                     {/* schedule */}

//                                     {/* {schedule?.length > 0 ? (schedule.map((item, index) =>
//                                                       <Schedule key={index}
//                                                             onDelete={() => onRemoveSchedule(index)}
//                                                             onSave={(data) => onSaveSchedule(data, index)}
//                                                             data={item}
//                                                       />)) : ("")} */}

//                                     {/* <AddButton label={"+ Gym Schedule"} onClick={() => onAddSchedule()} />

//                                                 <div onClick={() => onAddData()} className="mainsavebtn">
//                                                       {"Save data"}
//                                                 </div> */}
//                                 </div>



//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         </>
//     )
// }
// export default Vendor