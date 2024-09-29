// const fruits =['apple', 'banana', 'orange', 'guava', 'mango']
// for(const fruit of fruits){
//     console.log("I want eat:" ,fruit);
    
// }
//Reverse every character of string
let sentence = 'I am learning web dev';
let reverse = ' ';
for(let letter of sentence)
{
    reverse =  letter + reverse  ; /*  We are just store that first letter then taking the second letter to first  just like first I whitespace then a(whitespace) I(whitespace) just like that*/  
}
console.log(reverse);
// Another way
// let rev =sentence.split(' ').reverse().join(' ');
// console.log(rev);

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let rev_num = [];
// for(let num of numbers)
// {
    // rev_num.unshift(num);  //reverse array--> here we store every element in first position
    
// }
// console.log(rev_num);


// for(let i =numbers.length-1; i>=0; i--)
// {
//     let num = numbers[i];
//     rev_num.push(num)  //index start 0 that's why we start as mines (7-1)=6 
// }
// console.log(rev_num);

//  20.5_4 Module Summary and Practice Tasks (task 4)
//revers a string word

// let sentence = 'I am hardworking person'
// let word = sentence.split(' ');
// let rev_string = [];
// for(let i = word.length-1; i>=0; i--)
//     {
//         let rev_index = word[i];
//         rev_string.push(rev_index);
//     }
//     let text = rev_string.join(' '); // convert array into string  It behaves just like toString(), but in addition you can specify the separator:
//     console.log(text);
// function square(number){
//     console.log(number);
    // let borgo = number * number;
    // console.log(borgo);
    // return number * number; //return can be used other operation otherwise if you don't return something it will just show the output 
// }
// let output = square(5); //here we call the function and return value store that variable
// console.log(output);

