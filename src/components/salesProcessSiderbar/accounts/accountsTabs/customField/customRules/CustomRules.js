import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewRules from "./newRules/NewRules";

// NewRules Component: This will show the modal
const NewRulesPop = ({ show, handleClose, handleShow }) => {
  return (
    <Modal show={show} size="xl" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>rule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewRules />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// CustomRules Component: This has the button to trigger the modal
const CustomRules = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="bg-light py-2 px-4 d-flex justify-content-between align-items-center">
              <h4 className="fs-4">Rules </h4>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  New
                </Button>
                <button type="button" className="btn btn-primary">
                  Clone Rule
                </button>
              </div>
            </div>
            <div className="table-responsive mt-3">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select all"
                      />
                    </th>
                    <th scope="col" className="fs-5">
                      Rules
                    </th>
                    <th scope="col" className="fs-5">
                      Apply on
                    </th>
                    <th scope="col" className="fs-5">
                      Actions
                    </th>
                    <th scope="col" className="fs-5">
                      Delete
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </form>
        </div>
      </div>

      {/* Pass the props down to NewRules */}
      <NewRulesPop show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
};

export default CustomRules;
