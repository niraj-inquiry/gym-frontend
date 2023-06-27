import React from 'react';
import * as Images from "../../assets";
import { InputBoxcmp } from '../vendercom/InputBox';
import { DropdownCustom } from '../vendercom/Dropdown';
import { NavLink } from "react-router-dom";

const SuperactiveOwnerForm = ({ Images }) => {
    return (
        <section className="section_heading bg-light">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 ps-0 text-center">
                        <div>
                            <img
                                className="rounded"
                                src={Images}
                            />
                        </div>


                    </div>
                    {/* <div className="col-lg-1"><div className='divider col'></div></div> */}
                    {/* <div className="d-flex  col-lg-1" style={{height: '200px'}}>
                        <div className="vr"></div>
                    </div> */}
                    <div className="col-lg-6 px-0 my-5 divider">
                        <div className='col mx-auto' style={{ width: '80%' }}>
                            <div className='row fs-1 my-3'>Get in touch to list your gym</div>
                            <div className='row'>
                                <InputBoxcmp
                                    placeholder={"Your Name"}
                                    type={"text"}
                                    className={"my-2"}
                                />
                                <InputBoxcmp
                                    placeholder={"Email"}
                                    type={"email"}
                                    className={"my-2"}
                                />
                                <InputBoxcmp
                                    placeholder={"Phone"}
                                    type={"number"}
                                    className={"my-2"}
                                />

                                <InputBoxcmp
                                    placeholder={"Name of Your Gym"}
                                    type={"text"}
                                    className={"my-2"}

                                />
                                <InputBoxcmp
                                    placeholder={"Postcode of Your Gym"}
                                    type={"number"}
                                    className={"my-2"}
                                />
                                <DropdownCustom
                                    defaultvalue={"How did you hear about us ?"}
                                    className={"my-2"}
                                />
                                <NavLink to={""}>
                                    <button type="button" className="explore-btn my-2 w-100">
                                        <span className="position-relative fs-6">
                                            Send Enquiry
                                        </span>
                                    </button>
                                </NavLink>
                                <NavLink to={""} className="text-decoration-none">
                                    <div className='text-start owner-button' >
                                        Already Registered ?
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuperactiveOwnerForm