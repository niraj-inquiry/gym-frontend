import React, { useState } from "react";
import { Header } from "../Element/Header";
import { Footer } from "../Element/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import axios from "axios";

const AccountVerify = () => {
  const { verificationToken } = useParams();
  const navigate=useNavigate()
  // const [token, setToken] = useState(verificationToken);
  console.log("verificationToken", verificationToken);
  const verifyAccount = async () => {
    try {
      await axios
        .patch(
          `https://gym-api-3r8c.onrender.com/v1.0/user/verify-user-by-tocken/${verificationToken}`
        )
        .then((res) => {
          console.log("patch", res);
          toast.success("Account verified successfully");
          
        }).then((res)=>{
          navigate('/login')
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to verify account");
        });
    } catch (error) {
      toast.error("Failed to verify account");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="verify-container">
              <h1 className="text-center mb-5">Verify Your Account</h1>
              <button onClick={verifyAccount}>Verify Your Account</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default AccountVerify;
