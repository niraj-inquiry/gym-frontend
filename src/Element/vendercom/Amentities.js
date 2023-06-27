import { useCallback, useEffect, useState } from "react"
import { InputBoxcmp } from "./InputBox"
import * as Images from "../../assets";

const Amentities = ({ onDelete, onSave, item, setData }) => {
   const [data, setdata] = useState(item)
   const [savestatus, setSaveStatus] = useState(false)
   const onSavedata = () => {
      // setSaveStatus(true)
      setSaveStatus(!savestatus)
      onSave(data)
   }
   //  const onsetdata = useCallback(() => {
   //    console.log("admind",data)
   // let tempdata=data
   //     setData(tempdata)
   //   }, []);
   //   useEffect(() => {
   // setData(data)
   //   });


   return (
      <div className="px-0 mt-4">
         <div className="row g-4 p-5 pt-3 m-0 add_more_box justify-content-end align-items-end">
            <div className="col-lg-6 col-md-12">
               <InputBoxcmp label={"Add Amentities"}
                  state={data}
                  setState={setdata}
                  placeholder="Amenities"
               />

            </div>
            <div className="d-flex col justify-content-end align-items-end" style={{}}>
               <div className="ms-3" style={{}}>
                  <img onClick={onDelete} src={Images.ic_delete} style={{ height: 20, width: 20 }} />
               </div>
               <div className="ms-3" style={{}}>
                  <img onClick={() => { onSavedata() }} src={savestatus ? Images.ic_save : Images.ic_unsave} style={{ height: 20, width: 20, marginLeft: 20 }} />
               </div>
               {/* 
               <button type="button" style={{ backgroundColor: 'black', borderRadius: 5 }} className="explore-btn px-2 py-1"
                  onClick={onDelete}
               >
                  <span className="position-relative fs-5 w-20" >
                     Delete
                  </span>
               </button> */}
            </div>
            {/* <div className="col-md-3" style={{ marginTop: 55 }}>

               <button type="button" style={{ backgroundColor: 'black', borderRadius: 5 }} className="explore-btn px-2 py-1"
                  onClick={() => onSavedata()}
               >
                  <span className="position-relative fs-5 w-20" >
                     Save
                  </span>
               </button>
            </div> */}
            {/* <div className="col-md-2 mt-5">
          <button type="button" style={{backgroundColor:'black'}} className="explore-btn px-2 py-1" 
        onClick={onDelete}
          >
                <span className="position-relative fs-5" onClick={onDelete}>
                      Delete
                </span>
          </button>
       </div> */}
         </div>

      </div>
   )
}

export default Amentities
