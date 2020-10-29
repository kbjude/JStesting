const calculator = ((a, b) => {
  if (typeof a || b !== 'integer') {
    return 'Input has to be an integer';
  } if (a && b === 'integer') {
    return a + b
  }
});

export default calculator;