import React, { useState,useEffect } from "react";
import { fetchImage } from "../generalfunction";


const ImgCmp=({imgurl})=>{
    const [img,setImg]=useState();
    const imageUrl = imgurl;
    useEffect(() => {
        fetchImage(imageUrl).then(res=>{
            console.log('image response',res);
            setImg(res)
        });

    }, []);
    console.log('image uel',img);
    return(
        <>
            <img src={img} className="card-img-top gym-img" alt="..." height={250} style={{borderBottom:'5px solid #ff5722'}}/>
        </>
    )
}
export default ImgCmp;