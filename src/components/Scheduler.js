import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import "./style.css";

const Scheduler = ({ getPlan }) => {
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupStartTime, setPopupStartTime] = useState("");
  const [popupEndTime, setPopupEndTime] = useState("");
  const [scheduledDataArray, setScheduledDataArray] = useState([]); // Add the scheduledDataArray state
  const calendarRef = useRef(null);
  console.log("scheduledDataArray", scheduledDataArray);

  const setCalendarInitialDate = (date) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(date);
    }
  };

  const handleEventCreate = (eventInfo) => {
    const newEvent = {
      ...eventInfo.event,
      start: moment(eventInfo.event.start).toISOString(),
      end: moment(eventInfo.event.end).toISOString(),
    };

    setEvents([...events, newEvent]);

    setShowPopup(true);
    setPopupStartTime(moment(eventInfo.event.start).format("HH:mm"));
    setPopupEndTime(moment(eventInfo.event.end).format("HH:mm"));
  };

  const handleEventDelete = (eventInfo) => {
    setEvents(events.filter((event) => event.id !== eventInfo.event.id));
  };

  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    setStartDate(selectedDate);

    let newEndDate = selectedDate;
    if (getPlan === "Weekly Pass") {
      newEndDate = moment(selectedDate).add(1, "week").format("YYYY-MM-DD");
    } else if (getPlan === "Monthly Pass") {
      newEndDate = moment(selectedDate).add(1, "month").format("YYYY-MM-DD");
    }
    setEndDate(newEndDate);

    setCalendarInitialDate(selectedDate);
  };

  const isDateInRange = (date, plan) => {
    if (plan === "Day Pass") {
      return moment(date).isSame(startDate, "day");
    } else if (plan === "Weekly Pass" || plan === "Monthly Pass") {
      return moment(date).isBetween(startDate, endDate, null, "[]");
    }
  };

  const handleDateRangeSelect = (arg) => {
    if (
      !isDateInRange(arg.start, getPlan) ||
      !isDateInRange(arg.end, getPlan)
    ) {
      alert("Please select a date within the allowed date range.");
      return;
    }

    if (getPlan === "Day Pass" && events.length === 1) {
      alert("You can schedule only one appointment with a one-day pass.");
      return;
    }

    if (
      (getPlan === "Weekly Pass" || getPlan === "Monthly Pass") &&
      events.length >= 7
    ) {
      alert(
        "You can schedule only seven appointments within the allowed date range."
      );
      return;
    }

    setShowPopup(true);
    setPopupStartTime(moment(arg.start).format("HH:mm"));
    setPopupEndTime(moment(arg.endStr).format("HH:mm"));

    const selectedStartDate = moment(arg.startStr).format("YYYY-MM-DD");
    if (startDate !== selectedStartDate) {
      setStartDate(selectedStartDate);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupTitle("");
    setPopupStartTime("");
    setPopupEndTime("");
  };

  const handleSubmitPopup = (e) => {
    e.preventDefault();

    const eventData = {
      title: popupTitle,
      date: moment(endDate).format("YYYY-MM-DD"),
      startTime: popupStartTime,
      endTime: popupEndTime,
    };

    setScheduledDataArray([...scheduledDataArray, eventData]);

    // Update the local storage with the updated scheduledDataArray
    localStorage.setItem(
      "scheduleData",
      JSON.stringify([...scheduledDataArray, eventData])
    );

    // Do something with the scheduledDataArray or update it in local storage
    console.log("Scheduled Data Array:", scheduledDataArray);

    handleClosePopup();
  };

  const eventSource = {
    events: () => {
      const filteredEvents = events.filter((event) => {
        return (
          moment(event.start).isSameOrAfter(startDate) &&
          moment(event.end).isSameOrBefore(endDate)
        );
      });
      return filteredEvents;
    },
  };

  useEffect(() => {
    setCalendarInitialDate(startDate);
  }, [startDate]);

  // Function to get booked slots
  const getBookedSlots = () => {
    const bookedSlots = scheduledDataArray.map((event) => {
      return {
        title: event.title,
        start: `${event.date}T${event.startTime}`,
        end: `${event.date}T${event.endTime}`,
      };
    });
    return bookedSlots;
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-5">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Start Date:
            </span>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
        </div>
      
     
      <div className="col-lg-5">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            End Date:
          </span>
          <input
            type="date"
            className="form-control"
            id="endDate" value={endDate} readOnly
          />
        </div>
      </div>
      </div>
     

      <div className="popup-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          initialDate={startDate}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          events={[...eventSource.events(), ...getBookedSlots()]} // Merge the booked slots with events
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventDelete}
          select={handleEventCreate}
          selectAllow={handleDateRangeSelect}
          validRange={{ start: startDate, end: endDate }}
          ref={calendarRef}
        />

        {showPopup && (
          <div className="popup">
            <form onSubmit={handleSubmitPopup}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Title
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={popupTitle}
                  onChange={(e) => setPopupTitle(e.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  value={popupStartTime}
                  disabled
                  className="form-control"
                />
                <span className="input-group-text w-0"></span>
                <input
                  type="time"
                  value={popupEndTime}
                  onChange={(e) => setPopupEndTime(e.target.value)}
                  step="1800"
                  className="form-control"
                />
              </div>

              <button type="submit">Submit</button>
              <button type="button" onClick={handleClosePopup}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheduler;
