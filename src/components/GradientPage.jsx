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
              <CodeIcon
                className={classes.codeIcon}
                onClick={() => copyCode(gradient)}
              />
            </GradientPageInner>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

function copyCode(gradient) {
  const rules = `
  background: ${gradient.colors[0]};  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, ${gradient.colors[0]}, ${
    gradient.colors[1]
  });  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, ${gradient.colors[0]}, ${
    gradient.colors[1]
  }); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `

  // Create new element
  var el = document.createElement("textarea")
  // Set value (string to be copied)
  el.value = rules
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "")
  el.style = { position: "absolute", left: "-9999px" }
  document.body.appendChild(el)
  // Select text inside element
  el.select()
  // Copy text to clipboard
  document.execCommand("copy")
  // Remove temporary element
  document.body.removeChild(el)
}

export default GradientPage
