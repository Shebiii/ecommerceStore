import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Table from "../UI/Table"
import "./Cart.css"

function Cart() {
  const total = useSelector((state) => state.cart.totalPrice)
  return (
    <div className="row cart-container ">
      <div className="col-md-12  ">
        <div className="card col-md-8 mx-auto">
          {total !== 0 && (
            <div className="card-header">
              <h5 className="card-title  mx-auto">Cart</h5>
            </div>
          )}
          {total !== 0 ? (
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="cart-container1 cart-head">
                    <div className="table-responsive">
                      <Table />
                    </div>
                  </div>
                  <div className="cart-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="order-total table-responsive ">
                          <table className="table table-borderless text-right">
                            <tbody>
                              <tr>
                                <td>Sub Total :</td>
                                <td>${total}</td>
                              </tr>
                              <tr>
                                <td className="f-w-7 font-18">
                                  <h4>Total Amount :</h4>
                                </td>
                                <td className="f-w-7 font-18">
                                  <h4>${total}</h4>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cart-footer text-right md-12">
                      <NavLink to="/checkout" className="btn btn-dark my-1">
                        Proceed to Checkout
                        <i className="ri-arrow-right-line ml-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="conatinerCart">
              <p>
                <h3 className="text-success cartCenter">THE CART IS EMPTY</h3>
              </p>
              <NavLink to="/product" className="text-decoration-none  ">
                <span className="cartCenter ">
                  <button className="btn btn-dark">back to shopping</button>
                </span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
