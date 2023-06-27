import React, { useState } from 'react';
import { ToggleButton } from '../vendercom/AddButton';


const CommunicationForm = ({ communicationjson,onClick }) => {
    // const [onsms, setOnsms] = useState(false);
    // const [email, setEmail] = useState(false);
    // const [connect, setconnect] = useState(false);
    // const [information, setInformation] = useState(false);
    const onChange=(item,index)=>{
      
        onClick(item,index)
    }
    return (

        <div className="col g-4 m-0 " >

            <div className='row row-lg-4 row-md-4 row-sm-6 p-0 align-items-center'>

            <div className='col'>
            {communicationjson?.map((item,index)=>(
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 py-2'>
                            {item?.name}
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 py-2 text-center'>
                    <ToggleButton status={item?.status} onClick={(item,index)=>onClick(item,index)} />
                    </div>
                </div>
                ))}
            </div>
                {/* <div className='col '>
                    {json.map((item) => <div className='col fs-6 py-2'>{item.name}</div>)}

                </div>
                <div className='col'>
                    <div className='row '>
                        <div className='py-2'>
                            <ToggleButton status={onsms} onClick={() => setOnsms(!onsms)} />
                        </div>

                     
                    </div>


                </div> */}
            </div>

        </div>

    )
}

export default CommunicationForm