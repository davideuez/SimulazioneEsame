function string_square(s) {

  if (typeof s === 'string') {
    return Math.pow(s.length, 2);
  } else
    return -1;

}

module.exports = {
  value: string_square
}