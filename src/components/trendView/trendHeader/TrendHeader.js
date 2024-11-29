import React from "react";
import CustomInputField from "../../../common/CustomInputField";
import { FaArrowsRotate } from "react-icons/fa6";

const TrendHeader = () => {
  return (
    <div className="row bg-primary p-3 align-items-center">

      <div className="col-12 col-md-6">
        <h3 className="fs-2 text-white">Trend View</h3>
      </div>


      <div className="col-12 col-md-6 d-flex justify-content-between align-items-center gap-3">
        <div className="w-100">
          <CustomInputField
            placeholder={"Press Space for Global Search"}
            className="p-2 w-100 border rounded-3 shadow-sm"
          />
        </div>

    
        <div className="d-flex align-items-center ms-2 gap-3">
        
          <div className="bg-white d-flex p-1 px-2 rounded-3 shadow-sm align-items-center justify-content-center">
            <span className="bg-primary text-white p-2 px-3 rounded cursor-pointer fw-bold" >V</span>
            <span className="mx-2 text-primary fs-4 font-weight-bold cursor-pointer">Q</span>
          </div>

          <div className="p-2 border border-light rounded-3 shadow-sm square-border d-flex justify-content-center align-items-center bg-primary">
            <FaArrowsRotate size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendHeader;
