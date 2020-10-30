import reverseString from '../js/reverse';

it('Checks for the input if a string', () => {
  expect(reverseString(4)).toBe('The input has to be string');
});

it('Checks for an empty input', () => {
  expect(reverseString('')).toBe('The value can not be empty');
});

it('Returns the string passed reversed', () => {
  expect(reverseString('jude')).toBe('eduj');
});