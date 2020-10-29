const calculator = (a, b) => {
    let message = null;
  if (typeof a === 'string' || typeof b === 'string') {
    message = 'Input has to be an integer';
  } if (typeof a === 'number' && typeof b === 'number') {
    message = a + b;
  }
  return message;
};

export default calculator;