const caesar = (() => {
  const checkAlphabet = (textToEncode, index) => {
    const alphabetRegEx = /[a-z]/;
    return alphabetRegEx.test(textToEncode.charAt(index));
  };

  const encode = (textToEncode, shift, index) => {
    const tempEncodedText = (textToEncode.charCodeAt(index) - 97 + shift) % 26;
    const encodedText = tempEncodedText + 97;
    return encodedText;
  };

  const caesarCypher = (textToEncode, shift) => {
    if (typeof textToEncode !== 'string') {
      return 'The input has to be string';
    }
    const textToEncodeLc = textToEncode.toLowerCase();
    let textEncoded = '';
    for (let i = 0; i < textToEncodeLc.length; i += 1) {
      if (checkAlphabet(textToEncodeLc, i)) {
        textEncoded += String.fromCharCode(encode(textToEncodeLc, shift, i));
      } else {
        textEncoded += textToEncodeLc.charAt(i);
      }
    }
    return textEncoded;
  };
  return {
    caesarCypher,
  };
})();

export default caesar;