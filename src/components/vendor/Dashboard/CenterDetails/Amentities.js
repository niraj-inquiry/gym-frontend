import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Amentities = ({ centerdetails }) => {
    const [amentitiesName, setAmentitiesName] = useState("");
    const [getCenter, setGetCenter] = useState([]);
    const handleAminities = (e) => {
        e.preventDefault();
        axios
            .patch(
                `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/update-gym-by-id/${centerdetails}`,
                {
                    amentitiesData: [
                        {
                            amentitiesName,
                        },
                    ],
                }
            )
            .then((res) => {
                console.log(res);
                toast.success("amentitiesData successfully created!", {
                    position: "top-center",
                });
                centerGet()

            })
            .catch((err) => {
                console.log(err);
            });
    };
    const centerGet = () => {
        axios
            .get(
                `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/gymcenter-data/${centerdetails}`
            )
            .then((res) => {
                setGetCenter(res.data?.message);
            });
    };
    useEffect(() => {
        centerGet();
    }, [])
    return (
        <div className="col-12 border  py-4">
            <h2>+ Add Amentities</h2>
            <form onSubmit={(e) => handleAminities(e)}>
                <div className="row">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            placeholder="Add Aminities"
                            className="form-control"
                            value={amentitiesName}
                            onChange={(e) => setAmentitiesName(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 text-end" >
                        <button type="submit" className="center_details_btn">
                            Add Aminities
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-responsive"  >
                        <thead>
                            <tr>
                                <th>Aminities Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCenter?.amentitiesData?.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{item?.amentitiesName}</td>
                                        <td>Edit | Delete</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Amentities