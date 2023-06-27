import { useCallback, useEffect, useRef, useState, memo } from "react"
import { InputBox, InputBoxcmp } from "./InputBox"
import * as Images from "../../assets";
const Equipment = ({ onDelete, onSave, data, setData }) => {
   const descriptionref = useRef();
   const equipment_brandref = useRef();
   const equipment_nameref = useRef();
   const equipment_imageref = useRef();
   const equipment_model_numberref = useRef();
   const [description, setDescription] = useState(data?.description)
   const [equipment_brand, setEquipment_brand] = useState(data?.equipment_brand)
   const [equipment_name, setEquipment_name] = useState(data?.equipment_name)
   const [equipment_image, setEquipment_image] = useState()
   const [equipment_model_number, setEquipment_model_number] = useState(data?.equipment_model_number)
   const [equp, setEqup] = useState()
   const [savestatus, setSaveStatus] = useState(false)
   let userdata = JSON.parse(localStorage.getItem("userdata"))


   // const setdata = useCallback(() => {

   //       setData(tempdata)

   //  },[]);
   //  useEffect(() => {
   //    setdata(tempdata);
   //  },[setdata]);

   const onSavedata = () => {
      let tempdata = {
         gymid: userdata?._id,
         user_id: userdata?._id,
         description: description,
         equipment_brand: equipment_brand,
         equipment_name: equipment_name,
         equipments: equipment_image,
         equipment_model_number: equipment_model_number,
      }
      // setSaveStatus(true)
      setSaveStatus(!savestatus)
      onSave(tempdata)

   }
   return (
      <div className="px-5 mt-4">
         <div className="row g-4 p-5 pt-3 m-0 add_more_box">
            <div className="col-lg-6 col-md-12 col-sm-12">
               <InputBoxcmp useRef={descriptionref} label={"About Us"} state={description} setState={setDescription} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
               <InputBoxcmp useRef={equipment_nameref} label={"Equipment Name"} state={equipment_name} setState={setEquipment_name} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
               <InputBoxcmp useRef={equipment_brandref} label={"Equipment Brand"} state={equipment_brand} setState={setEquipment_brand} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
               <InputBoxcmp useRef={equipment_model_numberref} label={"Equipment Modal Number"} state={equipment_model_number} setState={setEquipment_model_number} />
            </div>
            <div className=" col-lg-6 col-md-12">
               <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Images</label>
               <input
                  ref={equipment_imageref}
                  placeholder="No File"
                  onChange={(event) => { setEquipment_image(event.target.files[0]) }}
                  type="file"
                  className="file_text ps-2 form-control"
                  accept=".jpg,.jpeg,.png"
                  multiple
                  required
               />
            </div>
            {/* <div className="col-md-3" style={{ marginTop: 55 }}>
               <img onClick={onDelete} src={Images.ic_delete} style={{ height: 20, width: 20 }} />
            </div>
            <div className="col-md-3" style={{ marginTop: 55 }}>
               <img onClick={() => onSavedata()} src={savestatus ? Images.ic_save : Images.ic_unsave} style={{ height: 20, width: 20 }} />
            </div> */}
            <div className="d-flex col justify-content-end align-items-end">
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

export default memo(Equipment)