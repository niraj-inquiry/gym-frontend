import React,{useEffect} from 'react'
import { Header } from '../Element/Header'
import { Footer } from '../Element/Footer'
import './style.css'
import { useNavigate } from 'react-router-dom';
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

const Revieworder = () => {
    const selectedPData=JSON.parse(localStorage.getItem('selectdat'))
    const navigate=useNavigate()
    const handlePayment = () => {
        fetch("https://gym-api-3r8c.onrender.com/order", {
          method: "GET",
          mode: 'cors',
          headers: {}
        })
          .then(res => res.json())
          .then(res => {
    
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
              },
              prefill: {
                name: "Rahul",
                email: "rahul@gmail.com",
                contact: "9999999999",
              },
            };
    
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
            
    
          }).then(()=>{
            navigate('/thank-you')
          })
          
          .catch(err => {
            console.log("error : ", err)
          })
    
      }
    
    
    
      useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
      }, []);

    return (
    <>
       <Header/>
       <div className="container py-5">
         <div className="row ">
            <div className="col-lg-9 mx-auto mb-4 ">
                <h2>Review your order</h2>
                
            </div>
            <div className="col-lg-9 mx-auto custom-box border p-4 rounded">
            
                <div className="row ">
                  <div className="col-lg-4">
                     <img src="/assets/gym.jpg" style={{height:"100%"}} className='img-fluid' alt="" />
                  </div>
                  <div className="col-lg-8">
                     <table className='table table-bordered table-striped' >
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Center Name</td>
                            <td>{selectedPData.center_name}</td>
                        </tr>
                        <tr>
                            <td>Pass Type</td>
                            <td>{selectedPData.planname}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{selectedPData.country?'₹':"$"} {selectedPData.rate}</td>
                        </tr>
                        <tr className='bg-success' >
                            <td>Total</td>
                            <td>{selectedPData.country?'₹':"$"}{selectedPData.rate}</td>
                        </tr>
                    </tbody>
                </table>
                  </div>
                </div>
                <div className='text-end buy-btn' >
               <button onClick={handlePayment} >Buy Now</button>
               </div>
            </div>
         </div>
       </div>
       <Footer/>
    </>
  )
}

export default Revieworder