import React from 'react'

const DayCalendar = () => {
    return (
        <div>
            <div className="container">
                <h1 className="mt-5 text-center">Event Scheduling</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="event-date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="event-date" name="event-date" required/>
                            </div>
                            <div className="mb-3">
                                <label for="event-time" className="form-label">Time</label>
                                <input type="time" className="form-control" id="event-time" name="event-time" required/>
                            </div>
                            <div className="mb-3">
                                <label for="event-details" className="form-label">Event Details</label>
                                <textarea className="form-control" id="event-details" name="event-details" rows="4" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Schedule Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayCalendar