
function sum(a, b) {
  if(typeof a != 'number' || typeof b != 'number') {
      return false
  }
  return parseInt(a) + parseInt(b);
}
module.exports = sum;
