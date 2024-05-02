import React, { useState } from "react";
import useColor from "../../hooks/useColor";

const GenderCheckbox = ({ handleCheckboxChange, selectedGender }) => {
  const {borderColor} = useColor();
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`cursor-pointer label gap-2 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className={`checkbox checkbox-success ${borderColor}`}
            checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`cursor-pointer label gap-2 ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className={`checkbox checkbox-success ${borderColor}`}
            checked={selectedGender === "female"}
            onChange={() => handleCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
