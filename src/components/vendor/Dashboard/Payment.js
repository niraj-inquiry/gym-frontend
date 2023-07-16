import React, { useEffect, useState } from 'react'
import axios from "axios";
const Orders = () => {
  const [getCenter, setGetCenter] = useState([]);

  const centerMember = () => {
    // axios.get("http://localhost:8080/vendor/get-member").then((res) => {
    axios.get("http://10.5.51.44:8000/vendor/get-member").then((res) => {
      setGetCenter(res.data.data);
    });
  };
  useEffect(() => {
    centerMember();
  }, []);
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
                  {getCenter.map((item, index) => {
                    return (
                      <tr key={index} style={{verticalAlign:'middle'}}>
                        <td>{item.name}</td>
                        <td>{item.center_type}</td>
                        <td>{item.payment ? "Paid" : "Unpaid"}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        {/* <td>Edit | Delete </td> */}
                        <td className='d-flex justify-content-evenly align-items-center'>
                          <button style={{ verticalAlign: 'middle' }}>

                            <i class="fa fa-pencil-square" aria-hidden="true"></i>
                          </button>
                          |
                          <button  style={{ verticalAlign: 'middle' }}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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