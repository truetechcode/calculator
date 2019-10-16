import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    return (
      <div>
        <p className='display-panel'>{this.props.value}</p>        
      </div>
    )
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display
