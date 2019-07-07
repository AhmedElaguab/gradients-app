import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faCode } from '@fortawesome/free-solid-svg-icons'

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

  // Handle direction click
  const handleDirectionClick = () => {
    // Change direction besides to the previous direction
    const getNextDirection = () => {
      switch (direction) {
        case 'to right':
          return 'to bottom'
          break
        case 'to bottom':
          return 'to left'
          break
        case 'to left':
          return 'to top'
          break
        case 'to top':
          return 'to right'
          break
        default:
          return 'to right'
          break
      }
    }
    setGradient({ name, colors, direction: getNextDirection() })
  }
  return (
    <li className="gradient" style={{ background: gradientValue }}>
      <p className="gradient__name">
        {name} ({colors.length} colors)
      </p>
      <div className="gradient__options">
        <FontAwesomeIcon
          icon={faSyncAlt}
          title="Rotate the gradient"
          onClick={handleDirectionClick}
        />
        <FontAwesomeIcon icon={faCode} title="Copy the code" />
      </div>
    </li>
  )
}

export default Gradient
