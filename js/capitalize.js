const capitalize = (text) => {
    if(typeof text !== 'string') {
        return 'The input has to be string';
    } else if(text.length === 0) {
        return 'The value can not be empty'
    }
}

export default capitalize