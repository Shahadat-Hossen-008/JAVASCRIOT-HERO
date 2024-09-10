//write a function to count the number of vowels in a sting
// function checkVowels(str)
// {
//     let vowel = ['a', 'e', 'i', 'o', 'u'];
//     let  count = 0;
//     let str2 = str.toLowerCase();
//     for(let i = 0; i<str.length; i++){
//         if(vowel.includes(str2[i])){
//             count++;
//         }
//     }
//     return count;
// }
function checkVowels(str){
    let vowel =  ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let str2 = str.toLowerCase().split("");
    str2.forEach((letter)=> {
        if(vowel.includes(letter)){
            count++;
        }
    });
    return count;
}
let sentenceString = 'I love programming ';
let vowelString = checkVowels(sentenceString);
console.log(vowelString);
