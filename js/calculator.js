const calc = {
  add: (a, b) => {
    let message = null;
    if (typeof a === 'string' || typeof b === 'string') {
      message = 'Input has to be an integer';
    } if (typeof a === 'number' && typeof b === 'number') {
      message = a + b;
    }
    return message;
  },

  multiplication: (a, b) => {
    let message = null;
    if (typeof a === 'number' && typeof b === 'number') {
      message = a * b;
    }
    return message;
  },

  subtract: (a, b) => {
    let message = null;
    if (typeof a === 'number' && typeof b === 'number') {
      message = a - b;
    }
    return message;
  },

  divide: (a, b) => {
    let message = null;
    if (typeof a === 'number' && typeof b === 'number') {
      message = a / b;
    }
    return message;
  },

};
export default calc;