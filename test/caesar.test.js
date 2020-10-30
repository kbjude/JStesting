import caesar from '../js/caesar';

test('Correctly cipher text', () => {
  expect(caesar.caesarCypher('hello', 2)).toBe('jgnnq');
});

test('Wrapping a to z', () => {
  expect(caesar.caesarCypher(3, 1)).toBe('The input is not a character between a-z');
});

test('Keeping the same case', () => {
  expect(caesar.caesarCypher('HeLLo', 2)).toBe('JgNNq');
});

test('Caesar cipher with punctuation and special characters', () => {
  expect(caesar.caesarCypher('hello, World!!', 2)).toBe('jgnnq, Yqtnf!!');
});