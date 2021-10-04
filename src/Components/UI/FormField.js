import React from "react";

function FormField(props) {
  return (
    <div className="row px-3">
      <label className="mb-1">
        <h6 className="mb-0 text-sm">{props.name}</h6>
      </label>
      <input
        className="mb-4"
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => props.stateFunction(e.target.value)}
      />
    </div>
  );
}

export default FormField;
