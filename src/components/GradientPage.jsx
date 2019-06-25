import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { styled } from "@material-ui/core/styles"
import CodeIcon from "@material-ui/icons/Code"
import { makeStyles } from "@material-ui/core/styles"

const GradientPageInner = styled(Paper)({
  height: window.innerHeight - 135
})

const useStyles = makeStyles(theme => ({
  codeIcon: {
    color: "white",
    position: "absolute",
    right: 20,
    top: 14,
    background: "#222",
    borderRadius: 3,
    padding: "5px 10px",
    cursor: "pointer"
  },
  gradientPageInner: {
    position: "relative"
  }
}))

function GradientPage(props) {
  const classes = useStyles()
  const { gradient } = props
  return (
    <Container maxWidth="lg" spacing={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {gradient.name && (
            <GradientPageInner
              className={classes.gradientPageInner}
              style={{
                background: `linear-gradient(to right, ${gradient.colors[0]}, ${
                  gradient.colors[1]
                })`
              }}
            >
              {gradient.name}
              <CodeIcon className={classes.codeIcon} />
            </GradientPageInner>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default GradientPage
