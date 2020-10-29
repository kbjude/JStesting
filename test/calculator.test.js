import calculator from '../js/calculator';

it('Checks for the input if a string', () => {
  expect(calculator('the', 3)).toBe('Input has to be an integer');
});
