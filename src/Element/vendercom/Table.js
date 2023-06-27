// import '../../css/Style.css';
// import '../../components/card/card.css';
import * as Images from '../../../src/assets';
import moment from "moment";
import { ImageShow } from '../../Element/ImageShow'
// import { Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
export const TableHeading = ({ heading }) => {

    return (
        <div className="row mx-0 border-bottom bg-light" style={{}}>
            {heading?.map((item, index) =>
                <div key={index} className="col p-2 fw-bold fs-6">{item.name}</div>
            )}
        </div>
    )
}

export const TableBody = ({ item }) => {

    let date = moment(item?.created_date).utc().format('DD/MM/YYYY')
    let description = `${item?.planinfo[0]?.planname} for ${item?.vendorinfo[0]?.center_name}`
    return (
        <div className="row mx-0 " style={{}}>
            <div className="col border p-3 ">{date}</div>
            <div className="col border p-3 ">{description}</div>
            <div className="col border p-3 ">{item?.paymentstatus ? item.totalamount : ""}</div>
            <div className="col border p-3 ">{ }</div>
            <div className="col border p-3 ">{item?.totalamount}</div>
        </div>
    )
}

export const CustomTableBody = ({ title, subtitle, Images }) => {
    return (
        <div className="row mx-0 rounded" style={{}}>
            <div className="col p-3 ">{title}</div>
            <div className="col p-3 ">{subtitle}</div>
        </div>
    )
}

export const CustomTable = ({ name, country, photo, email, status, eye_icon, edit_icon, delete_icon, className, eye_click,edit_click,delete_click }) => {

    return (
        <div className="row rounded mx-0" >
            <div className="col p-2 ">{name}</div>
            <div className="col p-2 ">{country}</div>
            <div className="col p-2 ">{email}</div>
            <div className="col p-2 ">
                <ImageShow imageurl={photo} height={20} />
            </div>
            <div className="col p-2 ">
                {status ? "Approved" : "Unapproved"}
            </div>
            <div className="col p-2 ">
                <div className='d-flex align-items-center justify-content-evenly'>
                    <div onClick={eye_click}>
                        <img src={eye_icon} className={className} />
                    </div>
                    <div onClick={edit_click}>
                    <img src={edit_icon} className={className} />
                    </div>
                    <div onClick={delete_click} className='py-1'>
                    <img src={delete_icon} className={className} />
                    </div>
                    {/* <img src={Images.ic_eye}/>
            <img src={Images.ic_edit}/>
            <img src={Images.ic_delete}/> */}
                </div>

            </div>
        </div>
    )
}