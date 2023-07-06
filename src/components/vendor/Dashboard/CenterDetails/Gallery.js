import React, { useState } from 'react'

const Gallery = () => {
    const [multi_images, setMulti_images] = useState('')
    return (
        <div className="col-12 border py-4">
            <h2>+ Add Gallery</h2>
            <form >
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <input
                            type="file"
                            placeholder="Add Mulitple Images"
                            className="form-control"
                            name="tName"
                            value={multi_images}
                            onChange={(e) => setMulti_images(e.target.value)}
                            multiple
                        />
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="center_details_btn">Add New Multiple Images</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Gallery