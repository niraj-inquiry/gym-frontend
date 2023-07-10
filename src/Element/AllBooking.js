import React, { useCallback, useState } from 'react';
import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import { resources, generateAppointments } from '../json/data';
import Pagination from '@material-ui/lab/Pagination';

import * as Images from '../assets';

// const currentDate = new Date(2023, 6, 21);
const currentDate = new Date();
console.log('currentdate', currentDate)
var currenthours = currentDate.getHours();
var currentmin = currentDate.getMinutes();
const groups = ['userId'];
var pageNum = 1;
// var pageSize = 10;
var pageSize = 5;
var totalCount = resources.length;
const startDay = new Date(2023, 1, 1);
const endDay = new Date(2023, 1, 28);
const startDayHour = 10;
const endDayHour = 19;


const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
// console.log(chunk(resources, pageSize));

var chunkedArray = chunk(resources, pageSize);
// console.log('chunkedarraydat ',chunkedArray);

var newData = chunkedArray[pageNum - 1];
// console.log('newData ',newData);

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

// console.log('generate',appointments);
// console.log('appointmentsText',appointmentsText);

const AllBooking = () => {
    const [color, setColor] = React.useState([]);
    const [name, setName] = React.useState([]);
    const [number, setNumber] = React.useState();
    const [auto, setAuto] = React.useState([]);
    const [showdate, setShowdate] = useState(false);
    const [trainer, setTrainer] = useState(false);

    const handleChange = (event, value, e, inputval) => {

        console.log('value', value);
        pageNum = value;
        console.log("pagenum1 ", pageNum);
        console.log("pagesize1 ", pageSize);

        newData = chunkedArray[(pageNum - 1)];
        // setName(typeof pageSize === 'string' ? pageSize.split(',') : pageSize);
        setName(typeof newData === 'string' ? newData.split(',') : newData);

        // console.log('newData1 ',newData);

    };

    var calculatePagesCount = (pageSize, totalCount) => {
        return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
    };

    // console.log('mekapagesize ',calculatePagesCount(pageSize,totalCount));
    var totalPageCount = calculatePagesCount(pageSize, totalCount);


    // console.log("pagesize ",pageSize);
    totalPageCount = calculatePagesCount(pageSize, totalCount);
    // console.log("totalpagecount ",totalPageCount);

    return (
        <>
            <h1 className='text-center logo_color py-4'>Schedule</h1>
            <div className='row mb-3 me-0 align-items-center'>
                <div className='col-6'>
                    <div className='border  py-2 rounded' onClick={() => setTrainer(!trainer)}>
                        <div className='d-flex align-items-center px-3'>
                            <img src={Images.Team} className='rounded-pill' width="10%" />
                      
                                {/* <div className='fs-6 ms-3'>Alexa</div> */}
                                {/* <i className=''>10:00-11:00 AM</i> */}
                                <figure className="text-center mb-0 pb-2">
                                    <blockquote className="blockquote fs-6 mb-2">
                                        <p>Alexa</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer mb-0">
                                        <cite title="Source Title">10:00-11:00 AM</cite>
                                    </figcaption>
                                </figure>
                          
                        </div>
                        {trainer && <div className='border rounded trainer_list' style={{ width: '30%' }}>
                            <div className='d-flex align-items-center px-3 py-2 border-bottom'>
                                <img src={Images.Team} className='rounded-pill' width="5%" />
                                <div className='fs-6 ms-3'>Alexa</div>
                            </div>
                            <div className='d-flex align-items-center px-3 py-2 border-bottom'>
                                <img src={Images.wface} className='rounded-pill' width="5%" />
                                <div className='fs-6 ms-3'>Roshani</div>
                            </div>
                            <div className='d-flex align-items-center px-3 py-2 border-bottom'>
                                <img src={Images.Team} className='rounded-pill' width="5%" />
                                <div className='fs-6 ms-3'>Arjit</div>
                            </div>
                            <div className='d-flex align-items-center px-3 py-2 border-bottom'>
                                <img src={Images.wface} className='rounded-pill' width="5%" />
                                <div className='fs-6 ms-3'>Chitra</div>
                            </div>
                        </div>}
                    </div>

                </div>
                
                <div className='col-6 h-100'>
                    <input type="date" className="custom-date-input border rounded px-3 py-2 w-100" />
                </div>
            </div>
            <Scheduler
                dataSource={appointments}
                defaultCurrentView='Timeline'
                defaultCurrentDate={currentDate}
                startDayHour={startDayHour}
                endDayHour={endDayHour}
                // cellDuration={60}
                // showAllDayPanel={true}
                groups={groups}
                className='boxshow w-100'
            >

                <View
                    type='day'
                    groupOrientation='horizontal'
                />

                <View
                    type='workWeek'
                    groupOrientation='horizontal'
                />

                <View
                    type='month'
                    groupOrientation='horizontal'
                />

                <Resource
                    dataSource={newData}
                    label='Employee'
                    groupOrientation='horizontal'
                    fieldExpr='userId'
                />
                <Scrolling
                    mode='virtual' />
            </Scheduler>

            {/* <Pagination
                count={totalPageCount}
                onChange={handleChange}
                style={{ marginTop: '15px', fontSize: '20px',width:'fit-content' }}
                className='mx-auto justify-content-center'
            /> */}
        </>
    );
}

export default AllBooking;