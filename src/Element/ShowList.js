import React from 'react'
import { CustomTable, CustomTableBody, TableHeading } from './vendercom/Table'
import * as Images from '../../src/assets';
import { NavLink } from "react-router-dom";

export const ShowListStar = ({heading,listing}) => {
   
     
    return (
        <>
        <div className="me-auto ms-5 border" >
            <TableHeading heading={heading}/>
            {listing?.map((item) =><CustomTableBody
             title={item?.name}
             subtitle={item?.star}
               />)}
        </div>
        </>
    )
}

export const ShowList = ({heading,listing,onShow,onDelete,onEdit}) => {
   console.log('listing',listing)
     
    return (
        <>
        <div className="me-auto ms-5 border" >
            <TableHeading heading={heading}/>
            {listing?.map((item,index) =>
            <CustomTable
             name={item.center_name}
             country={item?.country}
             photo={item?.photos[0]}
             email={item?.centeremail}
             status={item?.verify_status}
             eye_icon={Images.ic_eye}
             edit_icon={Images.ic_edit}
             delete_icon={Images.ic_delete}
             className={"action-icon"}
            //  eye_click={()=>onShow(item,index)}
          delete_click={()=>onDelete(item,index)}
             edit_click={()=>onEdit(item,index)}
               />
               )}
        </div>
        </>
    )
}

