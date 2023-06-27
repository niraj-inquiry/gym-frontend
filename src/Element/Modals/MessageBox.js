/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import GymDetailsCarousel from '../../Multipleslides/GymDetailsCarousel'
import { ImageShow } from '../ImageShow'

export const GymDetailsAllPhotos = ({ button, data, showhide, setShowhide }) => {
    return (
        <div style={{ backgroundColor: '#fff', width: '100%',zIndex:100,position:'absolute' }} className='py-5'>
            <div className=''>
                <div className=' text-start mx-auto mb-5' style={{width:900}}>
                
                    <button type="button" className=" mx-auto btn btn-secondary text-start" onClick={() => setShowhide(!showhide)}>Back to Gym Center Details</button>
                </div>
                <div className='modelwhole w-100 h-auto' style={{ }}>
                    <GymDetailsCarousel photos={data} />
                </div>

            </div>

        </div>
    )
}



export const MessageBox = ({ modaltitle, modalbody, modalbutton, onClickClose }) => {
    useEffect(() => {

    }, [])
    return (
        <div>

            <div className="modal fade show d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backgroundColor: '#808080a1' }}>
                <div className=" modal-dialog modal-dialog-centered">
                    <div className="modal-content mx-auto" style={{ width: '70%' }}>

                        <div className="modal-body" style={{ fontSize: '23px' }}>
                            {modalbody}
                        </div>
                        <div className="modal-footer p-0">

                            <button type="button" className="btn btn-primary" onClick={onClickClose}>{modalbutton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MessageBox