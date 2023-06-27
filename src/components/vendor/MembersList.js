

import { useState } from "react";
import { Header } from "../../Element/Header";
import AddCenters from "../../Element/Modals/AddCenters";
import SideMenu from "../../Element/vendercom/SideMenu";
import { ShowList } from "../../Element/ShowList";


const MembersList=()=>{
    const [showhide,setShowhide]=useState(false)
    const heading = [
        { name: "User Name" },
        { name: "Location" },
        { name: "Phone No." },
        { name: "Email" },
        {name:"Actions"}
    ]

    return(
        <div className="container-fluid px-0">
        <div className="row mx-0 element">
            <div className="col-lg-2 px-0 side-nav-bar">
                <SideMenu />
            </div>
            <div className="col-lg-10 p-0">
                <Header />
                <div className='row py-5 mx-0'>
                  
                    <div className="col-lg-10 col-md-10 col-sm-10 p-0 mx-auto">
                    <ShowList heading={heading} />
                    </div>
                </div>
            </div>

        </div>
   
    </div>
    )
}

export default MembersList;