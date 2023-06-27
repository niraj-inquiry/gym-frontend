import React,{useEffect} from 'react';
import { Header } from ".";
import * as Images from "../assets";
import Multiplesection_footer from '../Element/Multiplesection_footer';
import { NavLink } from "react-router-dom";
import "../css/Style.css";

const Flexible_fitness = () => {

    useEffect(() =>{
        window.scrollTo(0, 0);
      },[]);

    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
                <section className="section_heading ">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="zigzag mx-auto" style={{width:'70%'}}>
                                    <div className="fw-bold mb-5" style={{fontSize:'74px',lineHeight:'80px'}}>Fitness Fitted to you</div>
                                    <div 
                                        className="" 
                                        style={{
                                            fontWeight: 600,
                                            letterSpacing: 0,
                                            lineHeight: 1.2,
                                            fontSize: '30px',
                                            color: '#2A2D36',
                                            margin: '0 0 25px 0',
                                            maxWidth: 'none'}}
                                    >
                                        Workout in a way that suits your lifestyle
                                    </div>
                                    <NavLink to={"/flexible-fitness"}>
                                        <button type="button" className="explore-btn rounded-pill">
                                            <span className="position-relative fs-5">
                                                Pick a fitness that fits to you
                                            </span>
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 px-0">
                                <img
                                    className="w-100"
                                    src={Images.flexiblepass}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{backgroundColor:'#EBF0F1'}}>
                    <section className="section_heading">
                        <div className="container-fluid pt-5">
                            
                            <p className="" style={{marginBottom:'20px',textAlign:'left',fontSize: '20px',lineHeight: '33px'}}>
                                At SuperActive, we believe in fitness fitted to you. 
                                Because it looks a little different for everybody. 
                                We don’t believe in the one size fits all approach. 
                                Or in this case, the one pass fits all approach.
                                
                            </p>
                            <p className="" style={{marginBottom:'20px',textAlign:'left',fontSize: '20px',lineHeight: '33px'}}>
                                So, we hope you don’t mind, but we’re making it personal. 
                                SuperActive lets you build your own fitness pass. 
                                Something that gives you access to fitness in exactly the way you need it. 
                                Something that’s fitted to you.
                            </p>
                            <p className="fw-bold" style={{marginBottom:'20px',textAlign:'left',fontSize: '20px',lineHeight: '33px'}}>
                                Here’s how you can pick a fitness pass that fits:
                            </p>
                        </div>
                    </section>
                    <div className="row row-col-lg-4 row-col-md-2 row-col-sm-1 mx-auto m-4" style={{width:'80%',height:'auto'}}>
                        <div className="col p-2 shadow rounded d-flex flex-column justify-content-evenly m-3" style={{backgroundColor:'white',minWidth:'20%',maxHeight:'50%'}}>
                            <div className="p-3">
                                <svg style={{border:'2px solid #FF5722',backgroundColor:'#FF5722'}} className="p-1 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                    <path d="M640 944 c-19 -8 -44 -26 -56 -40 -18 -22 -29 -25 -100 -28 -92 -4 -161 -27 -233 -80 -134 -99 -198 -276 -157 -436 81 -317 471 -425 701 -195 130 130 159 319 74 487 -27 54 -29 63 -18 95 24 73 -15 162 -85 194 -49 22 -79 23 -126 3z m110 -37 c35 -18 70 -74 70 -113 0 -32 -62 -166 -100 -214 l-20 -25 -20 25 c-38 48 -100 182 -100 214 0 18 10 48 23 67 37 55 93 73 147 46z m-270 -147 l0 -80 -60 0 c-35 0 -60 4 -60 10 0 24 41 89 75 118 20 18 38 32 40 32 3 0 5 -36 5 -80z m60 43 c0 -21 9 -57 20 -80 l19 -43 -29 0 -30 0 0 80 c0 47 4 80 10 80 6 0 10 -17 10 -37z m-197 -53 l-35 -70 -61 0 -61 0 39 41 c35 36 128 99 146 99 4 0 -9 -31 -28 -70z m505 -139 c12 -26 24 -67 28 -90 l7 -41 -82 0 c-62 0 -81 3 -81 14 0 17 90 166 100 166 4 0 17 -22 28 -49z m-551 7 c-3 -13 -9 -49 -12 -80 l-7 -58 -80 0 -80 0 7 43 c4 23 14 59 22 80 l15 37 70 0 c68 0 70 -1 65 -22z m183 -58 l0 -80 -81 0 -82 0 7 57 c13 107 9 103 87 103 l69 0 0 -80z m159 14 c58 -92 57 -94 -39 -94 l-80 0 0 80 0 80 39 0 c37 0 41 -3 80 -66z m-354 -191 c3 -32 9 -68 12 -80 5 -22 3 -23 -65 -23 l-70 0 -15 38 c-8 20 -18 56 -22 80 l-7 42 80 0 80 0 7 -57z m195 -23 l0 -80 -69 0 c-78 0 -74 -4 -87 103 l-7 57 82 0 81 0 0 -80z m196 23 c-13 -107 -9 -103 -87 -103 l-69 0 0 80 0 80 81 0 82 0 -7 -57z m199 15 c-4 -24 -14 -60 -22 -80 l-15 -38 -70 0 c-68 0 -70 1 -65 23 3 12 9 48 12 80 l7 57 80 0 80 0 -7 -42z m-532 -228 c19 -38 32 -70 28 -70 -18 0 -111 63 -146 99 l-39 41 61 0 61 0 35 -70z m137 -10 c0 -74 -1 -80 -17 -71 -39 21 -103 108 -103 141 0 6 25 10 60 10 l60 0 0 -80z m160 70 c0 -33 -64 -120 -102 -141 -17 -9 -18 -3 -18 71 l0 80 60 0 c35 0 60 -4 60 -10z m135 -31 c-35 -36 -128 -99 -146 -99 -4 0 9 32 28 70 l35 70 61 0 61 0 -39 -41z"/>
                                    <path d="M663 868 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13 -42 13 -71 -1z m67 -43 c26 -32 -13 -81 -47 -59 -35 22 -23 74 17 74 10 0 23 -7 30 -15z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="p-3 text-center" style={{fontSize:'22px',lineHeight: '36px'}}>You choose how many center you need access to.</div>
                        </div>
                        <div className="col p-2 shadow rounded d-flex flex-column justify-content-evenly m-3" style={{backgroundColor:'white',minWidth:'20%',maxHeight:'50%'}}>
                            <div className="p-3">
                                <svg style={{border:'2px solid #FF5722',backgroundColor:'#FF5722'}} className="p-1 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                    <path d="M1163 5045 c-33 -17 -61 -41 -79 -68 l-29 -42 -3 -425 c-2 -290 0 -437 8 -463 13 -44 61 -102 102 -123 16 -8 57 -17 93 -21 117 -11 203 27 248 110 22 41 22 50 25 440 3 441 0 481 -50 541 -45 55 -97 76 -189 76 -61 0 -85 -5 -126 -25z"/>
                                    <path d="M3755 5056 c-40 -18 -84 -63 -104 -106 -14 -30 -16 -92 -19 -422 -4 -489 -1 -507 92 -582 34 -28 46 -31 124 -35 98 -4 148 8 193 46 68 58 69 60 69 533 0 422 0 426 -22 470 -13 24 -40 58 -61 74 -37 29 -44 31 -140 34 -70 1 -111 -2 -132 -12z"/>
                                    <path d="M240 4646 c-90 -24 -172 -95 -214 -185 l-21 -46 0 -2060 0 -2060 27 -57 c31 -66 91 -128 156 -160 l47 -23 2325 0 2325 0 47 23 c65 32 125 94 156 160 l27 57 0 2060 0 2060 -28 56 c-32 66 -99 132 -165 162 -44 21 -64 22 -349 25 l-303 3 0 -334 c0 -275 -3 -341 -16 -379 -36 -108 -143 -180 -296 -199 -215 -28 -373 46 -452 211 l-31 65 -3 318 -3 317 -890 0 -889 0 0 -292 c0 -317 -7 -371 -53 -450 -35 -59 -97 -115 -166 -146 -74 -35 -228 -43 -316 -17 -104 30 -185 98 -233 195 l-27 55 -3 328 -3 327 -302 -1 c-205 0 -317 -4 -347 -13z m4550 -2781 l0 -1495 -2230 0 -2230 0 0 1495 0 1495 2230 0 2230 0 0 -1495z"/>
                                    <path d="M2697 2943 c-4 -3 -7 -131 -7 -283 0 -201 3 -279 12 -288 17 -17 629 -17 646 0 17 17 17 549 0 566 -9 9 -96 12 -328 12 -174 0 -320 -3 -323 -7z"/>
                                    <path d="M3657 2943 c-4 -3 -7 -131 -7 -283 0 -201 3 -279 12 -288 17 -17 629 -17 646 0 17 17 17 549 0 566 -9 9 -96 12 -328 12 -174 0 -320 -3 -323 -7z"/>
                                    <path d="M781 2106 c-8 -9 -11 -95 -9 -292 l3 -279 319 -3 c227 -2 323 1 332 9 19 16 21 548 2 567 -19 19 -631 17 -647 -2z"/>
                                    <path d="M1741 2106 c-8 -9 -11 -95 -9 -292 l3 -279 319 -3 c227 -2 323 1 332 9 19 16 21 548 2 567 -19 19 -631 17 -647 -2z"/>
                                    <path d="M2701 2106 c-8 -9 -11 -95 -9 -292 l3 -279 319 -3 c227 -2 323 1 332 9 19 16 21 548 2 567 -19 19 -631 17 -647 -2z"/>
                                    <path d="M3661 2106 c-8 -9 -11 -95 -9 -292 l3 -279 319 -3 c227 -2 323 1 332 9 19 16 21 548 2 567 -19 19 -631 17 -647 -2z"/>
                                    <path d="M788 1279 c-17 -9 -18 -34 -18 -287 0 -203 3 -281 12 -290 9 -9 94 -12 319 -12 266 0 310 2 323 16 14 13 16 53 16 284 0 266 0 269 -22 284 -19 14 -66 16 -318 16 -182 0 -302 -5 -312 -11z"/>
                                    <path d="M1748 1279 c-17 -9 -18 -34 -18 -287 0 -203 3 -281 12 -290 9 -9 94 -12 319 -12 266 0 310 2 323 16 14 13 16 53 16 284 0 266 0 269 -22 284 -19 14 -66 16 -318 16 -182 0 -302 -5 -312 -11z"/>
                                    <path d="M2708 1279 c-17 -9 -18 -34 -18 -289 0 -266 1 -280 19 -290 12 -6 132 -10 320 -10 259 0 302 2 315 16 14 13 16 53 16 284 0 266 0 269 -22 284 -19 14 -66 16 -318 16 -182 0 -302 -5 -312 -11z"/>
                                    <path d="M3668 1279 c-17 -9 -18 -34 -18 -289 0 -266 1 -280 19 -290 12 -6 132 -10 320 -10 259 0 302 2 315 16 14 13 16 53 16 284 0 266 0 269 -22 284 -19 14 -66 16 -318 16 -182 0 -302 -5 -312 -11z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="p-3 text-center" style={{fontSize:'22px',lineHeight: '36px'}}>You choose how often you want to go.</div>
                        </div>
                        <div className="col p-2 shadow rounded d-flex flex-column justify-content-evenly m-3" style={{backgroundColor:'white',minWidth:'20%',maxHeight:'50%'}}>
                            <div className="p-3">
                                <svg style={{border:'2px solid #FF5722',backgroundColor:'#FF5722'}} className="p-1 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                    <path d="M1405 4957 c-33 -18 -84 -84 -85 -108 0 -3 19 -11 42 -18 125 -38 207 -143 216 -276 3 -61 -5 -106 -61 -340 -36 -148 -67 -278 -69 -287 -2 -13 63 -55 287 -180 l290 -163 3 -660 2 -660 -55 -877 c-49 -798 -53 -882 -40 -925 25 -86 106 -143 200 -143 102 0 185 67 204 164 5 28 30 393 56 811 25 418 48 797 52 843 l6 82 43 0 c51 0 49 3 59 -170 3 -58 25 -436 50 -840 43 -698 47 -737 68 -780 13 -25 41 -58 65 -74 87 -61 224 -42 286 39 53 69 53 50 -2 955 l-52 835 -1 699 c-2 676 -1 699 17 709 59 31 620 351 628 357 4 5 -33 113 -84 242 -86 216 -93 238 -93 303 0 126 75 239 190 287 62 25 67 45 31 110 -41 73 -153 112 -221 77 -28 -15 -76 -58 -90 -84 -8 -14 -14 -128 -17 -359 l-5 -339 -245 -138 -245 -138 -335 0 -335 0 -245 138 -245 138 -5 339 c-3 231 -9 345 -17 359 -51 88 -162 120 -248 72z"/>
                                    <path d="M2393 4746 c-327 -107 -351 -546 -37 -688 39 -18 68 -22 139 -23 78 0 98 4 151 28 73 34 142 101 181 177 25 49 28 65 28 155 0 89 -3 106 -27 155 -35 71 -107 143 -178 177 -67 32 -190 41 -257 19z"/>
                                    <path d="M1175 4687 c-23 -13 -49 -39 -61 -62 -12 -22 -60 -198 -107 -392 -83 -343 -86 -353 -119 -381 -18 -16 -129 -111 -246 -211 l-213 -181 -120 0 c-79 0 -131 -5 -153 -14 -46 -19 -104 -72 -129 -120 l-22 -41 -3 -1478 c-1 -1024 1 -1491 8 -1519 6 -21 27 -57 46 -78 98 -108 272 -87 344 40 l25 45 3 823 3 822 32 0 32 0 118 -344 117 -343 40 -477 c24 -285 46 -491 54 -510 17 -41 71 -95 113 -112 18 -8 56 -14 85 -14 115 0 208 95 208 211 0 30 -18 265 -40 524 l-39 470 -106 305 -105 305 0 651 c0 631 -3 697 -30 727 -4 5 -32 -3 -61 -18 -48 -23 -51 -23 -29 -4 14 11 111 95 217 185 106 90 199 177 208 194 21 40 205 800 205 845 0 65 -41 129 -102 161 -42 22 -126 18 -173 -9z"/>
                                    <path d="M3698 4670 c-44 -13 -87 -49 -108 -90 -39 -76 -32 -100 130 -510 83 -208 159 -389 169 -402 10 -12 109 -99 219 -193 110 -93 198 -171 197 -173 -2 -2 -22 6 -45 18 -80 41 -80 45 -80 -705 l0 -641 -105 -287 c-78 -214 -105 -299 -105 -334 0 -74 207 -1049 233 -1103 60 -119 222 -147 324 -57 43 38 72 98 73 149 0 20 -45 252 -100 515 l-100 477 106 291 c59 159 109 296 111 302 3 7 20 13 39 13 l33 0 3 -822 3 -823 25 -45 c72 -127 246 -148 344 -40 19 21 40 57 46 78 7 28 9 495 8 1519 l-3 1478 -22 41 c-25 48 -83 101 -129 120 -22 9 -74 14 -153 14 l-119 0 -251 213 -250 212 -142 355 c-154 383 -168 408 -247 430 -43 11 -66 12 -104 0z"/>
                                    <path d="M358 4296 c-58 -21 -123 -62 -157 -101 -204 -232 -56 -595 249 -613 41 -2 86 1 101 6 15 6 65 65 129 154 92 127 106 152 125 223 23 85 22 100 -17 171 -28 51 -123 131 -183 153 -65 24 -188 28 -247 7z"/>
                                    <path d="M4517 4291 c-107 -43 -189 -132 -220 -237 -13 -45 -12 -53 6 -99 29 -71 235 -355 266 -367 14 -5 60 -8 101 -6 308 18 454 385 245 617 -19 21 -63 53 -97 72 -57 30 -72 33 -158 36 -76 3 -105 -1 -143 -16z"/>
                                    </g>
                                </svg>
                            </div>
                            
                            <div className="p-3 text-center" style={{fontSize:'22px',lineHeight: '36px'}}>You choose whether you want digital fitness options too.</div>
                        </div>
                        <div className="col p-2 shadow rounded d-flex flex-column justify-content-evenly m-3" style={{backgroundColor:'white',minWidth:'20%',maxHeight:'50%'}}>
                            <div className="p-3">
                                <svg style={{border:'2px solid #FF5722',backgroundColor:'#FF5722'}} className="p-1 rounded" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                    <path d="M361 3984 c-169 -45 -301 -180 -346 -351 -23 -87 -22 -2060 0 -2148 45 -172 179 -305 352 -350 50 -13 262 -15 1588 -15 1281 1 1525 3 1500 14 -41 18 -83 69 -91 110 -3 19 -4 79 -2 134 2 83 7 106 24 129 73 98 195 98 268 0 17 -23 22 -46 24 -129 2 -55 1 -115 -2 -134 -8 -41 -50 -92 -91 -110 -48 -21 1087 -20 1168 1 173 45 307 178 352 350 23 89 23 2061 0 2150 -45 172 -179 305 -352 350 -81 21 -1216 22 -1168 1 41 -18 83 -69 91 -110 3 -19 4 -79 2 -134 -2 -83 -7 -106 -24 -129 -73 -98 -195 -98 -268 0 -17 23 -22 46 -24 129 -2 55 -1 115 2 134 8 41 50 92 91 110 47 21 -3016 19 -3094 -2z m1165 -650 c53 -39 69 -71 69 -134 0 -63 -16 -95 -69 -134 -26 -20 -42 -21 -384 -24 -234 -2 -370 1 -394 8 -101 29 -140 168 -71 251 50 58 53 59 455 56 353 -2 368 -3 394 -23z m2089 -78 c58 -44 65 -74 65 -267 0 -154 -2 -177 -21 -215 -57 -118 -222 -116 -280 3 -19 38 -20 57 -17 226 3 182 3 184 30 219 15 19 42 42 60 52 45 23 120 15 163 -18z m-1129 -562 c53 -39 69 -71 69 -134 0 -63 -16 -95 -69 -134 -27 -21 -37 -21 -864 -24 -569 -2 -849 0 -874 8 -101 29 -140 168 -71 251 52 61 10 59 935 56 838 -2 847 -2 874 -23z m1121 -286 c61 -36 73 -82 73 -279 0 -150 -3 -179 -19 -209 -55 -104 -198 -116 -269 -22 -27 35 -27 37 -30 216 -3 148 0 187 13 223 35 91 143 124 232 71z m-1121 -354 c53 -39 69 -71 69 -134 0 -63 -16 -95 -69 -134 -27 -21 -37 -21 -864 -24 -569 -2 -849 0 -874 8 -101 29 -140 168 -71 251 52 61 10 59 935 56 838 -2 847 -2 874 -23z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="p-3 text-center" style={{fontSize:'22px',lineHeight: '36px'}}>You choose how long you want to start off with.</div>
                        </div>
                    </div>
                    <section className="section_heading">
                        <div className="container-fluid pb-5">
                            <p className="" style={{marginBottom:'20px',textAlign:'left',fontSize: '20px',lineHeight: '33px'}}>
                                Once you’ve decided what your fitness needs are, we recommend a pass that’s perfectly suited to them.
                            </p>
                        </div>
                    </section>
                </div>
                <section className="section_heading">
                    <div className="container-fluid p-5 " style={{backgroundColor:'black',color:'white'}}>
                        
                        <div className='mb-5'>
                            <p className="" style={{marginBottom:0,fontSize: '22px',lineHeight: '20px'}}>
                                Use lots of different gyms.
                                
                            </p>
                            <p className="" style={{marginBottom:0,fontSize: '22px',lineHeight: '20px'}}>
                                Choose online fitness if you want it.
                            </p>
                            <p className="" style={{marginBottom:0,fontSize: '22px',lineHeight: '20px'}}>
                                Workout whenever you want.
                            </p>
                            <p className="" style={{marginBottom:0,fontSize: '22px',lineHeight: '20px'}}>
                                All with a pass you can cancel anytime.
                            </p>
                        </div>
                        
                        <NavLink to={"/flexible-fitness"}>
                            <button type="button" className="explore-btn rounded-pill">
                                <span className="position-relative fs-5">
                                    Pick a fitness that fits to you
                                </span>
                            </button>
                        </NavLink>
                    </div>
                </section>
            <Multiplesection_footer/>

        </>
    )
}

export default Flexible_fitness