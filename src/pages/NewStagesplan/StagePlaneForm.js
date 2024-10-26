import React, { useState } from "react";
import CustomInputField from "../../common/CustomInputField";

export default function StagePlaneForm(){
    const [property , setProperty] = useState(null)
    return(
        <div>
            <form>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                            <div className="mt-2">
                                    <label className="d-block my-1">Name</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} 
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="mt-2">
                                    <label className="d-block my-1">Code</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="mt-2">
                                    <label className="d-block my-1">Property</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" name="city">
                                            <option>Select</option>
                                            {/* {property && property?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })} */}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-2">
                                    <label className="d-block my-1">Stage Plans</label>
                                    <div className="d-flex gap-2">
                                        <div>
                                        <label className="d-block my-1">Stage Plans</label>   
                                        <CustomInputField
                                            type="number"
                                        />
                                        </div>
                                        <div>
                                        <label className="d-block my-1">Stage Plans</label>
                                        <CustomInputField
                                            type="number"
                                        />
                                        </div>
                                        <div>
                                        <label className="d-block my-1">Stage Plans</label>
                                        <CustomInputField
                                            type="number"
                                        />
                                        </div>
                                        <div>
                                            <button className="btn btn-primaty">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}