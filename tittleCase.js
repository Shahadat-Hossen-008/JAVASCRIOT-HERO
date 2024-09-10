// let word = 'good'
// console.log(word.charAt(0).toUpperCase()+word.substring(1));
// Write a code Capitalize every first letter of each word

// let word = sentence.split(" ");
 // console.log(word);
// for(let i = 0; i<word.length; i++){
//     word[i] = word[i].charAt(0).toUpperCase()+word[i].substring(1);
// }
// console.log(word);
// let tittleCase = word.join(" ");
// console.log(tittleCase);

//Doing Function
function tittleCase(str) {
    let word = str.split(" "); // split string into array
// console.log(word);
for(let i = 0; i<word.length; i++)// every array element taken separately then the capitalized first letter charAt method
    {
    word[i] = word[i].charAt(0).toUpperCase()+word[i].substring(1);// Here after capitalized the first letter we concatenates the array 1st rest of element 
}
// console.log(word);
return word.join(" ");
}
let sentence = 'Whenever you failed try again Failed better';
let upperSentence = tittleCase(sentence)
console.log(upperSentence);

