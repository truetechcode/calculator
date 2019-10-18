var Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result = 0
  switch (operation) {
    case '-':
      result = Big(numberOne) - Big(numberTwo);
      break;
    case '+':
      result = Big(numberOne) + Big(numberTwo);
      break;
    case 'x':
      result = Big(numberOne) * Big(numberTwo);
      break;
    case '%':
      result = Big(numberOne) % Big(numberTwo);
      break;
    case '÷':
      result = Big(numberOne) / Big(numberTwo);
      break;
      
      default:
      result = 'wrong operation'
  }
  return result
}

export default operate;