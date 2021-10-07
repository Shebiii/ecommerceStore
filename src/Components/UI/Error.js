import React from "react"
import "./Error.css"
function Error(props) {
  return (
    <div className="containerError">
      <div className="Error">{props.children}</div>
    </div>
  )
}

export default Error
