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
    // for(let i = 0; i<str2.length; i++){
    //     if(longWord<str2[i].length){
    //         longWord = str2[i].length;
    //         word ='' + str2[i];
    //     }
    // }
    return word
}
let sentenceString = 'I learn programming to become programmer';
let longStr = longestWord(sentenceString)
console.log(longStr);
