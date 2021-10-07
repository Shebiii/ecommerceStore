import React from "react"
import { useHistory } from "react-router-dom"
import { ProductService } from "../../Services/Services"
import FormsUser from "../UI/FormsUser"
import FormField from "../UI/FormField"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import "../Signup/signup.css"

function Addproduct() {
  let history = useHistory()

  const validationSchema = Yup.object({
    ProductName: Yup.string().required("required"),
    ProductPrice: Yup.string().required("required"),
    ProductQuantity: Yup.string().required("required"),
    ProductURL: Yup.string().required("required"),
    ProductDescription: Yup.string().required("required"),
  })
  const initialValues = {
    ProductName: "",
    ProductPrice: "",
    ProductQuantity: "",
    ProductURL: "",
    ProductDescription: "",
  }

  const onSubmit = (values, { setSubmitting }) => {
    console.log(
      "Values =",
      values.ProductName,
      values.ProductPrice,
      values.ProductQuantity,
      values.ProductURL,
      values.ProductDescription
    )

    ProductService(
      values.ProductName,
      parseInt(values.ProductQuantity),
      parseInt(values.ProductPrice),
      values.ProductURL,
      values.ProductDescription
    )
      .then((response) => {
        console.log(response)
        if (response.data) {
          setSubmitting(false)
          alert(response.data.message)
          history.push("/product")
        } else {
          setSubmitting(false)
          alert(response)
          // history.push("/")
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
                  <h1 className="text-primary"> ADD Product </h1>
                  <FormField
                    name="ProductName"
                    type="text"
                    placeholder="Enter a Product Name"
                  />
                  <ErrorMessage
                    name="ProductName"
                    component="div"
                    className="text-danger"
                  />

                  <FormField
                    name="ProductPrice"
                    type="text"
                    placeholder="Enter a valid Product Price"
                  />
                  <ErrorMessage
                    name="ProductPrice"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="ProductQuantity"
                    type="text"
                    placeholder="Enter Product Quantity"
                  />
                  <ErrorMessage
                    name="ProductQuantity"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="ProductURL"
                    type="text"
                    placeholder="Enter a Product URL"
                  />
                  <ErrorMessage
                    name="ProductURL"
                    component="div"
                    className="text-danger"
                  />
                  <FormField
                    name="ProductDescription"
                    type="text"
                    placeholder="Enter a Product Description"
                  />
                  <ErrorMessage
                    name="ProductDescription"
                    component="div"
                    className="text-danger"
                  />
                  <div className="row mb-3 px-3">
                    <button
                      type="submit"
                      className="btn btn-blue text-center"
                      disabled={!formik.isValid && formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "loading..." : "Add Product"}
                    </button>
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

export default Addproduct
