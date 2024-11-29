import { useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";

const SalesStages = () => {
  const [calendarList, setCalendarList] = useState([
    {
      id: 1,
      color: "green",
      stageName: "Module A",
      description: "This is a description for Template 1.",
      minDays: "John Doe",
      maxDays: "John Doe",
      isActive: "yes",
      isMandatory: "No",
      stageProbability : "10",
      setDealStatus: "Progress"
    },
    {
      id: 2,
      color: "green",
      stageName: "Module B",
      description: "This is a description for Template 2.",
      minDays: "Jane Smith",
      maxDays: "John Doe",
      isActive: "yes",
      isMandatory: "No",
      stageProbability : "10",
      setDealStatus: "Progress"
    },
    {
      id: 3,
      color: "green",
      stageName: "Module C",
      description: "This is a description for Template 3.",
      minDays: "Alice Johnson",
      isMandatory: "No",
      stageProbability : "10",
      setDealStatus: "Progress"
    },
  ]);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="d-flex justify-content-between align-items-center bg-black py-2 px-4 text-light">
              <h4 className="fs-3"> Sales Stages</h4>
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
                  Color
                  </th>
                  <th scope="col" className="fs-5">
                  Stage Name
                  </th>
                  <th scope="col" className="fs-5">
                  Description
                  </th>
                  <th scope="col" className="fs-5">
                  Min Days
                  </th>
                  <th scope="col" className="fs-5">
                  Max Days
                  </th>
                  <th scope="col" className="fs-5">
                  Is Active
                  </th>
                  <th scope="col" className="fs-5">
                  Is Mandatory
                  </th>
                  <th scope="col" className="fs-5">
                  Stage Probability	
                  </th>
                  <th scope="col" className="fs-5">
                  Set Deal Status to
                  </th>	
                  <th scope="col" className="fs-5">
                  Action
                  </th>	

                </tr>
              </thead>
              <tbody>
                {calendarList.map((elem) => (
                  <tr key={elem.id}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        aria-label="Select row"
                      />
                    </th>
                    <td className="fs-5">{elem.color}</td>
                    <td className="fs-5">{elem.stageName}</td>
                    <td className="fs-5">{elem.description}</td>
                    <td className="fs-5">{elem.minDays}</td>
                    <td className="fs-5">{elem.maxDays}</td>
                    <td className="fs-5">{elem.isActive}</td>
                    <td className="fs-5">{elem.isMandatory}</td>
                    <td className="fs-5">{elem.stageProbability}</td>
                    <td className="fs-5">{elem.setDealStatus}</td>
                    <td className="fs-5">
                      <div className="d-flex align-items-center gap-3">
                        <Link to={`/edit-email-templates/${elem.id}`}>
                          <i className="fa-solid fa-pen-to-square text-success"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesStages;
