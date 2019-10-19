import React from 'react'
import PropTypes from 'prop-types';

import "../styles/Button.css";

function Button(props) {
  let wide = props.wide && 'wide'

  return (
    <button 
      onClick={() => props.clickHandler(props.name)} 
      className={`${props.color} ${wide}`}
    >
      {props.name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'orange'
};

export default Button
