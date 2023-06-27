import React, { useEffect, useState } from 'react';
import { Header, AllPageBanner, Footer } from ".";
import * as Images from "../assets";
// import { useNavigation } from '@react-navigation/native';
import axios from "axios";


import ImgCmp from '../Element/ImgCmp';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { API, baseURL, isEmpty } from '../generalfunction';
import Multiplesection_footer from '../Element/Multiplesection_footer';
import { CardButton } from '../Element/vendercom/AddButton';
import CardView from '../Element/vendercom/CardView';
import { GMap, GoogleMapfilter } from '../Element/GoogleMapfilter';
import useGeoLocation from '../geolocation';
import "../css/Style.css";

const Findgym = () => {
    const location = useLocation()
    const geolocation = useGeoLocation()
    console.log("findgym", location?.state?.country, geolocation?.country)
    // const {country}=location.state
    // console.log("location",country)
    const navigation = useNavigate();
    const [showmorefilter, setShowmorefilter] = useState(false)
    const [data, setData] = useState([]);
    const [plan, setPlan] = useState([])
    const [searchdata, setSearchdata] = useState(location?.state?.findstate)
    // const [rating,setRating] = useState([])
    const userdata = localStorage.getItem('userdata')
    const [mapstatus, setMapstatus] = useState(false)
    const [searchlist, setSearchList] = useState([])
    const [findstate, setFinestate] = useState();
    const [status, setStatus] = useState(false);
    const [nodatafound, setNodatafound] = useState();
    const [filteropen, setFilteropen] = useState();
    const [getamentities, setGetamentities] = useState();

    // const [img, setImg] = useState();
    console.log('data', data)
    const Carddata = () => {

        if (!isEmpty(searchdata)) {
            API.get(`v1.0/gymcenter/gym-locationbase-data/${searchdata}`).then(res => {
                if (res.data.status) {
                    setData(res.data.data);
                }
            })
        }
        else {
            onTextSearch()

        }


    };





    const Searchmap = () => {
        return (
            <svg style={{ marginLeft: 15 }} xmlns="http://www.w3.org/2000/svg" version="1.0" width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M3880 5114 c-207 -38 -280 -61 -406 -128 -341 -181 -565 -529 -590 -916 -12 -176 32 -343 157 -595 148 -302 417 -686 750 -1076 136 -159 186 -185 275 -143 83 40 529 607 730 928 265 425 355 707 310 978 -78 476 -417 834 -881 933 -77 17 -294 28 -345 19z m345 -349 c286 -84 497 -317 559 -617 9 -42 16 -103 16 -135 0 -200 -188 -565 -528 -1023 -108 -146 -264 -340 -272 -340 -18 0 -331 411 -457 600 -159 238 -288 489 -324 630 -51 198 18 451 171 633 204 243 531 342 835 252z" />
                    <path d="M3893 4465 c-238 -52 -403 -296 -364 -538 42 -259 288 -439 544 -398 259 42 439 288 398 544 -16 101 -62 189 -135 262 -73 73 -142 111 -233 130 -82 18 -129 18 -210 0z m171 -319 c18 -8 45 -29 60 -48 52 -69 47 -147 -14 -208 -66 -66 -151 -67 -219 -2 -128 122 9 326 173 258z" />
                    <path d="M909 3512 c-448 -180 -828 -335 -843 -345 -15 -10 -36 -37 -47 -60 -18 -41 -19 -91 -19 -1512 l0 -1470 23 -40 c24 -44 92 -85 139 -85 15 0 381 141 813 314 l785 314 785 -314 c432 -173 798 -314 815 -314 37 0 1653 644 1697 676 67 50 64 1 61 1106 -3 989 -3 997 -24 1024 -39 53 -71 69 -134 69 -63 0 -95 -16 -134 -69 -21 -27 -21 -38 -26 -964 l-5 -936 -620 -248 c-341 -137 -628 -251 -637 -254 -17 -5 -18 45 -20 865 -3 861 -3 870 -24 897 -39 53 -71 69 -134 69 -63 0 -95 -16 -134 -69 -21 -27 -21 -36 -24 -897 -2 -820 -3 -870 -20 -865 -9 3 -296 117 -637 254 l-620 248 -3 1267 c-1 697 0 1267 3 1267 3 0 175 -68 382 -151 347 -139 382 -151 429 -147 28 3 62 13 77 24 34 24 67 90 67 133 0 41 -32 103 -64 124 -50 33 -1026 417 -1059 417 -18 -1 -385 -142 -848 -328z m689 -1339 l-3 -1267 -620 -248 c-341 -137 -628 -251 -638 -254 -16 -5 -17 58 -15 1262 l3 1268 630 253 c347 138 633 252 638 253 4 0 6 -570 5 -1267z" />
                </g>
            </svg>
        )
    };

    const Filtericon = () => {
        return (
            <svg style={{ marginLeft: 15 }} className="" xmlns="http://www.w3.org/2000/svg" version="1.0" width="15.000000pt" height="15.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M3360 4945 c-265 -54 -483 -245 -571 -498 l-28 -82 -1209 -5 c-1143 -5 -1209 -6 -1235 -23 -96 -63 -89 -212 13 -271 35 -21 45 -21 1236 -24 l1200 -2 14 -53 c18 -71 79 -185 137 -257 93 -117 244 -216 388 -255 141 -39 351 -27 480 28 211 90 380 274 440 479 l16 57 257 3 c238 3 260 5 292 24 105 61 109 212 8 274 -31 19 -51 20 -293 20 l-260 0 -23 74 c-64 206 -236 389 -442 473 -126 50 -287 65 -420 38z m245 -319 c223 -59 364 -270 327 -489 -22 -129 -87 -228 -194 -297 -222 -144 -515 -57 -631 187 -30 64 -32 75 -32 179 0 107 1 112 37 185 92 187 301 287 493 235z" />
                    <path d="M1530 3310 c-36 -4 -85 -13 -110 -20 -125 -33 -294 -139 -371 -232 -74 -89 -140 -215 -164 -310 l-7 -28 -251 0 c-233 0 -254 -1 -293 -21 -58 -27 -84 -72 -84 -140 0 -66 28 -111 86 -139 37 -18 61 -20 291 -20 l251 0 7 -27 c24 -100 103 -244 177 -325 198 -217 512 -297 795 -203 232 77 427 281 484 506 l13 49 1195 0 c1177 0 1195 0 1235 20 62 31 81 63 81 140 0 77 -19 109 -81 140 -40 20 -58 20 -1235 20 l-1195 0 -13 49 c-29 113 -116 256 -209 343 -159 149 -385 223 -602 198z m150 -321 c218 -35 370 -211 370 -429 0 -266 -238 -471 -499 -429 -87 14 -161 50 -231 116 -184 170 -184 456 0 626 82 76 165 113 285 126 6 0 39 -4 75 -10z" />
                    <path d="M3345 1655 c-223 -49 -408 -193 -515 -398 -20 -40 -43 -96 -50 -124 l-14 -53 -1200 -2 c-1191 -3 -1201 -3 -1236 -24 -102 -59 -109 -208 -13 -271 26 -17 92 -18 1235 -23 l1209 -5 28 -81 c40 -116 92 -197 191 -295 71 -71 102 -94 181 -133 114 -56 186 -75 304 -83 212 -13 409 63 566 217 88 88 157 198 191 306 l23 74 260 0 c242 0 262 1 293 20 101 62 97 213 -8 274 -32 19 -54 21 -292 24 l-257 3 -16 57 c-60 205 -229 390 -440 479 -117 50 -310 66 -440 38z m284 -324 c261 -81 383 -369 260 -613 -66 -130 -206 -224 -351 -235 -180 -14 -344 81 -426 246 -36 73 -37 78 -37 185 0 104 2 115 32 179 56 117 176 219 289 246 67 16 168 12 233 -8z" />
                </g>
            </svg>
        )
    };

    const Sort = () => {
        return (
            {/* <button type="button" className='search fw-bold border-0 m-0 rounded-pill'>
                
                <select className="form-select form-select-lg border-0" style={{backgroundColor:'none'}} aria-label=".form-select-lg example">
                    <option selected> Search</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </button> */}
        )
    }
    const onTextSearch = async () => {

        if (isEmpty(searchdata)) {

            const loaddata = await API.get('v1.0/gymcenter/get-verify-all-data')
            // API.get('')
            console.log('onTextSearch', loaddata)
            let templocation = !isEmpty(geolocation?.country) ? geolocation?.country : location?.state?.country
            console.log("templocation", templocation)
            if (loaddata?.data?.status === true) {
                if (isEmpty(templocation)) {
                    setData(loaddata?.data?.data)
                }
                else {
                    const countryfilter = loaddata?.data?.data.filter(resp => resp?.country == templocation)
                    setData(countryfilter)
                }
            }
            else {
                setData(loaddata?.data?.data)
            }


        }
        else {
            Carddata()
        }

    }


    const onSearch = async () => {
        const loaddata = await API.get(`v1.0/gymcenter/search-data/${searchdata}`)
        console.log('onSearch', loaddata)
        if (loaddata?.data?.status) {
            setData(loaddata?.data?.data)



        }
    }
    const Menus = ({ onClick }) => {
        const [hideshowemenu, setHideshowmeanu] = useState(false)
        return (
            <>
                <div
                    // className="btn btn-secondary "
                    // type="button"
                    id="dropdownMenuButton1"
                    onClick={() => setHideshowmeanu(!hideshowemenu)}
                    className='d-flex align-items-center'
                >
                    Filters <Filtericon />
                </div>
                {hideshowemenu && (

                    <ul className="filtermenu">
                        <li className="dropdown-item">
                            <input type="radio"  className='w-auto' /> Pools
                        </li>
                        <li className="dropdown-item"><input type="radio" className='w-auto' /> Outdoor Fitness</li>
                        <hr className='my-0' />
                        <li><NavLink className="dropdown-item" onClick={() => setShowmorefilter(!showmorefilter)}>See all filters...</NavLink></li>

                    </ul>


                )}
            </>

        )
    }
    // useEffect(() => {
    //     onTextSearch()
    // }, [])
    useEffect(() => {
        onTextSearch()

        // }, [mapstatus, searchdata])
    }, [])

    const showme = [
        "Gyms",
        "Outdoor fitness"
    ];
    const mostused = ["Creche", "Ladies only area", "Parking", "Sauna", "Swimming pool"];
    const amentities = [
        "Air Conditioning", "Cable TV", "Café", "Disabled Access", "Spa facilities", "Towels", "Wi-Fi"
    ]
    const equipmachine = [
        "Boxing ring", "Cardio machines", "Free weights", "Mat area", "Olympic weights", "Powerplate", "Punch bags", "Resistance machines"
    ]
    const facilities = [
        "Boxing ring", "Changing Rooms"
    ]
    console.log('gym data finggym', location?.state?.searchdata, data, location?.state?.findstate)

    const onFilters = (index, item) => {
        console.log('onFilters', item,data);
        setGetamentities(index, item);
        const filtersdata = data.filter((element) =>

            element.amentitiesData[0].amentitiesName === item

        )
        // setGetamentities(filtersdata)
        setData(filtersdata);

        console.log('filtersdata', filtersdata)
    }
    console.log('getamentities', getamentities);
    return (
        <>


            <div>
                <Header Logo={Images.logo} Hamburger={Images.menu} />
                <section>
                    <div className='container'>
                        <div className={showmorefilter ? "hidemorefilter" : "w-100 mx-auto m-5 d-flex align-items-center justify-content-between"} style={{ position: 'relative' }}>
                            <div className='d-flex align-items-center w-50'>
                                <input
                                    placeholder={"Enter postcode or location"}
                                    value={searchdata}
                                    onChange={(e) => setSearchdata(e.target.value)}
                                    type="text"
                                    className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ paddingLeft: '65px' }} />
                                <div style={{ position: 'absolute', verticalAlign: 'middle', top: '15%', left: '2%' }}>
                                    <svg style={{ verticalAlign: 'bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>

                                <button onClick={() => onSearch()} type="button" on className='search px-3 py-2 fw-bold rounded-pill border-0 mx-3 m-0 w-auto'>Search</button>
                            </div>

                            <div className='d-flex align-items-center position-relative'>
                                <button type="button" className='search py-2 px-3 fw-bold rounded-pill border-0 m-0 align-items-center mx-3'>
                                    {/* Filters */}
                                    <Menus />


                                </button>

                                {/* <div className='position-absolute top-10'>
                            <div className="form-check" >
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Default checked radio
                                </label>
                            </div>
                        </div> */}
                                <button onClick={() => setMapstatus(!mapstatus)} type="button" className='search px-3 py-2  fw-bold rounded-pill border-0 m-0 align-items-center'>
                                    Map
                                    <Searchmap />
                                </button>
                            </div>

                        </div>
                        <div className={showmorefilter ? "showmorefilter border rounded px-5 py-4 mt-5" : "hidemorefilter"}>
                            <div className='text-end'>
                                {/* <button className='me-3 explore-btn rounded-pill'>Reset Filters</button> */}
                                <button className=' explore-btn rounded-pill' onClick={() => setShowmorefilter(false)}>Close & Apply Filters</button>
                            </div>
                            <h2 className='fw-bold'>Filter gyms by:</h2>
                            <div className='my-3'>
                                <h3 className='fw-bold'>Show me</h3>
                                <div className='d-flex mx-2 '>
                                    {showme?.map((item, index) => {
                                        return <button className='mx-3 my-2 filterbutton px-4 py-2 rounded-pill' T={console.log('showme', item)} key={index}>
                                            {item}
                                        </button>
                                    })}
                                </div>
                            </div>
                            <div className='my-3'>
                                <h3 className='fw-bold'>Most used</h3>
                                <div className='d-flex mx-2 '>
                                    {mostused?.map((item, index) => {
                                        return <button className='mx-3 my-2 filterbutton px-4 py-2 rounded-pill' T={console.log('showme', item)} key={index}>
                                            {item}
                                        </button>
                                    })}
                                </div>
                            </div>
                            <div className='my-3'>
                                <h3 className='fw-bold'>Amenities</h3>
                                <div className='d-flex mx-2 '>
                                    {amentities?.map((item, index) => {
                                        return <button className='mx-3 my-2 filterbutton px-4 py-2 rounded-pill'
                                            T={console.log('showme', item)}
                                            key={index}
                                            value={getamentities}
                                            //  onClick={() =>setGetamentities(index,item)}
                                            onClick={() => onFilters(index, item)}
                                        >
                                            {item}
                                        </button>
                                    })}
                                </div>
                            </div>
                            <div className='my-3'>
                                <h3 className='fw-bold'>Equipment and Machines</h3>
                                <div className='d-flex mx-2 flex-wrap'>
                                    {equipmachine?.map((item, index) => {
                                        return <button className='mx-3 my-2 filterbutton px-4 py-2 rounded-pill' key={index}>
                                            {item}
                                        </button>
                                    })}
                                </div>
                            </div>
                            <div className='my-3'>
                                <h3 className='fw-bold'>Facilities</h3>
                                <div className='d-flex mx-2 w-auto'>
                                    {facilities?.map((item, index) => {
                                        return <button className='mx-3 my-2 filterbutton px-2 py-2 rounded-pill' style={{ width: '100% !important' }} key={index}>
                                            {item}
                                        </button>
                                    })}
                                </div>
                            </div>

                        </div>
                        <section>
                            <div className='container px-0'>
                                <div className='row row-cols-1 row-cols-md-3 row-col-lg-4 m-1 g-4 w-100 mx-0' style={{}}>
                                    {mapstatus === false ? data?.length > 0 && data?.map((vendoritem, i) =>

                                        <CardView vendoritem={vendoritem} lat={geolocation?.location?.coordinates?.lat} lng={geolocation?.location?.coordinates?.lng} />

                                    ) : (
                                        <>
                                            {/* <div style={{ height: 700, width: 1000 }}>
                                        <GoogleMapfilter data={data} />
                                    </div> */}
                                            <div style={{ height: 700, width: '100%' }} className='px-0'>
                                                <GoogleMapfilter data={data} />
                                            </div>
                                        </>
                                    )}
                                    {mapstatus === false && data?.length === 0 &&
                                        <div className='col-12 py-3 px-5 rounded' style={{ boxShadow: '0 0 10px 0 rgba(35,31,32,.1)', }}>
                                            <div className='fs-4 mb-2 row fw-bold' style={{}}>{"No Gyms Found"}</div>
                                            <div className='fs-6 row'>
                                                {"Try adjusting your search by changing your location,removing some filters or increasing your search radius."}
                                            </div>
                                        </div>
                                    }

                                </div>

                            </div>
                        </section>
                    </div>
                </section>
                <Multiplesection_footer />
            </div>
        </>
    )
}

export default Findgym