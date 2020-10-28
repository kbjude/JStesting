const reverse = (text) => {
  if (typeof text !== 'string') {
    return 'The input has to be string';
  } if (text.length === 0) {
    return 'The value can not be empty';
  }
};

export default reverse;