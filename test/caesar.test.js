import caesar from '../js/caesar';

test('correctly cipher text', () => {
  expect(caesar.caesarCypher('hello', 2)).toBe('jgnnq');
});

test('Only letters can be included', () => {
  expect(caesar.caesarCypher(3, 1)).toBe('The input has to be string');
});

test('Uppercase letters also works', () => {
  expect(caesar.caesarCypher('HELLO', 2)).toBe('jgnnq');
});

test('Punctuation and special characters are not converted', () => {
  expect(caesar.caesarCypher('h.ello', 2)).toBe('j.gnnq');
});