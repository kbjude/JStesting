import analyze from '../js/analyze';

test('return the correct average', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('return the minimum value', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});