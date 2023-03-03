
const obj = {
  sum(a, b) {
    /**   * add the passed parameter
          * @param {a,b} number.
          * @return   number*/
    return a + b; //addition
  },
  sub(a, b) {
    /**   * subract the passed parameter
          * @param {a,b} number.
          * @return  type number*/
    return a - b; //subraction
  },
  mul(a, b) {
    /**   * Multiplication the passed parameter
          * @param {a,b} number.
          * @return   type number*/
    return a * b; //multiplication
  },
  div(a, b) {
    /**   * Division the passed parameter
          * @param {a,b} number.
          * @return  type number*/
    return a / b; //division
  }
};
// retrieving object through key
console.log(obj.sum(10, 10));
console.log(obj.sub(20, 10));
console.log(obj.mul(32, 43));
console.log(obj.div(27, 9));
