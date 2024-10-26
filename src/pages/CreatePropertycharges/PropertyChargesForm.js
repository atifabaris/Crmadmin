import React, { useEffect, useState } from "react";

import CustomInputField from "../../common/CustomInputField";
import {getCreblock, postNewpropertycharges } from "../../api/login/Login";
import { toast, ToastContainer } from 'react-toastify';

export default function PropertychargesForm(){
    const [block, setblock] = useState(null)
    const [store, setStore] = useState({
        name: "",
        code: "",
        block: "",
        amount: "",
    })
    const getData= async () =>{
        try{
            const res = await getCreblock(0 , 100)
            setblock(res.data?.block)
        }catch(error){

        }
    }
    useEffect(()=>{
        getData()
    }, [])

    const handleChange = (e) =>{
        const {name, value} = e.target
        const clone = {...store}
        clone[name] = value
        setStore(clone)
    }
    const Submit = async()=>{
        try{
            const res = await postNewpropertycharges(store)
            if(res.statusCode == 200){
                toastSuccessMessage("success")
            }else{
                toasterrorMessage("error")
            }
        }catch(error){

        }
    }
    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };
    const toasterrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };
    return (
        <div className="mt-3">
            <ToastContainer />
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Name</label>
                                <div className="w-100">
                                    <CustomInputField type={"text"} 
                                        value={store.name}
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Code</label>
                                <div className="w-100">
                                    <CustomInputField type={"number"} 
                                        value={store.code}
                                        name="code"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Block</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="city">
                                            <option>Select</option>
                                             {block && block?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        <div className="col-6">
                            <div className="mt-2">
                                <label className="d-block my-1">Amount</label>
                                <div className="w-100">
                                    <CustomInputField type={"number"} 
                                        value={store.amount}
                                        name="amount"
                                        onChange={handleChange}    
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <button className="btn btn-primary m-0" type="button" onClick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}