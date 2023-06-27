
import { InputBox, InputBoxTextArea } from "./InputBox"
import Countries from '../../json/Countries.json'
import { useEffect, useState } from "react"
import { CountryDropdown, DistrictDropdown, StateDropdown } from "./Dropdown"

const GymDetails = ({ data,setData,onSave }) => {
console.log("gymdetails",data)
   const [aboutus, setAboutus] = useState(data?.aboutus)
   const [center_name, setCenter_name] = useState(data?.centerdata?.center_name)
   const [address, setAddress] = useState(data?.centerdata?.address)
   const [pincode, setPincode] = useState(data?.centerdata?.pincode)
   const [contact_number, setContact_number] = useState(data?.centerdata?.contact_number)
   const [description, setDescription] = useState(data?.centerdata?.description)
   const [country, setCountry] = useState(data?.centerdata?.country)
   const [state, setState] = useState(data?.centerdata?.state)
   const [district, setDistrict] = useState(data?.centerdata?.district)
   const [countryindex, setCountryindex] = useState()
   const [statelist, setStatelist] = useState()
   const [districtslist, setDistrictlist] = useState()
   const [image, setImage] = useState(data?.centerdata?.photos)
   const [updateimage,setUpdateimage]=useState()

   const onSelectCountry = (e) => {
      
      let countryindexvalue = Countries?.findIndex(x => x.country_name == e.target.value)

      setCountry(e.target.value)
      setCountryindex(countryindexvalue)
      setStatelist(Countries[countryindexvalue]?.states)
   }
   const onSelectstate = (e) => {
      setState(e.target.value)
      let stateindexvalue = Countries[countryindex]?.states.findIndex(x => x.state == e.target.value)

      setDistrictlist(Countries[countryindex]?.states[stateindexvalue]?.districts)

   }

const onSavedata=()=>{
   data={
      aboutus,
      center_name,
      address,
      pincode,
      contact_number,
      description,
      country,
      state,
      district,
      image
   }
   console.log("save gym details-------",data)
   setData(data)
   onSave(data)
}

   return (
      <>
         <div className="g-4 p-5 pt-3 m-0 flex">

            <InputBoxTextArea
               defaultValue={data?.aboutus}
               // type={"textarea"}
               label={"About us"}
               state={aboutus}
               setState={setAboutus}
            />
         </div>
         <div className="row g-4 p-5 pt-3 m-0">

            <InputBox
         
             label={"Center name"}
               state={center_name}
               setState={setCenter_name}
            />
            <InputBox label={"Address"}
               state={address}
               setState={setAddress}
            />
            <div className="col-md-3">
               <CountryDropdown
                  state={country}
                  onChange={(e) => onSelectCountry(e)}
                  key="country"
                  label={"Country"}
                  json={Countries}
                  defaultvalue={"Choose Your Country..."} />

            </div>
            <div className="col-md-3">
               <StateDropdown
                  state={state}
                  key="state"
                  onChange={(e) => onSelectstate(e)}
                  label={"State"}
                  json={statelist}
                  defaultvalue={"Choose Your State..."} />

            </div>
            <div className="col-md-3">
               <DistrictDropdown
                  state={district}
                  key="District"
                  onChange={(e) => setDistrict(e.target.value)}
                  label={"District"}
                  json={districtslist}
                  defaultvalue={"Choose Your District..."} />

            </div>
            <InputBox
               label={"Pin Code"}
               state={pincode}
               setState={setPincode}
            />
            <InputBox type="number"
               label={"Contact Number"}
               state={contact_number}
               setState={setContact_number}
            />



            <InputBox type="text" label={"Description"}
               state={description}
               setState={setDescription}
            />

            <div className="col-md-3">
               <label htmlFor="validationDefault02" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Images</label>
               <input
                 onChange={(event) => {setImage(event.target.files);
                 }}
                  placeholder="No File"
                  type="file"
                  className="file_text ps-2 form-control"
                  accept=".jpg,.jpeg,.png"
                  multiple
                  required
               />
            </div>
            <button type="button" style={{ backgroundColor: 'black', borderRadius: 5 }} className="explore-btn px-2 py-1"
            onClick={()=>onSavedata()}
               >
                  <span className="position-relative fs-5 w-20" >
                     Save
                  </span>
               </button>
         </div>
      </>
   )
}


export default GymDetails