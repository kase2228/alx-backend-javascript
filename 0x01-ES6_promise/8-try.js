export default function divideFunction(numerator, denominator) {
    try {
    if(denominator === 0) {
        throw new error('cannot divide by 0')
    } else {
        return numerator / denominator;
    }
} catch(error) {
    return error.message;
}
}