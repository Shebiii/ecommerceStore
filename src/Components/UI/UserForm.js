import React from "react"

function UserForm(props) {
  return (
    <div className="container-fluid px-5  px-xl-5  mt-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-3"></div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default UserForm
