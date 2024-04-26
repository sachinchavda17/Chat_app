import React, { useState } from "react";

const GenderCheckbox = () => {
    const [checked, setChecked] = useState(false);
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Male</span>
          <input
            value={checked}
            type="checkbox"
            className="checkbox checkbox-success border-slate-900"
            onChange={() => setChecked(!checked)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Female</span>
          <input
             value={checked}
             type="checkbox"
             className="checkbox checkbox-success border-slate-900"
             onChange={() => setChecked(!checked)}
           />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
