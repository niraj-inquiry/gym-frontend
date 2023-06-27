import React, { useEffect, useMemo, useState } from 'react'
import { InputBoxReadOnlycmp, InputBoxcmp } from '../../Element/vendercom/InputBox'
import { CountryDropdown, Dropdown } from '../../Element/vendercom/Dropdown'
import { API, isEmpty } from '../../generalfunction'
import Countries from '../../json/Countries.json'

const PlanModal = ({ data, modalstate, onClose }) => {

    const duration = ["days", "month", "weeks", "years"]
    const passtype = ["Normal", "Popular", "Exclusive"]

    const [planname, setPlanname] = useState()
    const [aboutus, setAboutus] = useState(data?.aboutus)
    const [rate, setRate] = useState(data?.rate)
    const [discount, setDiscount] = useState(data?.discount)
    const [dur, setDur] = useState(data?.duration)
    const [passtypestate, setPasstypestate] = useState(data?.passtype)
    const [country, setCountry] = useState(data?.country)
    const [image, setImage] = useState()

    var userid = JSON.parse(localStorage.getItem('userdata'))?._id
    var usertype = JSON.parse(localStorage.getItem('userdata'))?.user_type
    console.log("modal", data)


    const onAddNewPlan = () => {

        const formdata = new FormData()
        // if(!isEmpty(planname)
        // &&!isEmpty(aboutus)&&!isEmpty(rate)
        // &&!isEmpty(discount)&&!isEmpty(dur)&&!isEmpty(country)
        // &&!isEmpty(passtypestate)&&!isEmpty(image)
        // )
        // {
        formdata.append("createdbyuserid", userid);
        formdata.append("planname", isEmpty(planname) ? data?.planname : planname);
        formdata.append("aboutus", isEmpty(aboutus) ? data?.aboutus : aboutus);
        formdata.append("rate", isEmpty(rate) ? data?.rate : rate);
        formdata.append("discount", isEmpty(discount) ? data?.discount : discount);
        formdata.append("duration", data?.duration);
        formdata.append("country", isEmpty(country) ? data?.country : country);
        formdata.append("passtype", isEmpty(passtypestate) ? data?.passtype : passtypestate);
        formdata.append("image", isEmpty(image) ? data?.photo : image);
        formdata.append("usertype", usertype);

        API.post('v1.0/plan/add-New-plan', formdata).then(res => {

            if (res.data.status) {
                alert(res.data.message)
                setPlanname("")
                setAboutus("")
                setRate("")
                setDiscount("")
                setDur("")
                setPasstypestate("")
                setCountry("")
                setImage("")
                onClose()
            }
            else {
                alert(res.data.message)
            }
        })
        // }
        // else{
        //     alert("Please Enter your missing field")
        // }
    }


    return (
        <div style={{ display: modalstate ? 'flex' : 'none' }} className="modal fade show" id="exampleModal" tabindex="-1" aria-hidden="false">
            <div className="modal-dialog" style={{ width: 900 }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Plan</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <InputBoxReadOnlycmp

                            defaultValue={data?.planname}
                            label="Plan Name" type="text"
                            placeholder={data?.planname}
                            className="mb-2"
                            state={planname}
                            setState={setPlanname}
                        />
                        <InputBoxcmp
                            state={aboutus}
                            setState={setAboutus}
                            label="About Us" type="text"
                            defaultValue={data?.aboutus}
                            placeholder={data?.aboutus ? data?.aboutus : "About us"}
                            className="mb-2" />
                        <InputBoxcmp
                            state={rate}
                            setState={setRate}

                            label="Rate" type="text"
                            placeholder={data?.rate ? data?.rate : "Enter your rate per unit"}
                            className="mb-2" />

                        <CountryDropdown label="Country"
                            json={Countries}
                            state={country}
                            onChange={(e) => setCountry(e.target.value)}
                            defaultvalue={data?.country ? data?.country : "Choose Your Country"}
                            className="mb-2" />

                        <InputBoxcmp
                            state={discount}
                            setState={setDiscount}
                            label="Discount" type="text"
                            placeholder={data?.discount ? data?.discount : "Enter your discount"} className="mb-2" />

                        {/* <Dropdown label="Duration" 
                        defaultvalue={data?.duration?data?.duration:"Choose Your Duration"}
                        json={duration}
                        state={dur}
                        onChange={(e)=>setDur(e.target.value)}
                         className="mb-2"/> */}

                        <Dropdown
                            state={passtypestate}
                            onChange={(e) => setPasstypestate(e.target.value)}
                            label="Pass type"
                            defaultvalue={data?.passtype ? data?.passtype : "Choose Your Passtype"}
                            json={passtype}
                            className="mb-2" />
                        <input onChange={(event) => {
                            setImage(event.target.files[0]);
                        }}
                            type="file"
                            accept="image/*"
                            placeholder="Please Enter your image"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={() => onAddNewPlan()} className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanModal