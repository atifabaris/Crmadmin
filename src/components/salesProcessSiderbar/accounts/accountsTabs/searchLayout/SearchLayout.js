import React from "react";

const SearchLayout = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h5>	
        Select Fields</h5>
        <div className="card">
          <div className="row">
            <div className="col-12">
              <label className="form-check-label" for="exampleCheck1">
                Account
              </label>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Account Type
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Alternate Mobile
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Annual Revenue
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Approval Status
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Billing Address
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Billing City
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Billing Country
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  City
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Created Date
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Credit Days
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Industry
                </label>
              </div>
            </div>
            <div className="col-3">
              <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" for="exampleCheck1">
                  Notes Exist
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
