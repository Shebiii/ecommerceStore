import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { cartAction } from "../../store/cartSlice"
import "./ProductDetail.css"
export default function ProductDetail() {
  const parm = useParams()
  const productDetails = useSelector((state) => state.product.items)
  const data = productDetails.filter((items) => items.id === parm.id)
  console.log("productdetails", productDetails)
  console.log("product", data)
  const dispatch = useDispatch()
  function clickHandler(e) {
    dispatch(
      cartAction.additemtocart({
        id: data[0].id,
        price: data[0].price,
        totalPrice: data[0].price,
        name: data[0].name,
        url: data[0].imageUrl,
        productQuantity: data[0].quantity,
      })
    )
  }
  return (
    <div class="wrapper">
      <div class="outer">
        <div class="content animated fadeInLeft">
          <h1>
            {data[0].name}
            <br /> baseball hair
          </h1>
          <p>
            Shadow your real allegiance to New York's Pirate radio with this
            cool cap featuring the Graphic Know Wave logo.
          </p>
          {data[0].quantity ? (
            <NavLink to="/cart">
              <div class="button" onClick={clickHandler}>
                <a href="#">{data[0].price}</a>
                <a class="cart-btn" href="/cart">
                  <i class="cart-icon ion-bag"></i>ADD TO CART
                </a>
              </div>
            </NavLink>
          ) : (
            <div class="button" disabled>
              <a href="#">{data[0].price}</a>
              <a class="cart-btn">
                <i class="cart-icon ion-bag text-danger"></i>Out of stock
              </a>
            </div>
          )}
        </div>
        <img
          src={data[0].imageUrl}
          width="300px"
          class="img1 animated fadeInRight"
        />
      </div>
    </div>
    // <div className="container">
    //   <div className="card">
    //     <div className="container-fliud">
    //       <div className="wrapper row">
    //         <div className="preview col-md-6">
    //           <div className="preview-pic tab-content">
    //             <div className="tab-pane active" id="pic-1">
    //               <img src={data[0].imageUrl} alt="" />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="details col-md-6">
    //           <h3 className="product-title">{data[0].name}</h3>

    //           <p className="product-description">{data[0].description}</p>
    //           <h4 className="price">
    //             current price: <span>{data[0].price}</span>
    //           </h4>
    //           <div className="action">
    // {data[0].quantity ? (
    //   <NavLink to="/cart">
    //     <button
    //       className="add-to-cart btn btn-default"
    //       type="button"
    //       onClick={clickHandler}
    //     >
    //       add to cart
    //     </button>
    //   </NavLink>
    // ) : (
    //   <button
    //     className="add-to-cart btn btn-default disabled"
    //     type="button"
    //   >
    //     Out of stock
    //   </button>
    // )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
