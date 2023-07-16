import React, { useEffect } from "react";
import { Header } from "../Element/Header";
import * as Images from "../assets";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import axios from "axios";
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Revieworders = () => {
  const navigate = useNavigate();
  const UserDetails = JSON.parse(localStorage.getItem('userAuth'))
  const selectedPData = JSON.parse(localStorage.getItem('selectdat'))
  const getTrn=localStorage.getItem('trainername')
  const getBillingData=JSON.parse(localStorage.getItem('billingData'))
  console.log('getTrn',getTrn);
  const orderData = () => {
    axios.post('https://gym-api-3r8c.onrender.com/orderapi/create-order', {
      centerId: selectedPData?.center_name,
      passtype: selectedPData?.planname,
      amount: selectedPData?.rate,
      userId: UserDetails?.userId,
      vendorId: selectedPData?.created_by_userid,
      centerBanner: selectedPData?.centerBanner,
      userAddress:getBillingData?.address+'' +getBillingData?.city+'-'+getBillingData?.state+','+getBillingData?.country ,
      userName:UserDetails?.Uname,
      phone:getBillingData?.phone

    }).then((res) => {
      const orderId = res.data.data._id;
      localStorage.setItem('orderIds', orderId);

    })
  }

  const updateOrder = (response) => {
    const orderId = localStorage.getItem("orderIds"); // Retrieve the order ID from local storage or use the appropriate source

    // Make the update API call using the appropriate method (e.g., fetch, axios, etc.)
    axios.patch(`https://gym-api-3r8c.onrender.com/orderapi/update-order/${orderId}`, {
      transactionId: response.razorpay_payment_id,
      orderId: response.razorpay_order_id,
      passtype: selectedPData?.planname,
      amount: selectedPData?.rate,
      payment_status: "1",

    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response if needed
        console.log("Order update successful:", data);
      })
      .catch((error) => {
        // Handle any errors during the update API call
        console.error("Error updating order:", error);
      });
  };


  const handlePayment = () => {
    const orderIds = localStorage.getItem("orderIds")
    if (!orderIds) {
      orderData()
    }

    fetch("https://gym-api-3r8c.onrender.com/order", {
      method: "GET",
      mode: "cors",
      headers: {},
    })
      .then((res) => res.json())

      .then((res) => {
        const options = {
          key: "rzp_test_VYQEOXFEnP5Ni5",
          currency: res?.currency,
          amount: res?.amount,
          name: "SuperActive",
          description: "Test Wallet Transaction",
          image: "/favicon.png",
          order_id: res?.id,
          handler: function (response) {
            console.log("response : ", response);
            updateOrder(response);
            navigate("/thank-you");
          },

          prefill: {
            name: "Rahul",
            email: "rahul@gmail.com",
            contact: "9999999999",
          },
        };
        console.log('resp', res);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      })

      .catch((err) => {
        console.log("error : ", err);
      });
  };
  console.log('selectedPData', selectedPData);
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  return (
    <>
      <Header Logo={Images.logo} Hamburger={Images.menu} />
      <div className="px-5 py-5">
        <h1 className="text-center mb-5">Review Order</h1>
        {/* Gym Details */}
        <div className="row mx-0 px-5 ">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3 className="logo_color">Gym Details</h3>
          </div>
          <div className="col-6 text-end col-md-6 col-sm-6">
            <h3 className="fw-bold">{selectedPData?.center_name}</h3>
            {/* <h3>All Features included with plan</h3> */}
            <h3>{selectedPData?.address}</h3>
          </div>
        </div>
        <hr className="my-5" />
        {/* Plan Details */}
        <div className="row mx-0 px-5 align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="h-100 d-flex flex-column justify-content-around">
              <h3 className="logo_color mb-3">Selected Plan Details</h3>
              <div className="d-flex mb-3">
                <img src={Images.booking_pass_name} width={35} height={30} />
                <h4 className="fw-500 ms-2 mb-0 fw-bold">{selectedPData?.planname}</h4>
              </div>
              <div className="d-flex align-items-center text-center mb-3">
                <h4 className="fw-medium mb-0">
                  {" "}
                  <b> ₹ {selectedPData?.rate}/{selectedPData?.planname}</b>
                </h4>
              </div>
              <button type="button" className="btn btn-outline-success w-50">
                Change Plan
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-end col-md-6 ">
            <h3 className="logo_color">All Features included with plan</h3>
            <div className="w-75 ms-auto mt-3">
              <div className="row order-box border-0 p-0">
                <div className="col-lg-6">
                  <ul className=" col" style={{ listStyle: "none" }}>
                    <li>500 Visitors</li>
                    <li>Unlimited Projects</li>
                    <li>extended free trial</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className=" col" style={{ listStyle: "none" }}>
                    <li>500 Visitors</li>
                    <li>Unlimited Projects</li>
                    <li>extended free trial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        {/* Appointment Details */}
        <div className="row mx-0 px-5">
          <div className="col-lg-6 col-md-6">
            <h3 className="logo_color">Appointment Details </h3>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center w-25 justify-content-evenly">
                <img src={Images.Review_order_calendar} width={20} />
                <div className="ms-2">July 7, 2023</div>
              </div>
              <div className="d-flex align-items-center w-suto justify-content-between">
                <img src={Images.clock} width={20} />
                <div className="ms-3">11:46 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        {/* Trainer Details */}
        <div className="row mx-0 px-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3 className="logo_color">Trainer Details </h3>
          </div>
          <div className="col-lg-6  col-md-6  col-sm-6 ">
            <div className="d-flex justify-content-end align-items-center">
              <img src={Images.Dummy_profile} width={100} />
              <div className="ms-3">
                <h3 className="mb-0">
                  {" "}
                  <b> Instructor {getTrn}</b>
                </h3>
                <div>{selectedPData?.center_name}</div>
                <img src={Images.five_stars} width={70} />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        {/* Billing Details */}
        <div className="row mx-0 px-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3 className="logo_color">Billing Details </h3>
          </div>
          <div className="col-lg-6 col-md-6 text-end col-sm-6">
            <p> <b> Customer Name:- </b> <b> {getBillingData?.name}</b> </p>
            <p><b>Phone Number : {getBillingData?.phone}</b></p>
            <p> <b>Billing Address:-</b>
             <b>
             {getBillingData?.address}, {getBillingData?.city}-{getBillingData?.state},
              {getBillingData?.country} 
              </b>
              </p>
            
            <div className="d-flex align-items-center justify-content-end">
              <h4 className="fs-5 mb-0 ms-2">
                Amount :- <b>₹ {selectedPData?.rate}</b>{" "}
              </h4>
            </div>
          </div>
          <div className=" text-end">
            <div className="d-flex justify-content-end  ms-auto mt-3">
              <button
                type="button"
                className="btn btn-outline-success px-4 me-4"
              >
                One Time
              </button>
              <button type="button" className="btn btn-outline-danger px-4">
                Add New
              </button>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        {/* Toatl Amount To Be Paid */}
        <div className="row mx-0 px-5 my-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3 className="logo_color">Total amount to be paid </h3>
          </div>
          <div className="col-lg-6 text-end col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-end">
              <h4 className="fw-bold mb-0 ms-2">
                {" "}
                <b>₹ {selectedPData?.rate}</b>{" "}
              </h4>
            </div>
          </div>
        </div>
        {/* Submittion Buttons */}
        <div className="d-flex align-items-end justify-content-end">
          <div className="linkbutton fs-6 rounded w-auto px-5 me-2">
            <Link to="/booking_appointment"  >
              {"Go Back"}
            </Link>
          </div>
          <div className="linkbutton fs-6 rounded w-auto px-5 border me-3"
            onClick={handlePayment}
          >
            {"Proceed"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Revieworders;
