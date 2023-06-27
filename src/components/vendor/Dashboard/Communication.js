
import React, { useState } from "react";
import CommunicationForm from '../../../Element/Modals/CommunicationForm';

const Communication = () => {
  const json = [
    { name: 'SMS', status: false }, { name: 'Email', status: false }, { name: 'Telephone', status: false }
  ]
  const [communicationjson, setCommunicationjson] = useState(json)

  return (
    <>
      <div className="container py-4 element">
        <div className="row align-items-center">
          <div className="col-6 mx-auto">
            {/* <h1>Communication</h1> */}
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='row fs-3 justify-content-center my-5 mx-0'>
                {"Communication Channel"}
              </div>
              <div className='mx-auto py-3 border align-items-center channel w-100 ps-5'>

                <CommunicationForm communicationjson={communicationjson} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Communication;
