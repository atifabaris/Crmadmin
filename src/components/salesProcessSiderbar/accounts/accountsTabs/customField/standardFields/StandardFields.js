import { useState } from "react";
import { Link } from "react-router-dom";

const StandardFields = () => {
  const [calendarList, setCalendarList] = useState([
    {
      id: 1,
      caption: "Name",
      fieldName: "sName",
      dataType: "Text",
      displayType: "Mandatory",
      controlType: "Text Box",
      size: "100",
      variable: "MAF2",
      rules: "New",
    },
    {
      id: 2,
      caption: "Name",
      fieldName: "sName",
      dataType: "Text",
      displayType: "Mandatory",
      controlType: "Text Box",
      size: "100",
      variable: "MAF2",
      rules: "New",
    },
    {
      id: 3,
      caption: "Name",
      fieldName: "sName",
      dataType: "Text",
      displayType: "Mandatory",
      controlType: "Text Box",
      size: "100",
      variable: "MAF2",
      rules: "New",
    },
  ]);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <form>
            <div className="bg-light py-2 px-4">
              <h4 className="fs-4"> Standard fields</h4>
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
                      caption
                    </th>
                    <th scope="col" className="fs-5">
                      Field Name
                    </th>
                    <th scope="col" className="fs-5">
                      Data Type
                    </th>
                    <th scope="col" className="fs-5">
                      Display Type
                    </th>
                    <th scope="col" className="fs-5">
                      Control Type
                    </th>
                    <th scope="col" className="fs-5">
                      Size
                    </th>
                    <th scope="col" className="fs-5">
                      Variable
                    </th>
                    <th scope="col" className="fs-5">
                      rules
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3">
              <div className="bg-light py-2 px-4">
                <h4 className="fs-4"> Custom fields</h4>
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
                        caption
                      </th>
                      <th scope="col" className="fs-5">
                        Field Name
                      </th>
                      <th scope="col" className="fs-5">
                        Data Type
                      </th>
                      <th scope="col" className="fs-5">
                        Display Type
                      </th>
                      <th scope="col" className="fs-5">
                        Control Type
                      </th>
                      <th scope="col" className="fs-5">
                        Size
                      </th>
                      <th scope="col" className="fs-5">
                        Variable
                      </th>
                      <th scope="col" className="fs-5">
                        rules
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StandardFields;
