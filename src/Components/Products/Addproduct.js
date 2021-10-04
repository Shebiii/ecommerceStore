import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { ProductService } from "../../Services/Services"
import Form from "../UI/Form"
import FormField from "../UI/FormField"

function Addproduct() {
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  // const [description, setDescription] = useState()
  const [url, setUrl] = useState()
  const [name, setName] = useState()

  let history = useHistory()

  function clickHandler(e) {
    e.preventDefault()
    if (price === undefined || url === undefined) {
      history.push("/")
    } else {
      ProductService(name, parseInt(quantity), parseInt(price), url)
        .then((response) => {
          console.log(response)
          if (response.data) {
            history.push("/product")
          } else {
            alert("Invalid Username or Password")
            // history.push("/")
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <Form>
      <div className="col-lg-6">
        <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
          <h1> Add produts</h1>

          <FormField
            name="Product Name"
            type="text"
            stateFunction={setName}
            placeholder="Enter product"
          />
          <FormField
            name="Product Price"
            type="text"
            stateFunction={setPrice}
            placeholder="Enter Price"
          />
          <FormField
            name="Product Quantity"
            type="text"
            stateFunction={setQuantity}
            placeholder="Enter Quantity"
          />
          <FormField
            name="Product URL"
            type="text"
            stateFunction={setUrl}
            placeholder="Enter URL"
          />
          {/* <FormField
            name="Product Description"
            type="text"
            stateFunction={setDescription}
            placeholder="Enter Description"
          /> */}
          <div className="row mb-3 px-3">
            <NavLink to="/">
              {" "}
              <button
                type="button"
                className="btn btn-dark text-center"
                onClick={clickHandler}
              >
                Add Product
              </button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Addproduct
