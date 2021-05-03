import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, onClick }) => (
  <button type="button" onClick={onClick}>{title}</button>
)

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  title: 'Holi title change',
}

export default Button
