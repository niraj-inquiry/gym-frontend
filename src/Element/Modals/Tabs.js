import React from 'react'

export const Tabs = ({ json, onClick }) => {
    return (
        <div className='px-5 py-3'>
            <ul className="row nav nav-pills position-relative justify-content-end rounded-0" id="pills-tab" role="tablist" >
                {/* <div className="divider">
                                        <div className="line"></div>
                                        <div className="ortext">or</div>
                                    </div> */}
                {json.map((item, index) => (
                    <li className="col-2 w-auto " role="presentation">
                        <button onClick={() => onClick(index)} className={item?.status ? "nav-link px-3 active py-1" : "nav-link px-3 py-1"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            {item?.name}
                        </button>
                        {/* <div className='divider'></div> */}
                    </li>
                ))}

            </ul>
            {/* <div className='' style={{border:'1px solid black'}}></div> */}

            {/* <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div> */}
        </div>
    )
}
export const Vendorregistrationtabs = ({ json, onClick }) => {
    return (
        <div className='px-3 py-4 w-auto'>
            <ul className="row nav nav-pills row justify-content-end" id="pills-tab" role="tablist" >
                
                {json.map((item, index) => (
                    <li className="col-lg-3  col-md-2 col-sm-3 fs-6 " role="presentation" style={{width:'18%'}}>
                        <button onClick={() => onClick(index)} className={item?.status ? "active-tabs border-0 px-1 py-2 rounded active w-100" : "active-tabs border-0 px-1 py-2 w-100 rounded"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            {item?.name}
                        </button>
                       
                    </li>
                ))}

            </ul>
           
        </div>
    )
}

export default Tabs