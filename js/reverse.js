const reverseString = (text) => {
  if (typeof text !== 'string') {
    return 'The input has to be string';
  } if (text.length === 0) {
    return 'The value can not be empty';
  }
  const textReversed = [];
  for (let index = text.length - 1; index >= 0; index -= 1) {
    textReversed.push(text.charAt(index));
  }
  return textReversed.join('').toString();
};

export default reverseString;