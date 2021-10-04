import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductService } from "../../Services/Services"
import { productAction } from "../../store/Productslice"
import Card from "../UI/Card"
import "./Products.css"
export default function Products() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      GetProductService()
        .then((response) => {
          if (response.data) {
            dispatch(productAction.setProduct(response.data.products))
          }
        })
        .catch((err) => {
          console.log("Err: ", err)
        })
    }
    fetchProducts()
  }, [dispatch])
  const data = useSelector((state) => state.product.items)
  const isexist = useSelector((state) => state.cart.isexistingItem)
  return (
    <div className="container">
      <div className="row ml-5">
        {data.map((post) => (
          <Card
            key={post.id}
            url={post.imageUrl}
            id={post.id}
            isexist={isexist}
            name={post.name}
            price={post.price}
            productQuantity={post.quantity}
          ></Card>
        ))}
      </div>
    </div>
  )
}
