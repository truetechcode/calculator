import React, { Component } from 'react'
import Button from "./Button";

import "../styles/ButtonPanel.css";

class ButtonPanel extends Component {
  render() {
    return (
      <div className='button-panel'>
        <div className='row'><Button color='white' name='AC' /> <Button color='white' name='+/-' /> <Button color='white' name='%' /> <Button name='÷' /></div>
        <div className='row'><Button color='white' name='7' /> <Button color='white' name='8' /> <Button color='white' name='9' /> <Button name='X' /></div>
        <div className='row'><Button color='white' name='4' /> <Button color='white' name='5' /> <Button color='white' name='6' /> <Button name='-' /></div>
        <div className='row'><Button color='white' name='1' /> <Button color='white' name='2' /> <Button color='white' name='3' /> <Button name='+' /></div>
        <div className='row'><Button color='white' wide={true} name='0' /> <Button color='white' name='.' /> <Button name='=' /></div>
      </div>
    )
  }
}

export default ButtonPanel
