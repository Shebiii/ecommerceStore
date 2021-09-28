import React, { useState } from 'react'



export default function Form(props) {
   
    return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-3">
            </div>
            {props.children}
        </div>
        </div>
        </div>
    )
}
