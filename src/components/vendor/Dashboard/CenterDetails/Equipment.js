import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Equipment = ({centerdetails}) => {
    const [equipment_name, setEquipment] = useState("");
    const [equipment_brand, setBrand] = useState("");
    const [equipment_modal_number, setModelNo] = useState("");
    const [equipment_image, setImage] = useState("");
    const [about_us, setAbout] = useState("");
    const [getCenter, setGetCenter] = useState([]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
          .patch(
            `https://gym-api-3r8c.onrender.com/v1.0/gymcenter/add-equipment/${centerdetails}`,
            {
              equipmentData: [
                {
                  about_us,
                  equipment_name,
                  equipment_brand,
                  equipment_modal_number,
                  equipment_image,
                },
              ],
            }
          )
          .then((res) => {
            console.log(res, 'edquipment data');
            toast.success("equipmentData successfully created!", {
              position: "top-center",
            });
            centerGet()
    
    
          })
          .catch((err) => {
            console.log(err, 'edquipment data erroe');
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
      },[])
      console.log('Equipment setGetCenter', getCenter);
    return (
        <div className="col-12 mb-4 border rounded p-3">
            <h2 className="mb-2">+ Add Equipments</h2>
            <form onSubmit={(e) => handleUpdate(e)}>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Equipment Name"
                            name="equipment_name"
                            value={equipment_name}
                            onChange={(e) => setEquipment(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="About Us"
                            name="about_us"
                            value={about_us}
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Equipment Brand"
                            name="equipment_brand"
                            value={equipment_brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Equipment Modal Number"
                            name="equipment_modal_number"
                            value={equipment_modal_number}
                            onChange={(e) => setModelNo(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="equipment_image"
                            value={equipment_image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-6 mb-3 text-end">
                        <button type="submit" className="center_details_btn">
                            Save Equipments
                        </button>
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col-lg-12">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>Equipment Name</th>
                                <th>Equipment Brand</th>
                                <th>Equipment Modal Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCenter?.equipmentData?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item?.equipment_name}</td>
                                        <td>{item?.equipment_brand}</td>
                                        <td>{item?.equipment_modal_number}</td>
                                        <td>Edit | Delete</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Equipment