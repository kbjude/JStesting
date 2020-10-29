const add = (a, b) => {
  let message = null;
  if (typeof a === 'string' || typeof b === 'string') {
    message = 'Input has to be an integer';
  } if (typeof a === 'number' && typeof b === 'number') {
    message = a + b;
  }
  return message;
};

const multiplication = (a, b) => {
  let message = null;
  if (typeof a === 'number' && typeof b === 'number') {
    message = a * b;
  }
  return message;
};

const subtract = (a, b) => {
  let message = null;
  if (typeof a === 'number' && typeof b === 'number') {
    message = a - b;
  }
  return message;
};

const divide = (a, b) => {
  let message = null;
  if (typeof a === 'number' && typeof b === 'number') {
    message = a / b;
  }
  return message;
};

const calc = { add, multiplication, subtract, divide };
export default calc;