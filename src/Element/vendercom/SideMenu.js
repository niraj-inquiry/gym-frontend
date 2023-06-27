
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import "./vendor.css";
import { Link, useNavigate,useLocation } from 'react-router-dom';
import PlanVendor from '../../components/vendor/Event';
import * as Images from "../../assets";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location=useLocation();

  const list = [
    // { name: "Dashboard", status: true, component: '/vendor',iconname:"fa-home" },
    { name: "Dashboard", status: true, component: '/dashboard',iconname:"fa-home" },
    {name:"Centers List",status:false,component:'/my-centers',iconname:"fa-reorder"},
 
    {name:"Payment",status:false,component:'',iconname:"	far fa-credit-card"},
    {name:"Communication Channels",status:false,component:'/communication-channel',iconname:'fas fa-rss'},
    {name:"Members",status:false,component:'/members',iconname:'fa-user'},
    {name:"Reviews",status:false,component:'',iconname:'	far fa-star'},
    // { name: "History", status: false, component: '/history',iconname:"fa-history"  },
    // { name: "Event", status: false, component: "/event",iconname:"fa-calendar"  },
 { name: "Plan", status: false, component: "/plan" ,iconname:"fa-bar-chart" },
    // { name: "Setting", status: false, component: "",iconname:"fa-gear" },
    // { name: "Customer details", status: false, component: "",iconname:"fa-info-circle"  },
    // { name: "Payment method", status: false, component: "" ,iconname:"fa-id-card-o" }
  ]
  const [liststate, setListstate] = useState(list)

  const onChange = (index) => {
    let templist = [...liststate]
    templist.map((item) => {
      item.status = false
    })
    templist[index].status = true
    setListstate(templist)
    navigate(templist[index].component)

  }

  return (
    
    <div className='sidebar py-5 px-4 h-100'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={Images.face } className='rounded-pill dashbbaord-img'  style={{border:'3px solid black'}}/>
            <h3 className="sidebarTitle mt-3">{location?.state?.first_name}{location?.state?.last_name}</h3>
          </div>
          <ul className="sidebarList">
            {liststate?.map((item, index) => (
              <li onClick={() => onChange(index)} className={item.status ? 'sidebarListItem active' : 'sidebarListItem'}>
                <span className="material-symbols-outlined fw-bold fs-6">
                {item.iconname&& <i className={`fa ${item.iconname} me-2`}></i> }
                 {item?.name?.substring(0,10) }
                </span>
              </li>)
            )}
          </ul>
        </div>


      </div>
    </div>
  )
}



const SideMenu = ({ }) => {
  return (
    <Sidebar />
  )
}
export default SideMenu

