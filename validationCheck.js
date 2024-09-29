function multiply(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number' && isFinite(num1, num2))
    {
        return num1 * num2;
    }
    else if(num2=== undefined){
       return 'Please provide second number';
    }
    else{
        return 'Please provide a finite number';
    }
}
// const result = multiply(Infinity, Infinity)
// console.log(result);

//String valid
function fullName(first, second){
    if(typeof first !=='string' || typeof second !== 'string')
    {
        return 'Please provide string';
    }
    else if(second === undefined){
        return 'Please provide second name';
    }
    return first + '' + second;
}
const result = fullName(6 , '9');
console.log(result);
//If you want check array the Array.isArray() method call