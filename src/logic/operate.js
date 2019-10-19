var Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = 0
  switch (operation) {
    case '-':
      result = Big(numberOne).minus(numberTwo);
      break;
    case '+':
      result = Big(numberOne).plus(numberTwo);
      break;
    case 'x':
      result = Big(numberOne).times(numberTwo);
      break;
    case '%':
      result = Big(numberOne).mod(numberTwo);
      break;
    case '÷':
      if (numberTwo === 0)
        result = 'cannot devide by zero!'
      else
        result = Big(numberOne).div(numberTwo);
      break;
      
    default:
      result = 'wrong operation'
  }

  return result
}

export default operate;