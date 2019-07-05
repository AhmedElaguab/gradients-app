import React from "react"

const Gradient = props => {
  const { gradient } = props
  // Create gradient function
  const getGradientValue = colors => {
    switch (colors.length) {
      case 3:
        return `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${
          colors[2]
        })`
        break
      case 4:
        return `linear-gradient(to right, ${colors[0]}, ${colors[1]}, 
          ${colors[2]}, ${colors[3]})`
        break
      case 5:
        return `linear-gradient(to right, ${colors[0]}, ${colors[1]}, 
          ${colors[2]}, ${colors[3]}, ${colors[4]})`
        break
      case 6:
        return `linear-gradient(to right, ${colors[0]}, ${colors[1]},
          ${colors[2]}, ${colors[3]}, ${colors[4]}, ${colors[5]})`
        break

      default:
        return `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
        break
    }
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
