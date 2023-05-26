// console.log("Hello World")

// let num = 0;

// if (num < 0) {
//   console.log(`${num} is neg`)
// }
// else {
//   console.log(`${num} is pos`)
// }

// let guests = 2 

// if (guests > 18) {
//   console.log('Access granted')
// }
// else {
//   console.log('Acess denied')
// }

// console.log(guests > 18 ? 'Acess granted' : 'Acess denied')

// Write string revers

let str = 'acde'
let len = str.length-1
let rev = ''
for (let i = 0; i < str.length; i++) {

rev += str[len]

len--
}
console.log(`this is the reversed word "${rev}"`)


////-----------------------------------------///////////////

// Write a for loop that calculates and prints the sum of all numbers

let sum = 0
for(let i = 0; i <=100; i ++) {
sum = sum += i;

}
console.log(`sum "${sum}"`)

// Write a for loop thgat prints the multiplication table for a given number

let num = 5
let product = []
for(let i = 1; i <num; i++) {
product.push(num * i)

}
console.log(product)