import calc from '../js/calculator';


it('Checks for the input if a string', () => {
  expect(calc.add('the')).toBe('Input has to be an integer');
});

it('Checks when only one input is captured', () => {
  expect(calc.add('')).toBe('Input has to be an integer');
});

it('Checks when right values are stored', () => {
  expect(calc.add(3, 3)).toBe(6);
});

it('Multiplies the values when integers are passed', () => {
  expect(calc.multiplication(2, 3)).toBe(6);
});

it('Subtracts the values when integers are passed', () => {
  expect(calc.subtract(3, 2)).toBe(1);
});

it('Divides the values when integers are passed', () => {
  expect(calc.divide(6, 2)).toBe(3);
});