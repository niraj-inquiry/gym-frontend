import React, { useCallback } from 'react';
import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import { resources, generateAppointments } from '../json/data';
import Pagination from '@material-ui/lab/Pagination';

// const currentDate = new Date(2023, 6, 21);
const currentDate = new Date();
console.log('currentdate',currentDate)
var currenthours = currentDate.getHours();
var currentmin = currentDate.getMinutes();
const groups = ['userId'];
var pageNum = 1;
// var pageSize = 10;
var pageSize = 5;
var totalCount = resources.length;
const startDay = new Date(2023, 1, 1);
const endDay = new Date(2023, 1, 28);
const startDayHour = 9;
const endDayHour = 22;


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
            <Scheduler
                dataSource={appointments}
                defaultCurrentView='Timeline'
                defaultCurrentDate={currentDate}
                startDayHour={startDayHour}
                endDayHour={endDayHour}
                // cellDuration={60}
                showAllDayPanel={true}
                groups={groups}
                className='boxshow'
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

            <Pagination
                count={totalPageCount}
                onChange={handleChange}
                style={{ marginTop: '15px', fontSize: '20px',width:'fit-content' }}
                className='mx-auto justify-content-center'
            />
        </>
    );
}

export default AllBooking;

