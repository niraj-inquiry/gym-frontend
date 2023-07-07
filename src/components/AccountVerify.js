import React from 'react'
import { Header } from '../Element/Header'
import { Footer } from '../Element/Footer'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css"
const AccountVerify = () => {
    const {verificationtocken}=useParams()
    // toast.success("Your Account successfully Verified!", {
    //     position: "top-center",
    // });
  return (
    <>
     <Header/>
       {/* <h1>{verificationtocken}</h1> */}
       <div className="container">
        <div className="row">
            <div className="col-lg-5 mx-auto">
              
                <div className="verify-container">
                    <h1 className='text-center mb-5' >Verify Your Account</h1>
                   <button>Verify Your Account</button>
                </div>
            </div>
        </div>
       </div>
       <ToastContainer/>
     <Footer/>
    </>
  )
}

export default AccountVerify