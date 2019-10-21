import React, { Component } from 'react'
import Button from "./Button";

import "../styles/ButtonPanel.css";

class ButtonPanel extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const { clickHandler } = this.props;
    return (
      <div className='button-panel'>
        <div className='row'>
          <Button clickHandler={clickHandler} color='white' name='AC' /> 
          <Button clickHandler={clickHandler} color='white' name='+/-' /> 
          <Button clickHandler={clickHandler} color='white' name='%' /> 
          <Button clickHandler={clickHandler} name='÷' />
        </div>
        <div className='row'>
          <Button clickHandler={clickHandler} color='white' name='7' /> 
          <Button clickHandler={clickHandler} color='white' name='8' /> 
          <Button clickHandler={clickHandler} color='white' name='9' /> 
          <Button clickHandler={clickHandler} name='x' />
        </div>
        <div className='row'>
          <Button clickHandler={clickHandler} color='white' name='4' /> 
          <Button clickHandler={clickHandler} color='white' name='5' /> 
          <Button clickHandler={clickHandler} color='white' name='6' /> 
          <Button clickHandler={clickHandler} name='-' />
        </div>
        <div className='row'>
          <Button clickHandler={clickHandler} color='white' name='1' /> 
          <Button clickHandler={clickHandler} color='white' name='2' /> 
          <Button clickHandler={clickHandler} color='white' name='3' /> 
          <Button clickHandler={clickHandler} name='+' />
        </div>
        <div className='row'>
          <Button clickHandler={clickHandler} color='white' wide={true} name='0' /> 
          <Button clickHandler={clickHandler} color='white' name='.' /> 
          <Button clickHandler={clickHandler} name='=' />
        </div>
      </div>
    )
  }
}

export default ButtonPanel
