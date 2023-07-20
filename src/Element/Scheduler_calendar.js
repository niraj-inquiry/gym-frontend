import React, { useState, useEffect } from "react";
import Scheduler, { View, Scrolling, Resource } from "devextreme-react/scheduler";
import { resources, generateAppointments } from '../json/data';





function Scheduler_calendar(props) {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const selectedPData = JSON.parse(localStorage.getItem("selectdat"));
  const getPlan = selectedPData?.planname;
  useEffect(() => {
    const calculateEndDate = () => {
      if (getPlan === "Day Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 0);
        return nextDate.toISOString().split("T")[0];
      } else if (getPlan === "Weekly Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 7);
        return nextDate.toISOString().split("T")[0];
      } else if (getPlan === "Monthly Pass" && startDate) {
        const nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 30);
        return nextDate.toISOString().split("T")[0];
      } else {
        // For other plans or empty startDate, return an empty string or handle accordingly
        return "";
      }

    };

    const calculatedEndDate = calculateEndDate();

    setEndDate(calculatedEndDate);

  }, [startDate, getPlan]);

  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const startDayHour = 10;
  const endDayHour = 19;
  const groups = ['userId'];
  const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

  return (
    <>

      <div className="row">
        <div className="col-lg-5">
          <div class="input-group mb-3">
            <span class="input-group-text" >Start Time</span>
            <input type="date" value={startDate} 
             onChange={(e)=>setStartDate(e.target.value)}
            class="form-control" />
          </div>
        </div>
      </div>
      <Scheduler
        currentView="month"

        dataSource={appointments}
        startDayHour={startDayHour}
        endDayHour={endDayHour}

        groups={groups}
        className='boxshow w-100'
      >

        <View type="month" startDayHour={10} endDayHour={19} />

      </Scheduler>
    </>
  );
}

export default Scheduler_calendar;