import React, { Component } from "react";
import "../css/Style.css";
export const PlayStore = ({
    Title,
    PhoneImage,
    GooglePlayImage,
    AppStoreImage,
    PlayStoreLink,
    AppStoreLink,
}) => {
    return (
        <div className="newsfeed section_heading bgg-white">
            <div className="news-inner text-center">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <img
                            className="w-50 h-auto mobile-device"
                            src={PhoneImage}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-6 text-start get-app-today">
                        <h3>{Title}</h3>
                        <div className="d-flex justify-content-start">
                            <a href={PlayStoreLink} target="_blank">
                                <img
                                    className="appstore"
                                    src={GooglePlayImage}
                                />
                            </a>
                            <a href={AppStoreLink} target="_blank">
                                <img className="appstore" src={AppStoreImage} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
