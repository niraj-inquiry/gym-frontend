
import React, { useEffect, useState } from "react";
import '../css/Style.css';
import { Header } from "../Element/Header";
import SideMenu from "../Element/vendercom/SideMenu";
import { TableHeading, TableBody } from "../Element/vendercom/Table";
import { Dropdown } from "../Element/vendercom/Dropdown";
import { API } from "../generalfunction";

const UserHistory = () => {

  const [state,setState]=useState([])
  const heading = [
    { name: "Date" },
    { name: "Description" },
    { name: "In" },
    { name: "Out" },
    { name: "Balance" },
  ]
  const headingbody = [
    { name: '25/01/2023' },
    { name: 'Credit added' },
    { name: '5.40' },
    { name: '' },
    { name: '5.40' },
  ]

  const json = ["Purchased Passes", "Refunded passes", "Added credit", "Fee's"]
  const onLoad = async() => {
    const userid=JSON.parse(localStorage.getItem("userdata"))?._id
    const memres=await API.get(`v.1.0/memberofplan/get-member-details/${userid}`)
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
    
        <Header />
     
        <div className="col-lg-12 col-md-12 col-sm-12 px-0">
         
          <div className="mx-auto" style={{ width: '80%' }}>
            <div className="ms-auto my-5 " style={{ width: '20%' }}>
              <Dropdown label="Filter by" defaultvalue="filter" className="fw-bold fs-5" json={json} />
            </div>
            <div className="d-flex flex-column justify-content-center mx-auto">
              <TableHeading heading={heading} />
              {state?.map((item)=>
              <TableBody item={item} />
)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default UserHistory;