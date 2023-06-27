
import React from "react";
import SideMenu from "../../Element/vendercom/SideMenu";
import { Header } from "../../Element/Header";
import { InputBoxcmp } from "../../Element/vendercom/InputBox";
import { Dropdown } from "../../Element/vendercom/Dropdown";

const Event = () => {
    const eventstatus=["Comming soon"]
    return (
        <>
            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-2 px-0 side-nav-bar">
                            <SideMenu />
                        </div>
                        <div class="col-lg-10 col-md-10 col-sm-10 px-0">
                            <Header />
                            <div className="row">
                            <InputBoxcmp label={"Name"}/>
                            </div>
                            <div className="row">
                            <InputBoxcmp label={"Title"}/>
                            </div>
                            <div className="row">
                            <Dropdown label={"Event Status"}
                            defaultvalue={"Please Select Any One"}  
                            json={eventstatus}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Event
