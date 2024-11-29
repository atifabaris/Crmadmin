import React, { useState } from "react";
import CustomInputField from "../../../../../../common/CustomInputField";
import ConditionsRule from "../../customField/customRules/newRules/conditionsRules/ConditionsRule";

const AddAutorization = () => {
  const [addFilter, setAddFilter] = useState(false);
  const [authLevels, setAuthLevels] = useState([
    {
      id: 1,
      levels: "Level -1",
      users: "",
      message: "",
      emailTemplate: "",
    },
    {
      id: 2,
      levels: "Level -2",
      users: "",
      message: "",
      emailTemplate: "",
    },
    {
      id: 3,
      levels: "Level -3",
      users: "",
      message: "",
      emailTemplate: "",
    },
  ]);

  function handleFilter() {
    setAddFilter((prevState) => !prevState); // Toggle addFilter state
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Name
            </label>
            <CustomInputField type={"text"} />
          </div>
          <div className="col-6">
            <div className="mt-5 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
          </div>
        </div>

        <div className="table-responsive mt-5">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="fs-5">
                  Levels
                </th>
                <th scope="col" className="fs-5">
                  Users
                </th>
                <th scope="col" className="fs-5">
                  Message
                </th>
                <th scope="col" className="fs-5">
                  Email Template
                </th>
              </tr>
            </thead>
            <tbody>
              {authLevels.map((year) => (
                <tr key={year.id}>
                  <td className="fs-5">{year.levels}</td>
                  <td className="fs-5">
                    <CustomInputField />
                  </td>
                  <td className="fs-5">
                    <CustomInputField />
                  </td>
                  <td className="fs-5">
                    <CustomInputField />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleFilter}
          >
            {addFilter ? "Remove Filter" : "Add Filter"}{" "}
            {/* Toggle button text */}
          </button>
        </div>
        <div className="mt-4">
          {addFilter && <ConditionsRule />}{" "}
          {/* Conditionally render the ConditionsRule component */}
        </div>
      </div>
    </div>
  );
};

export default AddAutorization;
