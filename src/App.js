import React, { Suspense } from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import "./App.css"
import Loader from "./Components/UI/Loader"
import { PrivateRoute } from "./Routers/PrivateRoute"
import { PublicRoute } from "./Routers/PublicRoute"

const Login = React.lazy(() => import("./Components/Login/Login"))
const Checkout = React.lazy(() => import("./Components/CheckOut/Checkout"))
const Products = React.lazy(() => import("./Components/Products/Products"))
const ProductDetail = React.lazy(() =>
  import("./Components/Products/ProductDetail")
)
const Addproduct = React.lazy(() => import("./Components/Products/Addproduct"))
const Cart = React.lazy(() => import("./Components/cart/Cart"))
const Signup = React.lazy(() => import("./Components/Signup/Signup"))

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loaderContainer">
              <Loader />
            </div>
          }
        >
          <Switch>
            <PrivateRoute path="/product/:id" component={ProductDetail} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/add-product" component={Addproduct} />
            <PrivateRoute path="/product" component={Products} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <PrivateRoute path="/checkout" component={Checkout} />
            <PrivateRoute path="/" component={Products} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
