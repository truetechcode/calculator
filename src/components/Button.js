import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button
