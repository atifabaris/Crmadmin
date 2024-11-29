import React, { useState } from "react";
import CustomInputField from "../../../../../../../../common/CustomInputField";

const AlertsAction = () => {
    const [tableData, setTableData] = useState([
        {
          type: "",
          to: "",
          sms: "",
          email: "",
          popUp: "",
          gTalk: "",
          specificMessage: "",
        },
      ]);
    
      // Handle adding a new row
      const addRow = () => {
        setTableData([
          ...tableData,
          {
            type: "",
          to: "",
          sms: "",
          email: "",
          popUp: "",
          gTalk: "",
          specificMessage: "",
          },
        ]);
      };
    
      // Handle deleting a row
      const deleteRow = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
      };
    
      // Handle input changes for each field in the table
      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...tableData];
        updatedData[index][name] = value;
        setTableData(updatedData);
      };
      return (
        <>
          {/* Table Section with Inputs */}
          <div className="card p-4 mb-5">
            <h5 className="mb-3">Conditions</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>to</th>
                  <th>SMS</th>
                  <th>Email</th>
                  <th>Dash Board</th>
                  <th>Pop Up</th>
                  <th>G-Talk</th>
                  <th>Specific Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <CustomInputField
                        type="text"
                        name="openingParenthesis"
                        value={row.openingParenthesis}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="field"
                        value={row.field}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="operator"
                        value={row.operator}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="compareWith"
                        value={row.compareWith}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="value"
                        value={row.value}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="value"
                        value={row.value}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="value"
                        value={row.value}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                    <td>
                      <CustomInputField
                        type="text"
                        name="value"
                        value={row.value}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </td>
                        
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteRow(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    
            {/* Add Row Button */}
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-success" onClick={addRow}>
                Add Row
              </button>
            </div>
          </div>
        </>
      );
};

export default AlertsAction;
