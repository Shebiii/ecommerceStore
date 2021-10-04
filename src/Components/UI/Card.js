import React from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import "./Card.css"
import { cartAction } from "../../store/cartSlice"

function Card(props) {
  const dispatch = useDispatch()
  function clickHandler(e) {
    dispatch(
      cartAction.additemtocart({
        id: props.id,
        price: props.price,
        totalPrice: props.price,
        name: props.name,
        url: props.url,
        productQuantity: props.productQuantity,
      })
    )
  }
  return (
    <div className="card col-12 col-sm-12 col-md-5 col-lg-5 mx-3 my-4">
      <NavLink to={`/product/${props.id}`}>
        <div className="imgBx">
          <img src="https://assets.codepen.io/4164355/shoes.png" alt="" />
        </div>
      </NavLink>
      <div className="contentBx">
        <h2>{props.name}</h2>
        <div className="size">
          <h3>Price : ${props.price}</h3>
        </div>
        <div className="color">
          {props.productQuantity > 0 ? (
            <h3 className="text-success">Instock</h3>
          ) : (
            <h3 className="text-danger">Out OF Stock</h3>
          )}
        </div>
        <span onClick={clickHandler}>Buy Now</span>
      </div>
    </div>
  )
}

export default Card
