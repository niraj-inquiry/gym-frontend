import React from "react";
import { Header } from "../Element/Header";

import "./style.css";
import { Footer } from "../Element/Footer";
const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 mx-auto text-center">
            <div className="thank-you-container rounded p-4">
              <h1 className="mb-4">Thank you for the payment</h1>
              <div className="thank-you-item">
                <span>Order ID</span>
                <span>#12346fthfjgmkggn</span>
              </div>
              <div className="thank-you-item1">
                <div>
                  <p>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </p>
                  <p>
                    Date <br /> <span>July 7, 2023</span>{" "}
                  </p>
                </div>
                <div>
                  <p><i class="fa fa-clock-o" aria-hidden="true"></i></p>
                  <p>Time <br />  <span>11:46 AM</span> </p>
                </div>
              </div>
              <div className="thank-you-item">
                <span>Status</span>
                <span className="text-success border border-success">
                  Successful
                </span>
              </div>
              <hr />
              <div className="total-price" >
                <p>Total Amount</p>
                <p><b>$ 222</b></p>
              </div>
              <button className="done-btn" >DONE</button>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default ThankYou;
