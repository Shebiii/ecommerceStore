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
        productQuantity: 1,
      })
    )
  }
  return (
    <div className="col-md-4 col-12 my-2">
      <div className="card0 col-md-12 col-12">
        <NavLink to={`/product/${props.id}`}>
          <div className="imgBx">
            <img src={props.url} alt="" />
          </div>
        </NavLink>
        <div className="contentBx">
          <h2>{props.name}</h2>
          <div className="size0">
            <h3>Price : ${props.price}</h3>
          </div>
          <div className="color">
            {props.productQuantity > 0 ? (
              <h3 className="text-success">Instock</h3>
            ) : (
              <h3 className="text-danger">Out OF Stock</h3>
            )}
          </div>

          <NavLink to="/cart" onClick={clickHandler} className="text-success">
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card
