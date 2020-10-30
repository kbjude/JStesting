import analyze from '../js/analyze';

test('checks the correct input', () => {
  expect(analyze(['test', 2, 5, 'Hello'])).toBe('Invalid input');
});

test('return the correct average', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('return the minimum value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('return the maximum value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('return the length of the array', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});