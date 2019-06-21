import React, { Component } from "react"
import Gradient from "./Gradient"
import Grid from "@material-ui/core/Grid"

class ListGradients extends Component {
  render() {
    const { gradients, onGradientClick } = this.props
    return (
      <div>
        <Grid container spacing={3}>
          {gradients.map((gradient, i) => (
            <Gradient
              onClick={() => onGradientClick(gradient)}
              key={i}
              gradient={gradient}
            />
          ))}
        </Grid>
      </div>
    )
  }
}

export default ListGradients
