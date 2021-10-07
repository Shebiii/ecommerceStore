import React from "react"
import { Redirect, Route } from "react-router-dom"

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("token")

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? (
          <Redirect to="/product" />
        ) : (
          <>
            <Component {...props} />
          </>
        )
      }
    />
  )
}
