import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const Calendar = () => {
    return React.createElement(
        Page,
        null,
        React.createElement(Datepicker, {
            controls: ['calendar'],
            selectMultiple: false,
            inputProps: {
                label: 'Date',
                inputStyle: 'box',
                labelStyle: 'stacked',
                placeholder: 'Please Select...'
            }
        }),
        React.createElement(Datepicker, {
            controls: ['calendar', 'time'],
            selectMultiple: false,
            inputProps: {
                label: 'Date & time',
                inputStyle: 'box',
                labelStyle: 'stacked',
                placeholder: 'Please Select...'
            }
        }),
        React.createElement(Datepicker, {
            controls: ['calendar', 'timegrid'],
            selectMultiple: false,
            inputProps: {
                label: 'Date & timegrid',
                inputStyle: 'box',
                labelStyle: 'stacked',
                placeholder: 'Please Select...'
            }
        })
    );
}

export default Calendar;