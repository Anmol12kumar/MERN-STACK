function great(){
    console.log("Welcome to Digipodium"); 
}
great()

// parameter function
function hello(name){
    console.log(name,"good Morning");
}
hello("Anmol")

function add(a,b){
    console.log(a+b);
}
add(5,6)

function substract(a,b){
    console.log(a-b);
}
substract(9,6)

function addNums(a, b){
    var c = a + b
    console.log(c);
}

addNums(5, 10)
// console.log(c)

const avg = function(m1, m2, m3){
    const average = (m1 + m2 + m3) / 3
    // console.log(average);
    return average
}

const res = avg(34, 56, 49)
console.log(res);

//es6 arrow function
const factorial = (n) => {
    let fact = 1
    for(let i = 1; i <= n; i++){
        fact *= i 
    }
    return fact
}

const res2 = factorial(5)
console.log(res2);