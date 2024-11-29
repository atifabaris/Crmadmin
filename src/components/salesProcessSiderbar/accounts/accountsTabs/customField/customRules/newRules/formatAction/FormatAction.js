import React, { useState } from 'react'
import CustomInputField from '../../../../../../../../common/CustomInputField';

const FormatAction = () => {
      const [tableData, setTableData] = useState([
        {
          field: "",
          banner: "",
          tooltiptext: "",
          alignment: "",
          charactercasing: "",
          font: "",
          backgroundcolor: "",
        },
      ]);
    
      // Handle adding a new row
      const addRow = () => {
        setTableData([
          ...tableData,
          {
            field: "",
            banner: "",
            tooltiptext: "",
            alignment: "",
            charactercasing: "",
            font: "",
            backgroundcolor: "",
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
                  <th>Field </th>
                  <th>Banner</th>
                  <th>Tooltip Text</th>
                  <th>Alignment</th>
                  <th>Character Casing</th>
                  <th>Font</th>
                  <th>Tooltip Text</th>
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
}

export default FormatAction