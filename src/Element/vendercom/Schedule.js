import { useState, useEffect, useCallback } from "react";
import { isEmpty } from "../../generalfunction";
import { Dropdown } from "./Dropdown";
import * as Images from "../../assets";
const Schedule = ({ onDelete, data, onSave, setData }) => {
  console.log("Schedule", data.starttime)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var currentdate = new Date();
  var currenthours = currentdate.getHours()
  var currentmin = currentdate.getMinutes()
  const [starttime, setStarttime] = useState(isEmpty(data?.starttime) ? `${currenthours}:${currentmin}` : data?.starttime)
  const [endtime, setEndTime] = useState(isEmpty(data?.endtime) ? `${currenthours}:${currentmin}` : data?.endtime)
  const [selectday, setSelectday] = useState(data?.days)
  const [savestatus, setSaveStatus] = useState(false)

  console.log(starttime,'starttime')

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


  const onSavedata = () => {
    let temdata = {
      days: selectday,
      starttime: starttime,
      endtime: endtime,
      hours: `${starttime}-${endtime}`
    }
    // setSaveStatus(true)
    setSaveStatus(!savestatus)
    onSave(temdata)
  }
  // const setdata = useCallback(() => {
  //  setData(temdata)
  // }, []);
  //  useEffect(() => {
  //    setdata();
  //  },[setdata]);

  return (
    <div className="px-0 mt-2">
      <div className="row g-4 p-5 pt-3 m-0 add_more_box justify-content-between align-items-end ">
        <div className="col-lg-4 col-md-12 col-sm-12 ">
          <Dropdown
            state={selectday}
            json={days}
            onChange={(e) => setSelectday(e.target.value)}
            defaultvalue={"Select the days"}
          />

        </div>

        <div className="col-lg-5 col-md-12 col-sm-12 d-flex ">
          <div className="px-2">
            <label htmlFor="validationDefault01" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Start Time</label>
            <input type="time" id="starttime"
              //  defaultValue={data?.starttime}
              onChange={(e) => onChange("starttime", e.target.value)}
              data-format="HH:mm" data-template="HH : mm"
              // value={isEmpty(starttime) ? starttime : data?.starttime}
              value={starttime}
              className="w-100 p-2 rounded border"
            />
          </div>
          <div className="px-2">
            <label htmlFor="validationDefault01" className="form-label" style={{ textAlign: 'left', width: '100%' }}>End Time</label>
            <input type="time" id="endtime"
              // defaultValue={data?.endtime}
              onChange={(e) => onChange("endtime", e.target.value)}
              data-format="HH:mm" data-template="HH : mm"
              value={endtime}
              className="w-100 p-2 rounded border"
            />
          </div>
        </div>


        <div className="col-lg-2 col-md-2 d-flex col justify-content-end align-items-end">
          <div className="ms-3" style={{}}>
            <img onClick={onDelete} src={Images.ic_delete} style={{ height: 20, width: 20 }} />
          </div>

          <div className="ms-3" style={{}}>
            <img onClick={() => onSavedata()} src={savestatus ? Images.ic_save : Images.ic_unsave} style={{ height: 20, width: 20 }} />
          </div>


        </div>

      </div>

    </div>

  )
}
export default Schedule