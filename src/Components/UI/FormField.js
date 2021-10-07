import React from "react"
import { Field } from "formik"
function FormField(props) {
  return (
    <div className="row px-3">
      {/* <label className="mb-1">
        <h6 className="mb-0 text-sm">{props.name}</h6>
      </label> */}
      <Field
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
        {...props.AllinOne}
      />
    </div>
  )
}

export default FormField
