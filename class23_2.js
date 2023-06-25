//arrays

//create an array of numbers. sum all of the numbers. 
//alert the sum

let nums = [10,20,30,50]
alert( nums.reduce( (acc,c) => acc + c, 0) )

//create a function that takes in an array of numbers
//return a new array of numbers that is every original number squared
let newArr = nums => nums.map( num => num**2 )

//create a function that takes string
//print the reverse of that string to the console


let unoReverse = str => console.log( str.split('').reverse().join(''))

//create a function that takes in a string
//alert if the string is a palindrome or not

const palindromeCheck = str => alert (str === unoReverse(str) )

palindromeCheck('racecar')