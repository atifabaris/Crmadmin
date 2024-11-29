import React from "react";
import CustomInputField from "../../../../../../../../common/CustomInputField";

const MassageAction = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-6">
          <div class="mb-3 form-check">
            <label class="form-check-label" for="exampleCheck1">
            Error Message
            </label>
            <CustomInputField type={"text"} />
          </div>
        </div>
        <div className="col-6">
          <div class="mb-3 form-check">
            <label class="form-check-label" for="exampleCheck1">
              Message Type
            </label>
            <CustomInputField type={"text"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassageAction;
