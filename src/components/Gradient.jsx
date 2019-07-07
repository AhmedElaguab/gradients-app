import React, { useState } from 'react'

const Gradient = props => {
  const [{ name, colors, direction }, setGradient] = useState({
    ...props.gradient,
    direction: 'to right'
  })
  // Create gradient function
  const getGradientValue = (direction, colors) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`
  }
  const gradientValue = getGradientValue(direction, colors)
  return (
    <li className="gradient" style={{ background: gradientValue }}>
      {name} ({colors.length} colors)
    </li>
  )
}

export default Gradient
