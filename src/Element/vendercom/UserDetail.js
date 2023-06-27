import { useEffect, useState } from "react"
import { InputBox } from "./InputBox"

const UserDetail = ({data,setData,onSave}) =>{
   console.log("userdata3",data)
const [first_name,setFirst_name]=useState(data?.first_name)
const [last_name,setLast_name]=useState(data?.last_name)
const [email,setEmail]=useState(data?.email)
const [post_code,setPost_code]=useState(data?.post_code)
const [description,setDescription]=useState(data?.description)
const onSavedata=()=>{
   data={
      first_name,
      last_name,
      email,
      post_code,
      description,
    
   }
   setData(data)
   onSave(data)
}

    return(
        <>
       <div className="row g-4 py-3  m-0">
          <InputBox label={"First Name"} 
          defaultValue={data?.first_name}
          state={first_name} 
          setState={setFirst_name}/>

          <InputBox label={"Last Name"} 
           defaultValue={data?.last_name}
          state={last_name}
          setState={setLast_name}
          />
          <InputBox label={"Email Id"}
          defaultValue={data?.email}
          state={email}
           setState={setEmail}/>

         <InputBox label={"Pincode"} 
          defaultValue={data?.post_code}
         state={post_code}
         setState={setPost_code}
         />
       
          <InputBox label={"Description"} 
          defaultValue={data?.description}
          state={description}
          setState={setDescription}
          />
         
     
       </div>
       <div className="row g-4 p-5 pt-3 m-0">
       <button type="button" style={{ backgroundColor: 'black', borderRadius: 5 }} className="explore-btn"
          onClick={()=>onSavedata()}
               >
                  <span className="position-relative fs-5 w-20" >
                     Save Changes
                  </span>
               </button>
               </div>
       </>
    )
 }

export default UserDetail