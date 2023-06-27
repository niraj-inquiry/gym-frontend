import React from 'react'

const Card = ({ title, subtitle, count }) => {

    return (
        <div className='col border py-4 px-2 mx-5 my-5 dashboard mx-0'>
            <div className='' style={{}}>
                <div className='row fs-5 fw-bold justify-content-center mb-1'>
                    {title}
                </div>
                <div className='row justify-content-center mb-1'>{subtitle}</div>
                <div className='row justify-content-center'>{count}</div>
            </div>
        </div>
    )
}

export default Card