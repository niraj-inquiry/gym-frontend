import React, { useState } from "react";

const Reviews = () => {

  const [ review_data,setReview_data] = useState([]);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="center-list-table text-center">
              <table class="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Customer Name</th>
                    <th>Mobile No.</th>
                    <th>Date</th>
                    <th>Rate</th>
                    <th>Review Msg</th>
                  </tr>
                </thead>
                {/* <tbody>
                 
                </tbody> */}
              </table>
              {review_data.length>0 ?
                   review_data.map((item,index) => {
                    return(
                      <tr key={index}>
                        <th>{item}</th>
                      </tr>
                    )
                  })
                  :
                  <h4 className="mt-5">No Data Found ...</h4>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
