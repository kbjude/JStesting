import capitalize from '../js/capitalize'

it('Checks for the input if a string', () => {
    expect(capitalize(1)).toBe('The input has to be string');
})

it('Checks for an empty input', () => {
    expect(capitalize('')).toBe('The value can not be empty');
})