import React from "react"
import { NavLink, useHistory } from "react-router-dom"
import FormsUser from "../UI/FormsUser"
import FormField from "../UI/FormField"
import "../Signup/signup.css"
import { loginService } from "../../Services/Services.js"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

function Login() {
  const validationSchema = Yup.object({
    username: Yup.string().required("required"),
    Password: Yup.string().required("required"),
  })
  const initialValues = {
    username: "",
    Password: "",
  }

  let history = useHistory()
  const onSubmit = (values, { setSubmitting }) => {
    loginService(values.username, values.Password)
      .then((response) => {
        console.log("abc", response)
        if (response.data) {
          localStorage.setItem("token", response.data.token)
          history.push("/product")
        } else {
          setSubmitting(false)
          alert("Invalid Username or Password")
          history.push("/")
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <FormsUser>
            <div className="col-lg-6">
              <Form>
                <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
                  <h2 className="text-success mx-auto">Login</h2>
                  <FormField
                    name="username"
                    type="text"
                    placeholder="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="Password"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <ErrorMessage
                    name="Password"
                    component="div"
                    className="text-danger"
                  />

                  <div className="row mb-3 px-3">
                    <button
                      type="submit"
                      className="btn btn-success text-center"
                      disabled={!formik.isValid && formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "loading..." : "Login"}
                    </button>
                  </div>
                  <div className="row mb-3 px-3">
                    <h5 className="mb-5 text-sm text-success">
                      Need an Account <NavLink to="./signup">Signup</NavLink>
                    </h5>
                  </div>
                </div>
              </Form>
            </div>
          </FormsUser>
        )
      }}
    </Formik>
  )
}

export default Login
