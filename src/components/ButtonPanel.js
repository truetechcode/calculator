import React, { Component } from 'react'
import Button from "./Button";

import "../styles/ButtonPanel.css";

class ButtonPanel extends Component {
  render() {
    return (
      <div className='button-panel'>
        <div className='row'><Button name='AC' /> <Button name='+/-' /> <Button name='%' /> <Button color='orange' name='÷' /></div>
        <div className='row'><Button name='7' /> <Button name='8' /> <Button name='9' /> <Button color='orange' name='X' /></div>
        <div className='row'><Button name='4' /> <Button name='5' /> <Button name='6' /> <Button color='orange' name='-' /></div>
        <div className='row'><Button name='1' /> <Button name='2' /> <Button name='3' /> <Button color='orange' name='+' /></div>
        <div className='row'><Button wide={true} name='0' /> <Button name='.' /> <Button color='orange' name='=' /></div>
      </div>
    )
  }
}

export default ButtonPanel
