import React, { useState } from "react";
import CustomInputField from "../../../../../../../common/CustomInputField";
import NewRulesTab from "./newRulesTab/NewRulesTab";

const NewRules = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10">
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <CustomInputField
              type={"text"}
              id="nameInput"
              placeholder="Enter rule name"
            />
          </div>

          {/* Checkboxes Section */}
          <div className="card p-4 mb-5">
            <div className="row">
              <div className="col-12">
                <h5 className="mb-3">Apply on</h5>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                  />
                  <label className="form-check-label" htmlFor="check1">
                    Creating Groups
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                  />
                  <label className="form-check-label" htmlFor="check2">
                    Load
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check3"
                  />
                  <label className="form-check-label" htmlFor="check3">
                    New
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                  />
                  <label className="form-check-label" htmlFor="check4">
                    Edit
                  </label>
                </div>
              </div>

              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check5"
                  />
                  <label className="form-check-label" htmlFor="check5">
                    Before Save
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check6"
                  />
                  <label className="form-check-label" htmlFor="check6">
                    Before Delete
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check7"
                  />
                  <label className="form-check-label" htmlFor="check7">
                    On Enter
                  </label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check8"
                  />
                  <label className="form-check-label" htmlFor="check8">
                    On Leave
                  </label>
                </div>
              </div>
            </div>
          </div>
          <NewRulesTab />
        </form>
      </div>
    </div>
  );
};

export default NewRules;
