
import React, { useEffect, useState } from "react";
import '../../../css/Style.css';
import { Header } from "../../../Element/Header";
import SideMenu from "../../../Element/vendercom/SideMenu";
import { TableHeading, TableBody } from "../../../Element/vendercom/Table";
import { Dropdown } from "../../../Element/vendercom/Dropdown";
import { API } from "../../../generalfunction";

const History = () => {

  const [state,setState]=useState([])
  const heading = [
    { name: "Date" },
    { name: "Description" },
    { name: "In" },
    { name: "Out" },
    { name: "Balance" },
  ]
 

  const json = ["Purchased Passes", "Refunded passes", "Added credit", "Fee's"]
  const onLoad = async() => {
    const userid=JSON.parse(localStorage.getItem("userdata"))?._id
    
       const memres=await API.get(`v.1.0/memberofplan/get-vendor-details/${userid}`)
    console.log("members------",memres.data)
       if(memres?.data?.status){
        setState(memres.data.data)
       }
    
  }

  useEffect(() => {
    onLoad()
  }, [])

  console.log("member plan",state)
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2 px-0 side-nav-bar">
          <SideMenu />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 px-0">
          <Header />
          <div className="mx-auto" style={{ width: '80%' }}>
            <div className="ms-auto my-5 " style={{ width: '20%' }}>
              <Dropdown label="Filter by" defaultvalue="filter" className="fw-bold fs-5" json={json} />
            </div>
            <div className="d-flex flex-column justify-content-center mx-auto">
              <TableHeading heading={heading} />
              {state?.map((item)=>
              <TableBody item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default History;