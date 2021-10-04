// import Axios from 'axios'
import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import Form from "../UI/Form"
import FormField from "../UI/FormField"
import "../Signup/signup.css"
import { loginService } from "../../Services/Services.js"
function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  let history = useHistory()

  function submitHandler(e) {
    e.preventDefault()
    if (username === undefined || password === undefined) {
      history.push("/")
    } else {
      console.log("username =", username, password)
      loginService(username, password)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("token", response.data.token)
            history.push("/product")
          } else {
            alert("Invalid Username or Password")
            history.push("/")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <Form>
      <div className="col-lg-6">
        <form onSubmit={submitHandler}>
          <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
            <h1 className="text-primary">Login</h1>
            <FormField
              name="username"
              type="text"
              stateFunction={setUsername}
              placeholder="Enter Username"
            />
            <FormField
              name="Password"
              type="text"
              stateFunction={setPassword}
              placeholder="Enter Password"
            />

            <div className="row mb-3 px-3">
              <button type="submit" className="btn btn-blue text-center">
                Login
              </button>
            </div>
            <div className="row mb-3 px-3">
              <NavLink to="./signup">
                <h5 className="mb-5 text-sm text-dark">
                  Need an Account Signup
                </h5>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </Form>
  )
}

export default Login
