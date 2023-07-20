import React, { useState, useEffect, useMemo } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


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
    // allDay: true,
    // start: new Date(2023, 6, 0),
    // end: new Date(2023, 6, 0),
    start: moment("2023-07-07T10:00:00").toDate(),
    end: moment("2023-07-07T11:00:00").toDate(),
  },
  {
    title: "Vacation",
    // start: new Date(2023, 6, 7),
    // end: new Date(2023, 6, 10),
    // end: new Date(new Date().setHours(new Date().getHours() + 1)),
    start: moment("2023-07-09T10:00:00").toDate(),
    end: moment("2023-07-09T11:00:00").toDate(),
  },
  {
    title: "Conference",
    // start: new Date(2023, 6, 20),
    // end: new Date(2023, 6, 23),
    start: moment("2023-07-21T15:00:00").toDate(),
    end: moment("2023-07-21T16:00:00").toDate(),
  },
];

function Scheduler_calendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
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

  const { defaultDate, formats, views } = useMemo(
    () => ({
      defaultDate: new Date(),
      formats: {
        agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
          localizer.format(start, 'hh:mm A', culture) +
          ' - ' +
          localizer.format(end, 'hh:mm A', culture),
      },
      views: ["week"],
    }),
    []
  )

  const scheduler = localStorage.setItem("newEvent", JSON.stringify(newEvent));
  console.log('newEvent', scheduler);
  return (
    <div className="">
      
      <div className="w-100 row my-4">
       
          <div className="col-lg-3">
          <input
            type="text"
            placeholder="Add Title"
            style={{}}
            value={newEvent?.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="rounded px-3 py-1 border-bottom border-0 w-100"
          />
          </div>
         <div className="col-lg-3">
         <DatePicker
            type="datetime-local"
            placeholderText="Start Date"
            style={{}}
            selected={newEvent?.start}

            onChange={(start) => setNewEvent({ ...newEvent, start })}
            className="rounded px-3 py-1 border-0 col-lg-3 col-md-6 col-sm-12 mb-3 w-100 border-bottom "

          />
         </div>
         <div className="col-lg-3">
         <DatePicker placeholderText="End
                 Date" selected={newEvent?.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
            className="rounded px-3 py-1 border-0 col-lg-3 col-md-6 col-sm-12 mb-3 w-100 border-bottom"
          />
         </div>
      
         
       
          
       
        <button style={{}} onClick={handleAddEvent} className=" mb-3 col-lg-3 col-md-6 col-sm-12 px-3 py-1 booking_box_button border-0 rounded-pill">
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
        views={["month"]}
        min={moment("2023-07-07T09:00:00")}
        max={moment("2023-07-07T18:00:00")}
        defaultDate={defaultDate}


        formats={formats}


      />
    </div>
  );
}

export default Scheduler_calendar;
