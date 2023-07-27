import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import './style.css';
import * as Images from "../../../assets";
import { API } from "../../../generalfunction";
import { NavLink } from "react-router-dom";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

// ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const chartRefs = useRef([]);
  const [membercount, setMembercount] = useState([]);
  const [centercount, setCentercount] = useState([]);
  const [ordercount, setOrdercount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // const data = {
  //   labels: ['Red', 'Blue', 'Yellow'],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //     },
  //   ],
  // };



  const onMemberCount = async () => {

    API.get(`orderapi/get-order`).then((res) => {

      setMembercount(res?.data?.data);
    });
  };

  const onCenterCount = async () => {

    API.get(`v1.0/gymcenter/gym-all-data`).then((res) => {

      setCentercount(res?.data?.data);
    });
  };

  const onOrderCount = async () => {
    API.get(`orderapi/get-order`).then((res) => {
      setOrdercount(res.data.data);
    });
  }

  // filters



  const loggedUser = JSON.parse(localStorage.getItem('vendorAuth'))

  console.log("membercount", membercount);

  //membercount
  const getFilterData = membercount.filter((item) => item.vendorId === loggedUser?.vendor)
  console.log('getFilterData', getFilterData);

  //centercount
  const getCenterCount = centercount.filter((item) => item.created_by_userid === loggedUser?.vendor)
  console.log('getFilterData', getFilterData);

  //ordercount
  const getOrderCount = ordercount.filter((item) => item.vendorId === loggedUser?.vendor)
  console.log('getOrderCount', getOrderCount.map((item) => item.amount));
  console.log('chatrdat', membercount.map((item) => item.created_date.slice(0, 10)))


  const membermonth = getFilterData.map((item) => item.created_date.slice(0, 10));
  const activemembersdata = getFilterData.map((item) => item.created_date.slice(0, 10) && item.payment_status);

  // const monthlyrevenuedata = getOrderCount.map((item) => {
  //   const monthlydata = item.created_date.slice(0, 10);
  //   const amount = item.amount;
  //   return {monthlydata,amount}
  // }

  // )

  const total_revenue_data = getOrderCount.map((item) => item.amount);

  const monthlyrevenuedata = getOrderCount.map((item) => item)
  console.log("activemembers", activemembersdata, activemembersdata, membermonth);


  const numbers = total_revenue_data.map((item) => parseFloat(item));

  // Calculate the sum using the reduce method
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("total_revenue_data", sum);

  const activemembers = activemembersdata;
  const fivemonth = membermonth;

  console.log("activemembers",membermonth);

  // starting monthly revenue code
  //calculating monthly revenue per month
  // Function to calculate the total revenue per month
  const calculateTotalRevenuePerMonth = () => {

    const revenuePerMonth = {};

    monthlyrevenuedata.forEach((revenue) => {

      const monthlyrevenuedata = new Date(revenue?.created_date);


      const year = monthlyrevenuedata.getFullYear();
      const month = monthlyrevenuedata.getMonth() + 1;


      const monthKey = `${year}-${month < 10 ? '0' : ''}${month}`;
      console.log("monthKey", monthKey);


      if (revenuePerMonth[monthKey]) {
        revenuePerMonth[monthKey] += parseInt(revenue.amount, 10);
      } else {
        revenuePerMonth[monthKey] = parseInt(revenue.amount, 10);
      }
    });

    return revenuePerMonth;
  };

  // console.log("")

  const getMonthName = (monthNumber) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber];
  };

  console.log("getMonthName", getMonthName);

  // Call the function to get the total revenue per month
  const totalRevenuePerMonth = calculateTotalRevenuePerMonth();
  console.log("totalRevenuePerMonth", totalRevenuePerMonth);
  // ending monthly revenue

  // starting pagination code
  //pagination for 5 items per page
  // Calculate the index of the first and last items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getOrderCount.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log("currentPage", currentItems);
  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(getOrderCount.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(getOrderCount.length / itemsPerPage);

  //ending pagination code

  const calculateCounts = (activemembers, fivemonth) => {
    const counts = { success: [0, 0, 0, 0, 0], failure: [0, 0, 0, 0, 0] };
    const today = new Date();

    // Loop through the activemembers array
    for (let i = 0; i < activemembers.length; i++) {
      const isActive = activemembers[i] === '1';
      const monthDiff = new Date(today) - new Date(fivemonth[i]);
      const monthIndex = Math.floor(monthDiff / (1000 * 60 * 60 * 24 * 30));

      // If the member is active, increment the success count for the respective month
      // Otherwise, increment the failure count
      if (isActive) {
        counts.success[monthIndex]++;
      } else {
        counts.failure[monthIndex]++;
      }
    }

    return counts;
  };

  const { success, failure } = calculateCounts(activemembers, fivemonth);
  const successActiveMembers = success.reverse();

  console.log("success", successActiveMembers);


  const countDatesPerMonth = (membermonth) => {

    if (!membermonth || membermonth.length === 0) {
      return {}; // Return an empty object if datesArray is empty or undefined
    }
    const counts = membermonth?.reduce((acc, date) => {
      const dateObj = new Date(date);
      const yearMonth = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}`;

      if (!acc.hasOwnProperty(yearMonth)) {
        acc[yearMonth] = 1;
      } else {
        acc[yearMonth]++;
      }

      return acc;
    }, {});

    //  Add "0" counts for months with no dates
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    for (let month = 1; month <= 12; month++) {
      const yearMonth = `${currentYear}-${month}`;
      if (!counts.hasOwnProperty(yearMonth)) {
        counts[yearMonth] = month <= currentMonth ? 0 : null;
      }
    }

    // const currentYear = new Date().getFullYear();
    // for (let month = 1; month <= 12; month++) {
    //   const yearMonth = `${currentYear}-${month}`;
    //   if (!counts.hasOwnProperty(yearMonth)) {
    //     counts[yearMonth] = 0;
    //   }
    // }

    return counts;
  };

  const counts = countDatesPerMonth(membermonth);

  console.log('Counts of dates per month:', counts);


  const monthlyValues = Object.entries(counts)
    .filter(([month, value]) => value !== null)
    .reduce((acc, [month, value]) => {
      acc[month] = value;
      return acc;
    }, {});

  console.log("Monthly values:", monthlyValues);

  const numberValues = Object.values(counts).filter((value) => typeof value === "number").reverse();

  console.log("Number values:", numberValues);

  // const data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3,1,1,1,1,1,1],
  //       // data:numberValues,
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //         'green',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const chartDataMonth = [
    { labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },

  ];
  const getCurrentMonthIndex = () => {
    const currentDate = new Date();
    return currentDate.getMonth();
  };

  //last 5 months name
  const getLastFiveMonthsLabels = () => {
    const currentMonth = getCurrentMonthIndex();
    const lastFiveMonthsLabels = [];

    for (let i = 4; i >= 0; i--) {
      const index = (currentMonth - i + 12) % 12;
      lastFiveMonthsLabels.push(chartDataMonth[0].labels[index]);

    }

    return lastFiveMonthsLabels;

  };

  //last 5 months data orders

  const getLastFiveMonthsDataOrders = () => {
    const currentMonth = getCurrentMonthIndex();
    const lastFiveMonthsData = [];

    for (let i = 4; i >= 0; i--) {
      const index = (currentMonth - i + 12) % 12;
      lastFiveMonthsData.push(numberValues[index]);
    }

    return lastFiveMonthsData;
  };

  const getLastFiveMonthsDataRevenue = () => {
    const currentMonth = getCurrentMonthIndex();
    const currentYear = new Date().getFullYear();
    const lastFiveMonthsData = [];

    for (let i = 4; i >= 0; i--) {
      const index = (currentMonth - i + 12) % 12;
      const monthKey = `${currentYear}-${index < 9 ? '0' : ''}${index + 1}`;
      const revenueAmount = totalRevenuePerMonth[monthKey] || 0;
      // lastFiveMonthsData.push(totalRevenuePerMonth[index]);
      lastFiveMonthsData.push(revenueAmount);
    }
    console.log("totalRevenuePerMonth", lastFiveMonthsData);

    return lastFiveMonthsData;
  };

  //last 5 months active members on the basis of payment status === 1
  // const getLastFiveMonthsDataActiveMembers = () => {
  //   const currentMonth = getCurrentMonthIndex();
  //   const lastFiveMonthsData = [];

  //   for (let i = 4; i >= 0; i--) {
  //     const index = (currentMonth - i + 12) % 12;
  //     lastFiveMonthsData.push(numberValues[index]);
  //   }

  //   return lastFiveMonthsData;
  // };

  const lastFiveMonthsLabels = getLastFiveMonthsLabels();
  const lastFiveMonthsDataOrders = getLastFiveMonthsDataOrders();
  const lastFiveMonthsDataRevenue = getLastFiveMonthsDataRevenue();

  console.log("lastFiveMonthsLabels", lastFiveMonthsLabels, lastFiveMonthsDataOrders);

  const chartData = [
    {
      title: 'Monthly Order Volume',
      labels: lastFiveMonthsLabels,
      data: lastFiveMonthsDataOrders,
    },
    // { title: 'Total Number of Registered Centers', labels: ["April", "May", "June"], data: [8, 12, 18] },
    // { title: 'Total Number of Registered Users', labels: ["July", "August", "September"], data: [5, 15, 10] },
    {
      title: 'Monthly Active Members',
      labels: lastFiveMonthsLabels,
      data: successActiveMembers,
    },
    {
      title: 'Monthly Revenue',
      labels: lastFiveMonthsLabels,
      data: lastFiveMonthsDataRevenue,
    }
  ];

  // console.log('totalRevenuePerMonth',totalRevenuePerMonth);

  console.log("chartData", numberValues);



  useEffect(() => {
    const chartInstances = [];

    chartData.forEach((data, index) => {
      const chartCanvas = chartRefs.current[index].getContext('2d');

      if (chartInstances[index]) {
        chartInstances[index].destroy();
      }

      const chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Monthly Data',
              data: data.data,
              // backgroundColor: 'rgba(75, 192, 192, 0.6)',
              // backgroundColor: '#fe5b27',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(54, 162, 235, 0.2)', 
                '#5a595a',
                '#fe5b27',

              ],
              borderWidth: 1,

              barThickness: 30, // Adjust this value to modify bar thickness

            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              grid: {
                offset: true
              }
            }
          },
        },
      });

      chartInstances[index] = chartInstance;
    });

    return () => {
      chartInstances.forEach((instance) => {
        if (instance) {
          instance.destroy();
        }
      });
    };
  }, [chartData]);

  useEffect(() => {
    onMemberCount();
    onCenterCount();
    onOrderCount();
    countDatesPerMonth();
  }, []);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="dash-container align-items-center" >
              <div className="container-fluid  desk-view pt-2">
                <div className="row justify-content-evenly align-items-center">
                  {/* member count */}
                  <div className="col-lg-3 col-sm-6 mt-2 me-2" style={{ width: '15rem' }}>
                    <div className="team-box border boxshow mt-0 px-3 py-3 rounded ">

                      <div className="d-flex justify-content-between align-items-center">
                        <div className=" ">
                          {/* <img src={Images.face} width={100} height={90} /> */}
                          <i className="bi bi-person-circle dashboard_member_count logo_color" ></i>

                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '70%' }}>
                          <p className="fw-bold text-center mb-0 w-100 fs-4">{getFilterData?.length}</p>
                          <p className="small_text text-center">
                            Total Member
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Center Count */}
                  <div className="col-lg-3 col-sm-6 mt-2 me-2" style={{ width: '15rem' }}>
                    <div className="team-box border boxshow mt-0 px-3 py-3 rounded ">

                      <div className="d-flex justify-content-between align-items-center">
                        <div className=" " style={{ width: '25%' }}>
                          <img src={Images.studio} width={100} height={50} />
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '70%' }}>
                          <p className="fw-bold text-center mb-0 w-100 fs-4">{getCenterCount?.length}</p>
                          <p className="small_text text-center">
                            Total Center
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>
                  {/* Order Count */}
                  <div className="col-lg-3 col-sm-6 mt-2 me-2" style={{ width: '15rem' }}>
                    <div className="team-box border boxshow mt-0 px-3 py-3 rounded ">

                      <div className="d-flex justify-content-between align-items-center">
                        <div className=" " style={{ width: '25%' }}>
                          <img src={Images.money} width={100} height={50} />
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '70%' }}>
                          <p className="fw-bold text-center mb-0 w-100 fs-4">{getOrderCount?.length}</p>
                          <p className="small_text text-center">
                            Total Order
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>
                  {/* Total Revenue */}
                  <div className="col-lg-3 col-sm-6 mt-2 me-2" style={{ width: '15rem' }}>
                    <div className="team-box border boxshow mt-0 px-3 py-3 rounded ">

                      <div className="d-flex justify-content-between align-items-center">
                        <div className=" " style={{ width: '25%' }}>
                          <img src={Images.pay} width={100} height={50} />
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '70%' }}>
                          <p className="fw-bold text-center mb-0 w-100 fs-4">{sum}</p>
                          <p className="small_text text-center">
                            Total Revenue
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                <div className="divider border line mt-5">
                </div>
              </div>

              {chartData.map((item, index) => (
                <div className="dash-graph-item mt-5 mx-3 px-3 py-3 boxshow fw-bold rounded" key={index} >

                  <canvas

                    ref={(ref) => (chartRefs.current[index] = ref)}
                  />
                  <h3 className="text-center mt-3 fw-bold" >{item?.title}</h3>
                </div>
              ))}

              <div className=" dashboard_recent_orders  px-3 py-3 boxshow rounded">
                <h3 className="fw-bold">Recent Orders</h3>
                <table className="table table-striped table-responsive dash-graph-item">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Mem. Name</th>
                      <th>Center Name</th>
                      <th>Amount</th>
                      <th>Pass</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 && currentItems.map((item, index) => {
                      console.log("revenue item", item);
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item?.userName}</td>
                          <td>{item?.centerName}</td>
                          <td>{item?.amount}</td>
                          <td>{item?.passtype}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <NavLink to="orders" className=" text-decoration-none">
                  <div className=" text-end fs-6 logo_color">
                    <b>{"View All"}</b>
                  </div>
                </NavLink>
                {/* Pagination controls */}
                {/* <div className="w-100 text-end d-flex align-items-center">
                  <div className="w-25 ms-auto justify-content-evenly align-items-center d-flex">
                    <button onClick={prevPage} disabled={currentPage === 1} className="px-2 py-1">
                     
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button onClick={nextPage} disabled={currentPage === totalPages} className="px-2 py-1">
                    
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                  </div>
                
                  <div className=" text-end">
                    Page <b>{currentPage}</b> of <b>{totalPages}</b>
                  </div>
                </div> */}
                


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-25">
       
        <Doughnut data={data} />
        <h2 className="text-center">Monthly Orders</h2>
      </div> */}
      </>
      );
};

      export default Home;
