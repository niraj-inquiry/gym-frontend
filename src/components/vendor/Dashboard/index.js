import React from 'react'
import './style.css'
import { Header } from '../../../Element/Header';
import * as Images from "../../../assets";
import CenterList from './CenterList';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
// import Plan from './Plan';
import Home from './Home';
// import Payment from './Payment';
import Communication from './Communication';
import Member from './Member';
import Reviews from './Reviews';
import CenterDetails from './CenterDetails';
import Orders from './Payment';
// import Plan from '../Plan';
import Plan from '../Plan';
const list = [
  {
    name: "Dashboard",
    component: "/dashboard",
    status: "true",
    iconname: "fa-home",
  },
  {
    name: "Members",
    status: "false",
    component: "members",
    iconname: "fa-user",
  },
  {
    name: "Centers List",
    status: "false",
    component: "my-centers",
    iconname: "fa-reorder",
  },
  {
    name: "Plan",
    status: "false",
    component: "plans",
    // component: "Plan",
    iconname: "fa-bar-chart"
  },
  {
    name: "Orders",
    status: "false",
    component: "orders",
    iconname: "	far fa-credit-card",
  },


  {
    name: "Reviews",
    status: "false",
    component: "reviews",
    iconname: "	far fa-star",
  },
  {
    name: "Communication",
    status: "false",
    component: "communication-channel",
    iconname: "fas fa-rss",
  },

];
const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={Images.face} className='rounded-pill dashbbaord-img' style={{ border: '3px solid black' }} />
                <h3 className="sidebarTitle mt-3">{location?.state?.first_name}{location?.state?.last_name}</h3>
              </div>
              <ul type="none" className="sidebarList">
                {list.map((item, index) => {
                  return (
                    <li key={index} className={item?.status ? 'sidebarListItem active' : 'sidebarListItem'}>
                      <Link to={item?.component}>
                        <i className={`fa me-2 ${item?.iconname} `}></i>
                        {item?.name}
                      </Link>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>
        <div className="dashboard-right">
          <div className="dashboard-menu">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/my-centers/*" element={<CenterList />} />
              <Route path='/my-centers/:centerdetails' element={<CenterDetails />} />
              <Route path='/plans' element={<Plan />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/communication-channel' element={<Communication />} />
              <Route path='/members' element={<Member />} />
              <Route path='/reviews' element={<Reviews />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard