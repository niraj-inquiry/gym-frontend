
import React, { useEffect, useState, useMemo } from "react";
import SideMenu from "../../Element/vendercom/SideMenu";
import { Header } from "../../Element/Header";
import Card_passes from "../card/Card_passes";
import PlanModal from "../card/PlanModal";
import { API } from "../../generalfunction";
import useGeoLocation from '../../geolocation'

const Plan = () => {
    const [showhidemodal, setShowhidemodal] = useState(false)
    const [card, setCard] = useState([]);
    const [onselectplan, setOnselectplan] = useState()
    const [vendorplan, setVendorplan] = useState([])
    var userdata = JSON.parse(localStorage.getItem('userdata'))
    const location = useGeoLocation();
    // console.log("location?.country",location?.country)
    // const onLoad = () => {
    //     API.get(`v1.0/plan/get-vendor-plan/${location?.country}/${userdata?._id}`).then(res => {

    //         if (res.data.status) {
    //             setCard(res.data.data);
    //         }
    //         else {
    //             // alert(res);
    //         }
    //     })
    //     API.get(`v1.0/plan/get-vendor-all-plan-by-user/${userdata?._id}`).then(res => {
    //         if (res.data.status) {
    //             setVendorplan(res.data.data);
    //         }
    //         else {
    //             // alert(res);
    //         }
    //     })
    // };
    const onLoad = async () => {
        API.get(`v1.0/plan/get-all-plan`)
            .then(res => {

                if (res?.data?.status) {
                    setCard(res?.data?.data);
                }

            })
    }
    const OnEditPlan = (item) => {

        setShowhidemodal(!showhidemodal)
        setOnselectplan(item)
    }

    // useMemo(()=>onLoad()) 
    useEffect(() => {
        onLoad()
    }, []);


    return (
        <>
            <>
                <div className="container-fluid px-0">
                    
                    <div className="">
                        {/* <div className="row mx-0 element"></div> */}
                        {/* <div className="col-lg-2 px-0 side-nav-bar">
                            <SideMenu />
                        </div> */}
                        <div className="">
                            {/* <div className="col-lg-10 px-0"> */}
                            {/* <Header /> */}
                            <div className="row mx-0" style={{}}>
                                {card?.map((item, index) => (
                                    <Card_passes data={item} onEditplan={() => OnEditPlan(item)} />
                                ))}
                            </div>

                            {/* {vendorplan?.length > 0 && (<div className="row mx-0 px-3 pt-5">
                                <div className="col-lg-12 col-md-12">
                                    <h3><b> {"My Plans"}</b></h3>
                                </div>
                            </div>
                            )} */}
                            {/* <div className="row mx-0" style={{}}>

                                {vendorplan?.map((item, index) => (
                                    <Card_passes data={item} onEditplan={() => OnEditPlan(item)} />
                                ))}
                            </div> */}
                            {/* <button type="button" className="createplan fw-bold fs-5 px-3 py-2 m-5 rounded-pill border-0" 
                            onClick={()=>setShowhidemodal(true)}
                            >
                                <i className="bi bi-plus-lg me-2"></i>
                                Create Plan
                            </button> */}
                            {/* <PlanModal data={onselectplan} modalstate={showhidemodal} onClose={() => setShowhidemodal(!showhidemodal)} /> */}
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
export default Plan;