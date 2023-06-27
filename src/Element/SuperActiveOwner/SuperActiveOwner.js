import React from 'react';
import * as Images from "../../assets";

const SuperActiveOwner = ({Images}) => {
  return (
    <section className="section_heading">
    <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-6 ps-0 text-start">
                <div className='col mx-5'>
                    <div className='row fs-1 fw-bold py-3'>Collaborate with SuperActive</div>
                    <div className='row fs-3 py-3'>Creating opportunities for more people to engage in physical fitness & generating value for our fitness venue partners.</div>
                    <div className='row py-3'>
                        <a href={"#"}>
                            <button type="button" className="explore-btn rounded-pill">
                                <span className="position-relative fs-5">
                                    Get in Touch
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
            <div className="col-lg-5 col-md-5 col-sm-4 px-0">
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

export default SuperActiveOwner