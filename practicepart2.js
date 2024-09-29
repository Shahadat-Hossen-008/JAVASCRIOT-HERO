//Find the friend with smallest name
function smallestWord(array){
    // console.log(str2);
    let word ='';
    let smallword = array[0].length;// Initially store first length to comparison
    for(let item of array){
        if(smallword>item.length){
            smallword = item.length;
            word = '' + item
        }
    }
    return word;
}

const names = ['Rahim', 'rafi', 'ronaldo', 'rashed', 'dd'];
// let smallword = smallestWord(names);
// console.log(smallword);

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

function totalSalary(object){
    let monthlySalary = 0;
    for(const employee of employees){
        const salaryIncrement = employee.experience * employee.increment;
        const total = salaryIncrement + employee.starting;
        monthlySalary = monthlySalary + total;
    }
    return monthlySalary
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
let monthlySalary = totalSalary(employees) ;
console.log(monthlySalary);