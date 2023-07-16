
import React, { useEffect, useState } from "react";
import '../css/Style.css';
import { Header } from "../Element/Header";
import SideMenu from "../Element/vendercom/SideMenu";
import { TableHeading, TableBody } from "../Element/vendercom/Table";
import { Dropdown } from "../Element/vendercom/Dropdown";
import { API } from "../generalfunction";
import { isEmpty } from "../generalfunction";
import axios from 'axios'
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
  const loggedData = JSON.parse(localStorage.getItem('userAuth'))
  const [passData, setPassData] = useState([])
  const orderData = () => {
    axios.get('https://gym-api-3r8c.onrender.com/orderapi/get-order')
      .then((res) => {
        setPassData(res.data.data)
      })
  }
  const filtPassData = passData.filter((item) => item.userId === loggedData.userId)
  console.log('passData', filtPassData);
  useEffect(() => {
    orderData()
  }, [])
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
              <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Center Name</th>
                    <th>Plan</th>
                    <th>Trnx.</th>
                    <th>Ord. Date</th>
                    <th>Validity</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtPassData.map((item, index) => {
                    const date = new Date(item?.created_date);

                    const indiaOffset = 330; 
                    const indiaTime = new Date(date.getTime() + indiaOffset * 60 * 1000);
                    const year = indiaTime.getFullYear();
                    const month = indiaTime.getMonth() + 1; 
                    const day = indiaTime.getDate();
                    const hours = indiaTime.getHours();
                    const minutes = indiaTime.getMinutes();
                    const seconds = indiaTime.getSeconds();
                    const indiaTimeString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                    return (
                      <tr key={index} >
                        <td>{index + 1}</td>
                        <td>{item.centerId}</td>
                        <td>{item.passtype}</td>
                        <td>{item.transactionId}</td>
                        <td>{indiaTimeString}</td>
                        <td>{item.passtype.replace('Pass', "")}</td>
                        <td> ₹ {item.amount}</td>
                        <td>{item.payment_status === "1" ? "Paid" : "Unpaid"}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default UserHistory;