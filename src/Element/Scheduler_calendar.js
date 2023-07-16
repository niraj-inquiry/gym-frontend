import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 6, 0),
    end: new Date(2023, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 6, 20),
    end: new Date(2023, 6, 23),
  },
];

function Scheduler_calendar(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
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
  function handleAddEvent() {

    for (let i = 0; i < allEvents?.length; i++) {

      const d1 = new Date(allEvents[i]?.start);
      const d2 = new Date(newEvent?.start);
      const d3 = new Date(allEvents[i]?.end);
      const d4 = new Date(newEvent?.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

      if (
        ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
          (d4 <= d3))
      ) {
        alert("CLASH");
        break;
      }

    }


    setAllEvents([...allEvents, newEvent]);
  }
  
  const scheduler = localStorage.setItem("newEvent", JSON.stringify(newEvent));
  console.log('newEvent', scheduler);
  return (
    <div className="">
      {/* <h1>Calendar</h1>
            <h2>Add New Event</h2> */}
      <div className="w-100 d-flex justify-content-around align-items-baseline my-4">
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent?.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="rounded px-3 py-1 border-bottom border-0"
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent?.start}
          // selected={newEvent.start || startDate}
          // value={newEvent.start || startDate}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          className="rounded px-3 py-1 border-bottom border-0"
        // onChange={(e,start) => setStartDate(e.target.value) || setNewEvent({ ...newEvent, start })}
        />
        <DatePicker placeholderText="End
                 Date" selected={newEvent?.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
          className="rounded px-3 py-1 border-bottom border-0"
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent} className="px-3 py-1 booking_box_button border-0 rounded-pill">
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        // defaultView="month"
        
        // views={['month']} 
      />
    </div>
  );
}

export default Scheduler_calendar;