import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Element/Header";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import axios from "axios";
import './style.css'
const PassDetails = () => {
  const { id } = useParams();
  const [passData, setPassData] = useState([]);
  const [getCenterD, setGetCenterD]=useState([])
  const orderData = () => {
    axios
      .get(`https://gym-api-3r8c.onrender.com/orderapi/get-order/${id}`)
      .then((res) => {
        setPassData(res.data.data);
      });
  };
  const cid=passData.centerId
  const centerData=()=>{
    axios.get(`https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-gym-by-id/${cid}`)
    .then((res)=>{
        setGetCenterD(res.data.data)
    })
  }
  console.log("passurl", getCenterD);
  useEffect(() => {
    orderData();
    centerData();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="item1">
              <div className="d-flex  ">
              <img src="/assets/pass.png" alt="" />
                <h3>{passData.passtype}</h3>
              </div>
              <div>
                Pass Status : <span className="bg-success p-1" >Active</span>
              </div>
            </div>
            <hr />
            <div className="item1">
                <div>
                    <h3> <b> Center Name :- {passData.centerName}</b></h3>
                    <p><b>Address:- {passData.userAddress}</b></p>
                </div>
                <div>
                    <p><b>Contact Person:-  Methew</b></p>
                    <p><b>Contact Number:- +91 9507715399</b></p>
                </div>
            </div>
            <hr />
            <div>
                 
            </div>
          </div>
        </div>
      </div>
      <Multiplesection_footer />
    </>
  );
};

export default PassDetails;
