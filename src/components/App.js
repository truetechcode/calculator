import React, { Component } from 'react'
import '../styles/App.css';

import calculate from "../logic/calculate";

import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       total: null,
       next: null,
       operation: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    let {total, next, operation} = calculate(this.state, buttonName);
    this.setState({
      total: total,
      next: next,
      operation: operation
    })  
  }
  
  render() {
    const {total, next} = this.state;
    const displayValue = total ? (next ? next.toString() : total.toString()) : '0';
    return (
      <div className="App">
      <h1>Calculator App</h1>
      <Display value={displayValue} />
      <ButtonPanel clickHandler={this.handleClick}/>
    </div>
    )
  }
}

export default App
