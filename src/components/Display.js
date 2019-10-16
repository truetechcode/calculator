import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div>
        <p className='display-panel'>{this.props.value}</p>        
      </div>
    )
  }
}

export default Display
