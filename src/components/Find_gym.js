import React, { useEffect, useState } from "react";
import { Header } from "../Element/Header";
import Multiplesection_footer from "../Element/Multiplesection_footer";
import axios from "axios";
import "../css/Style.css";
import { useNavigate, useParams } from "react-router-dom";


const Findgym = () => {
  const { centerparameter } = useParams();
  const navigate = useNavigate();
  const [getCenter, setGetCenter] = useState([]);
  const [getPlan, setGetPlan] = useState([]);
  const [getFilterData, setGetFilterData] = useState("");
  const [showFilterItem, setShowFilterItem] = useState(false);
  const [getCategory, setGetCategory] = useState([]);
  const [activeClasses, setActiveClasses] = useState(
    Array(getCategory.length).fill(false)
  );
  const [activeClasses1, setActiveClasses1] = useState(
    Array(getCategory.length).fill(false)
  );
  const [activeClasses2, setActiveClasses2] = useState(
    Array(getCategory.length).fill(false)
  );
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [getCateData, setGetCateData] = useState("");
  const [getCateItem, setGetCateItem] = useState([]);
  const getCenterData = () => {
    axios
      .get(
        "https://gym-api-3r8c.onrender.com/v1.0/gymcenter/get-verify-all-data"
      )
      .then((res) => {
        setGetCenter(res.data.data);
      });
  };
  const getAllPlan = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/v1.0/plan/get-all-plan")
      .then((res) => {
        setGetPlan(res.data.data);
      });
  };
  const getItemByCategory = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/api/get-centertype")
      .then((res) => {
        setGetCategory(res.data.data);
      });
  };
  const getCateItems = () => {
    axios
      .get("https://gym-api-3r8c.onrender.com/api/get-centerfeatureitem")
      .then((res) => {
        setGetCateItem(res.data.data);
      });
  };
  const handleClick = (index, value) => {
    setActiveIndex(index);
    setGetCateData(value);
  };
  const handleClickItem = (index, name) => {
    const updatedClasses = [...activeClasses];
    updatedClasses[index] = !updatedClasses[index];
    setActiveClasses(updatedClasses);
    if (selectedAmenities.includes(name)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== name));
    } else {
      setSelectedAmenities([...selectedAmenities, name]);
    }
  };
  const handleClickItem1 = (index, equipment) => {
    const updatedClasses = [...activeClasses1];
    updatedClasses[index] = !updatedClasses[index];
    setActiveClasses1(updatedClasses);

    // Check if equipment is already selected
    if (selectedEquipment.includes(equipment)) {
      // Equipment is already selected, remove it from the array
      setSelectedEquipment(
        selectedEquipment.filter((item) => item !== equipment)
      );
    } else {
      // Equipment is not selected, add it to the array
      setSelectedEquipment([...selectedEquipment, equipment]);
    }
  };
  const handleClickItem2 = (index) => {
    const updatedClasses = [...activeClasses2];
    updatedClasses[index] = !updatedClasses[index];
    setActiveClasses2(updatedClasses);
  };
  const handleNavigate = (id) => {
    localStorage.setItem("selectedId", id);
    navigate("/gym_listing_details");
  };
  console.log("center", centerparameter);

  const filteredCenters = getCenter.filter((center) => {
    const centerAddress = center.address.toLowerCase();
    const centerPincode = center.pincode.toLowerCase();
    const searchParameter = centerparameter.toLowerCase();
    return centerAddress.includes(searchParameter) || centerPincode.includes(searchParameter);
  });

  console.log("reg", filteredCenters);

  const filteredData = filteredCenters.filter(
    (filteritem) =>
      filteritem.center_name
        .toLowerCase()
        .includes(getFilterData.toLowerCase()) ||
      filteritem.address.toLowerCase().includes(getFilterData.toLowerCase()) ||
      filteritem.pincode.toLowerCase().includes(getFilterData.toLowerCase())
  );

  const categoryFilteredData = filteredData.filter((filteritem) => {
    // Check if the center type matches the selected category
    const isCategoryMatch = filteritem.centertype
      .toLowerCase()
      .includes(getCateData.toLowerCase());

    // Check if any of the selected amenities are included in the item's amenitiesData
    const isAmenityMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every((amenity) =>
        filteritem.amentitiesData.some(
          (item) => item.amentitiesName === amenity
        )
      );

    // Check if any of the selected equipment are included in the item's equipmentData
    const isEquipmentMatch =
      selectedEquipment.length === 0 ||
      selectedEquipment.every((equipment) =>
        filteritem.equipmentData.some(
          (item) => item.equipment_name === equipment
        )
      );

    // Return true if all conditions match, false otherwise
    return isCategoryMatch && isAmenityMatch && isEquipmentMatch;
  });

  console.log("selectedEquipment", selectedEquipment);
  useEffect(() => {
    getCenterData();
    getAllPlan();
    getItemByCategory();
    getCateItems();
  }, []);
  return (
    <>
      <Header />

      {/* center start */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="input-group mb-3 ">
              <input
                type="search"
                className="form-control"
                value={getFilterData}
                placeholder="Find Fitness Center In Your Location..."
                onChange={(e) => setGetFilterData(e.target.value)}
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="add-filter">
              <span onClick={() => setShowFilterItem(!showFilterItem)}>
                Filter <i class="fa fa-filter" aria-hidden="true"></i>{" "}
              </span>
              <span>
                Map <i class="fa fa-map" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div
          className={showFilterItem ? "show-filter-item" : "hide-filter-item"}
        >
          <div className="row">
            <div className="col-12 filter-item-span">
              <h2 className="px-4 pt-4">Show me</h2>
              <div className="d-flex p-4">
                {getCategory.map((item, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => handleClick(index, item.name)}
                      className={activeIndex === index ? "category-active" : ""}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
              <hr />
              <h3 className="px-4">Amenities</h3>
              <div className="d-flex p-4">
                {getCateItem
                  .filter(
                    (filtItem) => filtItem.centerFeatureId === "Amenities"
                  )
                  .map((item, index) => (
                    <span
                      key={index}
                      onClick={() => handleClickItem(index, item.name)}
                      className={`${
                        activeClasses[index] ? "category-active" : ""
                      } ${
                        selectedAmenities.includes(item.name)
                          ? "category-active"
                          : ""
                      }`}
                    >
                      {item.name.length > 0
                        ? item.name
                        : "Amenities Data Not Added"}
                    </span>
                  ))}
              </div>
              <hr />
              <h3 className="px-4">Equipment and Machines</h3>
              <div className="d-flex p-4">
                {getCateItem
                  .filter(
                    (filtItem) => filtItem.centerFeatureId === "Equipments"
                  )
                  .map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleClickItem1(index, item.name)}
                        className={
                          activeClasses1[index] ? "category-active" : ""
                        }
                      >
                        {item.name.length > 0
                          ? item.name
                          : "Equipments Data Not Added"}
                      </span>
                    );
                  })}
              </div>
              <hr />
              <h3 className="px-4">Facilities</h3>
              <div className="d-flex p-4">
                {getCateItem
                  .filter(
                    (filtItem) => filtItem.centerFeatureId === "Facilities"
                  )
                  .map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleClickItem2(index)}
                        className={
                          activeClasses2[index] ? "category-active" : ""
                        }
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          {categoryFilteredData
            .filter((filteritem) =>
              filteritem.centertype
                .toLowerCase()
                .includes(getCateData.toLowerCase())
            )
            .filter((item) => {
              if (
                selectedAmenities.length === 0 &&
                selectedEquipment.length === 0
              ) {
                return true; // No amenities or equipment selected, include all items
              } else {
                const itemAmenities = item.amentitiesData || []; // Ensure amenitiesData is an array
                const itemEquipment = item.equipmentData || []; // Ensure equipmentData is an array
                const itemAmenityNames = itemAmenities.map(
                  (amenity) => amenity.amentitiesName
                );
                const itemEquipmentNames = itemEquipment.map(
                  (equipment) => equipment.equipment_name // Use 'equipment_name' property
                );
                return (
                  selectedAmenities.every((amenity) =>
                    itemAmenityNames.includes(amenity)
                  ) &&
                  selectedEquipment.every((equipment) =>
                    itemEquipmentNames.includes(equipment)
                  )
                );
                // Check if all selected amenities and equipment are present in the item's amenity and equipment names
              }
            })
            .map((item, index) => (
              <div
                className="col-lg-4 center-card"
                key={index}
                onClick={() => handleNavigate(item._id)}
              >
                <div className="card">
                  <img
                    src="/assets/gym.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body py-4">
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> 0{" "}
                    </span>
                    <h3 className="card-title py-2">{item.center_name}</h3>
                    <p className="card-text pb-2">{item.address}</p>
                    <div className="d-flex justify-content-between plan-btn">
                      {getPlan.map((planitem, index) => (
                        <button className="rounded" key={index}>
                          {planitem.planname} <br />{" "}
                          {planitem.country === "India"
                            ? ` ₹ ${planitem.rate}`
                            : `$ ${planitem.rate}`}{" "}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* center end */}

      <Multiplesection_footer />
    </>
  );
};

export default Findgym;
