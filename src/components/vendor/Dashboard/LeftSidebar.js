import React from "react";
import { Link } from "react-router-dom";


const list = [
  {
    name: "Dashboard",
    status: true,
    component: "/",
    iconname: "fa-home",
  },
  {
    name: "Centers List",
    status: false,
    component: "my-centers",
    iconname: "fa-reorder",
  },

  {
    name: "Payment",
    status: false,
    component: "payment",
    iconname: "	far fa-credit-card",
  },
  {
    name: "Communication Channels",
    status: false,
    component: "communication-channel",
    iconname: "fas fa-rss",
  },
  {
    name: "Members",
    status: false,
    component: "members",
    iconname: "fa-user",
  },
  {
    name: "Reviews",
    status: false,
    component: "reviews",
    iconname: "	far fa-star",
  },

  { name: "Plan",
   status: false, 
   component: "plans",
    iconname: "fa-bar-chart" 
  },
];
const LeftSidebar = () => {

  return (
    <>
 
      <ul type="none" className="sidebarList">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.component}>
                <i className={`fa ${item.iconname} `}></i>
                {item.name}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LeftSidebar;
