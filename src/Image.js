import React from 'react'
import product from './Product'

function Image (props) {
  return (
    <img src='{props.product.image}'></img>
  )
}

export default Image
