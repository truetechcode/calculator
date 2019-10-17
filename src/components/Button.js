import React from 'react'
import PropTypes from 'prop-types';

import "../styles/Button.css";

function Button(props) {
  let wide = props.wide && 'wide'
  let color = props.color ? props.color : 'orange'
  return (
    <button className={`${color} ${wide}`}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button
