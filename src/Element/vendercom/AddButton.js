// import * as Images from "../../assets";

import useGeoLocation from "../../geolocation"

export const AddButton = ({ label, onClick, icon }) => {
    return (
        <div className="add_more_btn ">
            <button type="button" className="explore-btn w-20 px-2 py-1 m-3" onClick={onClick} style={{ width: "20%" }}>
                <span className="position-relative fs-5">
                    {label}
                </span>
            </button>
        </div>
    )
}
export const CardButton = ({ item, onClick,index }) => {
   const geolocation=useGeoLocation()
    return (
        <button type="button" className="rounded cardpasses-btn w-10 px-2 m-1" onClick={onClick} style={{ width: "50%",
        backgroundColor:index===0?'white':"orangered",
        color:index===0?'orangered':"white",
         }}>
            <div className="d-flex flex-column" style={{fontSize:'12px'}}>
                <span className="position-relative">
                    {item?.planname}
                </span>
                {`${geolocation.country=='India'?'₹':'£'} ${item?.rate}.00`}
            </div>


        </button>
    )
}

export const CustomButton = ({ label, onClick, className,buttoncss }) => {
    return (
        <div className={className} onClick={onClick}>

            <span className={`position-relative fs-5 ${buttoncss}`} style={{ color: 'white', textAlign: 'center' }}>
                {label}
            </span>

        </div>
    )
}

export const ToggleButton = ({onClick,status}) => {
    return (
        <div className="switch">
            <input type="checkbox" checked={status}/>
            <span className="slider round" onClick={onClick}></span>
        </div>
    )
}

export const UserSettingAddButton = ({ label, onClick, icon }) => {
    return (
        <div className="add_more_btn">
            <button type="button" className="explore-btn w-20 px-2 py-1 m-3" onClick={onClick}>
                <span className="position-relative fs-5">
                    {label}
                </span>
            </button>
        </div>
    )
}