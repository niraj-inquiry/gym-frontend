import React from 'react';
import * as Images from "../../assets";

const SuperActiveListing = ({ listing,Images }) => {
    return (
        <section className="section_heading">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 ps-0 text-start">
                        <div className='col mx-auto' style={{ width: '50%' }}>
                            <div className='row fs-1 fw-bold py-3'>How it works:</div>
                            {listing.map((item) => <li className='fs-5 py-2'>
                                {item?.name}
                            </li>)}

                        </div>

                    </div>
                    <div className="col-lg-5 px-0 me-0">
                        <img
                            className="w-100 rounded"
                            src={Images}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuperActiveListing