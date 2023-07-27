import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API } from '../../../generalfunction'
const Orders = () => {
  const [getCenter, setGetCenter] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // const [img, setImg] = useState([]);
  const [modal_data, setModal_data] = useState([]);

  const centerMember = () => {
    // axios.get("http://localhost:8080/vendor/get-member").then((res) => {
    API.get(`orderapi/get-order`).then((res) => {
      setGetCenter(res.data.data);
    });
  };

  // const baseURL ="https://acme.warburttons.com/"
  // const image = async () => {
  //   const apiUrl = 'https://acme.warburttons.com/api/vendors';
  //   const token = "151|UmBb6trcncXKgfzuS4p1cutij4i00UgWm0IhuG1Y"
  //   const headers = {
  //     Authorization: `Bearer ${token}`
  //   };

  //   axios.get(apiUrl,{ headers })
  //     .then((response) => {
  //       console.log('img----',response.data.data)
  //       setImg(response.data.data); // Set the API response data to the state
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching API data:', error);
  //     });
  //   }
  useEffect(() => {
    centerMember();
    // image();
  }, []);
  // const data = getCenter?.map((item) => item?.created_date).join(' ')
  // console.log('getCenter', getCenter);

  const loggedUser = JSON.parse(localStorage.getItem('vendorAuth'))
  // vendor
  const getFilterData = getCenter.filter((item) => item?.vendorId === loggedUser?.vendor)
  console.log('getFilterData', getFilterData);

  const onOpenModal = (item) => {

    // const modal_bookingslot = JSON?.parse(modal_data?.bookingSlot);
    console.log("onOpenModal", item);
    setOpenModal(true)
    setModal_data(item)
  }

  console.log("modal_data", modal_data?.bookingSlot);



  const date = new Date(modal_data?.created_date);

  const indiaOffset = 330;
  const indiaTime = new Date(date.getTime() + indiaOffset * 60 * 1000);
  const year = indiaTime.getFullYear();
  const month = indiaTime.getMonth() + 1;
  const day = indiaTime.getDate();
  const hours = indiaTime.getHours();
  const minutes = indiaTime.getMinutes();
  const seconds = indiaTime.getSeconds();
  const indiaTimeString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  console.log('indiaTimeString1', indiaTimeString);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="center-list-table text-center position-relative">
              <table class="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Center Name</th>
                    <th>Mem. Name</th>
                    <th>Ord. Date</th>
                    <th>Ord. ID</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    {/* <th>Trnx. ID</th> */}
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilterData.length > 0 ?
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
                      console.log('indiaTimeString', indiaTimeString);
                      return (
                        <tr key={index} style={{ verticalAlign: 'middle' }}>
                          <td>{index + 1}</td>
                          <td>{item?.centerName}</td>
                          {/* <td>{item.payment ? "Paid" : "Unpaid"}</td> */}
                          <td>{item?.userName}</td>
                          <td>{indiaTimeString}</td>
                          <td>{item?.orderId}</td>
                          <td>{item?.passtype}</td>
                          <td>{item.amount}</td>
                          {/* <td>{item?.transactionId}</td> */}
                          <td>{item?.payment_status === "1" ? "Success" : "Failed"} </td>
                          <td>
                            <button style={{ verticalAlign: "middle" }} onClick={() => onOpenModal(item)}>
                              <i
                                className="fa fa-pencil-square"
                                // className="fa fa-eye"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </td>

                        </tr>
                      );
                    })
                    :
                    <div className='text-center mt-5 fw-bold'>Data not Found...</div>
                  }
                </tbody>
              </table>
            </div>
            {/* {img.map((item) => {
                console.log("logo ka print",`${baseURL}${item.logo}`)
                return(
                  <div>{item.name}
                  <img src={`${baseURL}${item.logo}`}/>
                  </div>
                )
              })} */}
            {openModal &&
              <div className='w-50 mx-auto border px-4 py-3 rounded position-absolute order_modal_box boxshow text-start'>
                <h3 className='fw-bold mt-3'>Order Details</h3>
                <hr />
                <form className="row g-3">
                  <div className="col-md-4">
                    <label for="inputEmail4" className="form-label">Center Name</label>
                    <input type="email" className="form-control" placeholder={modal_data?.centerName} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Mem. Name</label>
                    <input type="password" className="form-control" placeholder={modal_data?.userName} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Plan</label>
                    <input type="password" className="form-control" placeholder={modal_data?.passtype} readOnly />
                  </div>


                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Amount</label>
                    <input type="password" className="form-control" placeholder={modal_data?.amount} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Trnx. ID</label>
                    <input type="password" className="form-control" placeholder={modal_data?.transactionId} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Status</label>
                    <input type="password" className="form-control" placeholder={modal_data?.payment_status === "1" ? "Success" : "Failed"} readOnly />
                  </div>

                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Trainer Name</label>
                    <input type="password" className="form-control" placeholder={modal_data?.trainerName} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">User Phone no.</label>
                    <input type="password" className="form-control" placeholder={modal_data?.phone} readOnly />
                  </div>

                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Ord. Date</label>
                    <input type="password" className="form-control" placeholder={indiaTimeString} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">User Address</label>
                    <input type="password" className="form-control" placeholder={modal_data?.userAddress} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Pass Date</label>
                    <input type="password" className="form-control" placeholder={`${modal_data?.passStartDate} - ${modal_data?.passEndDate}`} readOnly />
                  </div>
                  <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Order ID</label>
                    <input type="password" className="form-control" placeholder={modal_data?.orderId} readOnly />
                  </div>

                  {JSON?.parse(modal_data?.bookingSlot).map((booking, index) => {
                    return (
                      <div key={index} className='row px-0 mx-0 mt-3'>
                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label w-100">Booking Title</label>
                          <input type="password" className="form-control" placeholder={booking?.title} readOnly />
                        </div>
                        <div className="col-md-6">
                          <label for="inputPassword4" className="form-label w-100">Booking Date & Timings</label>
                          <input type="password" className="form-control" placeholder={`${booking?.date} ${booking?.startTime} - ${booking?.endTime}`} readOnly />
                        </div>
                        {/* <div className="col-md-6">
                          <label for="inputPassword4" className="form-label">Booking Timings</label>
                          <input type="password" className="form-control" placeholder={`${booking?.startTime} - ${booking?.endTime}`} />
                        </div> */}
                      </div>
                    )
                  })}

                  <button type="button" className="explore-btn rounded-pill w-auto px-4 py-2 ms-auto" onClick={() => setOpenModal(false)}>
                    <span className="position-relative fs-6">
                      OK
                    </span>
                  </button>
                </form>
              </div>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Orders