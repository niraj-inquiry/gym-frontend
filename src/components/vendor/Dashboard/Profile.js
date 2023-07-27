import React, { useState, useEffect } from 'react';
import * as Images from '../../../assets';
import { Header } from '../../../Element/Header';
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { Cities, Country, States } from './LocationData';
import { API } from '../../../generalfunction';

// const { Country, States, Cities } = require("./LocationData");

const Profile = () => {

    const navigate = useNavigate();
    const [phone, setPhone] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [district, setDistrict] = useState();
    const [address, setAddress] = useState();
    const [gender,setGender] = useState();
    const [dob,setDob] = useState();
    const vendor = JSON.parse(localStorage.getItem("vendorAuth"));
    console.log("vendoremail_id", vendor);
    

    const [data, setData] = useState([]);


    const onSubmit = async () => {



        API.patch(`/v1.0/user/update-user/${vendor?.vid}`, {
            country: country,
            contactnumber: phone,
            state: state,
            city: district,
            address: address,
            gender:gender,
            dob:dob
        }).then((res) => {

            setData(res?.data?.data);
        });
    };
    console.log("vendoremail_DATA", data);


    useEffect(() => {
        onSubmit();
    }, []);


    const handleFileInputChange = (event) => {
        // Handle the selected file here if needed
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
    };



    //    console.log("finding state",country)

    return (
        <>
            <Header />

            <div className='p-5 w-75 mx-auto mt-5'>
                <div className='row py-3  border border-start-0 border-top-0 px-3 pb-3 rounded boxshow'>
                    <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center position-relative'>

                        <img src={Images.placeholderImages} width={200} height={200} className='border rounded-pill boxshow' />

                        {/* <div className=' upload_icon_profile position-absolute'>
                            <label htmlFor="customFile" >

                                <i className="fa fa-camera fs-4"></i>
                            </label>

                            <input
                                // type="file"
                                accept="image/*"
                                className="form-control w-25"
                                id="customFile"
                                onChange={handleFileInputChange}
                                style={{ display: 'none' }}
                            />
                        </div> */}
                    </div>
                    {/* <hr /> */}
                    <div
                        className='col-lg-9 
                   
                    px-5 pb-3 rounded
                    '
                    >
                        <form className="row g-3  text-start ">
                            <h2 className='fw-bold text-center text-decoration-underline logo_color'>Vendor Details</h2>

                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Name</label>
                                <input type="text" value={vendor?.vName} className="form-control"  />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email ID</label>
                                <input type="email" className="form-control" value={vendor?.vendor} />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Phone No.</label>
                                <input type="text" className="form-control" placeholder=""
                                    value={phone || data?.contactnumber}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>


                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Address</label>
                                <input type="text" className="form-control" placeholder="" value={address || data?.address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={country || data?.country}
                                    className="form-control"
                                    onChange={(e) => setCountry(e.target.value)}
                                // required
                                >
                                    <option>Choose Country</option>
                                    {Country.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="state" className="form-label">State</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={state || data?.state}
                                    className="form-control"
                                    onChange={(e) => setState(e.target.value)}
                                // required

                                >
                                    <option>Choose State</option>
                                    {country ?
                                        States.filter(
                                            (item) => item.cname === country
                                        ).map((ev) => {
                                            return ev.sname.map((itm, i) => {
                                                return (
                                                    <option key={i} value={itm}>
                                                        {itm}
                                                    </option>
                                                );
                                            });
                                        })
                                        :
                                        <option>
                                            {data?.state}
                                        </option>
                                    }
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="district">City/District</label>

                                <select
                                    id="district"
                                    name="district"
                                    value={district || data?.city}
                                    className="form-control"
                                    onChange={(e) => setDistrict(e.target.value)}
                                // required
                                >
                                    <option>Choose City</option>
                                    {state ?
                                        Cities.filter(
                                            (item) => item.sname === state
                                        ).map((itm) => {
                                            return itm.cityname.map((ev, i) => {
                                                return (
                                                    <option key={i} value={ev}>
                                                        {ev}
                                                    </option>
                                                );
                                            });
                                        })
                                        :
                                        <option>
                                            {data?.city}
                                        </option>
                                    }
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Pin code</label>
                                <input type="text" className="form-control" value={vendor?.vpost_code} />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="state" className="form-label">Gender</label>
                                <select
                                    id="state"
                                    name="state"
                                    value={gender || data?.gender}
                                    className="form-control"
                                    onChange={(e) => setGender(e.target.value)}
                                // required

                                >
                                    <option>Choose State</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Date Of Birth</label>
                                <input type="date" className="form-control" placeholder="" 
                                value={dob || data?.dob} onChange={(e) => setDob(e.target.value)}
                                 />
                            </div>

                            <button type="button" className="explore-btn rounded-pill w-auto px-4 py-2 ms-auto"
                                //  onClick={() => navigate('/dashboard')}
                                onClick={() => onSubmit()}
                            >
                                <span className="position-relative fs-6">
                                    Save
                                </span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile