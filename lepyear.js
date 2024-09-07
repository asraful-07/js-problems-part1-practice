/**
 * year will be e leap year if the year is divisible by 4
 */
//  simple logic
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const lipi = isLeapYear(10);
// console.log(lipi);


// maine logic
function isLeapYear(year){
    if(year % 100 !==  0 && year % 4 ===0){
        return true
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true
    }
    else{
        return false;
    }
}

const leap = isLeapYear(2100);
const leap2 = isLeapYear(2400);
const leap3 = isLeapYear(1900);
console.log(leap, leap2,leap3);