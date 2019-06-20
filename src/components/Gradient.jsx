import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { styled } from "@material-ui/core/styles"

const GradientCard = styled(Paper)({
  padding: 20,
  height: 45
})

class Gradient extends Component {
  createBg = colors => {
    return {
      background: colors[0],
      background: `-webkit-linear-gradient(to right, ${colors[0]}, ${
        colors[1]
      })`,
      background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
    }
  }
  render() {
    const { gradient } = this.props
    return (
      <Grid item xs={12} sm={4}>
        <GradientCard style={this.createBg(gradient.colors)}>
          {gradient.name}
        </GradientCard>
      </Grid>
    )
  }
}

export default Gradient
