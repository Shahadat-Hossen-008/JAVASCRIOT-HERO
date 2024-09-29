//Largest number in array

function getMax(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}
// let heights = [43, 65, 23, 87, 54, 89, 76];
// let max = getMax(heights);
// console.log('Max number is', max);


// smallest number in array
function getMin(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
let heights = [43, 65, 23, 87, 54, 89, 76, 20];
let min = getMin(heights);
// console.log(min);

// Find expensive phone in object array

// function expensivePhone(phones){
//     let expensive = phones[0];
//     for(let phone of phones){
//         if(phone.price>expensive.price)// Here we access object property
//         {
//             expensive = phone.price
//         }
//     }
//     return expensive;
// }

// find the average of all phone price
function averagePhonePrice(phones){
   let sum = 0;
    for(let phone of phones){
        sum = sum + phone.price;
    }
    let average = sum / phones.length
    return average;
}
let phones = [
   {name:'Samsung', price: 30000, camera:'12mp', color: 'Black'},
   {name:'Xaomi', price: 17000, camera:'12mp', color: 'Black'},
   {name:'Iphone', price: 100000, camera:'12mp', color: 'Black'},
   {name:'Walton', price: 26000, camera:'12mp', color: 'Black'},
   {name:'HTC', price: 32000, camera:'12mp', color: 'Black'}
]
let average = averagePhonePrice(phones)
console.log(average);

