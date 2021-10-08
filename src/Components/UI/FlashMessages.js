import React from "react"

function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      <div className="alert alert-success text-center floating-alert shadow-sm">
        {props.message}
      </div>
    </div>
  )
}

export default FlashMessages
