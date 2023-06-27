import React from 'react';
import { Faq, NewsFeed, PlayStore, Footer, Header } from "../components";
import * as Images from "../assets";
import { SubHomeBanner } from '../Element/HomeBanner';

const NotFound = () => {
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />
            <div className='' style={{position:'relative'}}>
                <div className='not-found-layout mx-auto ' style={{ position: 'absolute', color: '#fff', height: '-webkit-fill-available'}} >

                    <div className='col-lg-12 d-flex justify-content-evenly flex-column align-items-center'>
                        <div className='row heading fw-bold text-center'>
                            {"Looks like you could use a spot..."}
                        </div>
                        {/* <div className='row fw-bold number'>{"404"}</div> */}
                        {/* <div className='title row'>
                            {"The page you are looking for is unavailable."}
                        </div> */}

                        <div className='row'>
                            <div className='subtitle fw-bold text-center'>
                                {"Find gyms near you"}
                            </div>
                            <div className='mx-auto not-found-image'>
                                <SubHomeBanner ImageLocate={Images.crosshair} />
                            </div>

                        </div>
                    </div>
                </div>
                <img src={Images.not_found} />

            </div>
            <Footer />
        </>

    )
}

export default NotFound