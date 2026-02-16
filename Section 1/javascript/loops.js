// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop
console.log("while loop");

let b = 0;

while (b < 10) {
  console.log(b);
  b++;
}

// do while loop
console.log("do while loop");

let c = 0;

do {
    console.log(c);
    c++;
} while (c > 10);

// 1. WAP to check if a number is prime.
// 2. WAP to check if a person is eligible for DL.
// 3. WAP to find greatest of 3 numbers.
// 4. WAP to check if a number is divisible by 7 and 11.
// 5. WAP to check if a number is palindrome.

// 1
function isPrime(num) {
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        return false;
    }
    }
    return num > 1;
}

console.log(isPrime(2)); 
console.log(isPrime(15));
console.log(isPrime(17)); 

// 2
function isEligibleForDL(age) {
    if (age >= 18) {
    return "Eligible for Driving License";
    } else {
    return "Not Eligible for Driving License";
    }
}

console.log(isEligibleForDL(20));
console.log(isEligibleForDL(16)); 

// 3
function greatestOfThree(a, b, c) {
    if (a >= b && a >= c) {
    return a;
    } else if (b >= a && b >= c) {
    return b;
    } else {
    return c;
    }
}

console.log(greatestOfThree(10, 25, 15)); 
console.log(greatestOfThree(7, 3, 9));    
console.log(greatestOfThree(12, 12, 8));  

// 4
function isDivisible(num) {
    if (num % 7 === 0 && num % 11 === 0) {
    return "Divisible by 7 and 11";
    } else {
    return "Not divisible by 7 and 11";
    }
}

console.log(isDivisible(77)); 
console.log(isDivisible(21));  
console.log(isDivisible(121)); 

// 5
function isPalindrome(num) {
    let str = num.toString();              
    let reversed = str.split("").reverse().join("");
    return str === reversed;              
}

console.log(isPalindrome(121));  
console.log(isPalindrome(123)); 
console.log(isPalindrome(1331)); 

//print a table

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(8);  

//even

for(let i = 1; i <= 100; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}

function printTable(num) {
    let i = 1; 
    while (i <= 10) {
        console.log(num + " x " + i + " = " + (num * i));
        i++; 
    }
}

printTable(7);  