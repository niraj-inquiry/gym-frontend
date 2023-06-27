import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { InputBox, InputBoxcmp } from "./InputBox";
import { isEmpty } from "../../generalfunction";
import { Dropdown } from "./Dropdown";
import * as Images from "../../assets";


const TrainerDetails = ({ data, onDelete, setData, onSave, vendoroption }) => {
  console.log('data trainer', data)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selecvendor, setSelectvendor] = useState(null);
  const [vendoroptions, setVendoroption] = useState(vendoroption);
  var currentdate = new Date();
  var currenthours = currentdate.getHours();
  var currentmin = currentdate.getMinutes();
  const [trainername, setTrainername] = useState(data?.trainername)
  const [image, setImage] = useState()
  const [starttime, setStarttime] = useState(
    isEmpty(data?.starttime) ? `${currenthours}:${currentmin}` : data?.starttime
  );
  const [endtime, setEndTime] = useState(
    isEmpty(data?.endtime) ? `${currenthours}:${currentmin}` : data?.endtime
  );
  const [selectday, setSelectday] = useState(data?.days);
  const [savestatus, setSaveStatus] = useState(false)

  const onChange = (name, value) => {
    switch (name) {
      case "starttime":
        setStarttime(value);
        break;
      case "endtime":
        setEndTime(value);
        break;
      default:
        break;
    }
  };


  // const setdata = useCallback(() => {
  //     data={
  //         trainername:trainername,
  //         days:selectday,
  //         starttime:starttime,
  //         endtime:endtime,
  //         hours:`${starttime}-${endtime}`,
  //         image:image
  //     }
  //     setData(data)
  //   }, []);
  //   useEffect(() => {
  //     setdata();
  //   }, [setdata]);
  const onSavedata = () => {
    // setSaveStatus(true)
    let tempdata = {
      trainername: trainername,
      days: selectday,
      starttime: starttime,
      endtime: endtime,
      hours: `${starttime}-${endtime}`,
      image: image
    }
    onSave(tempdata)
    setSaveStatus(!savestatus)
  }

  console.log("image", data)
  return (
    <div className=" mt-2">
      <div className="row g-4 p-5 m-0 add_more_box">
        <div className="row d-flex justify-content-between align-items-end px-0 mx-0">
          <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
            {/* <InputBox
              label={"Trainer Name"}
              state={trainername}
              setState={setTrainername}
              inputcss={"w-100"}
            /> */}
            <InputBoxcmp
              label={"Trainer Name"}
              state={trainername}
              setState={setTrainername}
              inputcss={"w-100"}
            />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
            <Dropdown
              label={"Select day"}
              defaultvalue={"Select day"}
              state={selectday}
              json={days}
              onChange={(e) => setSelectday(e.target.value)}
            />
          </div>


          <div className="col-lg-4 col-md-12 col-sm-12 mt-2">
            <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Images</label>
            <input
              placeholder="No File"
              onChange={(event) => { setImage(event.target.files) }}
              type="file"
              className="file_text ps-2 form-control"
              accept=".jpg,.jpeg,.png"
              multiple
              required
            />
          </div>
          {/* <div className="col-md-6 col-lg-6  mt-2 d-flex">
            <div className="pe-3">
              <label
                htmlFor="validationDefault01"
                className="form-label"
                style={{ textAlign: "left", width: "100%" }}
              >
                Start Time
              </label>
              <input
                type="time"
                className="w-100 p-2 rounded border"
                onChange={(e) => onChange("starttime", e.target.value)}
                data-format="HH:mm"
                data-template="HH : mm"
                value={starttime}
              />
            </div>
            <div className="pe-3">
              <label
                htmlFor="validationDefault01"
                className="form-label"
                style={{ textAlign: "left", width: "100%" }}
              >
                End Time
              </label>
              <input
                type="time"
                className="w-100 p-2 rounded border"
                onChange={(e) => onChange("endtime", e.target.value)}
                data-format="HH:mm"
                data-template="HH : mm"
                value={endtime}
              />
            </div>
          </div> */}
          {/* <div className="col-md-6 col-lg-6  mt-2 d-flex"> */}
          <div className="col-md-12 col-sm-12 col-lg-4 pe-3">
            <label
              htmlFor="validationDefault01"
              className="form-label"
              style={{ textAlign: "left", width: "100%" }}
            >
              Start Time
            </label>
            <input
              type="time"
              className="w-100 p-2 rounded border"
              onChange={(e) => onChange("starttime", e.target.value)}
              data-format="HH:mm"
              data-template="HH : mm"
              value={starttime}
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 pe-3">
            <label
              htmlFor="validationDefault01"
              className="form-label"
              style={{ textAlign: "left", width: "100%" }}
            >
              End Time
            </label>
            <input
              type="time"
              className="w-100 p-2 rounded border"
              onChange={(e) => onChange("endtime", e.target.value)}
              data-format="HH:mm"
              data-template="HH : mm"
              value={endtime}
            />
          </div>
          {/* </div> */}
          <div className="col-md-12 col-sm-12 col-lg-4">

            <select name="vendor"
              className='form-select'
              value={selecvendor}
              onChange={(e) => {
                if (e.target.value >= 0) {
                  setSelectvendor(e.target.value)

                }
              }}

              required
            >
              <option>
                {"Please select"}
              </option>
              {vendoroption?.map((option, index) => {
                return (<option value={index} style={{ color: "#000" }}>{option?.rolename}</option>)
              })}
            </select>
          </div>
          {/* <div className="col-md-2 d-flex col justify-content-end align-items-end" style={{}}>
            <div className="ms-3" style={{}}>
              <img onClick={onDelete} src={Images.ic_delete} style={{ height: 20, width: 20 }} />
            </div>
            <div className="ms-3" style={{}}>
              <img onClick={() => onSavedata()} src={savestatus ? Images.ic_save : Images.ic_unsave} style={{ height: 20, width: 20 }} />
            </div>
          </div> */}
        </div>
        <div className=" d-flex col justify-content-end align-items-end" style={{}}>
          <div className="ms-3" style={{}}>
            <img onClick={onDelete} src={Images.ic_delete} style={{ height: 20, width: 20 }} />
          </div>
          <div className="ms-3" style={{}}>
            <img onClick={() => onSavedata()} src={savestatus ? Images.ic_save : Images.ic_unsave} style={{ height: 20, width: 20 }} />
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
export default TrainerDetails;
