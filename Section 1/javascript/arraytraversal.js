const nums = [4, 7, 9, 1, 3, 2];

//for loop

for(let i of nums){
    console.log(i);
}

console.log('for each function');

nums.forEach( (n) => {
    console.log(n);
})

console.log('map filter function');

const newNums = nums.map( (n) => {
    return n ** 2
})
console.log(newNums);

const prices = [2300, 4500, 1200, 900, 3000]
//add 18% gst in all prices using map filter

const newPrices = prices.map( (p) => {
    return p + (p * 0.18)
})
console.log(newPrices);

const budgetPrices = prices.filter( (p) => {
    return p < 3000
})
console.log(budgetPrices);

//less than 3000 more than 1000

const rangePrices = prices.filter( (p) => {
    return p < 3000 && p > 1000
})
console.log(rangePrices);

const phoneList = [
    {
        brand : 'Samsung',
        model : 's24',
        price : 124000,
        colors : ['black', 'white', 'blue']
    },
    {
        brand : 'Realme',
        model : '14X',
        price : 25000,
        colors : ['ivory', 'white']
    },
    {
        brand : 'OnePlus',
        model : '11R',
        price : 45000,
        colors : ['skyblue', 'black', 'gold']
    },
    {
        brand : 'Motorola',
        model : 'G85',
        price : 16000,
        colors : ['oceangreen', 'blue', 'crimson']
    },
    {
        brand : 'Apple',
        model : 'iphone 17 Pro',
        price : 120000,
        colors : ['black', 'orange', 'blue']
    },
];
console.log(phoneList);

//prices lesss than 50000

const budgetPhones = phoneList.filter( (phone) => {
    return phone.price < 50000
})
console.log(budgetPhones);

//phones which are available in black color

const blackPhones = phoneList.filter( (phone) => {
    return phone.colors.includes('black')
})
console.log(blackPhones);

//create an array of all brands

const brands = phoneList.map( (phone) => {
    return phone.brand
})
console.log(brands);

//we have to filter the phones with the name samsung
const keyword = 'Samsung';

const Phones = phoneList.filter( (phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase())
})
console.log(Phones);
