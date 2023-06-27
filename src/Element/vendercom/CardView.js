import { NavLink, json, useNavigate } from "react-router-dom";
import ImgCmp from "../ImgCmp";
import { CardButton } from "./AddButton";
import { API, baseURL, calculateDistance, convertfirstletter, getDistanceOneToOne, googlemapapikey, isEmpty } from "../../generalfunction";
import { useEffect, useState } from "react";
import useGeoLocation from "../../geolocation";
import axios from "axios";
import * as Images from '../../assets';

const CardView = ({ vendoritem, lat, lng }) => {
    console.log("cardview------------------", vendoritem)

    const navigation = useNavigate();
    const [plan, setPlan] = useState()
    const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem('userdata')))
    const [distatnce, setDistance] = useState(0)
    const geolocation = useGeoLocation();
    const [rating, setRating] = useState(0)
    console.log('rating', vendoritem)

    const onLoad = async () => {

        let url = `v1.0/plan/get-plan/${!isEmpty(geolocation?.country) ? geolocation?.country : vendoritem?.country}/${vendoritem?._id}`
        API.get(url).then(res => {
            if (res.data.status) {

                setPlan(res.data.data?.filter(res => res.planname != 'Membership'));


            }
            else {
                console.log("vendoritem?.created_by_userid", res)
            }
        })
        //    


        const res = await API.get(`v.1.0/feedbackwithrating/get-all-feedback_centerid/${vendoritem?._id}`)
        if (res.data?.status) {
            setRating(isEmpty(res?.data?.rating) ? 0 : res?.data?.rating)
        }


        const response = await getDistanceOneToOne(vendoritem?.lat, vendoritem?.lng, lat, lng)
        setDistance(response.data?.data?.rows[0]?.elements[0]?.distance?.text)

    }


    const Mapicon = () => {

        return (
            <svg style={{ verticalAlign: 'baseline' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pin-map m-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
            </svg>
        )
    };
    useEffect(() => {

        onLoad()
    }, [])
    const onCardClick = (item) => {
        console.log('find-gym-item', item)
       
        if (!isEmpty(userdata?.user_type)) {
            switch (userdata?.user_type) {
                case "User":
                    // navigation('/revieworder', { state: { plan: item, vendor: vendoritem } })
                    // localStorage.setItem("plan item",JSON.stringify(item))
                    
                    navigation('/booking_appointment', { state: { plan: item, vendor: vendoritem } })
                    break;

                default:
                    navigation('/dashboard')
                    break;
            }
        }
        else {
            navigation('/login')
        }

    }

    return (
        <>
            <div 
             onClick={() => navigation('/gym_listing_details', { state: { centerid: vendoritem?._id } })}
            className="p-2 " style={{ backgroundColor: '#fbfbfc', border: 'none', }}>

                <div

                    className="col"
                    style={{ boxShadow: '0 0 10px 0 rgba(35,31,32,.1)', height: 450, backgroundColor: '#fff' }}
                >
                    <div onClick={() => navigation('/gym_listing_details', { state: { centerid: vendoritem?._id } })} className=" border">
                        <div className="rating px-3 py-1 rounded ms-auto position-absolute">
                            <i className="fa fa-star me-3"></i>
                            <span className="text-white">{isNaN(rating) ? .0 : rating}</span>
                        </div>
                        {/* <ImgCmp imgurl={`${baseURL}${vendoritem?.photos[0]}`} className=" mx-0" /> */}
                        <img src={Images.Aboutus} className="card-img-top gym-img" alt="..." height={250} style={{borderBottom:'5px solid #ff5722'}}/>
                    </div>
                    <div className="card border-0 m-0 p-2" style={{ height: 200 }}>

                        {/* <img src={img} className="card-img-top gym-img" alt="..." height={250} style={{borderBottom:'5px solid #ff5722'}}/> */}
                        <div className="card-body pt-1 m-1 px-0 pb-2">
                            <div style={{}} className="d-flex align-items-center pb-1">
                                <Mapicon />
                                <i style={{ fontSize: 13 }}>{distatnce}</i>

                            </div>
                            <div className='d-flex align-items-center justify-content-between'>

                                <div>
                                    <h3 className="card-title fw-bold text-decoration-none" style={{ textAlign: 'left', fontSize: 19 }}>{convertfirstletter(vendoritem?.center_name?.substr(0, 15))}</h3>
                                    <h5 className="card-title  text-decoration" style={{ textAlign: 'left', fontSize: 15, fontWeight: '500' }}>{convertfirstletter(vendoritem?.address?.substr(0, 85))}</h5>
                                </div>
                                {/* <div style={{}} className="d-flex">

                                <i style={{ fontSize: 10 }}>{distatnce}</i>
                                <Mapicon />
                            </div> */}
                            </div>
                            {/* <div className='d-flex bottom-0'>
                            {plan?.map((item, index) =>
                                <CardButton index={index} item={item} onClick={() => onCardClick(item)} />
                            )}
                        </div> */}

                        </div>
                        <div className='d-flex bottom-0'>
                            {plan?.map((item, index) =>
                                <CardButton index={index} item={item} onClick={() => onCardClick(item)} />
                            )}
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default CardView