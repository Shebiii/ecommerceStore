import React from "react"
import { NavLink, useHistory } from "react-router-dom"
import { SignupService } from "../../Services/Services"
import FormField from "../UI/FormField"
import "./signup.css"
import FormsUser from "../UI/FormsUser"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function Signup() {
  let history = useHistory()

  const validationSchema = Yup.object({
    Fullname: Yup.string().required("required"),
    Username: Yup.string().required("required"),
    Email: Yup.string().email("Please insert Valid email").required("required"),
    Password: Yup.string()
      .required("required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  })
  const initialValues = {
    Fullname: "",
    Username: "",
    Email: "",
    Password: "",
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(
      "username =",
      values.Username,
      values.Password,
      values.Email,
      values.Fullname
    )
    SignupService(
      values.Fullname,
      values.Username,
      values.Email,
      values.Password
    )
      .then((response) => {
        setSubmitting(false)
        console.log(response)
        if (response.data) {
          alert(response.data.message)
          history.push("/login")
        } else {
          setSubmitting(false)
          alert(response)
          // history.push("/signup")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      setSubmitting="false"
    >
      {(formik) => {
        return (
          <FormsUser>
            <div className="col-lg-6">
              <Form>
                <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
                  <h2 className="text-success mx-auto"> Signup</h2>
                  <FormField
                    name="Fullname"
                    type="text"
                    placeholder="Enter a Full name"
                  />
                  <ErrorMessage
                    name="Fullname"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="Username"
                    type="text"
                    placeholder="Enter a valid username"
                  />
                  <ErrorMessage
                    name="Username"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="Email"
                    type="text"
                    placeholder="Enter EMAIL"
                  />
                  <ErrorMessage
                    name="Email"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="Password"
                    type="password"
                    placeholder="Enter a Password"
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
                      {formik.isSubmitting ? "loading..." : "Signup"}
                    </button>
                  </div>
                  <div className="row mb-3 px-3">
                    <h5 className="mb-5 text-sm text-success">
                      Already have acoount...{" "}
                      <NavLink to="./login">Login?</NavLink>
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
