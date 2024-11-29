
import React, { useState } from 'react'
import PSMunit from '../../../../rems-status/PSMunit'
import AlphabeticFilter from '../../../../rems-status/AlphabeticFilter';
import { Link } from 'react-router-dom';

const WorkFlow = () => {
    const [fiscalYears, setFiscalYears] = useState([
        {
          id: 1,
          yearName: "Standard Layout",
          isDefault: false,
          created: "drani",
          lastUpdated: "2023-10-01",
        },
        {
          id: 2,
          yearName: "2024",
          startDay: "01",
          startMonth: "February",
          lastUpdated: "2023-10-02",
        },
        {
          id: 3,
          yearName: "2025",
          startDay: "01",
          startMonth: "March",
          lastUpdated: "2023-10-03",
        },
      ]);
  return (
    <div>
        <PSMunit title={"Workflow List"} />
        <div className="d-flex justify-content-end bg-light p-1">
            <button type="button" className="btn btn-primary text-e">New Workflow</button>
            <button type="button" className="btn btn-primary text-e">Clone</button>
        </div>
        <div className='mt-3'>
            <AlphabeticFilter />
        </div>
        <div className="table-responsive">
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
                    Layout Name
                  </th>
                  <th scope="col" className="fs-5">
                    Is Default
                  </th>
                  <th scope="col" className="fs-5">
                    Created/ Modified By
                  </th>
                  <th scope="col" className="fs-5">
                    Last Updated On
                  </th>
                  <th scope="col" className="fs-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {fiscalYears.map((year) => (
                  <tr key={year.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select row"
                      />
                    </th>
                    <td className="fs-5">{year.yearName}</td>
                    <td className="fs-5">{year.isDefault}</td>
                    <td className="fs-5">{year.startMonth}</td>
                    <td className="fs-5">{year.lastUpdated}</td>
                    <td className="fs-5">
                      <div className="d-flex align-items-center gap-3">
                        <Link to="/edit-fiscal-year">
                          <i className="fa-solid fa-pen-to-square text-success"></i>
                        </Link>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default WorkFlow;
