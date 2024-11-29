import React, { useState } from "react";
import AddAutorization from "./addAutorization/AddAutorization";

const Authorization = () => {
  // State to track an array of AddAutorization components
  const [authorizationList, setAuthorizationList] = useState([<AddAutorization key={0} />]);

  // Function to handle adding a new AddAutorization component to the list
  function handleAddAuthorization() {
    setAuthorizationList((prevList) => [
      ...prevList,
      <AddAutorization key={prevList.length} />, // Add a new component with a unique key
    ]);
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <h5 className="bg-black p-2 text-light">Auth Levels</h5>

          {/* Render all AddAutorization components */}
          {authorizationList}

          <div>
            {/* Button to trigger adding a new AddAutorization component */}
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleAddAuthorization} // Trigger adding a new AddAutorization component
            >
              Add New Approval flow
            </button>
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
