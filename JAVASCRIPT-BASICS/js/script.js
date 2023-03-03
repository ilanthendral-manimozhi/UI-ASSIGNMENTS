//SECTION 1: PLAY WITH VARIABLES
console.log("SECTION 1: PLAY WITH VARIABLES")
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 == true);
console.log(2 == "2");
//SECTION 2: PLAY WITH ARRAYS
console.log("SECTION 2: PLAY WITH ARRAYS");
let players = ['rohit', 'virat', 'rishab', 'kl rahul', 'ravindra', 'ashwin', 'sam', 'suryakumar', 'shreyas', 'axar', 'kusal'];
console.log(players)
players.shift();
console.log(players);
console.log(players.length);
players.push("virat");
console.log(players);
console.log(players.sort());
const nums = new Set();
while (nums.size !== 11) {
    //generating random jersey number
    nums.add(Math.floor(Math.random() * 11) + 1);
}
let jersey = [];
for (let index = 0; index < players.length; index++) {
    //adding random jersey number to player
    jersey[index] = players[index] + " - " + [...nums][index];

}
console.log(jersey);
let players_caps = [];
for (let index = 0; index < players.length; index++) {
    //converting to uppercase
    players_caps[index] = players[index].toUpperCase();
}
console.log(players_caps);
// PLAY WITH FUNCTIONS
console.log("PLAY WITH FUNCTIONS");
function numbers(start, end) {
    for (let index = start; index <= end; index++) {
        //printing range of number
        console.log(index);
    }
}
numbers(1, 100);
function date() {
    //printin date 
    let today = new Date().toLocaleDateString()
    console.log(today)

}
date();
function CelciusToFarenheit(celcius)
{
    let farenheit;
    //celcius to farenheit formula
    farenheit=(celcius*9/5)+32;
    return farenheit;
}
let results=CelciusToFarenheit(42);
console.log(results);
let array=[3,4,5,6,7];
let average=0;
function avg(param) {
    let sum=0;
    for (let index = 0; index <param.length; index++) {
        //adding array elements
        sum=sum+param[index];
    }
    //dividing by number of values
    sum=sum/param.length;
    return sum;
    
}
average=avg(array);
console.log(average);
function reverseString(str) {
    let arr=str.split("");//storing string in array
    str=arr.reverse();// reversing array
    arr=str.join("");// join array to string
    return arr;
}
console.log(reverseString("string reverse"));