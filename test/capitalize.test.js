it('Checks for the input if a string', () => {
    expect(capitalize(1)).toThrow('The input has to be string');
    expect(capitalize('')).toThrow('The value can not be empty');
})