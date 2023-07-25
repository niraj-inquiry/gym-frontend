import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API } from '../../../generalfunction'
const Orders = () => {
  const [getCenter, setGetCenter] = useState([]);

  const centerMember = () => {
    // axios.get("http://localhost:8080/vendor/get-member").then((res) => {
    API.get(`orderapi/get-order`).then((res) => {
      setGetCenter(res.data.data);
    });
  };
  useEffect(() => {
    centerMember();
  }, []);
  // const data = getCenter?.map((item) => item?.created_date).join(' ')
  // console.log('getCenter', getCenter);
  
const loggedUser=JSON.parse(localStorage.getItem('vendorAuth'))
// vendor
const getFilterData=getCenter.filter((item)=>item?.vendorId===loggedUser?.vendor)
console.log('getFilterData',getFilterData);
  
  
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="center-list-table text-center">
              <table class="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Center Name</th>
                    <th>Mem. Name</th>
                    <th>Ord. Date</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Trnx. ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilterData.length> 0 ? 
                  getFilterData.map((item, index) => {
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
                    console.log('indiaTimeString',indiaTimeString);
                    return (
                      <tr key={index} style={{ verticalAlign: 'middle' }}>
                        <td>{index + 1}</td>
                        <td>{item?.centerId}</td>
                        {/* <td>{item.payment ? "Paid" : "Unpaid"}</td> */}
                        <td>{item?.userName}</td>
                        <td>{indiaTimeString}</td>
                        <td>{item?.passtype}</td>
                        <td>{item.amount}</td>
                        <td>{item?.transactionId}</td>
                        <td>{item?.payment_status === "1" ? "Success" : "Failed"} </td>
                        
                      </tr>
                    );
                  })
                :
                <div className='text-center mt-5 fw-bold'>Data not Found...</div>
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Orders