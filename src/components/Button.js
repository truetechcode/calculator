import React from 'react'
import PropTypes from 'prop-types';

import "../styles/Button.css";

function Button(props) {
  const {wide, color} = props
  const wider = wide && 'wide'

  return (
    <button 
      onClick={() => props.clickHandler(props.name)} 
      className={`${color} ${wider}`}
    >
      {props.name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired
};

Button.defaultProps = {
  color: 'orange'
};

export default Button
