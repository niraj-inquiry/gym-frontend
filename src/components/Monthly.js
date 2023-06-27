import React from 'react';
import * as Images from "../assets";

const Monthly = () => {
    const data = [
        {
            id: 1,
            title: 'Monthly+',
            desc: 'Multiple gyms and digital apps. The ultimate in flexibility and control.',
            list1: 'Multiple gyms & locations',
            list2: 'Unlimited visits',
            list3: 'Fitness apps included',
            list4: 'No contract, cancel anytime',
            list5: 'Exclusive to Super Active',
            name: 'Super Active MULTIGYM MEMBERSHIP',
            // img:'https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg'
        }
    ]
    return (
        <div style={{ maxHeight: '50%' }} className='my-5'>
            {data && data.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={{ backgroundColor: 'rgb(179 179 179 / 30%)' }}>
                            <div className="d-flex flex-column mx-auto" style={{ width: '40%' }}>
                                <div className="mx-auto my-3" style={{}}>
                                    <svg style={{ padding: '8px', fill: '#ff5722', width: 60, height: 50, alignItems: 'center', backgroundColor: '#fff', borderRadius: 50, }} viewBox="0 0 32 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3515 32.0336L16.7214 30.4916V25.4083L10.2985 32.0336L7.72388 30.4916L12.7209 19.2909L11.6036 20.1481L9.85556 17.6693L15.0461 14.2423L17.635 15.7561L13.939 23.8589L17.6361 20.0407L19.8498 21.3247L19.8399 26.9972L21.3321 25.5016L23.172 28.0927L19.3515 32.0336Z"></path><path d="M15.4067 43.2593C16.7158 43.2593 17.777 42.198 17.777 40.8888C17.777 39.5796 16.7158 38.5183 15.4067 38.5183C14.0976 38.5183 13.0364 39.5796 13.0364 40.8888C13.0364 42.198 14.0976 43.2593 15.4067 43.2593Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M32 46.2766V3.51468L28.5714 0L3.42857 1.7435e-07L3.22076e-07 3.51468L0 46.2766L3.42857 49.7912L28.5714 50.9628L32 46.2766ZM28.4444 4.94115L27.0641 3.5261L4.93594 3.5261L3.55556 4.94115L3.55556 44.8501L5.00374 46.3346L26.8209 47.3512L28.4444 45.1321V4.94115Z"></path></svg>
                                </div>

                                <h1 className='fw-bold' style={{ fontSize: '50px' }}>{item.title}</h1>
                                <h4 className='m-3' style={{ lineHeight: '30px' }}>{item.desc}</h4>
                            </div>

                        </div>

                        <div className='row mx-0' style={{ backgroundColor: '#8080805e' }}>
                            <div className='col col-lg-6 col-sm-12 p-0' style={{ borderRight: '5px solid #ff5722' }}>
                                <img src={Images.monthlypassimg} width="100%" height="100%" />
                                <div className="" style={{ position: 'absolute', marginTop: '-250px' }}>
                                    <div className="" style={{ width: '100%', height: '50%' }}>
                                        <div className='px-5 py-5 fw-bold fs-4 rounded-end' style={{ backgroundColor: 'white', color: '#ff5722', border: '3px solid #ff5722' }}>
                                            Monthly+ includes access to
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className='col col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-center' style={{}}>
                                <div className='w-80 mx-auto'>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list1}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list2}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list3}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list4}</h1>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ff5722" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                        <h1 className='m-3 fw-bold' style={{ color: '' }}>{item.list5}</h1>
                                    </div>
                                    <div className="m-3" style={{ textDecoration: 'overline', color: '' }}>
                                        <h4>{item.name}</h4>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Monthly