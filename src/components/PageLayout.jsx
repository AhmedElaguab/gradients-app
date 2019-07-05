import React from "react"
import Gradient from "./Gradient"

const PageLayout = props => {
  return (
    <div className="page-layout-wrapper">
      <div className="container">
        <ul className="page-layout">
          {props.gradients.map(gradient => (
            <Gradient gradient={gradient} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageLayout
