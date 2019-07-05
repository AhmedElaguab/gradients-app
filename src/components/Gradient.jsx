import React from "react"

const Gradient = props => {
  const { gradient } = props
  return (
    <li
      className="gradient"
      style={{ height: 100, backgroundColor: gradient.colors[0] }}
    >
      {gradient.name}
    </li>
  )
}

export default Gradient
