// import React from 'react';
import React, { Component } from 'react';
import * as Images from "../assets";

const Daypasses = ({ id, dataitem }) => {

    const data = [
        {
            id: 1,
            title: 'Day Passes',
            desc: 'Take it one visit at a time. Try somewhere new or visit venues occasionally.',
            list1: 'One visit to your chosen gym',
            list2: 'Typically 10% off gym rates',
            list3: 'Valid for 30 days',
            name: 'PAY AS YOU GO',
            // img:'https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg'
        }
    ]

    return (
        <div style={{ maxHeight: '50%' }} className='my-5'>
            {data.map((item) => {
                return (
                    <div id={id} key={item.id}>
                        <div
                            style={{ backgroundColor: 'rgb(179 179 179 / 30%)' }}
                        >
                            <div className="d-flex flex-column mx-auto" style={{ width: '40%' }}>
                                <div className="mx-auto my-3" style={{}}>
                                    <svg style={{ padding: '8px', fill: '#ff5722', width: 60, height: 50, alignItems: 'center', backgroundColor: '#fff', borderRadius: 50, }} viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5179 2.38477C9.51025 2.38477 7.86721 4.02259 7.86721 6.06217C7.86721 8.10186 9.51027 9.73967 11.5179 9.73967C13.5254 9.73967 15.1685 8.10187 15.1685 6.06217C15.1685 4.02257 13.5255 2.38477 11.5179 2.38477ZM5.86721 6.06217C5.86721 2.92635 8.39737 0.384766 11.5179 0.384766C14.6384 0.384766 17.1685 2.92636 17.1685 6.06217C17.1685 9.19806 14.6384 11.7397 11.5179 11.7397C8.39736 11.7397 5.86721 9.19807 5.86721 6.06217ZM5.13412 14.5989H18.2277L20.8465 24.112L0.769531 22.6503L5.13412 14.5989ZM6.3249 16.5989L4.00389 20.8805L18.1664 21.9116L16.7039 16.5989H6.3249Z"></path>
                                    </svg>
                                </div>

                                <h1 className='fw-bold' style={{ fontSize: '50px' }}>{item.title}</h1>
                                <h4 className='m-3' style={{ lineHeight: '30px' }}>{item.desc}</h4>
                            </div>

                        </div>

                        {/* <div> */}
                        <div className='row mx-0'>
                            <div className='col col-lg-6 col-sm-12 p-0' style={{ borderRight: '5px solid #ff5722' }}>
                                <img src={Images.daypassimg} width="100%" height="100%" />

                            </div>

                            <div
                                className='col col-lg-6 col-sm-12 d-flex flex-column align-items-start justify-content-center'
                                style={{ backgroundColor: '#8080805e' }}
                            >
                                <div className='w-80 mx-auto'>
                                    <div className='d-flex align-items-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{}}>{item.list1}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list2}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list3}</h1>
                                    </div>
                                    <div className="m-3" style={{ textDecoration: 'overline', color: '' }}>
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Daypasses