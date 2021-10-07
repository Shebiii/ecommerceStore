import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductService } from "../../Services/Services"
import { productAction } from "../../store/Productslice"
import Card from "../UI/Card"
import Loader from "../UI/Loader"
import "./Products.css"
import Error from "../UI/Error"
export default function Products() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
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
  })

  const data = useSelector((state) => state.product.items)

  return (
    <div className="container h-100 p-5">
      <div className="row p-2">
        {data && data.length === 0 ? (
          <div className="col-md-6 center">
            {loading ? (
              <Loader />
            ) : (
              <Error>
                <h1>we are sorry</h1>
                <hr />
                <h1>NO item were found</h1>
                <hr />
                <h3>Error 404</h3>
              </Error>
            )}
          </div>
        ) : (
          data.map((post) => (
            <Card
              key={post.id}
              url={post.imageUrl}
              id={post.id}
              name={post.name}
              price={post.price}
              productQuantity={post.quantity}
            />
          ))
        )}
      </div>
    </div>
  )
}
