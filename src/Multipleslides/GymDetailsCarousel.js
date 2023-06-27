import React, { useEffect, useState } from 'react'
import * as Images from '../../src/assets'
import { ImageShow } from '../Element/ImageShow'
const GymDetailsCarousel = ({ photos }) => {
    console.log('photos',photos)
    const [carouselphoto, setCarouselphoto] = useState([])

    const activeImage = (item, index,e) => {
        let temparray=[...carouselphoto]
        temparray.forEach(element => {
            element.status=false
        })
        temparray[index].status=true
        setCarouselphoto(temparray)
       
       
    }

    const onLoad = () => {
        let temparrray = []
        photos.forEach((element, index) => {
            let tempjson = { url: '', status: false }
            if (index === 0) {
                tempjson = { url: element, status: true }
                temparrray.push(tempjson)
            }
            else {
                tempjson = { url: element, status: false }
                temparrray.push(tempjson)
            }

        });
        setCarouselphoto(temparrray)

    }
    useEffect(() => {
        onLoad()
    }, [])

    console.log('carousel photo', photos, carouselphoto)

    return (
        <div style={{width:900}} className='mx-auto'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel " style={{}}>
                <div className="carousel-inner1 mx-auto">
                    {carouselphoto.map((item, index) =>
                        <div key={index} className={item?.status ? "carousel-item active px-3 " : "px-3 carousel-item "}>
                            {/* <ImageShow imageurl={item?.url} className="d-block w-100 " style={{height:400}}/> */}
                            
                        </div>
                    )}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rounded-pill " aria-hidden="true" style={{backgroundColor:'#000'}}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon rounded-pill" aria-hidden="true" style={{backgroundColor:'#000'}}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='row py-2 my-2 mx-auto '>
            {carouselphoto.map((item, index) =>

                <div className={item?.status ? "col border py-2":"col py-2"} key={index} onClick={(e) => activeImage(item, index,e)}>
                    {/* <ImageShow imageurl={item?.url} height={80} width={150}/> */}
                </div>
            )}
            </div>
        </div>
    )
}

export default GymDetailsCarousel