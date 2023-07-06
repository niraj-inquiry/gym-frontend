import React, { useState } from 'react'

const Facilities = () => {
    const [facilities, setFacilities] = useState('');
    return (
        <div className="col-12 border py-4">
            <h2>+ Add New Facilities</h2>
            <form >
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <input type="text" placeholder="Facilities Name"
                            className="form-control"
                            name="tName"
                            value={facilities}
                            onChange={(e) => setFacilities(e.target.value)}
                        />
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="center_details_btn">Add New Facilities</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Facilities
