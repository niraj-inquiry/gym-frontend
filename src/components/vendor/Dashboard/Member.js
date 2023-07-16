import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../generalfunction";

const Member = () => {

  const [data,setData] = useState([]);


  const onLoad = async() => {
   
    API.get(`orderapi/get-order`).then((res) => {
      setData(res?.data?.data);
    });
  };
  useEffect(() => {
    onLoad();
  }, []);


console.log('onData',data);

  return (
    <>
      <div className="center-list-main">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              {/* <div className="add-center-list-container">
                <button className="mb-3" onClick={() => setShowForm(!showForm)}>
                  Add Trainer
                </button>
                <div
                  className={
                    showForm
                      ? "create-center-container-show"
                      : "create-center-container-hide"
                  }
                >
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="center_type">Center Type</label>
                        <select
                          className="form-control"
                          id="center_type"
                          name="center_type"
                          value={getData.center_name}
                          required
                          onChange={(e) =>
                            handleInput(e)

                          }
                        >
                          <option>Choose Center Type</option>
                          {getCent.map((item, index) => {
                            return (
                              <option key={index} value={item.center_name}>
                                {item.center_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>


                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="center_name">Customer Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={getData.center_name}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        />
                      </div>
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={getData.email}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        />
                      </div>
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={getData.phone}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        />
                      </div>


                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="country">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={getData.value}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        >
                          <option>Choose Country</option>
                          {Country.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="state">State</label>
                        <select
                          id="state"
                          name="state"
                          value={getData.state}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        >
                          <option>Choose State</option>
                          {States.filter(
                            (item) => item.cname === getData.country
                          ).map((ev) => {
                            return ev.sname.map((itm, i) => {
                              return (
                                <option key={i} value={itm}>
                                  {itm}
                                </option>
                              );
                            });
                          })}
                        </select>
                      </div>
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="city">City/District</label>

                        <select
                          id="city"
                          name="city"
                          value={getData.city}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        >
                          <option>Choose City</option>
                          {Cities.filter(
                            (item) => item.sname === getData.state
                          ).map((itm) => {
                            return itm.cityname.map((ev, i) => {
                              return (
                                <option key={i} value={ev}>
                                  {ev}
                                </option>
                              );
                            });
                          })}
                        </select>
                      </div>
                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="pin">Pin Code</label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          value={getData.pin}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        />
                      </div>

                      <div className="col-lg-6 mb-4 ">
                        <label htmlFor="profile">Choose Profile</label>
                        <input
                          type="text"
                          id="profile"
                          name="profile"
                          value={getData.profile}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          required

                        />
                      </div>



                      <div className="col-lg-12">
                        <button type="submit" className="w-50">
                          Add Member
                        </button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div> */}

              <hr />
              <div className="center-list-table text-center">
                <table class="table table-striped table-responsive">
                  <thead>
                    <tr>

                      <th>S.No.</th>
                      <th>Mem. Name</th>
                      <th>Location</th>
                      <th>Mobile No.</th>
                      <th>Pass Status</th>
                      


                     
                    </tr>
                  </thead>
                  <tbody>
                   {data?.map((item,index) => {
                    return(
                      <tr key={index}>
                        <th>{index +1 }</th>
                        <th>{item?.userName}</th>
                        <th>{item?.userAddress}</th>
                        <th></th>
                        <th></th>
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
      {/* </div>
        </div>
      </div> */}

    </>
  )
}

export default Member