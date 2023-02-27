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
let players = ['virat', 'rohit', 'rishab', 'kl rahul', 'ravindra', 'ashwin', 'sam', 'suryakumar', 'shreyas', 'axar', 'kusal'];
console.log(players);
players.shift();
console.log(players);
console.log(players.length);
players.push("virat");
console.log(players);
console.log(players.sort());
const nums = new Set();
while (nums.size !== 11) {
    nums.add(Math.floor(Math.random() * 11) + 1);
}
let jersey = [];
for (let index = 0; index < players.length; index++) {
    jersey[index] = players[index] + " - " + [...nums][index];

}
console.log(jersey);
let players_caps = [];
for (let index = 0; index < players.length; index++) {
    players_caps[index] = players[index].toUpperCase();
}
console.log(players_caps);
// PLAY WITH FUNCTIONS
console.log("PLAY WITH FUNCTIONS");
function numbers(start, end) {
    for (let index = start; index <= end; index++) {
        console.log(index);
    }
}
numbers(1, 100);
function date() {
    let today = new Date().toLocaleDateString()
    console.log(today)

}
date();
function Celcius_to_farenheit(celcius)
{
    let farenheit;
    farenheit=(celcius*9/5)+32;
    return farenheit;
}
let results=Celcius_to_farenheit(42);
console.log(results);
let array=[3,4,5,6,7];
let average=0;
function avg(param) {
    let sum=0;
    for (let index = 0; index <param.length; index++) {
        sum=sum+param[index];
    }
    sum=sum/param.length;
    return sum;
    
}
average=avg(array);
console.log(average);
function reverseString(str) {
    let arr=str.split("");
    str=arr.reverse();
    arr=str.join("");
    return arr;
}
console.log(reverseString("string reverse"));