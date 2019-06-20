import React, { Component } from "react"
import Gradient from "./Gradient"

class ListGradients extends Component {
  render() {
    const { gradients } = this.props
    return (
      <div>
        {gradients.map(gradient => (
          <Gradient gradient={gradient} />
        ))}
      </div>
    )
  }
}

export default ListGradients
