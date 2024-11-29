import React from "react";
import SelectOption from "../../../common/selectOption";
import CustomInputField from "../../../common/CustomInputField";
import { FaDownload } from "react-icons/fa6";
import { BsFillFileSpreadsheetFill } from "react-icons/bs";
import TrendTable from "../trendTable/TrendTable";

const TrendViewDesktop = () => {
  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card p-4 shadow-sm">
          <div className="row mb-3 border-bottom pb-3 py-2 bg-light rounded shadow-sm mb-2">
            <div className="col-3">
              <SelectOption options={options} />
            </div>
            <div className="col-3">
              <SelectOption options={options} />
            </div>
            <div className="col-3">
              <SelectOption options={options} />
            </div>
            <div className="col-3 d-flex align-items-center">
              <button type="button" className="btn btn-primary w-100 fw-bold fs-5">
                Submit
              </button>
            </div>
          </div>

          <div className="row justify-content-between align-items-center border-bottom py-3">
            <div className="col-3">
              <SelectOption options={options} />
            </div>
            <div className="col-8 d-flex justify-content-end align-items-center">
              {/* Search Input and Buttons */}
              <div className="d-flex justify-content-end align-items-center w-100">
                <CustomInputField
                  placeholder="Search"
                  className=" me-3"
                  style={{ width: "400px" }}
                />
                <button type="button" className="btn btn-outline-primary me-2 fw-bold fs-5 ">
                  123
                </button>
                <button type="button" className="btn btn-primary me-2">
                  <BsFillFileSpreadsheetFill size={25} />
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <FaDownload />
                </button>
              </div>
            </div>
          </div>

          {/* Adding Border to the Table */}
          <TrendTable />
        </div>
      </div>
    </div>
  );
};

export default TrendViewDesktop;
