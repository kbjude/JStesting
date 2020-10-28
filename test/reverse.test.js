import reverse from '../js/reverse';

it('Checks for the input if a string', () => {
  expect(reverse(4)).toBe('The input has to be string');
});

it('Checks for an empty input', () => {
  expect(reverse('')).toBe('The value can not be empty');
});

it('Returns the string passed reversed', () => {
  expect(reverse('jude')).toBe('eduj');
});