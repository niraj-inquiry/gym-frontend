import React,{Component,useEffect,useState} from 'react';
import {Faq,NewsFeed,PlayStore,Footer} from "../components";
import { API } from "../generalfunction";
import * as Images from "../assets";

const Multiplesection_footer = () => {

    const [data,setData]=useState([]);
    
    const onLoad=()=>{
        API.get('v1.0/faqs/get-faqs_withoutcenterid')
        .then(response => {
            
            const temp=[]
            response.data.data?.map((item) => {
                item.status = true;
                temp.push(item)
            })
            setData(temp);
        })
        .catch(error => {
            console.log(error);
            
        });
    }

    const onShowfaq=(index)=>{
            let tempval=[...data]
            tempval[index].status=!tempval[index].status
           
           setData(tempval)
    }


    useEffect(()=>{
        onLoad();
    },[])
  return (
    <>
        <section className="section_heading commpad">
            <div className="container-fluid">
                <h2 className="text-center">FAQ's</h2>
                    {data && data?.map((item,index)=> 
                        <Faq
                            onClick={()=>onShowfaq(index)}
                            Sign={item.status===true?"+":"-"}
                            Question={
                                item.question
                            }
                            Answer={
                                item.answer
                            }
                            ActiveView={item.status === true ?"acc-active":""}
                            BlockAns={item.status === true?"d-none":""}
                        />
                    )}      
            </div>
        </section>
        <section>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <NewsFeed
                            Title={"Stay Updated With Us"}
                            Icon={Images.darkmail}
                            Details={
                                "Sign up to get a regular dose of fitness news, updates and exclusive offers."
                            }
                        />
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <PlayStore
                            Title={"GET OUR APP TODAY"}
                            PhoneImage={Images.mobile}
                            GooglePlayImage={Images.google_play}
                            AppStoreImage={Images.app_store}
                            PlayStoreLink={
                                "https://play.google.com/store/games"
                            }
                            AppStoreLink={
                                "https://www.apple.com/in/app-store/"
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Multiplesection_footer