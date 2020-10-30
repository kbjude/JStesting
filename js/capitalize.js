const capitalize = (text) => {
  if (typeof text !== 'string') {
    return 'The input has to be string';
  } if (text.length === 0) {
    return 'The value can not be empty';
  }

  const textCapitalized = text.charAt(0).toUpperCase() + text.slice(1);
  return textCapitalized;
};

export default capitalize;