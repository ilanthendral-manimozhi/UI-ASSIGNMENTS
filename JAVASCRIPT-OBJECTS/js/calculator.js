//creating function inside the object
const obj = {
    sum(a, b) {
      return a + b;
    },
    sub(a,b){
        return a - b; 
    },
    mul(a,b){
        return a * b; 
    },
    div(a,b){
        return a / b; 
    }
  };
// retrieving object through key
console.log(obj.sum(10, 10));
console.log(obj.sub(20, 10));
console.log(obj.mul(32, 43));
console.log(obj.div(27, 9));
  