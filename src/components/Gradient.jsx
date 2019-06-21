import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { styled } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

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
    const { gradient, onClick } = this.props
    return (
      <Grid item xs={12} sm={4}>
        <Link
          to={gradient.name
            .split(" ")
            .join("_")
            .toLowerCase()}
        >
          <GradientCard
            style={this.createBg(gradient.colors)}
            onClick={onClick}
          >
            {gradient.name}
          </GradientCard>
        </Link>
      </Grid>
    )
  }
}

export default Gradient
