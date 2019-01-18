import React from 'react'
// import PropTypes from 'prop-types'

import FilterLink from './filterLink'

const Footer = () => (
  <p>
    show: 
    {''}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {','}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {','}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
)

// Footer.PropTypes = {

// }

export default Footer