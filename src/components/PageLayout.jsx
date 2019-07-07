import React, { useContext } from 'react'
import Gradient from './Gradient'
import { GradientsContext } from './../contexts/GradientsContext'

const PageLayout = props => {
  const gradients = useContext(GradientsContext)
  return (
    <div className="page-layout-wrapper">
      <div className="container">
        <ul className="page-layout">
          {gradients.map(gradient => (
            <Gradient key={gradient.name} gradient={gradient} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageLayout
