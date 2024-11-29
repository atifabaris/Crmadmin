import React from "react";

const SelectOption = ({ options, selectedValue, onChange }) => {
  return (
    <select
      className="form-select"
      value={selectedValue}
      onChange={onChange}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
