/**
 * created object and stored each function
 * called function through the object key
 */
const obj = {
    sum(a, b) {
      return a + b; //addition
    },
    sub(a,b){
        return a - b; //subraction
    },
    mul(a,b){
        return a * b; //multiplication
    },
    div(a,b){
        return a / b; //division
    }
  };
// retrieving object through key
console.log(obj.sum(10, 10));
console.log(obj.sub(20, 10));
console.log(obj.mul(32, 43));
console.log(obj.div(27, 9));
  