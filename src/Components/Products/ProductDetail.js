import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { cartAction } from "../../store/cartSlice"
import "./ProductDetail.css"
export default function ProductDetail() {
  const parm = useParams()
  const ProductDetails = useSelector((state) => state.product.items)
  const data = ProductDetails.find((items) => items.id === parm.id)
  console.log(data)
  console.log("parm", parm)
  const dispatch = useDispatch()
  function clickHandler(e) {
    dispatch(
      cartAction.additemtocart({
        id: data.id,
        price: data.price,
        totalPrice: data.price,
        name: data.name,
        url: data.imageUrl,
        productQuantity: 1,
      })
    )
  }
  return (
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="product-content product-wrap product-deatil">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image">
              <div id="myCarousel-2" class="carousel slide">
                <div class="carousel-inner">
                  <div class="item active">
                    <img
                      src={data.imageUrl}
                      class="img-responsive center w-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12 ">
            <h2 class="name">
              {data.name}
              <small></small>
              <i class="fa fa-star fa-2x text-success"></i>
              <i class="fa fa-star fa-2x text-success"></i>
              <i class="fa fa-star fa-2x text-success"></i>
              <i class="fa fa-star fa-2x text-success"></i>
              <i class="fa fa-star fa-2x text-success"></i>
            </h2>
            <hr />
            <h3 class="price-container">
              ${data.price}
              <small>*includes tax</small>
            </h3>
            <div class="certified">
              <ul>
                <li>
                  <a href="/cart">
                    Delivery time<span>7 Working Days</span>
                  </a>
                </li>
                <li>
                  <a href="/cart">
                    Certified<span>Quality Assured</span>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div class="description description-tabs">
              <br />
              <strong>Description </strong>
              <p>{data.description}</p>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6">
                {data.quantity ? (
                  <NavLink to="/cart">
                    <span onClick={clickHandler} class="btn btn-success btn-lg">
                      Add to cart (${data.price})
                    </span>
                  </NavLink>
                ) : (
                  <a href="/cart" class="btn btn-success btn-lg">
                    Out of Stock (${data.price})
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
