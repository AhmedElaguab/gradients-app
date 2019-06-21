import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { styled } from "@material-ui/core/styles"

const GradientPageInner = styled(Paper)({
  height: window.innerHeight - 135
})

class GradientPage extends Component {
  render() {
    const { gradient } = this.props
    return (
      <Container maxWidth="lg" spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {gradient.name && (
              <GradientPageInner
                style={{
                  background: `linear-gradient(to right, ${
                    gradient.colors[0]
                  }, ${gradient.colors[1]})`
                }}
              >
                {gradient.name}
              </GradientPageInner>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default GradientPage
