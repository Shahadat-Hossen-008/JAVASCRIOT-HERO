function calculateTax(income, expenses) {
    if(income<=0 || expenses<=0 || income < expenses){
        return  "Invalid Input" ;
    }
    let costDifference = income - expenses;
    let taxCalculated = costDifference * .20;
    return taxCalculated;
}

function sendNotification(email) {
    if(email.includes("@") === false || typeof email !== 'string'){
        return "Invalid Email" ;
    }
   let stringArray = email.split('@');
   let userName = stringArray[0];
   let domainName = stringArray[1];
   let notificationMessage = userName  +" "+ 'sent you an email from ' +" "+  domainName;
   return notificationMessage;
}

    console.log(sendNotification("zihad@gmail.com"));

function checkDigitsInName(name) {
   if(typeof name !== 'string'){
    return "Invalid Input";
   }
   let stringArray = name.split('');
   for(let letter of stringArray){
    if(!isNaN(letter) === true){
        return true;
    }
   }
   return false;
}

function calculateFinalScore(obj) {
   if(typeof obj !== 'object' || obj.testScore>50 || obj.schoolGrade>30 || typeof obj.isFFamily !== 'boolean'){
    return "Invalid Input";
   }
 const examMark = obj.testScore + obj.schoolGrade;
 let finalScore = 0;
  if(obj.isFFamily === true){
      finalScore = examMark + 20;
  }
  else{
    finalScore = finalScore + examMark;
  }
 if(finalScore>=80){
    return true;
 }
 return false;
}

function  waitingTime(waitingTimes  , serialNumber) {
   if(Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number' || serialNumber<waitingTimes.length){
    return "Invalid Input";
   }

   let sumArray = 0;
   for(let time of waitingTimes){
    sumArray = sumArray + time;
   }
   let peopleBeforeHer = serialNumber - 1;
   let waitingPeople = peopleBeforeHer - waitingTimes.length;
   let averageTime = Math.round(sumArray/waitingTimes.length);
   let interviewTimeTaken = averageTime * waitingPeople;
   return interviewTimeTaken;
}
