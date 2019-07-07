import React from "react"

const Gradient = props => {
  const { gradient } = props
  // Create gradient function
  const getGradientValue = colors => {
    return `linear-gradient(to right, ${colors.join(", ")})`
  }
  const gradientValue = getGradientValue(gradient.colors)
  return (
    <li className="gradient" style={{ height: 100, background: gradientValue }}>
      {gradient.name}
      <h1>{gradient.colors.length}</h1>
    </li>
  )
}

export default Gradient
