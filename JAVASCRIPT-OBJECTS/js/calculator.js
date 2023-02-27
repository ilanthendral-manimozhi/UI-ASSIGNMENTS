let num1 = 89;
let num2 = 40;
let operation = { add: "+", sub: "-", mul: "*", div: "/" };
switch (operation.sub) {
    case "+":
        console.log(num1 + num2)
        break;
    case "-":
        console.log(num1 - num2)
        break;
    case "*":
        console.log(num1 * num2)
        break;
    case "/":
        console.log(num1 / num2)
        break;

    default:
        console.log("Invalid Input");
        break;
}
