import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductService } from "../../Services/Services"
import { productAction } from "../../store/Productslice"
import Card from "../UI/Card"
import Loader from "../UI/Loader"
import "./Products.css"
import Error from "../UI/Error"
import { cartAction } from "../../store/cartSlice"

function Products() {
  const data = useSelector((state) => state.product.items)

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const fetchProducts = () => {
    setLoading(true)
    GetProductService()
      .then((response) => {
        if (response.data) {
          setLoading(false)
          dispatch(productAction.setProduct(response.data.products))
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log("Err: ", err)
      })
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  const CartData = useSelector((state) => state.cart.items)

  const isItemExist = (id) => {
    let itemExist = CartData.filter((element) => id === element.id)
    if (itemExist[0]) {
      return true
    } else {
      return false
    }
  }
  const clickHandler = (item) => {
    if (!isItemExist(item.id)) {
      dispatch(
        cartAction.additemtocart({
          id: item.id,
          price: item.price,
          totalPrice: item.price,
          name: item.name,
          url: item.url,
          productQuantity: 1,
        })
      )
    }
  }
  return (
    <div className="container">
      <div className="row p-2">
        {data && data.length === 0 ? (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div className="col-md-6 center">
                <Error>
                  <h1>we are sorry</h1>
                  <hr />
                  <h1>NO item were found</h1>
                  <hr />
                  <h3>Error 404</h3>
                </Error>
              </div>
            )}
          </>
        ) : (
          data.map((post) => (
            <Card
              key={post.id}
              url={post.imageUrl}
              id={post.id}
              name={post.name}
              price={post.price}
              productQuantity={post.quantity}
              clickHandler={clickHandler}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Products
