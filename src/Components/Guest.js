import React from 'react'
import Signup from './Signup'

export default function Guest() {
    return (
        
    <div className="container py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Signup</h1>
          <p className="lead text-muted">Signup if you dont have an account .</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
        <Signup/>
        </div>
      </div>
    </div>
    )
}
