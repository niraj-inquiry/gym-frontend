import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../Element/Header";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import axios from "axios";
import "./style.css";
const PassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [passData, setPassData] = useState([]);
  const [getCenterD, setGetCenterD] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTrainerData, setFilteredTrainerData] = useState([]);
  const orderData = () => {
    axios
      .get(`https://gym-api-3r8c.onrender.com/orderapi/get-order/${id}`)
      .then((res) => {
        setPassData(res.data.data);
      });
  };
  const cid = passData.centerId;

  let bookingSlot; // Declare the variable outside the block

  if (
    passData.bookingSlot &&
    typeof passData.bookingSlot === "string" &&
    passData.bookingSlot.trim() !== ""
  ) {
    try {
      // Parse the JSON string into an array of objects and assign it to bookingSlot
      bookingSlot = JSON.parse(passData.bookingSlot);
      console.log(bookingSlot);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    console.error("passData.bookingSlot is not a valid JSON string.");
  }

  useEffect(() => {
    orderData();
    // const bookingSlot =JSON.parse(passData.bookingSlot);
    // console.log("passData", bookingSlot);

    // centerData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-gym-by-id/${cid}`
        );
        const data = response.data.data;
        setGetCenterD(data);

        // Filter the trainer data based on passData.trainerName
        const filteredData =
          data?.newTrainerData?.filter(
            (item) => item.tName === passData.trainerName
          ) || [];
        setFilteredTrainerData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false after data is fetched
      }
    };

    fetchData();
  }, [cid]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="item1">
              <div className="d-flex pass-align ">
                <img src="/assets/pass.png" alt="" />
                <h3>
                  {" "}
                  <b> {passData.passtype}</b> <br />$ {passData.amount}/(
                  {passData && passData.passtype
                    ? passData.passtype.replace("Pass", "")
                    : ""}
                  )
                </h3>
              </div>
              <div>
                Pass Status :{" "}
                <span className="bg-success p-2 text-white rounded fw-bold ">
                  Active
                </span>
              </div>
            </div>
            <hr />
            <div className="item1">
              <div>
                <h3>
                  {" "}
                  <b> Center Name :- {passData.centerName}</b>
                </h3>
                <p>
                  <b>Address:- {passData.userAddress}</b>
                </p>
              </div>
              <div>
                <p>
                  <b>Contact Person:- {passData.trainerName}</b>
                </p>
                <p>
                  <b>Contact Number:- +91 9507715399</b>
                </p>
              </div>
            </div>
            <hr />
            <div>
              <h3>
                Trainer Name:-{" "}
                <b> {passData.trainerName} (Trainer Schedule) </b>
              </h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Day Name</th>
                    <th>Opening Time</th>
                    <th>Closing Time</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan="3">Data Loading...</td>
                    </tr>
                  ) : filteredTrainerData.length > 0 ? (
                    filteredTrainerData.map((items, index) =>
                      items.tDay.map((it, index) => (
                        <tr key={index}>
                          <td>{it.day}</td>
                          <td>{it.startTime} AM</td>
                          <td>{it.endTime} PM</td>
                        </tr>
                      ))
                    )
                  ) : (
                    <tr>
                      <td colSpan="3">
                        No data available for the selected trainer.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <hr />
            <div>
              <h3>
                {" "}
                <b> My Booking Slot</b>
              </h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingSlot?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.startTime}</td>
                        <td>{item.endTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <hr />
            <div className="pass-btn-d">
              <button>GO BACK</button>
              <button disabled>CANCEL PASS</button>
            </div>
          </div>
        </div>
      </div>
      <Multiplesection_footer />
    </>
  );
};

export default PassDetails;
