import React, { useEffect, useState } from "react"
import Review_card from "./card/Review_card"
import { Header } from "../Element/Header";
import SideMenu from "../Element/vendercom/SideMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { API, isEmpty } from "../generalfunction";
import { CustomButton } from "../Element/vendercom/AddButton";
import { InputBoxCustom, InputBoxcmp } from "../Element/vendercom/InputBox";
import useGeoLocation from "../geolocation";

const Revieworders = () => {
    //  const {id}=state.id
    // console.log("location",id)

    const reviewlist = [
        { name: "Review your order", status: true },
        { name: "Payment", status: false },
        { name: "Your health", status: false },
        { name: "Success", status: false },
    ]
    const location = useLocation();
    var templocation = location?.state
    console.log('templocation', location?.state?.plan)
    const voucherdata = location?.state?.voucherdata
    console.log('voucherdata', templocation?.vendor?._id)

    const naivgation = useNavigate()
    const [reviewdata, setReviewdata] = useState([])
    // const [reviewdata, setReviewdata] = useState([])
    const [voucherflag, setVocherflag] = useState(false)
    const [totalamount, setTotalamount] = useState(0)
    const [referalcode, setReferalcode] = useState()
    const [reviewliststate, setReviewliststate] = useState(reviewlist)
    let [planname, setPlanname] = useState("")
    let [success, setSuccess] = useState(0)
    let [payamount, setPayamount] = useState(0)

    let geolocation = useGeoLocation()

    console.log("geolocation---------", )
    const onLoad = () => {
        if (!isEmpty(location?.state?.voucherdata)) {
            setVocherflag(true)
            setReferalcode(location?.state?.voucherdata)
        }
        if (!isEmpty(templocation?.vendor?._id)) {
            let body = {
                userid: JSON.parse(localStorage.getItem("userdata"))?._id,
                selectvendorid: templocation?.vendor?._id,
                selectplanid: templocation?.plan?._id,
                data: templocation
            }

            API.post('v.1.0/review-order/add-review-order', body).then(res => {
                console.log("res add review order", res?.data)
                if (res?.data?.status) {

                }
                else {
                    // alert("Already Purchase order")
                    naivgation('/revieworder', { state: null })
                }
            })
        }
        API.get(`v.1.0/review-order/get-review-order/${JSON.parse(localStorage.getItem("userdata"))?._id}`).then(res => {
            console.log("onDeleteCardreview", res?.data)

            // console.log("localStorage.setItem",JSON.stringify(localStorage.setItem("reviewdata",res?.data?.data)))
            if (res?.data?.status) {
                if (res?.data?.data?.length > 0) {
                    setReviewdata(res?.data?.data)
                    let temp = res?.data?.data
                    var sum = 0
                    temp.forEach(element => {
                        let calamount = !isEmpty(element?.data?.plan?.rate) && element?.data?.plan?.rate
                        sum = Math.floor(sum) + Math.floor(calamount)

                        setTotalamount(sum)
                    });
                }
            }
            else {
                if (res?.data?.data.length === 0) {
                    setReviewdata(res?.data?.data)
                }
            }
        })


    }
    const onDeleteCard = (index, item) => {
        console.log("ondeleted", item._id)
        // const updatedItems = reviewdata.filter((_, i) => i !== index._id);
        // setReviewdata(updatedItems)
        // console.log('updatedItems',updatedItems)
        // let temp = [...reviewdata];
        // let res = temp.filter((v, i) => console.log('onDeleteCard',i) );
        
        // setReviewdata(res);

        // console.log('deted reviewdata',res)
        // onLoad()
        // let body = {
        //     userid: item?.userid,
        //     selectvendorid: item?.selectvendorid,
        //     selectplanid: item?.selectplanid
        // }

        // API.delete(`v.1.0/review-order/delete-review-record-by-id/${body?.userid}/${body?.selectvendorid}/${body?.selectplanid}`).then(res => {
        //     console.log('delete api', res?.data)

        //     if (res?.data?.status) {
        //         onLoad()

        //     }
        //     else {
        //         onLoad()
        //     }
        // })
    }

    const onChangestate = (index) => {

        let tempvar = [...reviewliststate]
        tempvar.forEach(element => {
            element.status = false
        });
        tempvar[index].status = true
        setReviewliststate(tempvar)

    }


    const onConfirmPay = async () => {
        let temparray = [...reviewdata]
        let count = 0

        temparray.map(async (item, index) => {
            count = count + 1

            if (!isEmpty(item?.data?.vendor?._id)) {
                const createres = await API.post('v.1.0/memberofplan/add-member-plan', {
                    userid: JSON.parse(localStorage.getItem("userdata"))?._id,
                    selectvendorid: item?.data?.vendor?._id,
                    selectplanid: item?.data?.plan?._id,
                    totalamount: totalamount
                })
                if (createres.data.status == false) {
                    let temp = planname
                    setPlanname(temp.concat(`${createres?.data?.name},`))
                }
            }
            setSuccess(count)

            if (count === reviewdata?.length) {
                temparray.map(async (item, index) => {
                    const ress = await API.delete(`v.1.0/review-order/delete-review-record-by-id/${item.userid}/${item.selectvendorid}/${item.selectplanid}`)
                    console.log("esssss", ress)
                    onLoad()
                })

            }
        })


    }
    const onChangeEvent = (event, data) => {
        switch (event) {
            case "+":
                let increamount = Math.floor(totalamount) + Math.floor(data)
                setTotalamount(increamount)
                break;
            case "-":
                let desamount = Math.floor(totalamount) - Math.floor(data)
                setTotalamount(desamount)
                break;

            default:
                break;
        }

    }
    useEffect(() => {
        // window.location.reload(true)
        onLoad()
    }, [])
    console.log("reviewdata", reviewdata)
    const onApply = async () => {
        const resdata = await API.get(`v.1.0/voucher/voucher-info/${referalcode}`)
        let discount = resdata?.data?.data[0]?.discount
        let discountamount = (totalamount * Math.floor(discount)) / 100
        let remainingamount = totalamount - discountamount
        setPayamount(remainingamount)
        console.log("dussssssssss", remainingamount)

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 px-0">
                        {/* <SideMenu /> */}

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 px-0">
                        <Header />

                        <div className="mx-auto" style={{ width: '70%' }}>
                            <div className="row text-start mt-5">
                                <div className="col-1 rounded-pill border px-3 py-1 w-auto fs-5" style={{ color: reviewliststate[0].status ? "black" : "#9DB3BB" }}>{1}</div>
                                <div className="col-11 fs-4" style={{ color: reviewliststate[0]?.status ? "black" : "#9DB3BB" }}>{reviewliststate[0].name}</div>
                            </div>

                            {reviewliststate[0]?.status && (
                                <>
                                    {reviewdata?.length > 0 && (reviewdata?.map((item, index) =>
                                    (

                                        <Review_card
                                            data={item}
                                            onDelete={() => onDeleteCard(index, item)}
                                            vendoritem={item?.data?.vendor}
                                            plan={item?.data?.plan}
                                            onSave={(event, data) => onChangeEvent(event, data)}
                                        />


                                    )
                                    )
                                    )}

                                    {reviewdata.length === 0 ? (
                                        isEmpty(reviewdata[0]?.data?.plan) && <>
                                            <div className="fs-5">
                                                {"Your basket is empty"}
                                            </div>
                                            <div onClick={() => naivgation('/centers')}>
                                                {"Find a gym near you"}
                                            </div>

                                        </>
                                    ) : (
                                        <>
                                            {/* start vouchar */}
                                            <div className="border my-3 mt-5"></div>
                                            <div className="row mx-0">
                                                <div className=" fs-5 py-1">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            Add voucher or referral
                                                        </div>
                                                        <div onClick={() => setVocherflag(!voucherflag)} className="fs-3 fw-bold" >
                                                            {voucherflag ? "-" : "+"}
                                                        </div>
                                                    </div>
                                                    {voucherflag &&
                                                        <div className="d-flex justify-content-between my-3 ">
                                                            <InputBoxcmp
                                                                className={"w-75"}
                                                                placeholder={"Insert voucher code"}
                                                                defaultValue={referalcode}
                                                                state={referalcode}
                                                                setState={setReferalcode}
                                                            />
                                                            <CustomButton onClick={() => onApply()} className="cusbutton px-3 py-2 " label={"Apply"} />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="border my-3 mb-5"></div>
                                            {/* end vouchar */}

                                            {/* end calculation */}
                                            {/* start calculation */}
                                            <div className="row mx-0">
                                                <div className="col text-start fs-5">
                                                    Total
                                                </div>
                                                <div className="col text-end">
                                                    {`${geolocation?.country == 'India' ? '₹' : '£'} ${totalamount}`}
                                                </div>

                                            </div>
                                            {voucherflag && (
                                                <div className="row mt-3 mx-0">
                                                    <div className="col text-start fs-5">
                                                        Pay Amount
                                                    </div>
                                                    <div className="col text-end">
                                                        {`${geolocation?.country == 'India' ? '₹' : '£'} ${payamount}`}
                                                    </div>

                                                </div>
                                            )}
                                            {/* end calculation */}
                                            <div className="row mt-4">
                                                <CustomButton onClick={() => onChangestate(1)} className="checkoutbutton px-3 py-2 "
                                                    label={"Pay Now"} />


                                            </div>
                                            <div onClick={() => naivgation('/centers')} className="text-decoration-underline mt-4">
                                                {"Browse/add more gyms"}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        {/* payment */}

                        <div className="mx-auto" style={{ width: '70%' }}>
                            <div className="row text-start mt-5">
                                <div className="col-1 rounded-pill border px-3 py-1 w-auto fs-5" style={{ color: reviewliststate[1].status ? "black" : "#9DB3BB" }}>{2}</div>
                                <div className="col-11 fs-4" style={{ color: reviewliststate[1].status ? "black" : "#9DB3BB" }}>{reviewliststate[1].name}</div>
                            </div>
                            {reviewliststate[1].status && (
                                <div className="px-5">
                                    {/* <div className="text-start py-3 fs-5">
                                        {"Payment details"}
                                    </div> */}
                                    <div className="py-3" style={{ width: '50%' }}>
                                        <InputBoxCustom
                                            inputboxcontainer={"inputboxcontainer"}
                                            inputcss={'inputbox'}
                                            label={"Cardholder name"} />
                                        <div className="py-3">
                                            <InputBoxCustom label={"Card number"}
                                                inputcss={'inputbox'}
                                                inputboxcontainer={"inputboxcontainer"}
                                                iconname={"fa fa-lock"} />
                                        </div>
                                        <div className="row py-3">
                                            <div className="col">
                                                <InputBoxCustom label={"Expiry date"}
                                                    inputcss={'inputbox'}
                                                    inputboxcontainer={"inputboxcontainer"}
                                                />

                                            </div>
                                            <div className="col">
                                                <InputBoxCustom
                                                    inputboxcontainer={"inputboxcontainer"}
                                                    inputcss={'inputbox'}
                                                    label={"Security code"}
                                                    iconname={"fa fa-credit-card"}
                                                />
                                            </div>
                                        </div>

                                        <div className="py-3">
                                            <i className="fa fa-lock"></i>
                                            Your details are safely stored using secure encryption
                                        </div>

                                        <div className="d-flex justify-content-between py-3">
                                            <div>
                                                Total Amount
                                            </div>
                                            <div>
                                                {`${geolocation?.country == 'India' ? '₹' : '£'} ${totalamount}`}
                                            </div>
                                        </div>
                                        <CustomButton onClick={() => onConfirmPay()} className="checkoutbutton px-3 py-2 "
                                            label={"Confirm payment"} />
                                        <div className="py-3">
                                            View our Privacy Policy & Cookie Policy
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>

                        {/* endpayment */}

                        {/* Your health */}

                        <div className="mx-auto" style={{ width: '70%' }}>
                            <div className="row text-start mt-5">
                                <div className="col-1 rounded-pill border px-3 py-1 w-auto fs-5" style={{ color: reviewliststate[2].status ? "black" : "#9DB3BB" }}>{3}</div>
                                <div className="col-11 fs-4" style={{ color: reviewliststate[2].status ? "black" : "#9DB3BB" }}>{reviewliststate[2].name}</div>
                            </div>
                            {reviewliststate[2].status && (
                                <div>

                                </div>
                            )}

                        </div>

                        {/* endYour health */}

                        {/* Your success */}

                        <div className="mx-auto" style={{ width: '70%' }}>
                            <div className="row text-start mt-5">
                                <div className="col-1 rounded-pill border px-3 py-1 w-auto fs-5" style={{ color: reviewliststate[3].status ? "black" : "#9DB3BB" }}>{4}</div>
                                <div className="col-11 fs-4" style={{ color: reviewliststate[3].status ? "black" : "#9DB3BB" }}>{reviewliststate[3].name}</div>
                            </div>

                        </div>

                        {/* endYour success */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Revieworders