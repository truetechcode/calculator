import operate from "./operate";

const calculate = (data, buttonName) => {
  let 
      {total, next, operation} = data,
      operations = ['+', '-', 'x', '÷', '%'],
      numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  if (numbers.includes(buttonName)) {    
    if (total === null){
      total = parseInt(buttonName);
    }else{
      next = parseInt(buttonName);      
    }
    if (total !== null && next !== null) total = operate(total, next, operation);
  }

  if (operations.includes(buttonName)) {
    if (total !== null) {
      operation = buttonName;
    }else {
      return {total, next, operation};
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
      return {total, next, operation};
    }
  }
  console.log({total, next, operation}, buttonName);
  return {total, next, operation};
}

export default calculate;