const caesar = (() => {
  const checkAlphabet = (textToEncode, index) => {
    const alphabetRegEx = /[A-Za-z]/;
    return alphabetRegEx.test(textToEncode.charAt(index));
  };

  const encode = (textToEncode, shift, index) => {
    const tempEncodedText = (textToEncode.charCodeAt(index) - 97 + shift) % 26;
    const encodedText = tempEncodedText + 97;
    return encodedText;
  };

  const caesarCypher = (textToEncode, shift) => {
    if (typeof textToEncode !== 'string') {
      return 'The input is not a character between a-z';
    }
    // const textToEncodeLc = textToEncode.toLowerCase();
    let textEncoded = '';
    for (let i = 0; i < textToEncode.length; i += 1) {
      if (checkAlphabet(textToEncode, i)) {
        textEncoded += String.fromCharCode(encode(textToEncode, shift, i));
      } else {
        textEncoded += textToEncode.charAt(i);
      }
    }
    return textEncoded;
  };
  return {
    caesarCypher,
  };
})();

export default caesar;