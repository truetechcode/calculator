import React, { Component } from 'react'
import Button from "./Button";

import "../styles/ButtonPanel.css";

class ButtonPanel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName)
  }
  render() {

    return (
      <div className='button-panel'>
        <div className='row'>
          <Button clickHandler={this.handleClick} color='white' name='AC' /> 
          <Button clickHandler={this.handleClick} color='white' name='+/-' /> 
          <Button clickHandler={this.handleClick} color='white' name='%' /> 
          <Button clickHandler={this.handleClick} name='÷' />
        </div>
        <div className='row'>
          <Button clickHandler={this.handleClick} color='white' name='7' /> 
          <Button clickHandler={this.handleClick} color='white' name='8' /> 
          <Button clickHandler={this.handleClick} color='white' name='9' /> 
          <Button clickHandler={this.handleClick} name='x' />
        </div>
        <div className='row'>
          <Button clickHandler={this.handleClick} color='white' name='4' /> 
          <Button clickHandler={this.handleClick} color='white' name='5' /> 
          <Button clickHandler={this.handleClick} color='white' name='6' /> 
          <Button clickHandler={this.handleClick} name='-' />
        </div>
        <div className='row'>
          <Button clickHandler={this.handleClick} color='white' name='1' /> 
          <Button clickHandler={this.handleClick} color='white' name='2' /> 
          <Button clickHandler={this.handleClick} color='white' name='3' /> 
          <Button clickHandler={this.handleClick} name='+' />
        </div>
        <div className='row'>
          <Button clickHandler={this.handleClick} color='white' wide={true} name='0' /> 
          <Button clickHandler={this.handleClick} color='white' name='.' /> 
          <Button clickHandler={this.handleClick} name='=' />
        </div>
      </div>
    )
  }
}

export default ButtonPanel
