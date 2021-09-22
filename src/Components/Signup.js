import React from 'react'

export default function Signup() {
    return (
        <>
         <form>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1 float-left">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register " className="text-muted mb-1 float-left">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1 float-left">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up for Shopi
            </button>
          </form>   
        </>
    )
}
