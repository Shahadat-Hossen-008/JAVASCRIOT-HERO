// those who does not divisible by 100 but divisible by 4 and 400 is leap year

function isLeapYear(year){
    if(year % 100 !==0 && year % 4 === 0 || year % 400 === 0)
    {
        return true;
    }
    return false;
    
}
let islipi = isLeapYear(2000);
let islipi2 = isLeapYear(2020);
let islipi3 = isLeapYear(2072);
let islipi4 = isLeapYear(2012);
// console.log(islipi, islipi2, islipi3, islipi4);

//odd even average 
function oddAverage(numbers){
    let odds = [];
    for(let number of numbers){
       if(number % 2 === 1)
       {
           odds.push(number)
       }
    }
    // This array contain only odd number
    // console.log(odd)
    let sum = 0;
    for(let odd of odds ){
        sum =  sum + odd;
    }
    console.log(sum)
    let result = sum / odds.length;
    return parseFloat(result.toFixed(3));
}
// let numbers = [42, 54, 96, 65, 7, 13];
// let avg = oddAverage(numbers)
// console.log(avg)


//even number
function evenAverage(numbers){
    let evens = [];
    for(let number of numbers){
       if(number % 2 === 0)
       {
           evens.push(number)
       }
    }
    // This array contain only even number
    console.log(evens)
    let sum = 0;
    for(let even of evens ){
        sum =  sum + even;
    }
    console.log(sum)
    let result = sum / evens.length;
    return parseFloat(result.toFixed(3)); //to fixed converts number into string that's why we use parsefloat
}
let numbers = [42, 54, 96, 65, 7, 14];
// let avg = evenAverage(numbers)
// console.log(avg)



function duplicate(array){
    let unique = [];
    for(let item of array){
        // console.log(item);
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
let foodKhor = ['abdul', 'bulbul', 'babul', 'abdul', 'hasan', 'bulbul'];
let uniqueArray = duplicate(foodKhor);
console.log(uniqueArray)