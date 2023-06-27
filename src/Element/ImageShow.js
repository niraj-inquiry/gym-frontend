import React, { useState, useEffect } from "react";
import { baseURL, fetchImage, isEmpty } from "../generalfunction";
import * as Images from "../assets";

export const ImageShow = ({ imageurl, style, className, width, height }) => {

    const [imgurl, setImgurl] = useState(imageurl)
    useEffect(() => {
        fetchImage(`${baseURL}${imageurl}`).then(res => {
            setImgurl(res)
        })
    }, [imgurl])
    // }, [])
    console.log("Ddddddddddd", imgurl)
    return (
        <>
            {isEmpty(imageurl) ? (<img src={Images.superactivelogo} style={style} className={className} width={width} height={height} />) :
                (<img src={imgurl} style={style} className={className} width={width} height={height} />)
            }
        </>

    )
}



