function longestWord(str){
    let str2 = str.split(" ");
    // console.log(str2);
    let word = '';
    let longWord = str2[0].length;// Initially store first length to comparison
    for(let item of str2){
        if(longWord<item.length){
            longWord = item.length;
            word ='' + item;
        }
    }
    return word
}
let sentenceString = 'I learn programming to become programmer';
let longStr = longestWord(sentenceString)
console.log(longStr);
