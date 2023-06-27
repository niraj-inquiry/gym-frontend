
import React, { useState } from 'react';
import { Header, AllPageBanner, Footer } from ".";
import '../css/Style.css';
import Multiplesection_footer from '../Element/Multiplesection_footer';
import * as Images from "../assets";
import Card_passes from './card/Card_passes';
import { HomeBanner, } from "../components";
import { NavLink } from "react-router-dom";
import { SubHomeBanner } from '../Element/HomeBanner';
import { TableHeading } from '../Element/vendercom/Table';
import { InputBoxcmp } from '../Element/vendercom/InputBox';
import { CustomButton } from '../Element/vendercom/AddButton';
import { AddButton } from '../Element/vendercom/AddButton';
import { API } from '../generalfunction';
import { useNavigate } from "react-router-dom";

const UserVoucher = () => {

    const [voucherdata, setVoucherdata] = useState();
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    const heading = [
        { name: "DATE REDEEMED" },
        { name: "CODE" },
        { name: "DESCRIPTION" },
        { name: "STATUS" },
    ]

    const onRedeemVoucher = async () => {

        const resdata = await API.get(`v.1.0/voucher/voucher-info/${voucherdata}`)
        // console.log('resdata', resdata.data.status)
        if (resdata?.data?.status === true) {
            console.log('resdata', resdata?.data?.data)
            setVoucherdata(resdata?.data?.data)
            setMessage(false)
            navigate('/revieworder',{state:{voucherdata:voucherdata}})
        }
        else {
            // alert('please enter the correct voucher code')
            setMessage(true)
        }


    }
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <section className='section_heading w-80 mx-auto commpad p-5' style={{ backgroundColor: '#d3d3d370' }}>
                <div style={{ width: '100%', margin: 'auto' }} className='text-start pb-5 '>
                    <h1>{"Manage your vouchers"}</h1>

                    <nav aria-label="breadcrumb" style={{}}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item fw-700"><NavLink to={"/home"} style={{ textDecoration: 'none', color: '#9dbed5' }}>Gyms</NavLink> </li>
                            <li className="breadcrumb-item active fw-700" aria-current="page"><NavLink to={'/account'} style={{ textDecoration: 'none', color: 'black' }}>My Account</NavLink></li>
                        </ol>
                    </nav>

                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='row my-4'>
                                <h2>{"Voucher History"}</h2>
                            </div>
                            <TableHeading heading={heading} />
                        </div>
                        <div className='col'>
                            <div className='row my-4'>
                                <h2>{"Redeem a Voucher"}</h2>
                            </div>
                            <div className='row'>
                                <InputBoxcmp
                                    placeholder={"Insert voucher code"}
                                    inputcss={"px-3 py-2"}
                                    state={JSON.stringify(voucherdata?.vouchercode)}
                                    setState={setVoucherdata}
                                />
                            </div>
                            <div className='row mx-0 my-3 w-auto justify-content-end'>
                                {/* <CustomButton label={"Redeem Voucher"} className={"voucher-btn w-auto rounded"}/> */}
                                {/* <NavLink to={'/revieworder'} className="text-decoration-none"> */}
                                <div className='voucher-btn w-auto rounded px-3 py-1' onClick={() => onRedeemVoucher()}>
                                    {"Redeem Voucher"}
                                </div>
                                {/* </NavLink> */}

                            </div>
                            {message &&
                                <div class="alert alert-danger d-flex align-items-center" role="alert">
                                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"></svg>
                                    <div>
                                        Please Enter the correct Voucher Code
                                    </div>
                                </div>}

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default UserVoucher
