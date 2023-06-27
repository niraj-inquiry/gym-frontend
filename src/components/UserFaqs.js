import React,{Component,useEffect,useState} from 'react';
import {Faq,NewsFeed,PlayStore,Footer, Header} from "../components";
import { API } from "../generalfunction";
import * as Images from "../assets";

const UserFaqs = () => {

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
    <Header Logo={Images.logo} Hamburger={Images.menu} />
        <section className="section_heading commpad">
            <div className="container-fluid">
                <h2 className="text-center">FAQ's</h2>
                    {data && data?.map((item,index)=> 
                        <Faq
                            onClick={()=>onShowfaq(index)}
                            Sign={item.status===false?"+":"-"}
                            Question={
                                item.question
                            }
                            Answer={
                                item.answer
                            }
                            ActiveView={item.status === true ?"acc-active":""}
                            BlockAns={item.status === false?"d-none":""}
                        />
                    )}      
            </div>
        </section>
        <Footer/>
       
    </>
  )
}

export default UserFaqs