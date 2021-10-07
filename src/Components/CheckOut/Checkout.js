import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { cartAction } from "../../store/cartSlice"

function Checkout() {
  const dispatch = useDispatch()

  let history = useHistory()
  useEffect(() => {
    const vanish = () => {
      setTimeout(() => {
        history.push("/")
      }, 2000)
    }
    dispatch(cartAction.clearCart())
    vanish()
  })
  return (
    <section className="mb-5">
      <div className="row ">
        <div className="col-4 text-white display-3 center">
          YOUR ORDER HAS BEEN PLACED SUCCESFULLY
        </div>
      </div>
    </section>
  )
}

export default Checkout
