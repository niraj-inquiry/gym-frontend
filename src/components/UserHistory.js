
import React, { useEffect, useState } from "react";
import '../css/Style.css';
import { Header } from "../Element/Header";
import SideMenu from "../Element/vendercom/SideMenu";
import { TableHeading, TableBody } from "../Element/vendercom/Table";
import { Dropdown } from "../Element/vendercom/Dropdown";
import { API } from "../generalfunction";
import { isEmpty } from "../generalfunction";

const UserHistory = () => {

  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  const heading = [
    { name: "Sr. No." },
    { name: "Center Name" },
    { name: "Plan" },
    { name: "Trnx." },
    { name: "Ord. Date" },
    { name: 'Validity' },
    { name: "Amount" },
    { name: 'Status' },

  ]

  const json = ["By Success", "By Failed", "By Date"]
  // const onLoad = async () => {
  //   const userid = JSON.parse(localStorage.getItem("userdata"))?._id
  //   const memres = await API.get(`v.1.0/memberofplan/get-member-details/${userid}`)
  //   if (memres?.data?.status) {
  //     setState(memres.data.data)
  //   }

  // }

  useEffect(() => {
    // onLoad()
  }, [])

  console.log("member plan", state)
  return (

    <div className="container-fluid">
      <div className="row">

        <Header />

        <div className="col-lg-12 col-md-12 col-sm-12 px-0">

          <div className="mx-auto" style={{ width: '80%' }}>
            <div className="ms-auto my-5 " style={{ width: '20%' }}>
              <Dropdown label="Filter by" defaultvalue="Filter" className="fw-bold fs-5" json={json} />
            </div>
            <div className="d-flex flex-column justify-content-center mx-auto">
              <TableHeading heading={heading} />
              {
                isEmpty(data) ?
                  <div className="text-center mt-5">No Data</div>
                  :

                  <>
                    {data.map((item, index) => {
                      return (
                        <TableBody />
                      )
                    })}
                  </>

              }
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default UserHistory;