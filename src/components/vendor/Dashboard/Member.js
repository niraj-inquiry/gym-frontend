import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../generalfunction";

const Member = () => {
  const { CenterType, Country, States, Cities } = require("./LocationData");
  const [showForm, setShowForm] = useState(false);
  const [getData, setGetData] = useState({
    profile: "",
    name: "",
    pin: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    center_type: "",
  });
  const [getCenter, setGetCenter] = useState([]);
  const [getCent, setGetCent] = useState([])
  console.log(getData.country);
  const handleInput = (e) => {
    setGetData({ ...getData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    centerMember();

    // axios.post("https://gymbackend-y3cb.onrender.com/vendor/create-member", getData)
    API.post(`/vendor/create-member`, getData)
      .then((res) => {
        console.log('member post api',res);
        centerMember();
        toast.success("Member successfully created!", {
          position: "top-center",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.success("Center Creation Failed!", {
          position: "top-center",
        });
      });
  }
  const centerGet = () => {
    // axios.get("https://gymbackend-y3cb.onrender.com/v1.0/gymcenter/gym-all-data")
    API.get(`v1.0/gymcenter/gym-all-data`)
    .then((res) => {
      setGetCent(res.data.data);
    });
  };
  const centerMember = () => {
    // axios.get("https://gymbackend-y3cb.onrender.com/vendor/get-member")
    API.get(`vendor/get-member`)
    .then((res) => {
      setGetCenter(res.data.data);
    });
  };
  const onRemoveItem = (index, item) => {
    console.log('onRemoveItem', index, item)
    let temp = [...item];
    // let res = temp.filter((v, i) => i !== index);
    // setAddnewequip(res);
  };
  useEffect(() => {
    centerMember();
    centerGet();
  }, []);


  console.log(getCent);
  return (
    <>
      <div className="center-list-main">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div className="add-center-list-container">
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
              </div>

              <hr />
              <div className="center-list-table text-center">
                <table class="table table-striped table-responsive">
                  <thead>
                    <tr>

                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getCenter.map((item, index) => {
                      return (
                        <tr key={index} style={{ verticalAlign: 'middle' }}>
                          <td>{index + 1}</td>
                          <td>{item?.center_type}</td>
                          <td>{item?.email}</td>
                          <td>{item?.phone}</td>
                          <td>{item?.country}</td>


                          {/* <td>
                            <span onClick={() => onRemoveItem(index,item)}>
                              Edit
                            </span>
                            |
                            <span>Delete</span> | <span>Add Feature</span></td>
                        </tr> */}
                          <td>
                            <button style={{ verticalAlign: 'middle' }}>

                              <i class="fa fa-pencil-square" aria-hidden="true"></i>
                            </button>
                            |
                            <button style={{ verticalAlign: 'middle' }}>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            {/* | */}
                            {/* <button style={{ verticalAlign: 'middle' }}>
                              <i class="fa fa-plus-square" aria-hidden="true"></i>
                            </button> */}

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
      </div>
      {/* </div>
        </div>
      </div> */}

    </>
  )
}

export default Member