import React from 'react'
import Style from './Product.module.css'

import PropTypes from 'prop-types'

function Product({label, price}) {

  return (
    < >
    <h1>{label}</h1>
    <button className='btn btn-info'>{price}</button>
    </>
  )
}

Product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  label: 'My Product',
  price: 0
}

export default Product
