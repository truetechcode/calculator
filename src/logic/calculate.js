import operate from "./operate";

const calculate = (data, buttonName) => {
  let 
      {total, next, operation} = data,
      operations = ['+', '-', 'x', '÷', '%'],
      numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  if (numbers.includes(buttonName)) {    
    if (total === null){
      total = buttonName;
    }else if (operation === null){
      total = total + buttonName;
    }else {
      if (next === null){
        next = buttonName;
      }else {
        next = next + buttonName;
      }
    }
  }

  if (operations.includes(buttonName)) {
    if (total !== null) {
      operation = buttonName;
    }
  }

  if (buttonName === '+/-') {
    if (total !== null) total *= -1;
    if (next !== null) next *= -1;
  }

  if (buttonName === '=') {
    if (total !== null && next !== null && operation !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return {total, next, operation};
}

export default calculate;
